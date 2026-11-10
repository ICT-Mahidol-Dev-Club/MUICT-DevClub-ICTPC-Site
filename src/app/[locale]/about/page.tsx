import { useTranslations } from "next-intl";
import { getSiteName, siteConfig } from "@/config/site.config";

// TODO(UI): Replace with <AboutPageContent /> section components
export default function AboutPage() {
  const t = useTranslations("about");
  const siteName = getSiteName();

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {/* TODO(UI): AboutDetails — props: mission, coOrganizers, eligibility, format, eventDate, venue */}
      <section>
        <p>{t("mission")}</p>
        <p>{t("coOrganizers")}</p>
        <p>{t("eligibility")}</p>
        <p>{t("format")}</p>
        <p>
          {siteConfig.venue} &mdash; <time dateTime={siteConfig.eventDate}>{siteConfig.eventDate}</time>
        </p>
      </section>
    </div>
  );
}

