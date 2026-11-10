import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site.config";

// TODO(UI): Replace with <SchedulePageContent /> using <ScheduleTimeline />
export default function SchedulePage() {
  const t = useTranslations("schedule");
  const events = t.raw("events") as Array<{ time: string; label: string }>;

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {/* TODO(UI): ScheduleTimeline — props: events, eventDate, venue */}
      <p>
        <time dateTime={siteConfig.eventDate}>{siteConfig.eventDate}</time>
        {" — "}
        {siteConfig.venue}
      </p>
      <ol>
        {events.map((e) => (
          <li key={e.time}>
            <span>{e.time}</span> — <span>{e.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

