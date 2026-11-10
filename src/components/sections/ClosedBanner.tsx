import React from "react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export interface ClosedBannerProps {
  message: string;
}

export function ClosedBanner({ message }: ClosedBannerProps) {
  return (
    <Card className="mx-auto max-w-2xl border-amber-200 bg-amber-50/60 p-8 text-center sm:p-10">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h2 className="mb-2 text-xl font-bold text-slate-900">Registration Closed</h2>
      <p className="mb-6 text-sm leading-relaxed text-slate-600">{message}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/teams"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          View Registered Teams
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Back to Home
        </Link>
      </div>
    </Card>
  );
}
