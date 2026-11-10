import { useTranslations } from "next-intl";
import { getSiteName, siteConfig } from "@/config/site.config";
import { HeroSection } from "@/components/sections/HeroSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { AboutSnippet } from "@/components/sections/AboutSnippet";

export default function HomePage() {
  const t = useTranslations("home");
  const siteName = getSiteName();

  return (
    <div className="flex flex-col">
      <HeroSection
        siteName={siteName}
        tagline={t("hero.tagline")}
        subtitle={t("hero.subtitle")}
        ctaRegister={t("hero.ctaRegister")}
        ctaLearnMore={t("hero.ctaLearnMore")}
        eventDate={siteConfig.eventDate}
        registrationOpen={siteConfig.registrationOpen}
      />

      <CountdownSection
        eventDate={siteConfig.eventDate}
        labels={{
          label: t("countdown.label"),
          days: t("countdown.days"),
          hours: t("countdown.hours"),
          minutes: t("countdown.minutes"),
          seconds: t("countdown.seconds"),
        }}
      />

      <AboutSnippet
        heading={t("about.heading")}
        body={t("about.body")}
      />
    </div>
  );
}
