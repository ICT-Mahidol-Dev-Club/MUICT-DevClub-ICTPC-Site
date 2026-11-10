# Component Contracts

> This document is the **contract** between the structure agent and the UI/UX agent (Gemini).
> Every component listed here must be built by the UI agent in the specified file path.
> Props are TypeScript; states are the visual variants the component must handle.

---

## Conventions

- All components export a **named export** matching the component name.
- Components receive typed props; they must not call services directly.
- Each component must handle the **states** listed for it.
- `TODO(UI)` comments in route pages mark exactly where each component plugs in.

---

## Shared / Layout Components

### `SiteHeader`
**File:** `src/components/layout/SiteHeader.tsx`

```typescript
interface SiteHeaderProps {
  currentLocale: "en" | "th";
  currentPath: string;
}
```

**States:** default, mobile-menu-open  
**Content:** nav links from `useTranslations("nav")`, locale toggle (EN/TH), `getSiteName()` as logo text.

---

### `SiteFooter`
**File:** `src/components/layout/SiteFooter.tsx`

```typescript
interface SiteFooterProps {
  siteName: string; // from getSiteName()
  year: number;     // from siteConfig.eventYear
}
```

**States:** default only  
**Content:** site name, co-organizer credits, quick nav links.

---

### `AdminLayout`
**File:** `src/components/layout/AdminLayout.tsx`

```typescript
interface AdminLayoutProps {
  children: React.ReactNode;
  session?: AdminSession;  // optional — guard redirects if missing
}
```

**States:** default, collapsed-sidebar
**Content:** sidebar with dashboard/registrations/inquiries links, logout button (calls `adminService.logout()`).

---

### `PageHeader`
**File:** `src/components/ui/PageHeader.tsx`

```typescript
interface PageHeaderProps {
  heading: string;
  description?: string;
  badge?: string;       // mono-spaced label chip above heading (e.g. "PARTICIPANTS")
  actions?: React.ReactNode; // optional slot for buttons in top-right
  className?: string;
}
```

**States:** with-description, without-description, with-badge, with-actions

---

### `EmptyState`
**File:** `src/components/ui/EmptyState.tsx`

```typescript
interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
  title?: string;        // optional bolded heading above message
  action?: React.ReactNode; // optional CTA button slot
  className?: string;
}
```

**States:** default, with-title, with-action

---

### `ErrorMessage`
**File:** `src/components/ui/ErrorMessage.tsx`

```typescript
interface ErrorMessageProps {
  message: string;
  retry?: () => void;
}
```

**States:** with-retry, without-retry

---

### `LoadingSpinner`
**File:** `src/components/ui/LoadingSpinner.tsx`

```typescript
interface LoadingSpinnerProps {
  label?: string;
}
```

**States:** default

---

## Home Page Sections (`/`)

### `HeroSection`
**File:** `src/components/sections/HeroSection.tsx`

```typescript
interface HeroSectionProps {
  siteName: string;
  tagline: string;
  subtitle: string;
  ctaRegister: string;
  ctaLearnMore: string;
  eventDate: string; // ISO 8601
  registrationOpen: boolean;
}
```

**States:** registration-open, registration-closed

---

### `CountdownSection`
**File:** `src/components/sections/CountdownSection.tsx`

```typescript
interface CountdownSectionProps {
  eventDate: string; // ISO 8601
  labels: { label: string; days: string; hours: string; minutes: string; seconds: string };
}
```

**States:** counting-down, event-started (show "Event is live!")

---

### `AboutSnippet`
**File:** `src/components/sections/AboutSnippet.tsx`

```typescript
interface AboutSnippetProps {
  heading: string;
  body: string;
}
```

**States:** default

---

## About Page (`/about`)

### `AboutDetails`
**File:** `src/components/sections/AboutDetails.tsx`

```typescript
interface AboutDetailsProps {
  mission: string;
  coOrganizers: string;
  eligibility: string;
  format: string;
  eventDate: string;
  venue: string;
}
```

**States:** default

---

## Rules Page (`/rules`)

### `RulesSectionList`
**File:** `src/components/sections/RulesSectionList.tsx`

```typescript
interface RulesSection {
  title: string;
  items: string[];
}

interface RulesSectionListProps {
  sections: RulesSection[];
}
```

**States:** default

---

## Schedule Page (`/schedule`)

### `ScheduleTimeline`
**File:** `src/components/sections/ScheduleTimeline.tsx`

