import React from "react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      id,
      className = "",
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const errorId = error ? `${checkboxId}-error` : undefined;

    return (
      <div className="relative flex items-start gap-3">
        <div className="flex h-6 items-center">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            className={`h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-2 focus:ring-primary-600/30 focus:ring-offset-1 transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? "border-rose-400 text-rose-600" : ""
            } ${className}`}
            {...props}
          />
        </div>
        <div className="text-sm leading-6">
          {label && (
            <label
              htmlFor={checkboxId}
              className={`font-medium text-slate-800 cursor-pointer select-none ${
                disabled ? "cursor-not-allowed opacity-60" : ""
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-slate-500 mt-0.5">{description}</p>
          )}
          {error && (
            <p id={errorId} role="alert" className="text-xs text-rose-600 font-medium mt-1">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
