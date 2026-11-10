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
    note: string;
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
    <Card className="p-6 bg-white border-slate-200 shadow-card">
      <CardHeader className="p-0 pb-4">
        <CardTitle as="h3" className="text-base text-slate-900 font-bold">
          Review &amp; Status Actions
        </CardTitle>
        <p className="text-xs text-slate-500 mt-0.5">
          Update the registration decision or leave an internal committee note.
        </p>
      </CardHeader>

      <CardContent className="p-0 space-y-4">
        <Textarea
          label={labels.note}
          id="reg-note"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="Internal notes (e.g., student verified on central registrar)"
          rows={3}
          disabled={saving}
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">Current:</span>
            <span className="font-mono text-xs font-bold uppercase text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              {currentStatus}
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
