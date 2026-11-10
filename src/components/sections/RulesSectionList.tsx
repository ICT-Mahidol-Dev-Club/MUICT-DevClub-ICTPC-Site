import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export interface RulesSection {
  title: string;
  items: string[];
}

export interface RulesSectionListProps {
  sections: RulesSection[];
}

export function RulesSectionList({ sections }: RulesSectionListProps) {
  const getIconForSection = (index: number) => {
    switch (index) {
      case 0:
        return (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
        );
      case 1:
        return (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-100 text-lime-950">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </span>
        );
      default:
        return (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-magenta-100 text-magenta-800">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>
        );
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {sections.map((section, idx) => (
        <Card key={idx} className="overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-slate-50/70">
            <div className="flex items-center gap-3">
              {getIconForSection(idx)}
              <CardTitle as="h2" className="text-lg sm:text-xl">
                {section.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3.5">
              {section.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-xs font-semibold text-slate-600">
                    {itemIdx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
