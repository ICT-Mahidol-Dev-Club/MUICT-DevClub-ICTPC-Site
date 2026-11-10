import React from "react";
import type { OrganizerProfile } from "@/content/team";
import { OrganizerCard } from "./OrganizerCard";

export interface OrganizerGridProps {
  team: OrganizerProfile[];
  heading: string;
}

export function OrganizerGrid({ team, heading }: OrganizerGridProps) {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pt-6">
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{heading}</h2>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          The students and committee members leading the contest operations.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {team.map((member, idx) => (
          <OrganizerCard
            key={idx}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
