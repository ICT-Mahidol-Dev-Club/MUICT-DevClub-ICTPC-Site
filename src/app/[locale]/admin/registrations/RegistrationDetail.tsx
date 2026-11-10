"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { registrationService } from "@/lib/services";
import type { Registration } from "@/types";

interface Props {
  registration: Registration;
}

// TODO(UI): Replace with <RegistrationDetailCard /> and <StatusActions />
export function RegistrationDetail({ registration }: Props) {
  const t = useTranslations("admin.registrations");
  const [status, setStatus] = useState(registration.status);
  const [note, setNote] = useState(registration.note ?? "");
  const [saving, setSaving] = useState(false);

  async function handleUpdateStatus(newStatus: Registration["status"]) {
    setSaving(true);
    try {
      const updated = await registrationService.updateStatus(registration.id, newStatus, note);
      setStatus(updated.status);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      {/* TODO(UI): RegistrationDetailCard — props: registration, status */}
      <h2>{registration.teamName}</h2>
      <p>ID: {registration.id}</p>
      <p>Submitted: {registration.submittedAt}</p>
      <p>Status: {status}</p>

      <section>
        <h3>Members</h3>
        <ul>
          {registration.members.map((m) => (
            <li key={m.studentId}>
              {m.fullName} ({m.nickname}) — {m.studentId} — {m.email} — {m.faculty} yr{m.year}
            </li>
          ))}
        </ul>
      </section>

      {/* TODO(UI): StatusActions — props: status, onConfirm, onReject, note, onNoteChange */}
      <section>
        <label htmlFor="reg-note">{t("note")}
          <textarea
            id="reg-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
          />
        </label>

        <button disabled={saving} onClick={() => handleUpdateStatus("confirmed")}>
          {t("confirm")}
        </button>
        <button disabled={saving} onClick={() => handleUpdateStatus("rejected")}>
          {t("reject")}
        </button>
      </section>
    </div>
  );
}

