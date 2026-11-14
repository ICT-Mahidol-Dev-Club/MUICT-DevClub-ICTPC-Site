import React from "react";
import type { Registration } from "@/types";
import { Link } from "@/i18n/navigation";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";

export interface RegistrationsTableProps {
  registrations: Registration[];
  labels: {
    header: {
      id: string;
      teamName: string;
      members: string;
      status: string;
      submitted: string;
      actions: string;
    };
    badge: {
      confirmed: string;
      rejected: string;
      pending: string;
    };
    empty: {
      title: string;
      message: string;
    };
    view: string;
  };
}

export function RegistrationsTable({ registrations, labels }: RegistrationsTableProps) {
  if (registrations.length === 0) {
    return <EmptyState title={labels.empty.title} message={labels.empty.message} />;
  }

  const getStatusBadge = (status: Registration["status"]) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge variant="success" size="sm" dot>
            {labels.badge.confirmed}
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="danger" size="sm" dot>
            {labels.badge.rejected}
          </Badge>
        );
      default:
        return (
          <Badge variant="warning" size="sm" dot>
            {labels.badge.pending}
          </Badge>
        );
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-24 font-mono">{labels.header.id}</TableHead>
          <TableHead>{labels.header.teamName}</TableHead>
          <TableHead className="w-28 text-center">{labels.header.members}</TableHead>
          <TableHead className="w-36">{labels.header.status}</TableHead>
          <TableHead className="w-36">{labels.header.submitted}</TableHead>
          <TableHead className="w-28 text-right">{labels.header.actions}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {registrations.map((reg) => (
          <TableRow key={reg.id}>
            <TableCell className="font-mono text-xs text-slate-500">{reg.id}</TableCell>
            <TableCell>
              <div className="font-semibold text-slate-900">{reg.teamName}</div>
              <div className="text-xs text-slate-400">
                {reg.members.map((m) => m.nickname).join(", ")}
              </div>
            </TableCell>
            <TableCell className="text-center font-mono font-medium">
              {reg.members.length}
            </TableCell>
            <TableCell>{getStatusBadge(reg.status)}</TableCell>
            <TableCell className="font-mono text-xs text-slate-500">
              {new Date(reg.submittedAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </TableCell>
            <TableCell className="text-right">
              <Link
                href={`/admin/registrations/${reg.id}`}
                className="inline-flex items-center gap-1 rounded-md bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-600 transition-colors hover:bg-primary-100 hover:text-primary-700"
              >
                <span>{labels.view}</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
