import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "lime"
    | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const sizeClasses = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-5 py-2.5 text-base gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm disabled:bg-primary-300 disabled:text-white/80",
      secondary:
        "bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 border border-slate-200/80 disabled:bg-slate-50 disabled:text-slate-400 disabled:border-slate-100",
      outline:
        "bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:border-slate-200 disabled:text-slate-400",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 disabled:text-slate-400",
      lime:
        "bg-lime-400 text-lime-950 font-semibold hover:bg-lime-500 active:bg-lime-600 shadow-sm disabled:bg-lime-200 disabled:text-lime-800/60",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 shadow-sm disabled:bg-rose-300 disabled:text-white/80",
    };

    const widthClass = fullWidth ? "w-full" : "";
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-0.5 h-4 w-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";
