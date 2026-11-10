import React from "react";
import { Card } from "@/components/ui/Card";

export interface OrganizerCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}

export function OrganizerCard({ name, role, imageUrl }: OrganizerCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center border-slate-200 bg-white p-5 text-center shadow-card transition-all hover:border-slate-300">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="mb-3.5 h-20 w-20 rounded-full border-2 border-slate-100 object-cover shadow-sm"
        />
      ) : (
        <div
          className="mb-3.5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-primary-100 to-primary-200 text-lg font-bold text-primary-700 shadow-sm"
          aria-hidden="true"
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
      )}
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{name}</h3>
      <p className="mt-1 font-mono text-xs font-medium text-primary-600">{role}</p>
    </Card>
  );
}
