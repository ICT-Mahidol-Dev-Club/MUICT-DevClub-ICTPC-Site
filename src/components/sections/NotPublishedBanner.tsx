import React from "react";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/navigation";

export interface NotPublishedBannerProps {
  message: string;
}

export function NotPublishedBanner({ message }: NotPublishedBannerProps) {
  return (
    <Card className="max-w-2xl mx-auto p-8 sm:p-12 text-center border-slate-200 bg-white shadow-card">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 mx-auto mb-4">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        Scoreboard Frozen
      </h2>
      <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-md mx-auto">
        {message}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/teams"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm"
        >
          View Registered Teams
        </Link>
        <Link
          href="/schedule"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
        >
          Contest Schedule
        </Link>
      </div>
    </Card>
  );
}
