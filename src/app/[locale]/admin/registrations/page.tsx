import { getTranslations } from "next-intl/server";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService } from "@/lib/services";
import type { Registration } from "@/types";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { RegistrationsTable } from "@/components/sections/RegistrationsTable";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default async function AdminRegistrationsPage() {
  const session = await requireAdminSession();
  const t = await getTranslations("admin.registrations");
  const nt = await getTranslations("admin.nav");

  let registrations: Registration[] = [];
  let error = false;

  try {
    registrations = await registrationService.listAll();
  } catch {
    error = true;
  }

  return (
    <AdminLayout session={session}>
      <AdminPageHeader heading={t("heading")} backHref="/admin" labels={{ back: nt("back") }} />

      {error ? (
        <ErrorMessage message={t("error")} />
      ) : (
        <RegistrationsTable
          registrations={registrations}
          labels={{
            header: t.raw("header"),
            badge: t.raw("badge"),
            empty: t.raw("empty"),
            view: t("view"),
          }}
        />
      )}
    </AdminLayout>
  );
}
