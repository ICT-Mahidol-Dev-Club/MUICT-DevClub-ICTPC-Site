import React from "react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export interface AboutSnippetProps {
  heading: string;
  body: string;
}

export function AboutSnippet({ heading, body }: AboutSnippetProps) {
  return (
    <section aria-label="about-snippet" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Main narrative */}
          <div className="space-y-4 lg:col-span-7">
            <span className="rounded border border-primary-200 bg-primary-50 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-primary-600">
              Overview
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {heading}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600">{body}</p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                <span>Read contest details and format</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick highlight cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Card className="flex items-start gap-4 border-slate-200 bg-white p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Teams of 1–3</h4>
                <p className="mt-1 text-xs leading-normal text-slate-500">
                  Form a team with your fellow ICT or DST classmates across academic years 1 to 4.
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 border-slate-200 bg-white p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-900">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Real-time Judge &amp; Scoreboard
                </h4>
                <p className="mt-1 text-xs leading-normal text-slate-500">
                  Test your algorithmic speed in C, C++, Java, or Python under real-time ICPC-style
                  scoring.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
