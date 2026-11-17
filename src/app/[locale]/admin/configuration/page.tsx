import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { ConfigurationForm } from "@/components/sections/ConfigurationForm";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { getTranslations } from "next-intl/server";

export default async function AdminConfigurationPage() {
  const session = await requireAdminSession();
  const t = await getTranslations("admin.configuration");
  const nt = await getTranslations("admin.nav");

  // get configuration here

  return (
    <AdminLayout session={session}>
      <AdminPageHeader heading={t("heading")} backHref="/admin" labels={{ back: nt("back") }} />
    
      <ConfigurationForm
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
        }}
      />
    </AdminLayout>
  )
}