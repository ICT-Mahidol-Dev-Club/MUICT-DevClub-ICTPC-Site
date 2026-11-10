# UI Requests & Enhancement Notes

This file records UI/UX suggestions, contract enhancements, and architectural observations for the backend and structure teams.

## 1. Contact Page FAQ Integration
- **Context**: The content dictionary (`src/content/en/index.ts` and `src/content/th/index.ts`) already defined comprehensive FAQ questions and answers (`faq.heading`, `faq.items`).
- **UI Enhancement**: Rendered `<FaqAccordion />` alongside the inquiry form and LINE OpenChat card on the `/contact` page.
- **Request**: Maintain the `faq` key in future backend/CMS schemas for dynamic FAQ management.

## 2. Teams Search & Filter
- **Context**: As registrations grow, browsing dozens of team cards becomes difficult on mobile viewports (390px).
- **UI Enhancement**: Added real-time instant search filtering by team name and member nickname directly inside `<TeamsGrid />`.
- **Request**: If server-side pagination or search is implemented in the future, `teamsService.listPublic({ query?: string })` can accept an optional query parameter while keeping current interface backward-compatible.

## 3. Problem Sets Year Selector
- **Context**: Competitors often want to practice problems by specific contest edition/year.
- **UI Enhancement**: Added an automatic year filter dropdown inside `<ProblemList />` derived from `problem.publishedAt`.
- **Request**: Consider adding an explicit `year: number` field to `ProblemSet` in `src/types/index.ts` when connecting real DB.

## 4. Scoreboard Problem Columns
- **Context**: Contest judges can feature varying numbers of problems (e.g., A through J).
- **UI Enhancement**: `<ScoreboardTable />` dynamically derives the problem columns from the `problemResults` map of the first row and renders responsive verdict badges (AC in emerald, WA in rose, TLE in amber).
- **Request**: Ensure CSV exports consistently include all problem column headers even for zero-submission teams.

## 5. React 19 Async Server Component Translation
- **Context**: Under Next.js 15 with React 19, calling the `useTranslations()` hook inside `async` server components triggers `Expected a suspended thenable`.
- **Resolution**: Used the official async `getTranslations()` helper from `next-intl/server` for async server pages (`teams`, `scores`, `problems`, `practice`, `admin/*`).
