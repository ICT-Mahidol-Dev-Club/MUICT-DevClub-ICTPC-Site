"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { registrationService } from "@/lib/services";
import type { Registration } from "@/types";
import { RegistrationDetailCard } from "@/components/sections/RegistrationDetailCard";
import { StatusActions } from "@/components/sections/StatusActions";

interface Props {
  registration: Registration;
}

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
    <div className="space-y-6">
      <RegistrationDetailCard registration={registration} currentStatus={status} />

      <StatusActions
        currentStatus={status}
        note={note}
        onNoteChange={setNote}
        onConfirm={() => handleUpdateStatus("confirmed")}
        onReject={() => handleUpdateStatus("rejected")}
        saving={saving}
        labels={{
          note: t("note"),
          confirm: t("confirm"),
          reject: t("reject"),
          save: t("save"),
        }}
      />
    </div>
  );
}
