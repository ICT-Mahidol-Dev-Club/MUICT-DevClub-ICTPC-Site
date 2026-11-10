import { useTranslations } from "next-intl";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService, inquiryService } from "@/lib/services";
import { Link } from "@/i18n/navigation";

// TODO(UI): Replace with <AdminDashboard /> with stat cards
export default async function AdminDashboardPage() {
  await requireAdminSession();
  const t = useTranslations("admin.dashboard");

  const [registrations, inquiries] = await Promise.allSettled([
    registrationService.listAll(),
    inquiryService.listAll(),
  ]);

  const regCount = registrations.status === "fulfilled" ? registrations.value.length : "?";
  const iqCount = inquiries.status === "fulfilled" ? inquiries.value.length : "?";

  return (
    <div>
      {/* TODO(UI): AdminPageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {/* TODO(UI): StatCard — props: label, count, href */}
      <nav>
        <Link href="/admin/registrations">
          {t("registrations")}: {regCount}
        </Link>
        <Link href="/admin/inquiries">
          {t("inquiries")}: {iqCount}
        </Link>
      </nav>
    </div>
  );
}
