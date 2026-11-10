import React from "react";

export interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  message,
  icon,
  title,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-xl border border-dashed border-slate-300 bg-white/60 ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400 mb-4">
        {icon || (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        )}
      </div>
      {title && (
        <h4 className="text-base font-semibold text-slate-900 mb-1">{title}</h4>
      )}
      <p className="max-w-md text-sm text-slate-500 leading-relaxed">{message}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
