"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors.generic");

  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <Card
        role="alert"
        className="max-w-md w-full p-8 sm:p-10 text-center border-rose-200 bg-white shadow-card"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 mx-auto mb-4">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          {t("heading")}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {t("body")}
        </p>

        {error.message && (
          <details className="text-left mb-6 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700">
            <summary className="cursor-pointer font-mono font-medium text-slate-500 hover:text-slate-800">
              Technical Details
            </summary>
            <pre className="mt-2 overflow-x-auto text-[11px] font-mono text-rose-600 whitespace-pre-wrap">
              {error.message}
            </pre>
          </details>
        )}

        <Button variant="primary" onClick={reset} fullWidth>
          {t("retry")}
        </Button>
      </Card>
    </div>
  );
}
