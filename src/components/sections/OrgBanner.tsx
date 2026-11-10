import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface OrgInfo {
  name: string;
  description: string;
}

export interface OrgBannerProps {
  smo: OrgInfo;
  devclub: OrgInfo;
  titleAs?: "h2" | "h3";
}

export function OrgBanner({ smo, devclub, titleAs = "h2" }: OrgBannerProps) {
  const TitleTag = titleAs;
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
      {/* SMO MUICT */}
      <Card className="flex flex-col justify-between border-primary-100 bg-gradient-to-br from-primary-50/50 via-white to-white p-6 sm:p-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 font-mono text-xs font-bold text-white shadow-sm">
              SMO
            </span>
            <Badge variant="primary" size="sm">
              Student Organization
            </Badge>
          </div>
          <TitleTag className="text-xl font-bold text-slate-900">{smo.name}</TitleTag>
          <p className="text-sm leading-relaxed text-slate-600">{smo.description}</p>
        </div>
        <div className="mt-4 border-t border-slate-100 pt-4 font-mono text-xs text-slate-400">
          Faculty of ICT, Mahidol University
        </div>
      </Card>

      {/* Dev Club MUICT */}
      <Card className="flex flex-col justify-between border-lime-200/80 bg-gradient-to-br from-lime-50/50 via-white to-white p-6 sm:p-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 font-mono text-xs font-bold text-lime-950 shadow-sm">
              DEV
            </span>
            <Badge variant="lime" size="sm">
              Developer Community
            </Badge>
          </div>
          <TitleTag className="text-xl font-bold text-slate-900">{devclub.name}</TitleTag>
          <p className="text-sm leading-relaxed text-slate-600">{devclub.description}</p>
        </div>
        <div className="mt-4 border-t border-slate-100 pt-4 font-mono text-xs text-slate-400">
          Software Engineering &amp; Competitive Programming
        </div>
      </Card>
    </div>
  );
}
