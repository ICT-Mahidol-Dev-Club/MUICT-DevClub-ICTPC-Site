import React from "react";
import type { DeveloperProfile } from "@/content/team";
import { DeveloperCard } from "./DeveloperCard";

export interface DeveloperGridProps {
  developers: DeveloperProfile[];
}

export function DeveloperGrid({ developers }: DeveloperGridProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((dev, idx) => (
          <DeveloperCard
            key={idx}
            name={dev.name}
            role={dev.role}
            github={dev.github}
            imageUrl={dev.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
