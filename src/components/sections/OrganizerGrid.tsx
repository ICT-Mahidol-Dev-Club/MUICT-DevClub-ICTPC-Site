import React from "react";
import type { OrganizerProfile } from "@/content/team";
import { OrganizerCard } from "./OrganizerCard";

export interface OrganizerGridProps {
  team: OrganizerProfile[];
  heading: string;
}

export function OrganizerGrid({ team, heading }: OrganizerGridProps) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pt-6">
      <div className="text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          {heading}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          The students and committee members leading the contest operations.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
