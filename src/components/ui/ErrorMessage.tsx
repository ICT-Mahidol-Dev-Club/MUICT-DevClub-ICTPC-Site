import React from "react";
import { Button } from "./Button";

export interface ErrorMessageProps {
  message: string;
  retry?: () => void;
  className?: string;
}

export function ErrorMessage({
  message,
  retry,
  className = "",
}: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className={`rounded-xl border border-rose-200 bg-rose-50/70 p-6 sm:p-8 text-center flex flex-col items-center justify-center ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600 mb-3">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h4 className="text-base font-semibold text-rose-950 mb-1">
        Something went wrong
      </h4>
      <p className="max-w-md text-sm text-rose-800 leading-relaxed mb-4">
        {message}
      </p>
      {retry && (
        <Button
          variant="outline"
          size="sm"
          onClick={retry}
          className="border-rose-300 text-rose-700 hover:bg-rose-100/70"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}
