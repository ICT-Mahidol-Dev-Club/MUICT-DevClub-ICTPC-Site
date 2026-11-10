import type { PracticeSession } from "@/types";

export interface PracticeService {
  /**
   * List all practice sessions (past + upcoming).
   */
  list(): Promise<PracticeSession[]>;

  /**
   * Get a single session by ID.
   */
  getById(id: string): Promise<PracticeSession | null>;
}

