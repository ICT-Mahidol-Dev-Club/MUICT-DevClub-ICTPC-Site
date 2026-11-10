import { getTranslations } from "next-intl/server";
import { teamsService } from "@/lib/services";
import type { PublicTeam } from "@/types";
import { PageHeader } from "@/components/ui/PageHeader";
import { TeamsGrid } from "@/components/sections/TeamsGrid";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default async function TeamsPage() {
  const t = await getTranslations("teams");

  let teams: PublicTeam[] = [];
  let error = false;

  try {
    teams = await teamsService.listPublic();
  } catch {
    error = true;
  }

  return (
    <div className="pb-16">
      <PageHeader
        badge="PARTICIPANTS"
        heading={t("heading")}
        description="Browse all confirmed and registered teams for the upcoming contest."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {error ? (
          <ErrorMessage message="Failed to load teams. Please refresh the page." />
        ) : (
          <TeamsGrid
            teams={teams}
            labels={{
              memberCount: t("memberCount"),
              statusLabels: {
                pending: t("status.pending"),
                confirmed: t("status.confirmed"),
                rejected: t("status.rejected"),
              },
            }}
          />
        )}
      </div>
    </div>
  );
}
