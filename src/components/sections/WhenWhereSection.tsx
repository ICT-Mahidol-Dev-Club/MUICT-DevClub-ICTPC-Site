import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface ScheduleEventItem {
  time: string;
  label: string;
}

export interface WhenWhereSectionProps {
  badge: string;
  heading: string;
  description: string;
  eventDate: string;
  venue: string;
  venueTitle: string;
  dateTitle: string;
  mapHint: string;
  events: ScheduleEventItem[];
}

export function WhenWhereSection({
  badge,
  heading,
  description,
  eventDate,
  venue,
  venueTitle,
  dateTitle,
  mapHint,
  events,
}: WhenWhereSectionProps) {
  const formattedDate = new Date(eventDate).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      id="when-where"
      aria-labelledby="when-where-heading"
      className="scroll-mt-20 border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="primary" size="md" className="mb-3">
            {badge}
          </Badge>
          <h2
            id="when-where-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Venue & Date Card */}
          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-28">
            <Card className="overflow-hidden border-slate-200 bg-slate-50/70 p-6 sm:p-7 shadow-xs">
              <div className="space-y-6">
                {/* Date Highlight */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700">
                      {dateTitle}
                    </span>
                    <h3 className="mt-1 font-mono text-lg font-bold text-slate-900 sm:text-xl">
                      {formattedDate}
                    </h3>
                  </div>
                </div>

                <div className="border-t border-slate-200" />

                {/* Venue Highlight */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-lime-900">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-lime-800">
                      {venueTitle}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                      {venue}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {mapHint}
                    </p>
                  </div>
                </div>

                {/* Map Graphic / Campus Locator Placeholder */}
                <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-6 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-500 shadow-xs">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 font-mono text-xs font-semibold text-slate-700">
                    MUICT Salaya Campus
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Room 404 &amp; Computer Labs 1–3
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-mono text-xs font-medium text-primary-700 border border-slate-200 shadow-2xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 animate-pulse" />
                    <span>On-Site Participation</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Itinerary Timeline */}
          <div className="lg:col-span-7">
            <div className="relative ml-4 space-y-6 border-l-2 border-slate-200 pl-6 sm:ml-6 sm:pl-8">
              {events.map((event, idx) => {
                const isContest =
                  event.label.toLowerCase().includes("contest") ||
                  event.label.toLowerCase().includes("เริ่มการแข่งขัน");
                return (
                  <div key={idx} className="group relative">
                    {/* Bullet marker */}
                    <div
                      className={`absolute -left-[31px] top-2 h-4 w-4 rounded-full border-2 bg-white transition-colors sm:-left-[39px] ${
                        isContest
                          ? "border-primary-600 ring-4 ring-primary-100"
                          : "border-slate-400 group-hover:border-primary-500"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Timeline card */}
                    <Card
                      className={`p-4 transition-all sm:p-5 ${
                        isContest
                          ? "border-primary-200 bg-primary-50/40 shadow-xs"
                          : "border-slate-200/90 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <span className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-sm font-bold text-primary-600 sm:text-base">
                            {event.time}
                          </span>
                          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                            {event.label}
                          </h3>
                        </div>
                        {isContest && (
                          <Badge variant="lime" size="sm">
                            Main Event
                          </Badge>
                        )}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

