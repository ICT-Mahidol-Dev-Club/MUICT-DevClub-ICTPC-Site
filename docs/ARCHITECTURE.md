# Architecture — ICTPC Website

## Folder Map

```
/
├── docs/                        # Architecture & contracts
├── public/
│   └── mock-data/scores.csv    # Static mock CSV for scoreboard
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root HTML shell (no locale)
│   │   ├── globals.css          # Tailwind directives
│   │   └── [locale]/            # Locale-aware subtree
│   │       ├── layout.tsx       # NextIntlClientProvider, html lang
│   │       ├── page.tsx         # / home
│   │       ├── about/page.tsx
│   │       ├── rules/page.tsx
│   │       ├── schedule/page.tsx
│   │       ├── register/page.tsx  (client)
│   │       ├── teams/page.tsx
│   │       ├── contact/page.tsx   (client)
│   │       ├── organizers/page.tsx
│   │       ├── developers/page.tsx
│   │       ├── scores/page.tsx
│   │       ├── problems/page.tsx
│   │       ├── practice/page.tsx
│   │       ├── not-found.tsx
│   │       ├── error.tsx
│   │       ├── loading.tsx
│   │       └── admin/
│   │           ├── login/page.tsx   (client)
│   │           ├── page.tsx         dashboard
│   │           ├── registrations/
│   │           │   ├── page.tsx
│   │           │   ├── RegistrationDetail.tsx  (client)
│   │           │   └── [id]/page.tsx
│   │           └── inquiries/page.tsx
│   ├── config/
│   │   └── site.config.ts       # Single source of truth for year/event data
│   ├── content/
│   │   ├── en/index.ts          # English messages (deep const object)
│   │   ├── th/index.ts          # Thai messages (same shape)
│   │   └── team.ts              # Organizer & developer profiles
│   ├── i18n/
│   │   ├── request.ts           # next-intl server request config
│   │   ├── routing.ts           # Locale list, default, prefix strategy
│   │   └── navigation.ts       # Typed Link/redirect/useRouter
│   ├── lib/
│   │   ├── auth/
│   │   │   └── admin-guard.ts   # requireAdminSession() helper
│   │   ├── services/            # Service layer
│   │   │   ├── index.ts         # Barrel + mock/real switch
│   │   │   ├── _mock-utils.ts   # Shared delay/error helpers
│   │   │   ├── registration/
│   │   │   │   ├── interface.ts
│   │   │   │   └── mock.ts
│   │   │   ├── teams/
│   │   │   ├── inquiry/
│   │   │   ├── admin/
│   │   │   ├── scores/
│   │   │   ├── problemSets/
│   │   │   └── practice/
│   │   └── validation/
│   │       └── index.ts         # Zod schemas + inferred types
│   ├── types/
│   │   └── index.ts             # All domain types (annotated @public/@private)
│   ├── middleware.ts             # next-intl locale routing middleware
│   └── components/
│       ├── ui/        ← UI agent
│       ├── layout/    ← UI agent
│       └── sections/  ← UI agent
```

---

## Data Flow

```
Browser Request
      │
      ▼
middleware.ts            ← locale detection, redirect if needed
      │
      ▼
app/[locale]/layout.tsx  ← load messages, provide NextIntlClientProvider
      │
      ▼
app/[locale]/<page>.tsx  ← Server Component (or "use client")
      │
      ├── calls src/lib/services/index.ts
      │       │
      │       ├── NEXT_PUBLIC_USE_MOCKS=true  → mock implementation
      │       └── NEXT_PUBLIC_USE_MOCKS=false → real implementation (future)
      │
      └── renders presentational components (UI agent builds these)
              └── uses typed props from service responses
```

---

## Service Pattern

Each domain has three files:

```
src/lib/services/<domain>/
├── interface.ts   # TypeScript interface — the contract
└── mock.ts        # In-memory implementation with simulated latency
```

`src/lib/services/index.ts` is the **only** file imported by pages.  
It selects mock vs real based on `NEXT_PUBLIC_USE_MOCKS`.

When connecting a real back-end:
1. Add `real.ts` next to `mock.ts`
2. Implement the same interface
3. Swap the export in `index.ts`

---

## Config

`src/config/site.config.ts` is the **single source of truth** for:

| Key | Purpose |
|-----|---------|
| `eventYear` | Contest edition (e.g. 27) |
| `showYearInName` | Controls `getSiteName()` output |
| `eventDate` | ISO 8601 contest timestamp |
| `venue` | Venue string |
| `lineOpenChatUrl` | LINE chat link |
| `scoresCsvUrl` | URL of scores CSV |
| `scoresPublished` | Feature flag — show/hide scoreboard |
| `registrationOpen` | Feature flag — open/close registration |

**Rule:** `eventYear` and `getSiteName()` are NEVER hard-coded elsewhere.

---

## i18n

- Library: `next-intl` with App Router
- Locales: `en` (default), `th`
- Prefix strategy: `as-needed` — `/` is English, `/th/...` is Thai
- Messages: `src/content/{locale}/index.ts` — deep `const` object
- Navigation: use `Link`, `useRouter`, `redirect` from `@/i18n/navigation` (not from `next/navigation` or `next-intl` directly)
- Locale switch: use `useRouter().replace(pathname, { locale })` pattern

---

## Admin Guard

`src/lib/auth/admin-guard.ts` exports `requireAdminSession()`.

- Call it at the top of every admin server page
- It calls `adminService.getSession()` and redirects to `/admin/login` if null
- **To swap in real auth**: replace the body with the Supabase server-side session helper (e.g. `createServerClient().auth.getUser()`)

---

## Conventions

| Convention | Rule |
|------------|------|
| Imports | Use `@/` path alias everywhere |
| Services | Only import from `@/lib/services` (the barrel) |
| Types | Only import from `@/types` |
| Validation | Only import from `@/lib/validation` |
| Navigation | Only use `@/i18n/navigation` |
| Year/name | Only read from `src/config/site.config.ts` |
| Styling | No inline styles; Tailwind classes only (UI agent adds them) |
| Comments | Leave `// TODO(UI): ...` markers in every route page |
| Privacy | Private fields (`email`, `studentId`) never reach `PublicTeam` or any public-facing render |
