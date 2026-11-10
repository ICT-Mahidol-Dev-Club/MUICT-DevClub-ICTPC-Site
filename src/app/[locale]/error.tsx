"use client";

import { useTranslations } from "next-intl";

// TODO(UI): Replace with styled error page
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors.generic");

  return (
    <div role="alert">
      <h1>{t("heading")}</h1>
      <p>{t("body")}</p>
      <details>
        <summary>Details</summary>
        <pre>{error.message}</pre>
      </details>
      <button onClick={reset}>{t("retry")}</button>
    </div>
  );
}
