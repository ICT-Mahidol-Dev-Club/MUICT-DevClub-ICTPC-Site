import React from "react";
import { Link } from "@/i18n/navigation";

export interface AdminPageHeaderProps {
  heading: string;
  backHref?: string;
  actions?: React.ReactNode;
}

export function AdminPageHeader({
  heading,
  backHref,
  actions,
}: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
      <div className="space-y-1">
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-primary-600 transition-colors mb-1"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </Link>
        )}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-mono">
          {heading}
        </h1>
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
