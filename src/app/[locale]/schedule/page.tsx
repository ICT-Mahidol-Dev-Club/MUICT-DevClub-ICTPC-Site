import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site.config";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScheduleTimeline } from "@/components/sections/ScheduleTimeline";

export default function SchedulePage() {
  const t = useTranslations("schedule");
  const events = t.raw("events") as Array<{ time: string; label: string }>;

  return (
    <div className="pb-16">
      <PageHeader
        badge="TIMETABLE"
        heading={t("heading")}
        description="Detailed itinerary for contest day, from morning registration to the awards ceremony."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScheduleTimeline
          events={events}
          eventDate={siteConfig.eventDate}
          venue={siteConfig.venue}
        />
      </div>
    </div>
  );
}
