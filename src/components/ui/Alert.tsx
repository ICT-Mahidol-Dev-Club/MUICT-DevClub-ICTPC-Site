import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

export function Alert({
  variant = "info",
  title,
  icon,
  children,
  onClose,
  className = "",
  ...props
}: AlertProps) {
  const variantStyles = {
    info: {
      container: "bg-primary-50/70 border-primary-200 text-primary-900",
      icon: "text-primary-600",
      defaultIcon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    success: {
      container: "bg-emerald-50/80 border-emerald-200 text-emerald-950",
      icon: "text-emerald-600",
      defaultIcon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    warning: {
      container: "bg-amber-50/80 border-amber-200 text-amber-950",
      icon: "text-amber-600",
      defaultIcon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    error: {
      container: "bg-rose-50/80 border-rose-200 text-rose-950",
      icon: "text-rose-600",
      defaultIcon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const current = variantStyles[variant];

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`relative flex items-start gap-3 rounded-xl border p-4 text-sm transition-all ${current.container} ${className}`}
      {...props}
    >
      <span className={`mt-0.5 shrink-0 ${current.icon}`}>{icon || current.defaultIcon}</span>
      <div className="flex-1">
        {title && <h5 className="mb-1 font-semibold">{title}</h5>}
        <div className="leading-relaxed">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-600"
          aria-label="Close alert"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
