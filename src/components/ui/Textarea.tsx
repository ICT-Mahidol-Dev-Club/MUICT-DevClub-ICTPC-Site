import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      id,
      className = "",
      disabled,
      rows = 4,
      ...props
    },
    ref,
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const errorId = textareaId && error ? `${textareaId}-error` : undefined;
    const helperId = textareaId && helperText ? `${textareaId}-helper` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            {label}
            {props.required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          rows={rows}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId || helperId}
          className={`block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 resize-y ${
            error
              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
              : "border-slate-300 focus:border-primary-600 focus:ring-primary-600/20 hover:border-slate-400"
          } ${className}`}
          {...props}
        />
        {error ? (
          <p id={errorId} role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="mt-1.5 text-xs text-slate-500">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
