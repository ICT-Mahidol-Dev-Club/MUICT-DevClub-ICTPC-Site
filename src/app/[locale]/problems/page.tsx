import { useTranslations } from "next-intl";
import { problemSetsService } from "@/lib/services";
import type { ProblemSet } from "@/types";

// Server component
// TODO(UI): Replace with <ProblemList /> and <ProblemCard />
export default async function ProblemsPage() {
  const t = useTranslations("problems");

  let problems: ProblemSet[] = [];
  let error = false;

  try {
    problems = await problemSetsService.list();
  } catch {
    error = true;
  }

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {error && <p role="alert">Failed to load problems. Please refresh.</p>}

      {!error && problems.length === 0 && <p>{t("empty")}</p>}

      {/* TODO(UI): ProblemList — props: problems */}
      {!error && problems.length > 0 && (
        <ul>
          {problems.map((p) => (
            <li key={p.id}>
              {/* TODO(UI): ProblemCard — props: problem */}
              <h2>{p.title}</h2>
              <span>{t(`difficulty.${p.difficulty}`)}</span>
              <span>{p.tags.join(", ")}</span>
              {p.statementUrl && (
                <a href={p.statementUrl} target="_blank" rel="noopener noreferrer">
                  View Problem
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
