import { useTranslations } from "next-intl";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { inquiryService } from "@/lib/services";
import type { Inquiry } from "@/types";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { InquiriesClient } from "./InquiriesClient";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default async function AdminInquiriesPage() {
  const session = await requireAdminSession();
  const t = useTranslations("admin.inquiries");

  let inquiries: Inquiry[] = [];
  let error = false;

  try {
    inquiries = await inquiryService.listAll();
  } catch {
    error = true;
  }

  return (
    <AdminLayout session={session}>
      <AdminPageHeader heading={t("heading")} backHref="/admin" />

      {error ? (
        <ErrorMessage message="Failed to load inquiries. Please try again." />
      ) : (
        <InquiriesClient initialInquiries={inquiries} />
      )}
    </AdminLayout>
  );
}
