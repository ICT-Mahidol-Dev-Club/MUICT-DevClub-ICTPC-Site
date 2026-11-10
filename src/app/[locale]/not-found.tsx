import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export default function NotFoundPage() {
  const t = useTranslations("errors.notFound");

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md border-slate-200 bg-white p-8 text-center shadow-card sm:p-10">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 font-mono text-2xl font-black text-primary-600">
          404
        </div>
        <h1 className="mb-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {t("heading")}
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-slate-600">{t("body")}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-700 active:bg-primary-800"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>{t("back")}</span>
        </Link>
      </Card>
    </div>
  );
}
