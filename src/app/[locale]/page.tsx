import { useTranslations } from "next-intl";
import { getSiteName, siteConfig } from "@/config/site.config";

// TODO(UI): Replace placeholder markup with <HeroSection />, <CountdownSection />, <AboutSnippet />
export default function HomePage() {
  const t = useTranslations("home");
  const siteName = getSiteName();

  return (
    <div>
      {/* TODO(UI): HeroSection — props: siteName, tagline, subtitle, ctaRegister, ctaLearnMore, eventDate */}
      <section aria-label="hero">
        <h1>{siteName}</h1>
        <p>{t("hero.tagline")}</p>
        <p>{t("hero.subtitle")}</p>
        <a href="/register">{t("hero.ctaRegister")}</a>
        <a href="/about">{t("hero.ctaLearnMore")}</a>
      </section>

      {/* TODO(UI): CountdownSection — props: eventDate, labels */}
      <section aria-label="countdown">
        <p>{t("countdown.label")}</p>
        <time dateTime={siteConfig.eventDate}>{siteConfig.eventDate}</time>
      </section>

      {/* TODO(UI): AboutSnippet — props: heading, body */}
      <section aria-label="about-snippet">
        <h2>{t("about.heading")}</h2>
        <p>{t("about.body")}</p>
      </section>
    </div>
  );
}