```typescript
interface ScheduleEvent {
  time: string;  // e.g. "09:30"
  label: string;
}

interface ScheduleTimelineProps {
  events: ScheduleEvent[];
  eventDate: string;
  venue: string;
}
```

**States:** default

---

## Registration Page (`/register`)

### `RegistrationForm`
**File:** `src/components/sections/RegistrationForm.tsx`

```typescript
import type { UseFormReturn, UseFieldArrayReturn } from "react-hook-form";
import type { RegistrationFormValues } from "@/lib/validation";

interface RegistrationFormProps {
  form: UseFormReturn<RegistrationFormValues>;
  fields: UseFieldArrayReturn<RegistrationFormValues, "members">["fields"];
  onAddMember: () => void;
  onRemoveMember: (index: number) => void;
  submitState: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  labels: {
    teamName: string;
    member: string;
    nickname: string;
    fullName: string;
    studentId: string;
    email: string;
    faculty: string;
    year: string;
    addMember: string;
    removeMember: string;
    consent: string;
    submit: string;
    error: string;
  };
}
```

**States:** idle, loading (submit disabled), success, error

---

### `ClosedBanner`
**File:** `src/components/sections/ClosedBanner.tsx`

```typescript
interface ClosedBannerProps {
  message: string;
}
```

**States:** default

---

### `SuccessBanner`
**File:** `src/components/sections/SuccessBanner.tsx`

```typescript
interface SuccessBannerProps {
  message: string;
}
```

**States:** default

---

## Teams Page (`/teams`)

### `TeamsGrid`
**File:** `src/components/sections/TeamsGrid.tsx`

```typescript
import type { PublicTeam } from "@/types";

interface TeamsGridProps {
  teams: PublicTeam[];
  labels: {
    memberCount: string; // template with {count}
    statusLabels: Record<"pending" | "confirmed" | "rejected", string>;
  };
}
```

**States:** loading, empty, error, success (populated grid)

---

### `TeamCard`
**File:** `src/components/sections/TeamCard.tsx`

```typescript
import type { PublicTeam } from "@/types";

interface TeamCardProps {
  team: PublicTeam;
  memberCountLabel: string;
  statusLabel: string;
}
```

**States:** confirmed, pending, rejected (visual badge differs)

---

## Contact Page (`/contact`)

### `ContactForm`
**File:** `src/components/sections/ContactForm.tsx`

```typescript
import type { UseFormReturn } from "react-hook-form";
import type { InquiryFormValues } from "@/lib/validation";

interface ContactFormProps {
  form: UseFormReturn<InquiryFormValues>;
  submitState: "idle" | "loading" | "success" | "error";
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
}
```

**States:** idle, loading, success, error

---

### `LineOpenChatLink`
**File:** `src/components/sections/LineOpenChatLink.tsx`

```typescript
interface LineOpenChatLinkProps {
  url: string;
  promptText: string;
  buttonLabel: string;
}
```

**States:** default

---

## Organizers Page (`/organizers`)

### `OrgBanner`
**File:** `src/components/sections/OrgBanner.tsx`

```typescript
interface OrgInfo {
  name: string;
  description: string;
}

interface OrgBannerProps {
  smo: OrgInfo;
  devclub: OrgInfo;
}
```

**States:** default

---

### `OrganizerGrid`
**File:** `src/components/sections/OrganizerGrid.tsx`

```typescript
import type { OrganizerProfile } from "@/content/team";

interface OrganizerGridProps {
  team: OrganizerProfile[];
  heading: string;
}
```

**States:** default

---

### `OrganizerCard`
**File:** `src/components/sections/OrganizerCard.tsx`

```typescript
interface OrganizerCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}
```

**States:** with-image, without-image (placeholder avatar)

---

## Developers Page (`/developers`)

### `DeveloperGrid`
**File:** `src/components/sections/DeveloperGrid.tsx`

```typescript
import type { DeveloperProfile } from "@/content/team";

interface DeveloperGridProps {
  developers: DeveloperProfile[];
}
```

**States:** default

---

### `DeveloperCard`
**File:** `src/components/sections/DeveloperCard.tsx`

```typescript
interface DeveloperCardProps {
  name: string;
  role: string;
  github?: string;
  imageUrl?: string;
}
```

**States:** with-github, without-github

---

## Scores Page (`/scores`)

### `NotPublishedBanner`
**File:** `src/components/sections/NotPublishedBanner.tsx`

