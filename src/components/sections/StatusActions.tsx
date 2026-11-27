"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";

export interface StatusActionsProps {
  currentStatus: "pending" | "confirmed" | "rejected";
  note: string;
  onNoteChange: (note: string) => void;
  onConfirm: () => void;
  onReject: () => void;
  saving: boolean;
  labels: {
    badge: {
      confirmed: string;
      rejected: string;
      pending: string;
    };
    title: string;
    description: string;
    note: string;
    notePlaceholder: string;
    current: string;
    confirm: string;
    reject: string;
    save: string;
  };
}

export function StatusActions({
  currentStatus,
  note,
  onNoteChange,
  onConfirm,
  onReject,
  saving,
  labels,
}: StatusActionsProps) {
  return (
    <Card className="border-slate-200 bg-white p-6 shadow-card">
      <CardHeader className="p-0 pb-4">
        <CardTitle as="h3" className="text-base font-bold text-slate-900">
          {labels.title}
        </CardTitle>
        <p className="mt-0.5 text-xs text-slate-500">{labels.description}</p>
      </CardHeader>

      <CardContent className="space-y-4 p-0">
        <Textarea
          label={labels.note}
          id="reg-note"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder={labels.notePlaceholder}
          rows={3}
          disabled={saving}
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-400">{labels.current}:</span>
            <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold uppercase text-slate-700">
              {labels.badge[currentStatus]}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="danger"
              size="md"
              loading={saving}
              disabled={saving || currentStatus === "rejected"}
              onClick={onReject}
            >
              {labels.reject}
            </Button>

            <Button
              type="button"
              variant="primary"
              size="md"
              loading={saving}
              disabled={saving || currentStatus === "confirmed"}
              onClick={onConfirm}
              className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
            >
              {labels.confirm}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
