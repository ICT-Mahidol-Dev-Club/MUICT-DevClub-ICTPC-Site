import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface DeveloperCardProps {
  name: string;
  role: string;
  github?: string;
  imageUrl?: string;
}

export function DeveloperCard({ name, role, github, imageUrl }: DeveloperCardProps) {
  return (
    <Card className="flex h-full flex-col items-center justify-between border-slate-200 bg-white p-5 text-center shadow-card transition-all hover:border-slate-300 sm:p-6">
      <div className="flex flex-col items-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="mb-3.5 h-20 w-20 rounded-full border-2 border-slate-100 object-cover shadow-sm"
          />
        ) : (
          <div
            className="mb-3.5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 font-mono text-lg font-bold text-white shadow-sm"
            aria-hidden="true"
          >
            {name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}

        <h3 className="text-base font-semibold text-slate-900">{name}</h3>
        <Badge variant="slate" size="sm" className="mt-1 font-mono text-[11px]">
          {role}
        </Badge>
      </div>

      {github && (
        <div className="mt-4 flex w-full justify-center border-t border-slate-100 pt-3">
          <a
            href={github.startsWith("http") ? github : `https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-600 transition-colors hover:text-primary-600"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>@{github.replace(/^https?:\/\/github\.com\//, "")}</span>
          </a>
        </div>
      )}
    </Card>
  );
}