```typescript
interface NotPublishedBannerProps {
  message: string;
}
```

**States:** default

---

### `ScoreboardTable`
**File:** `src/components/sections/ScoreboardTable.tsx`

```typescript
import type { ScoreRow } from "@/types";

interface ScoreboardTableProps {
  rows: ScoreRow[];
  columns: {
    rank: string;
    team: string;
    solved: string;
    time: string;
  };
}
```

**States:** loading, empty, error, populated

---

## Problems Page (`/problems`)

### `ProblemList`
**File:** `src/components/sections/ProblemList.tsx`

```typescript
import type { ProblemSet } from "@/types";

interface ProblemListProps {
  problems: ProblemSet[];
  difficultyLabels: Record<"easy" | "medium" | "hard", string>;
}
```

**States:** loading, empty, error, populated

---

### `ProblemCard`
**File:** `src/components/sections/ProblemCard.tsx`

```typescript
import type { ProblemSet } from "@/types";

interface ProblemCardProps {
  problem: ProblemSet;
  difficultyLabel: string;
}
```

**States:** with-statement-link, without-statement-link

---

## Practice Page (`/practice`)

### `PracticeSessionList`
**File:** `src/components/sections/PracticeSessionList.tsx`

```typescript
import type { PracticeSession } from "@/types";

interface PracticeSessionListProps {
  sessions: PracticeSession[];
  heading: string;
  labels: {
    register: string;
    materialsLabel: string;
  };
}
```

**States:** loading, empty, populated

---

### `PracticeSessionCard`
**File:** `src/components/sections/PracticeSessionCard.tsx`

```typescript
import type { PracticeSession } from "@/types";

interface PracticeSessionCardProps {
  session: PracticeSession;
  registerLabel: string;
  materialsLabel: string;
}
```

**States:** with-registration-link, without-link; with-materials, without-materials

---

## Admin Components

### `AdminPageHeader`
**File:** `src/components/sections/AdminPageHeader.tsx`

```typescript
interface AdminPageHeaderProps {
  heading: string;
  backHref?: string;
}
```

**States:** with-back-link, without-back-link

---

### `StatCard`
**File:** `src/components/sections/StatCard.tsx`

```typescript
interface StatCardProps {
  label: string;
  count: number | string;
  href: string;
}
```

**States:** default

---

### `RegistrationsTable`
**File:** `src/components/sections/RegistrationsTable.tsx`

```typescript
import type { Registration } from "@/types";

interface RegistrationsTableProps {
  registrations: Registration[];
  labels: {
    status: string;
    actions: string;
  };
}
```

**States:** loading, empty, populated

---

### `RegistrationDetailCard`
**File:** `src/components/sections/RegistrationDetailCard.tsx`

```typescript
import type { Registration } from "@/types";

interface RegistrationDetailCardProps {
  registration: Registration;
  currentStatus: Registration["status"];
}
```

**States:** pending, confirmed, rejected

---

### `StatusActions`
**File:** `src/components/sections/StatusActions.tsx`

```typescript
interface StatusActionsProps {
  currentStatus: "pending" | "confirmed" | "rejected";
  note: string;
  onNoteChange: (note: string) => void;
  onConfirm: () => void;
  onReject: () => void;
  saving: boolean;
  labels: {
    note: string;
    confirm: string;
    reject: string;
    save: string;
  };
}
```

**States:** idle, saving (buttons disabled)

---

### `InquiriesTable`
**File:** `src/components/sections/InquiriesTable.tsx`

```typescript
import type { Inquiry } from "@/types";

interface InquiriesTableProps {
  inquiries: Inquiry[];
  labels: {
    resolve: string;
    resolved: string;
  };
  onResolve: (id: string) => void;
}
```

**States:** loading, empty, populated

---

## Error / Loading Pages

### `NotFoundPage` (route-level)
**File:** `src/app/[locale]/not-found.tsx` *(already created — UI agent styles it)*

Receives: `heading`, `body`, `back` from `errors.notFound` messages.

---

### `ErrorPage` (route-level)
**File:** `src/app/[locale]/error.tsx` *(already created — UI agent styles it)*

Shows: heading, body, retry button, collapsible error details.

---

### `LoadingPage` (route-level)
**File:** `src/app/[locale]/loading.tsx` *(already created — UI agent adds skeleton)*

Shows: loading indicator with accessible `aria-busy`.

