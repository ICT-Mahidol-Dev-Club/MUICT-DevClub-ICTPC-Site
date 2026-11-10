import { useTranslations } from "next-intl";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService, inquiryService } from "@/lib/services";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { StatCard } from "@/components/sections/StatCard";

export default async function AdminDashboardPage() {
  const session = await requireAdminSession();
  const t = useTranslations("admin.dashboard");

  const [registrations, inquiries] = await Promise.allSettled([
    registrationService.listAll(),
    inquiryService.listAll(),
  ]);

  const regCount =
    registrations.status === "fulfilled" ? registrations.value.length : 0;
  const iqCount =
    inquiries.status === "fulfilled" ? inquiries.value.length : 0;
  const pendingCount =
    registrations.status === "fulfilled"
      ? registrations.value.filter((r) => r.status === "pending").length
      : 0;
  const confirmedCount =
    registrations.status === "fulfilled"
      ? registrations.value.filter((r) => r.status === "confirmed").length
      : 0;

  return (
    <AdminLayout session={session}>
      <AdminPageHeader heading={t("heading")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label={t("registrations")}
          count={regCount}
          href="/admin/registrations"
        />
        <StatCard
          label="Pending Review"
          count={pendingCount}
          href="/admin/registrations"
        />
        <StatCard
          label="Confirmed Teams"
          count={confirmedCount}
          href="/admin/registrations"
        />
        <StatCard
          label={t("inquiries")}
          count={iqCount}
          href="/admin/inquiries"
        />
      </div>
    </AdminLayout>
  );
}
