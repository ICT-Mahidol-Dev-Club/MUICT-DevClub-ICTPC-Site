import React from "react";
import type { ProblemSet } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface ProblemCardProps {
  problem: ProblemSet;
  difficultyLabel: string;
}

export function ProblemCard({ problem, difficultyLabel }: ProblemCardProps) {
  const difficultyVariant = {
    easy: "success" as const,
    medium: "warning" as const,
    hard: "danger" as const,
  }[problem.difficulty];

  return (
    <Card className="flex h-full flex-col justify-between shadow-card transition-all hover:border-slate-300 hover:shadow-card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold text-slate-500">
                {problem.slug.toUpperCase()}
              </span>
              <Badge variant={difficultyVariant} size="sm">
                {difficultyLabel}
              </Badge>
            </div>
            <CardTitle as="h3" className="text-base text-slate-900 sm:text-lg">
              {problem.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between pt-2">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {problem.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="font-mono text-xs text-slate-400">
            {new Date(problem.publishedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          {problem.statementUrl ? (
            <a
              href={problem.statementUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              <span>View Statement</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <span className="text-xs italic text-slate-400">Statement unavailable</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
