import React from "react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export interface SuccessBannerProps {
  message: string;
}

export function SuccessBanner({ message }: SuccessBannerProps) {
  return (
    <Card className="mx-auto max-w-2xl border-emerald-200 bg-emerald-50/50 p-8 text-center shadow-card sm:p-10">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">Registration Submitted!</h2>
      <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
        {message}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/teams"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
        >
          View Registered Teams
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Return to Home
        </Link>
      </div>
    </Card>
  );
}
