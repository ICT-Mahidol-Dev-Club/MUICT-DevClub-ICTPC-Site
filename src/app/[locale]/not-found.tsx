import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export default function NotFoundPage() {
  const t = useTranslations("errors.notFound");

  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <Card className="max-w-md w-full p-8 sm:p-10 text-center border-slate-200 bg-white shadow-card">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 font-mono text-2xl font-black mx-auto mb-4">
          404
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          {t("heading")}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {t("body")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 active:bg-primary-800 transition-colors shadow-sm"
        >
          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{t("back")}</span>
        </Link>
      </Card>
    </div>
  );
}
