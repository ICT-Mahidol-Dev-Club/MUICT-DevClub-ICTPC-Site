import React from "react";

export interface LoadingSpinnerProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  label = "Loading…",
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center p-8 gap-3 ${className}`}
    >
      <div
        className={`animate-spin rounded-full border-primary-200 border-t-primary-600 ${sizeClasses[size]}`}
      />
      {label && (
        <span className="text-sm font-medium text-slate-500">{label}</span>
      )}
    </div>
  );
}
