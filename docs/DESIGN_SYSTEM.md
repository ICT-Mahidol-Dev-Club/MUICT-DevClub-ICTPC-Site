# ICTPC Design System

Welcome to the Design System for the **ICTPC** (Faculty of ICT Annual Competitive Programming Contest) web platform.

## Design Philosophy & Personality

- **Modern & Developer-Centric**: Clean, technical aesthetic reminiscent of modern engineering tools, code judges, and developer communities.
- **Approachable & Welcoming**: Friendly for first-year and senior students alike (ICT & DST programs, ages 18–22) and streamlined for contest committee admins.
- **Flat Surfaces & Subtle Depth**: Minimalist cards with crisp 1px borders (`border-slate-200`), flat surfaces, very subtle elevation shadows (`shadow-card`), avoiding heavy skeuomorphism or harsh glow effects.
- **Generous Whitespace & Rhythm**: Spacious padding and margins to maintain clarity even with complex tabular contest data.
- **Bilingual Typographic Harmony**: Thai and English type render harmoniously with adequate vertical breathing room (`leading-relaxed`) to prevent tone mark clipping in Thai script.

---

## 1. Color Tokens & Palette

### Primary: Royal Blue

The anchor color representing Mahidol ICT's prestige and technical focus.

- **Hex**: `#1536D6` (`primary-600`)
- **Tokens**:
  - `primary-50`: `#EFF3FF` (Light background tint, hover states)
  - `primary-100`: `#DBE4FE` (Subtle selection & pill background)
  - `primary-200`: `#BFCEFE`
  - `primary-500`: `#3B6BF6` (Hover interactive blue)
  - `primary-600`: `#1536D6` (**Brand Primary**, Buttons, Key links, Accents)
  - `primary-700`: `#122BB2` (Active/Pressed button)
  - `primary-900`: `#152371` (Deep brand text)
- **Contrast**: `#1536D6` on pure white `#FFFFFF` achieves **5.84:1** contrast ratio (exceeds WCAG AA minimum 4.5:1).

### Accents (Used Sparingly)

#### Accent Magenta

Used for celebration tags, special event callouts, and contest highlights.

- **Hex**: `#D96BD9` (`magenta-500`)
- **Tokens**:
  - `magenta-50`: `#FDF4FD`
  - `magenta-100`: `#FAE9FA`
  - `magenta-500`: `#D96BD9` (Brand Accent)
  - `magenta-700`: `#993799` (Text on white / dark variant)

#### Accent Lime

Used for status tags, live contest countdowns, solved problems (Accepted verdicts), and vibrant technical chips.

- **Hex**: `#B5E04A` (`lime-400` / `lime-500`)
- **Contrast Rule**: Because white text on `#B5E04A` lacks contrast (1.2:1), text on Lime elements **MUST ALWAYS** use dark slate (`#1A2E05` or `text-lime-950`). This provides **9.2:1** contrast ratio (exceeds WCAG AAA).

### Neutrals & Surfaces

- **Background**: `#F8FAFC` (Slate 50)
- **Card Surface**: `#FFFFFF` (Pure White)
- **Muted Surface**: `#F1F5F9` (Slate 100)
- **Border**: `#E2E8F0` (Slate 200)
- **Text Primary**: `#0F172A` (Slate 900)
- **Text Secondary**: `#475569` (Slate 600)
- **Text Muted / Placeholder**: `#94A3B8` (Slate 400)

### Feedback / Status

- **Success / Accepted (AC)**: Emerald `#059669` / `#10B981` (bg `#ECFDF5`, text `#065F46`)
- **Wrong Answer (WA) / Rejected / Error**: Rose `#E11D48` / `#F43F5E` (bg `#FFF1F2`, text `#9F1239`)
- **Time Limit Exceeded (TLE) / Pending / Warning**: Amber `#D97706` (bg `#FFFBEB`, text `#92400E`)
- **Run-Time Error (RTE) / Compilation Error (CE)**: Purple / Orange

---

## 2. Typography

- **Body & Display Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `"Noto Sans Thai"`, `"Sarabun"`, `sans-serif`
  - Line height: `leading-relaxed` (1.625) by default to give Thai glyphs sufficient ascender and descender clearance.
- **Monospace**: `"JetBrains Mono"`, `"SFMono-Regular"`, `Menlo`, `Monaco`, `Consolas`, `monospace`
  - Used for: Contest year (e.g. `ICTPC27`), problem codes (`A`, `B`, `C`), submission time stamps, scoreboard times, and terminal/code tags.

### Type Scale

- `text-xs`: 0.75rem / 12px (Micro tags, timestamps)
- `text-sm`: 0.875rem / 14px (Badges, table cells, form labels, captions)
- `text-base`: 1rem / 16px (Body copy, form inputs, button text)
- `text-lg`: 1.125rem / 18px (Card titles, section subtitles)
- `text-xl`: 1.25rem / 20px (Card headers, modal titles)
- `text-2xl`: 1.5rem / 24px (Sub-headings, mobile page headers)
- `text-3xl`: 1.875rem / 30px (Section headings, desktop sub-headers)
- `text-4xl` to `text-5xl`: 2.25rem - 3rem / 36px - 48px (Hero titles, contest year splash)

---

## 3. Border Radius & Elevation

- **Radius Tokens**:
  - `rounded-md`: `8px` (Inputs, buttons, small badges, chips)
  - `rounded-lg`: `10px` (Cards, alert banners, tables)
  - `rounded-xl`: `12px` (Primary section cards, modal sheets)
  - `rounded-2xl`: `16px` (Hero containers, large feature panels)
- **Shadows**:
  - `shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.04)`
  - `shadow-card`: `0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`
  - `shadow-card-hover`: `0 6px 16px -2px rgba(21, 54, 214, 0.08)` (Subtle royal blue hover tint)

