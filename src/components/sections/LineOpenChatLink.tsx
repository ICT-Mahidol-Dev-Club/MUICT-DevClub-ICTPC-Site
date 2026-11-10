import React from "react";
import { Card } from "@/components/ui/Card";

export interface LineOpenChatLinkProps {
  url: string;
  promptText: string;
  buttonLabel: string;
}

export function LineOpenChatLink({ url, promptText, buttonLabel }: LineOpenChatLinkProps) {
  return (
    <Card className="border-emerald-200 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white p-6 sm:p-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#06C755] text-lg font-bold text-white shadow-sm">
            LINE
          </div>
          <div>
            <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">
              Official Community
            </span>
            <h3 className="mt-1 text-lg font-bold text-slate-900">ICTPC Community OpenChat</h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-600">{promptText}</p>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#06C755] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#05a847] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06C755] focus-visible:ring-offset-2 active:bg-[#04943e]"
        >
          <span>{buttonLabel}</span>
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
}
