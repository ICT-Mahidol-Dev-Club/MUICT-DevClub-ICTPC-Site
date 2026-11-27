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
  eventDate: string | null;
  /** Venue name (bilingual; display using the i18n content files) */
  venue: string;
  /** LINE OpenChat URL for participants */
  lineOpenChatUrl: string | null;
  /** URL of the publicly hosted scores CSV */
  scoresCsvUrl: string | null;
  /** Whether the scoreboard is visible to the public */
  scoresPublished: boolean;
  /** Whether registration is currently open */
  registrationOpen: boolean;
  /** The rules text in Thai */
  rulesTh: string;
  /** The rules text in English */
  rulesEn: string;
}

// base configuration, is overridden by database
export const siteConfig: SiteConfig = {
  eventYear: 27,
  showYearInName: true,
  eventDate: "2027-02-15T09:00:00+07:00",
  venue: "Faculty of ICT, Mahidol University, Salaya",
  lineOpenChatUrl: "https://line.me/ti/g2/PLACEHOLDER",
  scoresCsvUrl:
    process.env.NEXT_PUBLIC_SCORES_CSV_URL ??
    "http://localhost:3000/mock-data/scores.csv", // local mock fallback
  scoresPublished: false,
  registrationOpen: true,
  rulesTh: `คุณสมบัติผู้เข้าแข่งขัน
- ผู้เข้าแข่งขันต้องเป็นนักศึกษา ICT หรือ DST ที่กำลังศึกษาอยู่ในมหาวิทยาลัยมหิดล
- แต่ละทีมมีสมาชิกได้ 1–3 คน
- นักศึกษาแต่ละคนสามารถอยู่ในทีมได้เพียงทีมเดียว

รูปแบบการแข่งขัน
- คะแนนนับจากจำนวนโจทย์ที่ทำสำเร็จ และเวลาโทษรวม
- ส่งถูกต้อง: ไม่มีโทษ | ส่งผิด: +20 นาที
- ระยะเวลาแข่งขัน 3 ชั่วโมง

จรรยาบรรณ
- โค้ดที่ส่งต้องเป็นผลงานต้นฉบับของทีม
- การคัดลอกผลงานผู้อื่นถือว่าทุจริตและถูกตัดสิทธิ์ทันที
- ผู้เข้าแข่งขันต้องปฏิบัติตามคำสั่งของเจ้าหน้าที่`,
  rulesEn: `Eligibility:
- Participants must be currently enrolled ICT or DST students at Mahidol University.
- Each team may have 1–3 members.
- A student may only join one team.

Contest Format:
- Problems are scored by number solved, then by total penalty time.
- A correct submission earns +0 penalty. An incorrect submission earns +20 minutes penalty.
- The contest duration is 3 hours.

Code of Conduct:
All submitted code must be original work by the team.
Plagiarism results in immediate disqualification.
Participants must follow the instructions of contest staff.`,
};

/**
 * Returns "ICTPC" or "ICTPCXX" depending on showYearInName.
 * Use this everywhere a site name is displayed.
 */
export function getSiteName(siteConfig: SiteConfig): string {
  return siteConfig.showYearInName
    ? `ICTPC${siteConfig.eventYear}`
    : "ICTPC";
}

