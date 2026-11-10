// ─────────────────────────────────────────────────────────────────
// Domain Types
// Fields are annotated @public (safe for public views) or
// @private (server-only / admin-only).
// ─────────────────────────────────────────────────────────────────

// ── Registration ──────────────────────────────────────────────────

export interface TeamMember {
  /** @public */
  nickname: string;
  /** @private */
  fullName: string;
  /** @private */
  studentId: string;
  /** @private */
  email: string;
  /** @public */
  faculty: "ICT" | "DST";
  /** @public */
  year: number; // academic year 1-4
}

export interface Registration {
  /** @public */
  id: string;
  /** @public */
  teamName: string;
  /** @public */
  members: TeamMember[]; // 1–3 members
  /** @private */
  submittedAt: string; // ISO 8601
  /** @public */
  status: "pending" | "confirmed" | "rejected";
  /** @private */
  consentGiven: boolean;
  /** @private */
  note?: string; // admin note
}

/** Safe shape exposed in public /teams listing */
export interface PublicTeam {
  /** @public */
  id: string;
  /** @public */
  teamName: string;
  /** @public */
  memberCount: number;
  /** @public */
  members: Pick<TeamMember, "nickname" | "faculty" | "year">[];
  /** @public */
  status: Registration["status"];
}

// ── Inquiry / Contact ─────────────────────────────────────────────

export interface Inquiry {
  /** @private */
  id: string;
  /** @private */
  name: string;
  /** @private */
  email: string;
  /** @private */
  message: string;
  /** @private */
  submittedAt: string;
  /** @private */
  resolved: boolean;
}

// ── Scores ────────────────────────────────────────────────────────

export interface ScoreRow {
  /** @public */
  rank: number;
  /** @public */
  teamName: string;
  /** @public */
  solved: number;
  /** @public */
  totalTime: number; // minutes
  /** @public — one entry per problem, e.g. { A: "AC", B: "WA" } */
  problemResults: Record<string, ProblemVerdict>;
}

export type ProblemVerdict = "AC" | "WA" | "TLE" | "RTE" | "CE" | "-";

// ── Problems ──────────────────────────────────────────────────────

export interface ProblemSet {
  /** @public */
  id: string;
  /** @public */
  title: string;
  /** @public */
  slug: string;
  /** @public */
  difficulty: "easy" | "medium" | "hard";
  /** @public */
  tags: string[];
  /** @public */
  statementUrl?: string;
  /** @public */
  publishedAt: string;
}

// ── Practice ──────────────────────────────────────────────────────

export interface PracticeSession {
  /** @public */
  id: string;
  /** @public */
  title: string;
  /** @public */
  description: string;
  /** @public */
  date: string; // ISO 8601
  /** @public */
  registrationUrl?: string;
  /** @public */
  materials: PracticeMaterial[];
}

export interface PracticeMaterial {
  /** @public */
  label: string;
  /** @public */
  url: string;
  /** @public */
  type: "slides" | "code" | "video" | "problem" | "other";
}

// ── Admin ─────────────────────────────────────────────────────────

export interface AdminSession {
  /** @private */
  userId: string;
  /** @private */
  email: string;
  /** @private */
  role: "admin" | "superadmin";
  /** @private */
  expiresAt: string;
}

// ── API Errors ────────────────────────────────────────────────────

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

