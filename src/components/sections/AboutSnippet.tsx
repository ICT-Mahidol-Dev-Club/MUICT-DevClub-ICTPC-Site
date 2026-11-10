import React from "react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export interface AboutSnippetProps {
  heading: string;
  body: string;
}

export function AboutSnippet({ heading, body }: AboutSnippetProps) {
  return (
    <section aria-label="about-snippet" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider text-primary-600 uppercase bg-primary-50 px-2.5 py-1 rounded border border-primary-200">
              Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {heading}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              {body}
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                <span>Read contest details and format</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick highlight cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card className="p-5 flex items-start gap-4 bg-white border-slate-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Teams of 1–3</h4>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Form a team with your fellow ICT or DST classmates across academic years 1 to 4.
                </p>
              </div>
            </Card>

            <Card className="p-5 flex items-start gap-4 bg-white border-slate-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-900">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Real-time Judge &amp; Scoreboard</h4>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Test your algorithmic speed in C, C++, Java, or Python under real-time ICPC-style scoring.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
