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
      className={`border-b border-slate-200/80 bg-white py-8 sm:py-10 mb-8 sm:mb-10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block px-2.5 py-0.5 mb-2.5 text-xs font-mono font-semibold tracking-wider text-primary-700 bg-primary-50 rounded border border-primary-200/80">
                {badge}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              {heading}
            </h1>
            {description && (
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>
          {actions && (
            <div className="shrink-0 flex items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
