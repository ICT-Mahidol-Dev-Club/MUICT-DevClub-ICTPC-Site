import { useTranslations } from "next-intl";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService } from "@/lib/services";
import type { Registration } from "@/types";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { RegistrationsTable } from "@/components/sections/RegistrationsTable";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default async function AdminRegistrationsPage() {
  const session = await requireAdminSession();
  const t = useTranslations("admin.registrations");

  let registrations: Registration[] = [];
  let error = false;

  try {
    registrations = await registrationService.listAll();
  } catch {
    error = true;
  }

  return (
    <AdminLayout session={session}>
      <AdminPageHeader heading={t("heading")} backHref="/admin" />

      {error ? (
        <ErrorMessage message="Failed to load registrations. Please try again." />
      ) : (
        <RegistrationsTable
          registrations={registrations}
          labels={{
            status: t("status"),
            actions: t("actions"),
          }}
        />
      )}
    </AdminLayout>
  );
}
