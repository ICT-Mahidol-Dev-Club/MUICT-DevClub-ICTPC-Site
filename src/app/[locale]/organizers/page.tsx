import { useTranslations } from "next-intl";
import { organizers } from "@/content/team";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrgBanner } from "@/components/sections/OrgBanner";
import { OrganizerGrid } from "@/components/sections/OrganizerGrid";

export default function OrganizersPage() {
  const t = useTranslations("organizers");

  return (
    <div className="pb-16">
      <PageHeader
        badge="COMMITTEE"
        heading={t("heading")}
        description="The joint committee of SMO MUICT and Dev Club MUICT dedicated to making ICTPC possible."
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <OrgBanner
          smo={{
            name: t("smo.name"),
            description: t("smo.description"),
          }}
          devclub={{
            name: t("devclub.name"),
            description: t("devclub.description"),
          }}
        />

        <OrganizerGrid team={organizers} heading={t("team")} />
      </div>
    </div>
  );
}
