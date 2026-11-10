import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/ui/PageHeader";
import { RulesSectionList } from "@/components/sections/RulesSectionList";

export default function RulesPage() {
  const t = useTranslations("rules");
  const sections = t.raw("sections") as Array<{ title: string; items: string[] }>;

  return (
    <div className="pb-16">
      <PageHeader
        badge="REGULATIONS"
        heading={t("heading")}
        description="Guidelines on team eligibility, submission verdicts, scoring mechanics, and code of conduct."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RulesSectionList sections={sections} />
      </div>
    </div>
  );
}
