import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site.config";
import { PageHeader } from "@/components/ui/PageHeader";
import { AboutDetails } from "@/components/sections/AboutDetails";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pb-16">
      <PageHeader
        badge="ABOUT CONTEST"
        heading={t("heading")}
        description="Learn more about the contest history, format, mission, and how to participate."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AboutDetails
          mission={t("mission")}
          coOrganizers={t("coOrganizers")}
          eligibility={t("eligibility")}
          format={t("format")}
          eventDate={siteConfig.eventDate}
          venue={siteConfig.venue}
        />
      </div>
    </div>
  );
}
