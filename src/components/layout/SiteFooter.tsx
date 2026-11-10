import React from "react";
import { Link } from "@/i18n/navigation";

export interface SiteFooterProps {
  siteName: string; // from getSiteName()
  year: number; // from siteConfig.eventYear
}

export function SiteFooter({ siteName, year }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-sm text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Mission */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 font-mono text-xs font-bold text-white">
                &gt;_
              </span>
              <span className="font-mono text-base font-bold tracking-tight text-slate-900">
                {siteName}
              </span>
              <span className="rounded border border-primary-200 bg-primary-50 px-2 py-0.5 font-mono text-xs text-primary-600">
                Edition {year}
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">
              Faculty of ICT Annual Competitive Programming Contest, Mahidol University. Empowering
              algorithmic problem-solving and collaboration for ICT &amp; DST students.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Co-organized by <span className="font-medium text-slate-600">SMO MUICT</span> &amp;{" "}
              <span className="font-medium text-slate-600">Dev Club MUICT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-900">
              Contest
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-primary-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rules" className="transition-colors hover:text-primary-600">
                  Rules &amp; Eligibility
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="transition-colors hover:text-primary-600">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="font-medium text-primary-600 transition-colors hover:text-primary-600"
                >
                  Register Team
                </Link>
              </li>
              <li>
                <Link href="/teams" className="transition-colors hover:text-primary-600">
                  Registered Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Community */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-900">
              Community
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/scores" className="transition-colors hover:text-primary-600">
                  Scoreboard
                </Link>
              </li>
              <li>
                <Link href="/problems" className="transition-colors hover:text-primary-600">
                  Past Problems
                </Link>
              </li>
              <li>
                <Link href="/practice" className="transition-colors hover:text-primary-600">
                  Practice Sessions
                </Link>
              </li>
              <li>
                <Link href="/organizers" className="transition-colors hover:text-primary-600">
                  Organizers
                </Link>
              </li>
              <li>
                <Link href="/developers" className="transition-colors hover:text-primary-600">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteName}. Faculty of ICT, Mahidol University. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="transition-colors hover:text-slate-600">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
