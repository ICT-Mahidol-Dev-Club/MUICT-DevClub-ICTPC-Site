import { useTranslations } from "next-intl";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Skeleton } from "@/components/ui/Skeleton";

export default function LoadingPage() {
  const t = useTranslations("common");

  return (
    <div
      aria-busy="true"
      aria-label={t("loading")}
      className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-8"
    >
      <div className="space-y-3">
        <Skeleton variant="rectangular" className="h-6 w-32" />
        <Skeleton variant="rectangular" className="h-10 w-3/4 max-w-md" />
        <Skeleton variant="text" className="w-1/2 max-w-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <Skeleton variant="rectangular" className="h-44 w-full" />
        <Skeleton variant="rectangular" className="h-44 w-full" />
        <Skeleton variant="rectangular" className="h-44 w-full" />
      </div>

      <div className="flex justify-center pt-8">
        <LoadingSpinner label={t("loading")} />
      </div>
    </div>
  );
}
