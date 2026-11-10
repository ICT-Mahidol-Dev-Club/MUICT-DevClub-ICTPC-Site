import { useTranslations } from "next-intl";
import { scoresService } from "@/lib/services";
import { siteConfig } from "@/config/site.config";
import type { ScoreRow } from "@/types";

// Server component
// TODO(UI): Replace with <ScoreboardTable /> and <ScoreboardNotPublished />
export default async function ScoresPage() {
  const t = useTranslations("scores");

  if (!siteConfig.scoresPublished) {
    return (
      <div>
        {/* TODO(UI): PageHeader — props: heading */}
        <h1>{t("heading")}</h1>
        {/* TODO(UI): NotPublishedBanner */}
        <p>{t("notPublished")}</p>
      </div>
    );
  }

  let rows: ScoreRow[] = [];
  let error = false;

  try {
    rows = await scoresService.list();
  } catch {
    error = true;
  }

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {error && <p role="alert">Failed to load scores. Please refresh.</p>}

      {/* TODO(UI): ScoreboardTable — props: rows, columns */}
      {!error && (
        <table>
          <thead>
            <tr>
              <th>{t("columns.rank")}</th>
              <th>{t("columns.team")}</th>
              <th>{t("columns.solved")}</th>
              <th>{t("columns.time")}</th>
              {rows[0] &&
                Object.keys(rows[0].problemResults).map((col) => (
                  <th key={col}>{col}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.teamName}>
                <td>{row.rank}</td>
                <td>{row.teamName}</td>
                <td>{row.solved}</td>
                <td>{row.totalTime}</td>
                {Object.values(row.problemResults).map((verdict, i) => (
                  <td key={i}>{verdict}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
