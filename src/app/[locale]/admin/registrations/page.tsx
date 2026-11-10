import { useTranslations } from "next-intl";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { registrationService } from "@/lib/services";
import type { Registration } from "@/types";
import { Link } from "@/i18n/navigation";

// TODO(UI): Replace with <RegistrationsTable /> and <RegistrationRow />
export default async function AdminRegistrationsPage() {
  await requireAdminSession();
  const t = useTranslations("admin.registrations");

  let registrations: Registration[] = [];
  let error = false;

  try {
    registrations = await registrationService.listAll();
  } catch {
    error = true;
  }

  return (
    <div>
      {/* TODO(UI): AdminPageHeader — props: heading, backHref */}
      <h1>{t("heading")}</h1>

      {error && <p role="alert">Failed to load registrations.</p>}

      {/* TODO(UI): RegistrationsTable — props: registrations */}
      {!error && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Team</th>
              <th>Members</th>
              <th>{t("status")}</th>
              <th>{t("actions")}</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.teamName}</td>
                <td>{r.members.length}</td>
                <td>{r.status}</td>
                <td>
                  <Link href={`/admin/registrations/${r.id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

