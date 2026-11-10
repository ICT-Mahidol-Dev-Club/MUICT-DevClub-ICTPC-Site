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
}

export function AboutDetails({
  mission,
  coOrganizers,
  eligibility,
  format,
  eventDate,
  venue,
}: AboutDetailsProps) {
  const formattedDate = new Date(eventDate).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Mission Hero Card */}
      <Card className="border-primary-100 bg-gradient-to-br from-primary-50/40 via-white to-white p-6 sm:p-8">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-2.5 py-1 rounded">
          Mission
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
          Empowering Next-Generation Algorithmic Engineers
        </h2>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          {mission}
        </p>
        <p className="text-sm text-slate-500 mt-4 pt-4 border-t border-slate-200/60 font-medium">
          {coOrganizers}
        </p>
      </Card>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Eligibility */}
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <CardTitle as="h3">Eligibility</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed text-sm">
              {eligibility}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="primary" size="sm">ICT Students</Badge>
              <Badge variant="primary" size="sm">DST Students</Badge>
              <Badge variant="slate" size="sm">Years 1–4</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Contest Format */}
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-100 text-lime-900">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <CardTitle as="h3">Contest Format</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed text-sm">
              {format}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="lime" size="sm">1–3 Members</Badge>
              <Badge variant="slate" size="sm">3 Hours Window</Badge>
              <Badge variant="slate" size="sm">Standard ICPC Scoring</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Date & Time */}
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <CardTitle as="h3">Contest Date</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-mono text-base font-semibold text-slate-900">
              {formattedDate}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Check-in begins 08:30 AM
            </p>
          </CardContent>
        </Card>

        {/* Venue */}
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-magenta-50 text-magenta-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              <CardTitle as="h3">Venue</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base font-medium text-slate-900">
              {venue}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Computer laboratories &amp; presentation rooms
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
