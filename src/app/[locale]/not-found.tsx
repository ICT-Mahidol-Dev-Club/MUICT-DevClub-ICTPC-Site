import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// TODO(UI): Replace with styled 404 page
export default function NotFoundPage() {
  const t = useTranslations("errors.notFound");

  return (
    <div>
      <h1>{t("heading")}</h1>
      <p>{t("body")}</p>
      <Link href="/">{t("back")}</Link>
    </div>
  );
}

