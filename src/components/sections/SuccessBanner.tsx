import React from "react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export interface SuccessBannerProps {
  message: string;
}

export function SuccessBanner({ message }: SuccessBannerProps) {
  return (
    <Card className="max-w-2xl mx-auto p-8 sm:p-10 text-center border-emerald-200 bg-emerald-50/50 shadow-card">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mx-auto mb-4">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        Registration Submitted!
      </h2>
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 max-w-lg mx-auto">
        {message}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/teams"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm"
        >
          View Registered Teams
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </Card>
  );
}
