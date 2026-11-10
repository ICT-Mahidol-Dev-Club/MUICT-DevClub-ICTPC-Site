import React from "react";
import type { Inquiry } from "@/types";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export interface InquiriesTableProps {
  inquiries: Inquiry[];
  labels: {
    resolve: string;
    resolved: string;
  };
  onResolve: (id: string) => void;
}

export function InquiriesTable({ inquiries, labels, onResolve }: InquiriesTableProps) {
  if (inquiries.length === 0) {
    return (
      <EmptyState
        title="No Inquiries"
        message="No user messages or inquiries have been received yet."
      />
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-36">Sender</TableHead>
          <TableHead className="w-48">Email</TableHead>
          <TableHead>Message</TableHead>
          <TableHead className="w-32 font-mono">Date</TableHead>
          <TableHead className="w-28 text-center">Status</TableHead>
          <TableHead className="w-32 text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inquiries.map((inq) => (
          <TableRow key={inq.id}>
            <TableCell className="font-semibold text-slate-900">{inq.name}</TableCell>
            <TableCell className="font-mono text-xs text-slate-600">{inq.email}</TableCell>
            <TableCell className="max-w-xs truncate text-slate-700">{inq.message}</TableCell>
            <TableCell className="font-mono text-xs text-slate-500">
              {new Date(inq.submittedAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </TableCell>
            <TableCell className="text-center">
              {inq.resolved ? (
                <Badge variant="success" size="sm">
                  {labels.resolved}
                </Badge>
              ) : (
                <Badge variant="warning" size="sm" dot>
                  Open
                </Badge>
              )}
            </TableCell>
            <TableCell className="text-right">
              {!inq.resolved ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onResolve(inq.id)}
                  className="px-2.5 py-1 text-xs"
                >
                  {labels.resolve}
                </Button>
              ) : (
                <span className="font-mono text-xs text-slate-400">Done</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
