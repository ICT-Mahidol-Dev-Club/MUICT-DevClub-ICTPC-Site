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
      <RegistrationDetailCard
        registration={registration}
        currentStatus={status}
        labels={{
          badge: t.raw("badge"),
          submitted: t("infoCard.submitted"),
          teamMembers: t("infoCard.teamMembers"),
          studentId: t("infoCard.studentId"),
          email: t("infoCard.email"),
          program: t("infoCard.program"),
          year: t("infoCard.year"),
          consentGiven: t("infoCard.consentGiven"),
          consentMissing: t("infoCard.consentMissing"),
          note: t("note"),
        }}
      />

      <StatusActions
        currentStatus={status}
        note={note}
        onNoteChange={setNote}
        onConfirm={() => handleUpdateStatus("confirmed")}
        onReject={() => handleUpdateStatus("rejected")}
        saving={saving}
        labels={{
          badge: t.raw("badge"),
          title: t("statusAction.title"),
          description: t("statusAction.description"),
          note: t("note"),
          notePlaceholder: t("statusAction.notePlaceholder"),
          current: t("statusAction.current"),
          confirm: t("confirm"),
          reject: t("reject"),
          save: t("save"),
        }}
      />
    </div>
  );
}
