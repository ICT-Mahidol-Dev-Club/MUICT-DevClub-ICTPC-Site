# Backend Integration Guide

> This document tells the backend engineer exactly what to build to connect Supabase/PostgreSQL to this front-end.

---

## Environment Variables

| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | client+server | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | client+server | Supabase anon key (safe to expose) |
| `SUPABASE_SERVICE_ROLE_KEY` | server only | Never expose to client |
| `NEXT_PUBLIC_USE_MOCKS` | client+server | Set to `"false"` to use real services |
| `NEXT_PUBLIC_SCORES_CSV_URL` | client+server | Public URL of scores CSV |

Copy `.env.example` → `.env.local` and fill in real values.

---

## Files to Replace

For each domain, create a `real.ts` file next to the existing `mock.ts` and implement the same interface:

| Domain | Interface file | Mock file | Real file (to create) |
|--------|---------------|-----------|----------------------|
| Registration | `src/lib/services/registration/interface.ts` | `registration/mock.ts` | `registration/real.ts` |
| Teams | `src/lib/services/teams/interface.ts` | `teams/mock.ts` | `teams/real.ts` |
| Inquiry | `src/lib/services/inquiry/interface.ts` | `inquiry/mock.ts` | `inquiry/real.ts` |
| Admin | `src/lib/services/admin/interface.ts` | `admin/mock.ts` | `admin/real.ts` |
| Scores | `src/lib/services/scores/interface.ts` | `scores/mock.ts` | `scores/real.ts` |
| Problem Sets | `src/lib/services/problemSets/interface.ts` | `problemSets/mock.ts` | `problemSets/real.ts` |
| Practice | `src/lib/services/practice/interface.ts` | `practice/mock.ts` | `practice/real.ts` |

Then in `src/lib/services/index.ts`, replace each `mock*Service` with `real*Service` in the `useMocks=false` branch.

---

## Admin Guard

Replace the body of `src/lib/auth/admin-guard.ts → requireAdminSession()` with:

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAdminSession(): Promise<AdminSession> {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } },
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  return { userId: user.id, email: user.email!, role: "admin", expiresAt: "" };
}
```

---

## Database Tables (Supabase/PostgreSQL)

### `registrations`

| Column | Type | Visibility | Notes |
|--------|------|------------|-------|
| `id` | `uuid` PK | public | default gen_random_uuid() |
| `team_name` | `text` | public | unique, 2–60 chars |
| `status` | `text` | public | enum: pending, confirmed, rejected |
| `consent_given` | `boolean` | private | must be true |
| `note` | `text` | private | admin note |
| `submitted_at` | `timestamptz` | private | default now() |

### `team_members`

| Column | Type | Visibility | Notes |
|--------|------|------------|-------|
| `id` | `uuid` PK | — | |
| `registration_id` | `uuid` FK → registrations | — | cascade delete |
| `nickname` | `text` | public | |
| `full_name` | `text` | private | |
| `student_id` | `text` | private | 7 digits |
| `email` | `text` | private | |
| `faculty` | `text` | public | ICT or DST |
| `year` | `int` | public | 1–4 |

### `inquiries`

| Column | Type | Visibility | Notes |
|--------|------|------------|-------|
| `id` | `uuid` PK | — | |
| `name` | `text` | private | |
| `email` | `text` | private | |
| `message` | `text` | private | |
| `submitted_at` | `timestamptz` | private | default now() |
| `resolved` | `boolean` | private | default false |

### `problem_sets`

| Column | Type | Visibility | Notes |
|--------|------|------------|-------|
| `id` | `uuid` PK | public | |
| `title` | `text` | public | |
| `slug` | `text` | public | unique |
| `difficulty` | `text` | public | easy/medium/hard |
| `tags` | `text[]` | public | |
| `statement_url` | `text` | public | nullable |
| `published_at` | `timestamptz` | public | |

### `practice_sessions`

| Column | Type | Visibility | Notes |
|--------|------|------------|-------|
| `id` | `uuid` PK | public | |
| `title` | `text` | public | |
| `description` | `text` | public | |
| `date` | `timestamptz` | public | |
| `registration_url` | `text` | public | nullable |

### `practice_materials`

| Column | Type | Visibility | Notes |
|--------|------|------------|-------|
| `id` | `uuid` PK | — | |
| `session_id` | `uuid` FK → practice_sessions | — | cascade delete |
| `label` | `text` | public | |
| `url` | `text` | public | |
| `type` | `text` | public | slides/code/video/problem/other |

---

## Row Level Security (RLS) Suggestions

```sql
-- registrations: anon can only read confirmed teams (public fields)
CREATE POLICY "public_read_confirmed" ON registrations
  FOR SELECT TO anon
  USING (status = 'confirmed');

-- team_members: anon can only read public fields of confirmed registrations
CREATE POLICY "public_read_members" ON team_members
  FOR SELECT TO anon
  USING (
    registration_id IN (
      SELECT id FROM registrations WHERE status = 'confirmed'
    )
  );

