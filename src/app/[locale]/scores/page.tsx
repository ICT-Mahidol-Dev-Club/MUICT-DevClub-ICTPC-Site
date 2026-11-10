import { getTranslations } from "next-intl/server";
import { scoresService } from "@/lib/services";
import { siteConfig } from "@/config/site.config";
import type { ScoreRow } from "@/types";
import { PageHeader } from "@/components/ui/PageHeader";
import { NotPublishedBanner } from "@/components/sections/NotPublishedBanner";
import { ScoreboardTable } from "@/components/sections/ScoreboardTable";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default async function ScoresPage() {
  const t = await getTranslations("scores");

  if (!siteConfig.scoresPublished) {
    return (
      <div className="pb-16">
        <PageHeader
          badge="LIVE STANDINGS"
          heading={t("heading")}
          description="Contest scoreboard tracking rankings, solved problems, and cumulative time penalty."
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NotPublishedBanner message={t("notPublished")} />
        </div>
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
    <div className="pb-16">
      <PageHeader
        badge="LIVE STANDINGS"
        heading={t("heading")}
        description="Official rankings with problem verdicts and total contest time penalty."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {error ? (
          <ErrorMessage message="Failed to load scoreboard. Please refresh the page." />
        ) : (
          <ScoreboardTable
            rows={rows}
            columns={{
              rank: t("columns.rank"),
              team: t("columns.team"),
              solved: t("columns.solved"),
              time: t("columns.time"),
            }}
          />
        )}
      </div>
    </div>
  );
}
