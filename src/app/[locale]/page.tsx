import React from "react";
import { getTranslations } from "next-intl/server";
import { getSiteName, siteConfig } from "@/config/site.config";
import { organizers } from "@/content/team";
import { Badge } from "@/components/ui/Badge";
import { HeroSection } from "@/components/sections/HeroSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { WhatWhySection } from "@/components/sections/WhatWhySection";
import { WhenWhereSection } from "@/components/sections/WhenWhereSection";
import { AboutDetails } from "@/components/sections/AboutDetails";
import { RulesSectionList } from "@/components/sections/RulesSectionList";
import { OrgBanner } from "@/components/sections/OrgBanner";
import { OrganizerGrid } from "@/components/sections/OrganizerGrid";

export default async function HomePage() {
  const tHome = await getTranslations("home");
  const tAbout = await getTranslations("about");
  const tRules = await getTranslations("rules");
  const tSchedule = await getTranslations("schedule");
  const tOrganizers = await getTranslations("organizers");
  const siteName = getSiteName();

  const rulesSections = tRules.raw("sections") as Array<{
    title: string;
    items: string[];
  }>;

  const scheduleEvents = tSchedule.raw("events") as Array<{
    time: string;
    label: string;
  }>;

  const benefits = tHome.raw("whatWhy.benefits") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (existing) */}
      <HeroSection
        siteName={siteName}
        tagline={tHome("hero.tagline")}
        subtitle={tHome("hero.subtitle")}
        ctaRegister={tHome("hero.ctaRegister")}
        ctaLearnMore={tHome("hero.ctaLearnMore")}
        eventDate={siteConfig.eventDate}
        registrationOpen={siteConfig.registrationOpen}
      />

      {/* 2. Contest Starts In (existing countdown) */}
      <CountdownSection
        eventDate={siteConfig.eventDate}
        labels={{
          label: tHome("countdown.label"),
          days: tHome("countdown.days"),
          hours: tHome("countdown.hours"),
          minutes: tHome("countdown.minutes"),
          seconds: tHome("countdown.seconds"),
        }}
      />

      {/* 3. What is ICTPC + Why you should join (new) */}
      <WhatWhySection
        badge={tHome("whatWhy.badge")}
        whatHeading={tHome("whatWhy.whatHeading")}
        whatBody={tHome("whatWhy.whatBody")}
        ctaRegister={tHome("whatWhy.ctaRegister")}
        whyHeading={tHome("whatWhy.whyHeading")}
        whySubtitle={tHome("whatWhy.whySubtitle")}
        benefits={benefits}
        registrationOpen={siteConfig.registrationOpen}
      />

      {/* 4. When and Where (new) */}
      <WhenWhereSection
        badge={tHome("whenWhere.badge")}
        heading={tHome("whenWhere.heading")}
        description={tHome("whenWhere.description")}
        venueTitle={tHome("whenWhere.venueTitle")}
        dateTitle={tHome("whenWhere.dateTitle")}
        mapHint={tHome("whenWhere.mapHint")}
        eventDate={siteConfig.eventDate}
        venue={siteConfig.venue}
        events={scheduleEvents}
      />

      {/* 5. About (summary) */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge variant="primary" size="md" className="mb-3">
              About Contest
            </Badge>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {tAbout("heading")}
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              {tAbout("mission")}
            </p>
          </div>
          <AboutDetails
            mission={tAbout("mission")}
            coOrganizers={tAbout("coOrganizers")}
            eligibility={tAbout("eligibility")}
            format={tAbout("format")}
            eventDate={siteConfig.eventDate}
            venue={siteConfig.venue}
            summary={true}
          />
        </div>
      </section>

      {/* 6. Rules (condensed & structured) */}
      <section
        id="rules"
        aria-labelledby="rules-heading"
        className="scroll-mt-20 border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge variant="primary" size="md" className="mb-3">
              Regulations
            </Badge>
            <h2
              id="rules-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {tRules("heading")}
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Guidelines on team eligibility, submission verdicts, scoring mechanics, and code of conduct.
            </p>
          </div>
          <RulesSectionList sections={rulesSections} titleAs="h3" />
        </div>
      </section>

      {/* 7. Organizers (final section before footer) */}
      <section
        id="organizers"
        aria-labelledby="organizers-heading"
        className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge variant="primary" size="md" className="mb-3">
              Organizers
            </Badge>
            <h2
              id="organizers-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {tOrganizers("heading")}
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              The joint committee of SMO MUICT and Dev Club MUICT dedicated to making ICTPC possible.
            </p>
          </div>

          <div className="space-y-12">
            <OrgBanner
              smo={{
                name: tOrganizers("smo.name"),
                description: tOrganizers("smo.description"),
              }}
              devclub={{
                name: tOrganizers("devclub.name"),
                description: tOrganizers("devclub.description"),
              }}
              titleAs="h3"
            />

            <OrganizerGrid
              team={organizers}
              heading={tOrganizers("team")}
              titleAs="h3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
