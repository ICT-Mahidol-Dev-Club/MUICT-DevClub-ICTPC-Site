import React from "react";
import type { ScoreRow, ProblemVerdict } from "@/types";
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

export interface ScoreboardTableProps {
  rows: ScoreRow[];
  columns: {
    rank: string;
    team: string;
    solved: string;
    time: string;
  };
}

export function ScoreboardTable({ rows, columns }: ScoreboardTableProps) {
  if (rows.length === 0) {
    return (
      <EmptyState
        title="No Score Data"
        message="The scoreboard is currently empty or awaiting official verification."
      />
    );
  }

  // Get problem keys from first row (e.g. A, B, C...)
  const problemKeys = rows[0] ? Object.keys(rows[0].problemResults) : [];

  const getRankBadge = (rank: number) => {
    if (rank === 1) {
      return (
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs border border-amber-300">
          🥇
        </span>
      );
    }
    if (rank === 2) {
      return (
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs border border-slate-300">
          🥈
        </span>
      );
    }
    if (rank === 3) {
      return (
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-800 font-bold text-xs border border-orange-300">
          🥉
        </span>
      );
    }
    return <span className="font-mono text-slate-500 font-semibold">{rank}</span>;
  };

  const getVerdictPill = (verdict: ProblemVerdict | string) => {
    if (verdict === "AC") {
      return (
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
          AC
        </span>
      );
    }
    if (verdict === "WA") {
      return (
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-rose-50 text-rose-700 border border-rose-200">
          WA
        </span>
      );
    }
    if (verdict === "TLE") {
      return (
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-50 text-amber-700 border border-amber-200">
          TLE
        </span>
      );
    }
    if (verdict === "-") {
      return (
        <span className="text-slate-300 font-mono text-xs">-</span>
      );
    }
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-600">
        {verdict}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap items-center justify-end gap-3 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> AC: Accepted
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-500" /> WA: Wrong Answer
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-500" /> TLE: Time Limit
        </span>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 text-center">{columns.rank}</TableHead>
            <TableHead className="min-w-[200px]">{columns.team}</TableHead>
            <TableHead className="w-24 text-center">{columns.solved}</TableHead>
            <TableHead className="w-28 text-center">{columns.time}</TableHead>
            {problemKeys.map((key) => (
              <TableHead key={key} className="w-16 text-center font-mono">
                {key}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.teamName} className={row.rank <= 3 ? "bg-amber-50/20" : ""}>
              <TableCell className="text-center font-medium">
                {getRankBadge(row.rank)}
              </TableCell>
              <TableCell className="font-semibold text-slate-900">
                {row.teamName}
              </TableCell>
              <TableCell className="text-center font-mono font-bold text-primary-600 text-base">
                {row.solved}
              </TableCell>
              <TableCell className="text-center font-mono text-slate-600">
                {row.totalTime}
              </TableCell>
              {problemKeys.map((key) => (
                <TableCell key={key} className="text-center">
                  {getVerdictPill(row.problemResults[key] || "-")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
