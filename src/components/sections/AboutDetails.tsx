import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface AboutDetailsProps {
  mission: string;
  coOrganizers: string;
  eligibility: string;
  format: string;
  eventDate: string;
  venue: string;
  summary?: boolean;
}

export function AboutDetails({
  mission,
  coOrganizers,
  eligibility,
  format,
  eventDate,
  venue,
  summary = false,
}: AboutDetailsProps) {
  const formattedDate = new Date(eventDate).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (summary) {
    return (
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Eligibility */}
          <Card className="flex flex-col justify-between border-slate-200/90 bg-white p-6 shadow-xs">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <CardTitle as="h3" className="text-xl">
                  Who Can Participate
                </CardTitle>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{eligibility}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              <Badge variant="primary" size="sm">
                ICT Students
              </Badge>
              <Badge variant="primary" size="sm">
                DST Students
              </Badge>
              <Badge variant="slate" size="sm">
                Undergraduate Years 1–4
              </Badge>
            </div>
          </Card>

          {/* Contest Format */}
          <Card className="flex flex-col justify-between border-slate-200/90 bg-white p-6 shadow-xs">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-100 text-lime-900">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <CardTitle as="h3" className="text-xl">
                  Contest Format &amp; Teams
                </CardTitle>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{format}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              <Badge variant="lime" size="sm">
                1–3 Members Per Team
              </Badge>
              <Badge variant="slate" size="sm">
                3-Hour Contest Window
              </Badge>
              <Badge variant="slate" size="sm">
                ICPC-Style Scoring
              </Badge>
            </div>
          </Card>
        </div>

        {/* Mission Banner */}
        <Card className="border-primary-100 bg-gradient-to-br from-primary-50/50 via-white to-white p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary-700">
                Our Mission
              </span>
              <p className="text-base font-medium text-slate-800 sm:text-lg">{mission}</p>
            </div>
            <div className="shrink-0 font-mono text-xs font-semibold text-slate-500">
              {coOrganizers}
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Mission Hero Card */}
      <Card className="border-primary-100 bg-gradient-to-br from-primary-50/40 via-white to-white p-6 sm:p-8">
        <span className="rounded bg-primary-100 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-primary-700">
          Mission
        </span>
        <h2 className="mb-2 mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
          Empowering Next-Generation Algorithmic Engineers
        </h2>
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{mission}</p>
        <p className="mt-4 border-t border-slate-200/60 pt-4 text-sm font-medium text-slate-500">
          {coOrganizers}
        </p>
      </Card>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Eligibility */}
        <Card className="h-full">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <CardTitle as="h3">Eligibility</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-slate-600">{eligibility}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="primary" size="sm">
                ICT Students
              </Badge>
              <Badge variant="primary" size="sm">
                DST Students
              </Badge>
              <Badge variant="slate" size="sm">
                Years 1–4
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Contest Format */}
        <Card className="h-full">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-100 text-lime-900">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <CardTitle as="h3">Contest Format</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-slate-600">{format}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="lime" size="sm">
                1–3 Members
              </Badge>
              <Badge variant="slate" size="sm">
                3 Hours Window
              </Badge>
              <Badge variant="slate" size="sm">
                Standard ICPC Scoring
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Date & Time */}
        <Card className="h-full">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <CardTitle as="h3">Contest Date</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-mono text-base font-semibold text-slate-900">{formattedDate}</p>
            <p className="mt-1 text-xs text-slate-500">Check-in begins 08:30 AM</p>
          </CardContent>
        </Card>

        {/* Venue */}
        <Card className="h-full">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-magenta-50 text-magenta-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </span>
              <CardTitle as="h3">Venue</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base font-medium text-slate-900">{venue}</p>
            <p className="mt-1 text-xs text-slate-500">
              Computer laboratories &amp; presentation rooms
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
