import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface ScheduleEvent {
  time: string; // e.g. "09:30"
  label: string;
}

export interface ScheduleTimelineProps {
  events: ScheduleEvent[];
  eventDate: string;
  venue: string;
}

export function ScheduleTimeline({ events, eventDate, venue }: ScheduleTimelineProps) {
  const formattedDate = new Date(eventDate).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Overview Info Card */}
      <Card className="border-slate-200 bg-slate-50 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary-700">
              Contest Day
            </span>
            <div className="font-mono text-base font-bold text-slate-900 sm:text-lg">
              {formattedDate}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 py-2 text-xs text-slate-600 sm:text-sm">
            <svg
              className="h-4 w-4 shrink-0 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            <span>{venue}</span>
          </div>
        </div>
      </Card>

      {/* Timeline */}
      <div className="relative ml-4 space-y-6 border-l-2 border-slate-200 pl-6 sm:ml-6 sm:pl-8">
        {events.map((event, idx) => {
          const isContest =
            event.label.toLowerCase().includes("contest") ||
            event.label.toLowerCase().includes("เริ่มการแข่งขัน");
          return (
            <div key={idx} className="group relative">
              {/* Dot on line */}
              <div
                className={`absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 bg-white transition-colors sm:-left-[39px] ${
                  isContest
                    ? "border-primary-600 ring-4 ring-primary-100"
                    : "border-slate-400 group-hover:border-primary-500"
                }`}
                aria-hidden="true"
              />

              {/* Event card */}
              <Card
                className={`p-4 transition-all sm:p-5 ${
                  isContest
                    ? "border-primary-200 bg-primary-50/30 shadow-sm"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="rounded border border-slate-200 bg-slate-100/80 px-2.5 py-1 font-mono text-sm font-bold text-primary-600 sm:text-base">
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
  );
}
