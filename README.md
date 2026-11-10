# ICTPC Website

> Faculty of ICT Annual Competitive Programming Contest — Mahidol University

Built with **Next.js 15 (App Router)**, TypeScript, Tailwind CSS, React Hook Form + Zod, and next-intl (Thai/English).

---

## ⚡ Quick Start (< 30 minutes)

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 20 |
| npm | ≥ 10 |
| Git | any |

### 1. Clone & install

```bash
git clone <repo-url> ictpc-site
cd ictpc-site
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
# Open .env.local and check the defaults — no changes needed for local dev
```

The key flag is `NEXT_PUBLIC_USE_MOCKS=true` (default).  
Leave it `true` while the back-end is not yet connected.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🗂 Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── [locale]/            # All locale-aware routes
│   │   ├── page.tsx         # / (home)
│   │   ├── about/
│   │   ├── rules/
│   │   ├── schedule/
│   │   ├── register/
│   │   ├── teams/
│   │   ├── contact/
│   │   ├── organizers/
│   │   ├── developers/
│   │   ├── scores/
│   │   ├── problems/
│   │   ├── practice/
│   │   └── admin/
│   │       ├── login/
│   │       ├── page.tsx     # dashboard
│   │       ├── registrations/
│   │       └── inquiries/
│   └── globals.css
├── config/
│   └── site.config.ts       # Year, event date, feature flags
├── content/
│   ├── en/index.ts          # English copy
│   ├── th/index.ts          # Thai copy
│   └── team.ts              # Organizer & developer profiles
├── i18n/
│   ├── request.ts
│   ├── routing.ts
│   └── navigation.ts
├── lib/
│   ├── auth/
│   │   └── admin-guard.ts   # requireAdminSession()
│   ├── services/            # Service layer (mocks + interfaces)
│   │   └── index.ts         # ← only import point
│   └── validation/
│       └── index.ts         # Zod schemas
├── types/
│   └── index.ts             # All domain types
└── components/
    ├── ui/        ← UI agent only
    ├── layout/    ← UI agent only
    └── sections/  ← UI agent only

public/
└── mock-data/
    └── scores.csv           # Sample scoreboard CSV

docs/
├── ARCHITECTURE.md
├── COMPONENT_CONTRACTS.md
└── BACKEND_INTEGRATION.md
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on :3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript type check |
| `npm run format` | Prettier (write) |
| `npm run format:check` | Prettier (check only) |

---

## 🌐 i18n

- Default locale: **English** (`/`)
- Thai: `/th/...`
- Locale switcher: use the `Link` and `useRouter` from `@/i18n/navigation`
- All copy lives in `src/content/en/` and `src/content/th/`

---

## 🛡 Admin Access (Mock)

| Field | Value |
|-------|-------|
| URL | http://localhost:3000/admin/login |
| Email | `admin@ictpc.local` |
| Password | `admin1234` |

---

## 📄 Documentation

- [`/docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — Folder map, data flow, conventions
- [`/docs/COMPONENT_CONTRACTS.md`](./docs/COMPONENT_CONTRACTS.md) — UI agent component specs
- [`/docs/BACKEND_INTEGRATION.md`](./docs/BACKEND_INTEGRATION.md) — Supabase integration guide

---

## 🤝 Contributing

Branch off `feat/structure`. Commit in small steps with meaningful messages.

```bash
git checkout -b feat/my-feature
# make changes
git commit -m "feat: describe what you did"
```

---

## 📌 Event Config

To update year, date, venue, or feature flags, edit **only** `src/config/site.config.ts`.  
The year is never hard-coded elsewhere.
