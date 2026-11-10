import React from "react";
import type { PracticeSession } from "@/types";
import { PracticeSessionCard } from "./PracticeSessionCard";
import { EmptyState } from "@/components/ui/EmptyState";

export interface PracticeSessionListProps {
  sessions: PracticeSession[];
  heading: string;
  labels: {
    register: string;
    materialsLabel: string;
  };
}

export function PracticeSessionList({
  sessions,
  heading,
  labels,
}: PracticeSessionListProps) {
  if (sessions.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">{heading}</h2>
        <EmptyState
          title="No Sessions"
          message="No practice sessions currently listed in this category."
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          {heading}
        </h2>
        <span className="text-xs font-mono text-slate-400">
          {sessions.length} session{sessions.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <PracticeSessionCard
            key={session.id}
            session={session}
            registerLabel={labels.register}
            materialsLabel={labels.materialsLabel}
          />
        ))}
      </div>
    </div>
  );
}
