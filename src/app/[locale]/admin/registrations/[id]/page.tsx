import { notFound } from "next/navigation";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService } from "@/lib/services";
import { RegistrationDetail } from "../RegistrationDetail";

interface Props {
  params: Promise<{ id: string }>;
}

// TODO(UI): Wrap RegistrationDetail in admin layout shell
export default async function RegistrationDetailPage({ params }: Props) {
  await requireAdminSession();
  const { id } = await params;

  const registration = await registrationService.getById(id);
  if (!registration) notFound();

  return (
    <div>
      {/* TODO(UI): AdminPageHeader — props: heading, backHref */}
      <RegistrationDetail registration={registration} />
    </div>
  );
}
