import React from "react";
import { Card } from "@/components/ui/Card";

export interface LineOpenChatLinkProps {
  url: string;
  promptText: string;
  buttonLabel: string;
}

export function LineOpenChatLink({
  url,
  promptText,
  buttonLabel,
}: LineOpenChatLinkProps) {
  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white border-emerald-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#06C755] text-white shadow-sm font-bold text-lg">
            LINE
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              Official Community
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              ICTPC Community OpenChat
            </h3>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed max-w-md">
              {promptText}
            </p>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#06C755] text-white font-semibold text-sm hover:bg-[#05a847] active:bg-[#04943e] transition-colors shadow-sm shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06C755] focus-visible:ring-offset-2"
        >
          <span>{buttonLabel}</span>
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </Card>
  );
}
