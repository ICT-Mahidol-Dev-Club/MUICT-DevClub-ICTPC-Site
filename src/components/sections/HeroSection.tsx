import React from "react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";

export interface HeroSectionProps {
  siteName: string;
  tagline: string;
  subtitle: string;
  ctaRegister: string;
  ctaLearnMore: string;
  eventDate: string; // ISO 8601
  registrationOpen: boolean;
}

export function HeroSection({
  siteName,
  tagline,
  subtitle,
  ctaRegister,
  ctaLearnMore,
  eventDate,
  registrationOpen,
}: HeroSectionProps) {
  const formattedDate = new Date(eventDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section aria-label="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/50">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Status Badge & Edition Tag */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-primary-50 text-primary-700 border border-primary-200">
              <span className="h-2 w-2 rounded-full bg-primary-600 animate-pulse" />
              {siteName}
            </span>
            {registrationOpen ? (
              <Badge variant="lime" size="sm" dot>
                Registration Open
              </Badge>
            ) : (
              <Badge variant="slate" size="sm">
                Registration Closed
              </Badge>
            )}
          </div>

          {/* Main Title & Tagline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance">
            {tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed text-balance max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Key Event Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 pt-2">
            <div className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/80 rounded-lg px-3 py-1.5 font-mono">
              <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/80 rounded-lg px-3 py-1.5 font-mono">
              <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Faculty of ICT, Salaya</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            {registrationOpen ? (
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-base shadow-sm hover:bg-primary-700 active:bg-primary-800 transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <span>{ctaRegister}</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            ) : (
              <Link
                href="/teams"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-200 text-slate-800 font-semibold text-base hover:bg-slate-300 transition-colors"
              >
                View Registered Teams
              </Link>
            )}

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-700 font-medium text-base border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              {ctaLearnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
