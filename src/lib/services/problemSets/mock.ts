import type { ProblemSet } from "@/types";
import type { ProblemSetsService } from "./interface";
import { mockDelay, maybeThrow } from "../_mock-utils";

const MOCK_PROBLEMS: ProblemSet[] = [
  {
    id: "prob-001",
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "easy",
    tags: ["array", "hash-map"],
    publishedAt: "2026-10-01T00:00:00+07:00",
  },
  {
    id: "prob-002",
    title: "Longest Increasing Subsequence",
    slug: "lis",
    difficulty: "medium",
    tags: ["dp", "binary-search"],
    publishedAt: "2026-10-05T00:00:00+07:00",
  },
  {
    id: "prob-003",
    title: "Network Flow",
    slug: "network-flow",
    difficulty: "hard",
    tags: ["graph", "max-flow"],
    publishedAt: "2026-10-10T00:00:00+07:00",
  },
];

export const mockProblemSetsService: ProblemSetsService = {
  async list(): Promise<ProblemSet[]> {
    await mockDelay();
    maybeThrow("problemSetsService.list");
    return MOCK_PROBLEMS;
  },

  async getBySlug(slug: string): Promise<ProblemSet | null> {
    await mockDelay();
    return MOCK_PROBLEMS.find((p) => p.slug === slug) ?? null;
  },
};
