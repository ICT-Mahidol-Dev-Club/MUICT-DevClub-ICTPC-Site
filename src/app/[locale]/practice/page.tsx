import { getTranslations } from "next-intl/server";
import { practiceService } from "@/lib/services";
import type { PracticeSession } from "@/types";
import { PageHeader } from "@/components/ui/PageHeader";
import { PracticeSessionList } from "@/components/sections/PracticeSessionList";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default async function PracticePage() {
  const t = await getTranslations("practice");

  let sessions: PracticeSession[] = [];
  let error = false;

  try {
    sessions = await practiceService.list();
  } catch {
    error = true;
  }

  const now = new Date();
  const upcoming = sessions.filter((s) => new Date(s.date) >= now);
  const past = sessions.filter((s) => new Date(s.date) < now);

  return (
    <div className="pb-16">
      <PageHeader badge="TRAINING" heading={t("heading")} description={t("description")} />

      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {error ? (
          <ErrorMessage message="Failed to load practice sessions. Please refresh the page." />
        ) : (
          <>
            <PracticeSessionList
              sessions={upcoming}
              heading={t("upcoming")}
              labels={{
                register: t("register"),
                materialsLabel: t("materialsLabel"),
              }}
            />

            <PracticeSessionList
              sessions={past}
              heading={t("past")}
              labels={{
                register: t("register"),
                materialsLabel: t("materialsLabel"),
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
