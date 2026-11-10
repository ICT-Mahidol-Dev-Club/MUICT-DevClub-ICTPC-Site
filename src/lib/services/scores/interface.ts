import type { ScoreRow } from "@/types";

export interface ScoresService {
  /**
   * Fetch and parse the scores CSV from scoresCsvUrl.
   * Returns an empty array if scoresPublished is false.
   */
  list(): Promise<ScoreRow[]>;
}

