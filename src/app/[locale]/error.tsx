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
    <div className="flex flex-1 items-center justify-center px-4 py-20">
      <Card
        role="alert"
        className="w-full max-w-md border-rose-200 bg-white p-8 text-center shadow-card sm:p-10"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="mb-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {t("heading")}
        </h1>
        <p className="mb-5 text-sm leading-relaxed text-slate-600">{t("body")}</p>

        {error.message && (
          <details className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-3 text-left text-xs text-slate-700">
            <summary className="cursor-pointer font-mono font-medium text-slate-500 hover:text-slate-800">
              Technical Details
            </summary>
            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap font-mono text-[11px] text-rose-600">
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
