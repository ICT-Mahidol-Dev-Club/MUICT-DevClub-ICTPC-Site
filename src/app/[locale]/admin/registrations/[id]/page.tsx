import { notFound } from "next/navigation";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService } from "@/lib/services";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { AdminPageHeader } from "@/components/sections/AdminPageHeader";
import { RegistrationDetail } from "../RegistrationDetail";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function RegistrationDetailPage({ params }: Props) {
  const nt = await getTranslations("admin.nav");
  const session = await requireAdminSession();
  const { id } = await params;

  const registration = await registrationService.getById(id);
  if (!registration) notFound();

  return (
    <AdminLayout session={session}>
      <AdminPageHeader heading={`Team: ${registration.teamName}`} backHref="/admin/registrations" labels={{ back: nt("back") }} />
      <RegistrationDetail registration={registration} />
    </AdminLayout>
  );
}
