import React from "react";
import type { Registration } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface RegistrationDetailCardProps {
  registration: Registration;
  currentStatus: Registration["status"];
}

export function RegistrationDetailCard({
  registration,
  currentStatus,
}: RegistrationDetailCardProps) {
  const getStatusBadge = (status: Registration["status"]) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge variant="success" size="md" dot>
            Confirmed
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="danger" size="md" dot>
            Rejected
          </Badge>
        );
      default:
        return (
          <Badge variant="warning" size="md" dot>
            Pending Review
          </Badge>
        );
    }
  };

  return (
    <Card className="overflow-hidden border-slate-200 bg-white shadow-card">
      {/* Header Info */}
      <CardHeader className="border-b border-slate-100 bg-slate-50/70 pb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-400">
                ID: {registration.id}
              </span>
              <span className="font-mono text-xs text-slate-500">
                Submitted: {new Date(registration.submittedAt).toLocaleString()}
              </span>
            </div>
            <CardTitle as="h2" className="text-2xl font-bold text-slate-900">
              {registration.teamName}
            </CardTitle>
          </div>
          <div>{getStatusBadge(currentStatus)}</div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Members Breakdown */}
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-400">
            Team Members ({registration.members.length})
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {registration.members.map((member, idx) => (
              <div
                key={idx}
                className="space-y-2 rounded-lg border border-slate-200 bg-slate-50/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">{member.fullName}</span>
                  <Badge variant="slate" size="sm">
                    {member.nickname}
                  </Badge>
                </div>
                <div className="space-y-1 font-mono text-xs text-slate-600">
                  <div>
                    <span className="text-slate-400">ID:</span> {member.studentId}
                  </div>
                  <div>
                    <span className="text-slate-400">Email:</span> {member.email}
                  </div>
                  <div>
                    <span className="text-slate-400">Faculty:</span> {member.faculty} (Year{" "}
                    {member.year})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consent & Admin info */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span
              className={`h-2 w-2 rounded-full ${
                registration.consentGiven ? "bg-emerald-500" : "bg-rose-500"
              }`}
            />
            <span>{registration.consentGiven ? "Consent Given" : "Consent Missing"}</span>
          </div>
          {registration.note && (
            <div className="text-slate-600">
              <span className="font-semibold text-slate-400">Note:</span> {registration.note}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
