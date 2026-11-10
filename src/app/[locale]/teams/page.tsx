import { useTranslations } from "next-intl";
import { teamsService } from "@/lib/services";
import type { PublicTeam } from "@/types";

// Server component — data fetched at request time
// TODO(UI): Replace with <TeamsGrid /> and <TeamCard />
export default async function TeamsPage() {
  const t = useTranslations("teams");

  let teams: PublicTeam[] = [];
  let error = false;

  try {
    teams = await teamsService.listPublic();
  } catch {
    error = true;
  }

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {/* TODO(UI): error state → <ErrorMessage /> */}
      {error && <p role="alert">Failed to load teams. Please refresh.</p>}

      {/* TODO(UI): empty state → <EmptyState message={t("teams.empty")} /> */}
      {!error && teams.length === 0 && <p>{t("empty")}</p>}

      {/* TODO(UI): TeamsGrid — props: teams */}
      {!error && teams.length > 0 && (
        <ul>
          {teams.map((team) => (
            <li key={team.id}>
              {/* TODO(UI): TeamCard — props: team */}
              <h2>{team.teamName}</h2>
              <p>
                {t("memberCount", { count: team.memberCount })}
              </p>
              <p>{t(`status.${team.status}`)}</p>
              <ul>
                {team.members.map((m) => (
                  <li key={m.nickname}>
                    {m.nickname} ({m.faculty}, Year {m.year})
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

