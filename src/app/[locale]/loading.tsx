import { useTranslations } from "next-intl";

// TODO(UI): Replace with styled skeleton / spinner
export default function LoadingPage() {
  const t = useTranslations("common");
  return (
    <div aria-busy="true" aria-label={t("loading")}>
      <p>{t("loading")}</p>
    </div>
  );
}
