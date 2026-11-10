import { useTranslations } from "next-intl";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { inquiryService } from "@/lib/services";
import type { Inquiry } from "@/types";

// TODO(UI): Replace with <InquiriesTable /> and <InquiryRow />
export default async function AdminInquiriesPage() {
  await requireAdminSession();
  const t = useTranslations("admin.inquiries");

  let inquiries: Inquiry[] = [];
  let error = false;

  try {
    inquiries = await inquiryService.listAll();
  } catch {
    error = true;
  }

  return (
    <div>
      {/* TODO(UI): AdminPageHeader — props: heading, backHref */}
      <h1>{t("heading")}</h1>

      {error && <p role="alert">Failed to load inquiries.</p>}

      {/* TODO(UI): InquiriesTable — props: inquiries */}
      {!error && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Submitted</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((iq) => (
              <tr key={iq.id}>
                <td>{iq.name}</td>
                <td>{iq.email}</td>
                <td>{iq.message.slice(0, 60)}…</td>
                <td>{iq.submittedAt}</td>
                <td>{iq.resolved ? t("resolved") : "Open"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