-- inquiries: anon can INSERT only
CREATE POLICY "anon_insert_inquiry" ON inquiries
  FOR INSERT TO anon WITH CHECK (true);

-- Admin read/write: service_role key bypasses RLS
-- Use SUPABASE_SERVICE_ROLE_KEY in server-only routes for admin operations
```

---

## Service Method Contracts

### `registrationService.submit(data)`

**Input** (matches Zod schema):
```json
{
  "teamName": "Binary Bandits",
  "members": [
    {
      "nickname": "alice",
      "fullName": "Alice Somporn",
      "studentId": "6688001",
      "email": "alice@student.mahidol.ac.th",
      "faculty": "ICT",
      "year": 3
    }
  ],
  "consentGiven": true
}
```

**Output** (full `Registration` — server only):
```json
{
  "id": "uuid-here",
  "teamName": "Binary Bandits",
  "members": [...],
  "submittedAt": "2027-01-15T10:00:00Z",
  "status": "pending",
  "consentGiven": true
}
```

**Supabase implementation:**
1. Insert into `registrations` with `service_role` client
2. Insert members into `team_members`
3. Return assembled `Registration` object

---

### `teamsService.listPublic()`

**Output** (array of `PublicTeam` — only public fields):
```json
[
  {
    "id": "uuid-here",
    "teamName": "Binary Bandits",
    "memberCount": 2,
    "members": [
      { "nickname": "alice", "faculty": "ICT", "year": 3 }
    ],
    "status": "confirmed"
  }
]
```

**Supabase implementation:**
- Use anon client
- Select from `registrations` where `status = 'confirmed'`
- Join `team_members` selecting only public columns

---

### `scoresService.list()`

Fetches and parses a **CSV file** from `siteConfig.scoresCsvUrl`.

**CSV format:**
```csv
rank,teamName,solved,totalTime,A,B,C,D,E
1,Binary Bandits,4,120,AC,AC,AC,AC,-
```

- Columns 1–4: `rank`, `teamName`, `solved`, `totalTime`
- Columns 5+: one per problem (letter A, B, C…)
- Cell values: `AC | WA | TLE | RTE | CE | -`
- Returns `[]` if `siteConfig.scoresPublished === false`

---

### `inquiryService.submit(data)`

**Input:**
```json
{ "name": "Alice", "email": "alice@example.com", "message": "Question here" }
```

**Output:**
```json
{ "id": "uuid-here" }
```

---

### `adminService.getSession()`

**Output (authenticated):**
```json
{
  "userId": "uuid",
  "email": "admin@ictpc.local",
  "role": "admin",
  "expiresAt": "2027-01-15T18:00:00Z"
}
```

**Output (unauthenticated):** `null`

---

## Validation Rules (enforced by Zod — back-end should mirror)

| Field | Rule |
|-------|------|
| `teamName` | 2–60 chars, alphanumeric + spaces + hyphens + apostrophes |
| `members` | 1–3 items |
| `studentId` | Exactly 7 digits |
| `email` | Valid RFC 5321 email |
| `faculty` | Enum: `ICT` or `DST` |
| `year` | Integer 1–4 |
| `consentGiven` | Must be literal `true` |
| `inquiry.name` | 2–120 chars |
| `inquiry.message` | 10–2000 chars |

---

## Endpoint Mapping (if adding API routes)

| Route | Method | Service | Auth |
|-------|--------|---------|------|
| `/api/register` | POST | `registrationService.submit()` | anon |
| `/api/contact` | POST | `inquiryService.submit()` | anon |
| `/api/admin/registrations` | GET | `registrationService.listAll()` | admin |
| `/api/admin/registrations/[id]` | GET | `registrationService.getById()` | admin |
| `/api/admin/registrations/[id]` | PATCH | `registrationService.updateStatus()` | admin |
| `/api/admin/inquiries` | GET | `inquiryService.listAll()` | admin |
| `/api/admin/inquiries/[id]/resolve` | POST | `inquiryService.resolve()` | admin |

> **Note:** For the current front-end-only build, services are called directly in server components. API routes are only needed if a mobile client or external integration is added later.

---

## Standard Error Format

All service errors (and future API routes) should throw or return:

```typescript
interface ApiError {
  code: string;    // e.g. "TEAM_NAME_TAKEN", "UNAUTHORIZED"
  message: string; // human-readable
  details?: unknown;
}
```

---

## Integration Checklist

- [ ] Create `.env.local` from `.env.example` with real Supabase credentials
- [ ] Set `NEXT_PUBLIC_USE_MOCKS=false`
- [ ] Create all DB tables with correct column types
- [ ] Apply RLS policies
- [ ] Implement `real.ts` for each service domain
- [ ] Wire `real*Service` into `src/lib/services/index.ts`
- [ ] Replace mock admin guard with Supabase server session
- [ ] Upload scores CSV to public URL and set `NEXT_PUBLIC_SCORES_CSV_URL`
- [ ] Set `siteConfig.scoresPublished = true` when contest ends
- [ ] Verify no private fields (email, studentId) leak through public endpoints
- [ ] Run `npm run typecheck && npm run lint && npm run build`
