import React from "react";
import type { PracticeSession } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface PracticeSessionCardProps {
  session: PracticeSession;
  registerLabel: string;
  materialsLabel: string;
}

export function PracticeSessionCard({
  session,
  registerLabel,
  materialsLabel,
}: PracticeSessionCardProps) {
  const isPast = new Date(session.date) < new Date();
  const formattedDate = new Date(session.date).toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case "slides":
        return (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case "code":
        return (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "video":
        return (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
    }
  };

  return (
    <Card className="h-full flex flex-col justify-between hover:border-slate-300 transition-all shadow-card hover:shadow-card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <time
                dateTime={session.date}
                className="text-xs font-mono font-semibold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded border border-primary-200"
              >
                {formattedDate}
              </time>
              <Badge variant={isPast ? "slate" : "lime"} size="sm">
                {isPast ? "Completed" : "Upcoming"}
              </Badge>
            </div>
            <CardTitle as="h3" className="text-base sm:text-lg text-slate-900 pt-1">
              {session.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-2 flex flex-col justify-between flex-1">
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {session.description}
        </p>

        <div className="pt-4 border-t border-slate-100 space-y-3">
          {/* Materials Links */}
          {session.materials.length > 0 ? (
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                {materialsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {session.materials.map((mat, idx) => (
                  <a
                    key={idx}
                    href={mat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors"
                  >
                    {getMaterialIcon(mat.type)}
                    <span>{mat.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-xs text-slate-400 italic">
              No materials attached yet
            </div>
          )}

          {/* Registration link for upcoming */}
          {!isPast && session.registrationUrl && (
            <div className="pt-2">
              <a
                href={session.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium text-xs hover:bg-primary-700 transition-colors shadow-sm"
              >
                <span>{registerLabel}</span>
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
