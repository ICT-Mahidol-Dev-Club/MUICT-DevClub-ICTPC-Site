import React from "react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface BenefitItem {
  title: string;
  description: string;
}

export interface WhatWhySectionProps {
  badge: string;
  whatHeading: string;
  whatBody: string;
  ctaRegister: string;
  whyHeading: string;
  whySubtitle: string;
  benefits: BenefitItem[];
  registrationOpen?: boolean;
}

export function WhatWhySection({
  badge,
  whatHeading,
  whatBody,
  ctaRegister,
  whyHeading,
  whySubtitle,
  benefits,
  registrationOpen = true,
}: WhatWhySectionProps) {
  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        // Problem solving / brain / code
        return (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700 shadow-xs">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </span>
        );
      case 1:
        // Team / users
        return (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-lime-900 shadow-xs">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
        );
      case 2:
        // Practice / terminal / target
        return (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-magenta-100 text-magenta-800 shadow-xs">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
        );
      default:
        // Community / network / sparkles
        return (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-800 shadow-xs">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
        );
    }
  };

  return (
    <section
      id="what"
      aria-labelledby="what-heading"
      className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: What is ICTPC */}
          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex">
              <Badge variant="primary" size="md">
                {badge}
              </Badge>
            </div>

            <h2
              id="what-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {whatHeading}
            </h2>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {whatBody}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-slate-700">
                1–3 Members
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-slate-700">
                Automated Judge
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-slate-700">
                ICT &amp; DST Only
              </span>
            </div>

            <div className="pt-4">
              {registrationOpen ? (
                <Link href="/register" className="inline-block">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                    <span>{ctaRegister}</span>
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Button>
                </Link>
              ) : (
                <Link href="/teams" className="inline-block">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    View Registered Teams
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Why you should join */}
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {whyHeading}
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                {whySubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-primary-200 hover:shadow-sm"
                >
                  <div className="space-y-3">
                    {getBenefitIcon(index)}
                    <h3 className="text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
