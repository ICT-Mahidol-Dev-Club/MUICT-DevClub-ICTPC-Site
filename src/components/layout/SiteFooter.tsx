import React from "react";
import { Link } from "@/i18n/navigation";

export interface SiteFooterProps {
  siteName: string; // from getSiteName()
  year: number;     // from siteConfig.eventYear
}

export function SiteFooter({ siteName, year }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 text-white font-mono text-xs font-bold">
                &gt;_
              </span>
              <span className="font-mono font-bold text-base text-slate-900 tracking-tight">
                {siteName}
              </span>
              <span className="text-xs font-mono text-primary-600 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">
                Edition {year}
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed">
              Faculty of ICT Annual Competitive Programming Contest, Mahidol University.
              Empowering algorithmic problem-solving and collaboration for ICT &amp; DST students.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Co-organized by <span className="font-medium text-slate-600">SMO MUICT</span> &amp; <span className="font-medium text-slate-600">Dev Club MUICT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Contest
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-primary-600 transition-colors">
                  Rules &amp; Eligibility
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary-600 transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-primary-600 transition-colors font-medium text-primary-600">
                  Register Team
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-primary-600 transition-colors">
                  Registered Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Community */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Community
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/scores" className="hover:text-primary-600 transition-colors">
                  Scoreboard
                </Link>
              </li>
              <li>
                <Link href="/problems" className="hover:text-primary-600 transition-colors">
                  Past Problems
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-primary-600 transition-colors">
                  Practice Sessions
                </Link>
              </li>
              <li>
                <Link href="/organizers" className="hover:text-primary-600 transition-colors">
                  Organizers
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-primary-600 transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {siteName}. Faculty of ICT, Mahidol University. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-slate-600 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
