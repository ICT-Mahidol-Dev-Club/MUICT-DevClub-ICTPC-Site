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
        return <Badge variant="success" size="md" dot>Confirmed</Badge>;
      case "rejected":
        return <Badge variant="danger" size="md" dot>Rejected</Badge>;
      default:
        return <Badge variant="warning" size="md" dot>Pending Review</Badge>;
    }
  };

  return (
    <Card className="overflow-hidden border-slate-200 bg-white shadow-card">
      {/* Header Info */}
      <CardHeader className="bg-slate-50/70 border-b border-slate-100 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                ID: {registration.id}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Submitted: {new Date(registration.submittedAt).toLocaleString()}
              </span>
            </div>
            <CardTitle as="h2" className="text-2xl text-slate-900 font-bold">
              {registration.teamName}
            </CardTitle>
          </div>
          <div>{getStatusBadge(currentStatus)}</div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        {/* Members Breakdown */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Team Members ({registration.members.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {registration.members.map((member, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">
                    {member.fullName}
                  </span>
                  <Badge variant="slate" size="sm">
                    {member.nickname}
                  </Badge>
                </div>
                <div className="text-xs space-y-1 text-slate-600 font-mono">
                  <div>
                    <span className="text-slate-400">ID:</span> {member.studentId}
                  </div>
                  <div>
                    <span className="text-slate-400">Email:</span> {member.email}
                  </div>
                  <div>
                    <span className="text-slate-400">Faculty:</span> {member.faculty} (Year {member.year})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consent & Admin info */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <span
              className={`h-2 w-2 rounded-full ${
                registration.consentGiven ? "bg-emerald-500" : "bg-rose-500"
              }`}
            />
            <span>
              {registration.consentGiven ? "Consent Given" : "Consent Missing"}
            </span>
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
