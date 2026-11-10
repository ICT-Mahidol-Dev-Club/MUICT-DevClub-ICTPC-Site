import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "magenta" | "lime" | "slate" | "success" | "warning" | "danger";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
  dot = false,
  className = "",
  ...props
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-primary-50 text-primary-700 border-primary-200",
    magenta: "bg-magenta-50 text-magenta-700 border-magenta-200",
    lime: "bg-lime-100 text-lime-950 border-lime-300 font-semibold",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    danger: "bg-rose-50 text-rose-700 border-rose-200",
  };

  const dotClasses = {
    primary: "bg-primary-600",
    magenta: "bg-magenta-500",
    lime: "bg-lime-600",
    slate: "bg-slate-400",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border font-medium tracking-wide transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClasses[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
