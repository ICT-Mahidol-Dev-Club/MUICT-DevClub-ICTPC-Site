import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { ConfigurationFormContainer } from "@/components/sections/ConfigurationFormContainer";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { configService } from "@/lib/services";
import { getTranslations } from "next-intl/server";

export default async function AdminConfigurationPage() {
  const session = await requireAdminSession();
  const t = await getTranslations("admin.configuration");
  const nt = await getTranslations("admin.nav");
  const config = await configService.get();

  return (
    <AdminLayout session={session}>
      <AdminPageHeader heading={t("heading")} backHref="/admin" labels={{ back: nt("back") }} />
      <ConfigurationFormContainer
        config={config}
        labels={{
          edition: t("edition"),
          showEdition: t("showEdition"),
          dateTime: t("dateTime"),
          reset: t("reset"),
          venue: t("venue"),
          rulesThai: t("rulesThai"),
          rulesEnglish: t("rulesEnglish"),
          revealScores: t("revealScores"),
          enableRegistrations: t("enableRegistrations"),
          save: t("save"),
          errorTitle: t("errorTitle")
        }}
      />
    </AdminLayout>
  )
}