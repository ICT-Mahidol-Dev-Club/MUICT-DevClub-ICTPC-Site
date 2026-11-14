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
    header: {
      sender: string;
      email: string;
      message: string;
      date: string;
      status: string;
      action: string;
    };
    empty: {
      title: string;
      message: string;
    };
    open: string;
    done: string;
  };
  onResolve: (id: string) => void;
}

export function InquiriesTable({ inquiries, labels, onResolve }: InquiriesTableProps) {
  if (inquiries.length === 0) {
    return <EmptyState title={labels.empty.title} message={labels.empty.message} />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-36">{labels.header.sender}</TableHead>
          <TableHead className="w-48">{labels.header.email}</TableHead>
          <TableHead>{labels.header.message}</TableHead>
          <TableHead className="w-32 font-mono">{labels.header.date}</TableHead>
          <TableHead className="w-28 text-center">{labels.header.status}</TableHead>
          <TableHead className="w-32 text-right">{labels.header.action}</TableHead>
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
                  {labels.open}
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
                <span className="font-mono text-xs text-slate-400">{labels.done}</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
