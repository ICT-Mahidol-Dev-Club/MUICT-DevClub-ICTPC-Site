import React from "react";

export interface PageHeaderProps {
  heading: string;
  description?: string;
  badge?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  heading,
  description,
  badge,
  actions,
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`mb-8 border-b border-slate-200/80 bg-white py-8 sm:mb-10 sm:py-10 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            {badge && (
              <span className="mb-2.5 inline-block rounded border border-primary-200/80 bg-primary-50 px-2.5 py-0.5 font-mono text-xs font-semibold tracking-wider text-primary-700">
                {badge}
              </span>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {heading}
            </h1>
            {description && (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-3">{actions}</div>}
        </div>
      </div>
    </div>
  );
}
