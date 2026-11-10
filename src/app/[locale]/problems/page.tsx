import { useTranslations } from "next-intl";
import { problemSetsService } from "@/lib/services";
import type { ProblemSet } from "@/types";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProblemList } from "@/components/sections/ProblemList";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

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
    <div className="pb-16">
      <PageHeader
        badge="ARCHIVE"
        heading={t("heading")}
        description="Explore the algorithmic problems and challenges from previous ICTPC contest editions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error ? (
          <ErrorMessage message="Failed to load problem sets. Please refresh the page." />
        ) : (
          <ProblemList
            problems={problems}
            difficultyLabels={{
              easy: t("difficulty.easy"),
              medium: t("difficulty.medium"),
              hard: t("difficulty.hard"),
            }}
          />
        )}
      </div>
    </div>
  );
}
