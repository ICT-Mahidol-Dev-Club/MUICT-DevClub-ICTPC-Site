// ─────────────────────────────────────────────────────────────────
// Service barrel — the ONLY import point for service consumers.
// Set NEXT_PUBLIC_USE_MOCKS=true to use in-memory mocks.
// ─────────────────────────────────────────────────────────────────

import { mockRegistrationService } from "./registration/mock";
import { mockTeamsService } from "./teams/mock";
import { mockInquiryService } from "./inquiry/mock";
import { mockAdminService } from "./admin/mock";
import { mockScoresService } from "./scores/mock";
import { mockProblemSetsService } from "./problemSets/mock";
import { mockPracticeService } from "./practice/mock";

// Re-export interface types so callers can type-annotate without
// importing from deep paths.
export type { RegistrationService } from "./registration/interface";
export type { TeamsService } from "./teams/interface";
export type { InquiryService } from "./inquiry/interface";
export type { AdminService } from "./admin/interface";
export type { ScoresService } from "./scores/interface";
export type { ProblemSetsService } from "./problemSets/interface";
export type { PracticeService } from "./practice/interface";

const useMocks = process.env.NEXT_PUBLIC_USE_MOCKS !== "false";

// ── Exported singletons ───────────────────────────────────────────
// When real implementations are built, swap the right-hand sides.

export const registrationService = useMocks
  ? mockRegistrationService
  : mockRegistrationService; // TODO(backend): replace with realRegistrationService

export const teamsService = useMocks
  ? mockTeamsService
  : mockTeamsService; // TODO(backend): replace with realTeamsService

export const inquiryService = useMocks
  ? mockInquiryService
  : mockInquiryService; // TODO(backend): replace with realInquiryService

export const adminService = useMocks
  ? mockAdminService
  : mockAdminService; // TODO(backend): replace with realAdminService

export const scoresService = useMocks
  ? mockScoresService
  : mockScoresService; // TODO(backend): replace with realScoresService

export const problemSetsService = useMocks
  ? mockProblemSetsService
  : mockProblemSetsService; // TODO(backend): replace with realProblemSetsService

export const practiceService = useMocks
  ? mockPracticeService
  : mockPracticeService; // TODO(backend): replace with realPracticeService