---

## 4. Accessibility (WCAG 2.1 AA)

1. **Contrast Compliance**:
   - All normal body text (`#0F172A` on `#FFFFFF` and `#F8FAFC`) exceeds **14:1**.
   - Interactive primary blue (`#1536D6` on `#FFFFFF`) exceeds **5.8:1**.
   - Lime accents (`#B5E04A`) use dark text `#1A2E05` giving **9.2:1**.
2. **Focus Indicators**:
   - High-visibility keyboard focus rings: `focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2`.
3. **Screen Readers & Semantic HTML**:
   - Proper landmark roles (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section aria-label="...">`).
   - Accessible form labeling with explicit `htmlFor` and `aria-describedby` error bindings.
   - Live regions (`role="status"`, `role="alert"`) for dynamic form feedback and countdown updates.

---

## 5. Responsive Design Targets

- **Mobile Viewport**: `390px` (iPhone 12/13/14/15 standard width)
  - Collapsible mobile navigation menu with full-screen or slide-down drawer.
  - Horizontally scrollable or stacked table views for scores and admin lists.
  - Multi-member registration form organized into stacked cards with clear add/remove actions.
- **Desktop Viewport**: `1440px` (Modern widescreen display)
  - Max container width: `max-w-7xl` (1280px) or `max-w-6xl` (1152px) centered with responsive gutters `px-4 sm:px-6 lg:px-8`.
  - Grid layouts: 2, 3, or 4 columns with balanced gap spacing.

---

## 6. Component Implementation Status

> Updated: 2026-11-10

### UI Primitives (`src/components/ui/`)

| Component | Status | Notes |
|-----------|--------|-------|
| `Button` | ✅ Done | 6 variants: primary, secondary, outline, ghost, lime, danger |
| `Input` | ✅ Done | With label, error, helper text, icon slots |
| `Textarea` | ✅ Done | Matching Input API |
| `Checkbox` | ✅ Done | Accessible with label |
| `Badge` | ✅ Done | Variants: primary, lime, slate, rose, amber, emerald |
| `Card` / `CardHeader` / `CardContent` | ✅ Done | Composable card system |
| `Alert` | ✅ Done | info, success, warning, error |
| `Accordion` | ✅ Done | Used by FAQ |
| `Table` / `TableHeader` / `TableBody` / `TableRow` / `TableHead` / `TableCell` | ✅ Done | Responsive scrollable |
| `PageHeader` | ✅ Done | badge, description, actions slots |
| `EmptyState` | ✅ Done | title, icon, action slots |
| `ErrorMessage` | ✅ Done | with/without retry |
| `LoadingSpinner` | ✅ Done | Accessible aria-label |
| `Skeleton` | ✅ Done | Used for loading states |

### Layout Components (`src/components/layout/`)

| Component | Status | Notes |
|-----------|--------|-------|
| `SiteHeader` | ✅ Done | Sticky, mobile drawer, EN/TH toggle, responsive |
| `SiteFooter` | ✅ Done | Site name, year, quick links |
| `AdminLayout` | ✅ Done | Collapsible sidebar, logout, active route highlight |

### Section Components (`src/components/sections/`)

| Component | Status | Notes |
|-----------|--------|-------|
| `HeroSection` | ✅ Done | Animated pulse badge, grid background, CTA |
| `CountdownSection` | ✅ Done | Live countdown with `useEffect`, event-started state |
| `AboutSnippet` | ✅ Done | |
| `AboutDetails` | ✅ Done | |
| `RulesSectionList` | ✅ Done | |
| `ScheduleTimeline` | ✅ Done | |
| `RegistrationForm` | ✅ Done | Multi-member accordion cards, Zod errors |
| `ClosedBanner` | ✅ Done | |
| `SuccessBanner` | ✅ Done | |
| `TeamsGrid` | ✅ Done | |
| `TeamCard` | ✅ Done | Status badge variants |
| `ContactForm` | ✅ Done | |
| `LineOpenChatLink` | ✅ Done | |
| `OrgBanner` | ✅ Done | |
| `OrganizerGrid` | ✅ Done | |
| `OrganizerCard` | ✅ Done | |
| `DeveloperGrid` | ✅ Done | |
| `DeveloperCard` | ✅ Done | |
| `NotPublishedBanner` | ✅ Done | |
| `ScoreboardTable` | ✅ Done | Verdict pills (AC/WA/TLE/RTE/CE), medal ranks |
| `ProblemList` | ✅ Done | |
| `ProblemCard` | ✅ Done | Difficulty badge |
| `PracticeSessionList` | ✅ Done | |
| `PracticeSessionCard` | ✅ Done | Materials list |
| `FaqAccordion` | ✅ Done | Animated expand/collapse |
| `AdminPageHeader` | ✅ Done | Back link |
| `StatCard` | ✅ Done | Linked stat with count |
| `RegistrationsTable` | ✅ Done | Sortable, action links |
| `RegistrationDetailCard` | ✅ Done | Full member list, status badge |
| `StatusActions` | ✅ Done | Confirm/reject with note |
| `InquiriesTable` | ✅ Done | Optimistic resolve via `InquiriesClient` |
| `AdminLoginForm` | ✅ Done | |

---

## 7. Inter Font Setup

Add the following to `src/app/[locale]/layout.tsx` to load Inter and JetBrains Mono from Google Fonts:

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
```

Then apply `${inter.variable} ${jetbrainsMono.variable}` to `<html>` and reference with `font-sans` / `font-mono` Tailwind utilities (already configured in `tailwind.config.js`).

> **Note**: Thai script rendering relies on `Noto Sans Thai` / `Sarabun` as system font fallbacks. No additional loading needed for local dev; production may add a hosted Thai font for consistency.
