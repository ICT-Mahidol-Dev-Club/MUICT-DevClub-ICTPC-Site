import type { ProblemSet } from "@/types";

export interface ProblemSetsService {
  /**
   * List all published problem sets.
   */
  list(): Promise<ProblemSet[]>;

  /**
   * Get a single problem set by slug.
   */
  getBySlug(slug: string): Promise<ProblemSet | null>;
}
