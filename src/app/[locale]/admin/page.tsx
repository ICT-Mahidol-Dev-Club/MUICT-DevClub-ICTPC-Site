import { getTranslations } from "next-intl/server";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService, inquiryService } from "@/lib/services";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { StatCard } from "@/components/sections/StatCard";

export default async function AdminDashboardPage() {
  const session = await requireAdminSession();
  const t = await getTranslations("admin.dashboard");
  const nt = await getTranslations("admin.nav");

  const [registrations, inquiries] = await Promise.allSettled([
    registrationService.listAll(),
    inquiryService.listAll(),
  ]);

  const regCount = registrations.status === "fulfilled" ? registrations.value.length : 0;
  const iqCount = inquiries.status === "fulfilled" ? inquiries.value.length : 0;
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
      <AdminPageHeader heading={t("heading")} labels={{ back: nt("back") }} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label={t("registrations")} count={regCount} href="/admin/registrations" />
        <StatCard label={t("pendingReview")} count={pendingCount} href="/admin/registrations" />
        <StatCard label={t("confirmedTeams")} count={confirmedCount} href="/admin/registrations" />
        <StatCard label={t("inquiries")} count={iqCount} href="/admin/inquiries" />
      </div>
    </AdminLayout>
  );
}
