import type { ScoreRow, ProblemVerdict } from "@/types";
import type { ScoresService } from "./interface";
import { siteConfig } from "@/config/site.config";
import { mockDelay, maybeThrow } from "../_mock-utils";

// Parse CSV text into ScoreRow[]
// Expected header: rank,teamName,solved,totalTime,<problem columns...>
function parseCsv(text: string): ScoreRow[] {
  const lines = text.trim().split("\n").filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim());
  const problemCols = headers.slice(4); // columns after rank,teamName,solved,totalTime

  return lines.slice(1).map((line) => {
    const cells = line.split(",").map((c) => c.trim());
    const problemResults: Record<string, ProblemVerdict> = {};
    problemCols.forEach((col, i) => {
      problemResults[col] = (cells[4 + i] ?? "-") as ProblemVerdict;
    });
    return {
      rank: parseInt(cells[0] ?? "0", 10),
      teamName: cells[1] ?? "",
      solved: parseInt(cells[2] ?? "0", 10),
      totalTime: parseInt(cells[3] ?? "0", 10),
      problemResults,
    };
  });
}

export const mockScoresService: ScoresService = {
  async list(): Promise<ScoreRow[]> {
    await mockDelay();
    maybeThrow("scoresService.list");
    if (!siteConfig.scoresPublished) return [];
    // In mock mode, fetch from /mock-data/scores.csv (served as static)
    const res = await fetch(siteConfig.scoresCsvUrl);
    if (!res.ok) throw new Error("Failed to fetch scores CSV");
    const text = await res.text();
    return parseCsv(text);
  },
};

