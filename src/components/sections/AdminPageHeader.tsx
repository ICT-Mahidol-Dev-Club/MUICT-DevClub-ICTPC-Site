import React from "react";
import { Link } from "@/i18n/navigation";

export interface AdminPageHeaderProps {
  heading: string;
  backHref?: string;
  actions?: React.ReactNode;
  labels: {
    back: string;
  }
}

export function AdminPageHeader({ heading, backHref, actions, labels }: AdminPageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        {backHref && (
          <Link
            href={backHref}
            className="mb-1 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-primary-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>{labels.back}</span>
          </Link>
        )}
        <h1 className="font-mono text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {heading}
        </h1>
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
