import { useTranslations } from "next-intl";
import { developers } from "@/content/team";
import { PageHeader } from "@/components/ui/PageHeader";
import { DeveloperGrid } from "@/components/sections/DeveloperGrid";

export default function DevelopersPage() {
  const t = useTranslations("developers");

  return (
    <div className="pb-16">
      <PageHeader badge="ENGINEERING" heading={t("heading")} description={t("description")} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DeveloperGrid developers={developers} />
      </div>
    </div>
  );
}
