import type { PracticeSession } from "@/types";
import type { PracticeService } from "./interface";
import { mockDelay, maybeThrow } from "../_mock-utils";

const MOCK_SESSIONS: PracticeSession[] = [
  {
    id: "ps-001",
    title: "Introduction to Competitive Programming",
    description: "Fundamentals: I/O, complexity, brute force patterns.",
    date: "2026-10-20T13:00:00+07:00",
    registrationUrl: undefined,
    materials: [
      { label: "Slides", url: "/mock-data/session1-slides.pdf", type: "slides" },
    ],
  },
  {
    id: "ps-002",
    title: "Dynamic Programming Basics",
    description: "Memoisation, tabulation, classic DP problems.",
    date: "2026-11-05T13:00:00+07:00",
    registrationUrl: "https://forms.gle/PLACEHOLDER",
    materials: [],
  },
];

export const mockPracticeService: PracticeService = {
  async list(): Promise<PracticeSession[]> {
    await mockDelay();
    maybeThrow("practiceService.list");
    return MOCK_SESSIONS;
  },

  async getById(id: string): Promise<PracticeSession | null> {
    await mockDelay();
    return MOCK_SESSIONS.find((s) => s.id === id) ?? null;
  },
};

