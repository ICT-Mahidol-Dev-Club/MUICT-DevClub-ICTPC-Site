import React from "react";
import { Card } from "@/components/ui/Card";

export interface OrganizerCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}

export function OrganizerCard({ name, role, imageUrl }: OrganizerCardProps) {
  return (
    <Card className="p-5 text-center flex flex-col items-center justify-center bg-white border-slate-200 hover:border-slate-300 transition-all shadow-card">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="h-20 w-20 rounded-full object-cover border-2 border-slate-100 shadow-sm mb-3.5"
        />
      ) : (
        <div
          className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-white text-primary-700 flex items-center justify-center font-bold text-lg shadow-sm mb-3.5"
          aria-hidden="true"
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
      )}
      <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
        {name}
      </h3>
      <p className="text-xs font-mono font-medium text-primary-600 mt-1">
        {role}
      </p>
    </Card>
  );
}
