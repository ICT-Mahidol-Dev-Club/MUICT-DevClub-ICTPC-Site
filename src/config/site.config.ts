// ─────────────────────────────────────────────────────────────────
// Site-wide configuration — the ONLY place year/event data lives.
// Never hard-code eventYear or the site name anywhere else.
// ─────────────────────────────────────────────────────────────────

export interface SiteConfig {
  /** The contest edition number, e.g. 27 for ICTPC27 */
  eventYear: number;
  /** When true, getSiteName() returns "ICTPC27" instead of "ICTPC" */
  showYearInName: boolean;
  /** ISO 8601 date string of the contest day */
  eventDate: string;
  /** Venue name (bilingual; display using the i18n content files) */
  venue: string;
  /** LINE OpenChat URL for participants */
  lineOpenChatUrl: string;
  /** URL of the publicly hosted scores CSV */
  scoresCsvUrl: string;
  /** Whether the scoreboard is visible to the public */
  scoresPublished: boolean;
  /** Whether registration is currently open */
  registrationOpen: boolean;
}

export const siteConfig: SiteConfig = {
  eventYear: 27,
  showYearInName: true,
  eventDate: "2027-02-15T09:00:00+07:00",
  venue: "Faculty of ICT, Mahidol University, Salaya",
  lineOpenChatUrl: "https://line.me/ti/g2/PLACEHOLDER",
  scoresCsvUrl:
    process.env.NEXT_PUBLIC_SCORES_CSV_URL ??
    "/mock-data/scores.csv", // local mock fallback
  scoresPublished: false,
  registrationOpen: true,
};

/**
 * Returns "ICTPC" or "ICTPCXX" depending on showYearInName.
 * Use this everywhere a site name is displayed.
 */
export function getSiteName(): string {
  return siteConfig.showYearInName
    ? `ICTPC${siteConfig.eventYear}`
    : "ICTPC";
}
