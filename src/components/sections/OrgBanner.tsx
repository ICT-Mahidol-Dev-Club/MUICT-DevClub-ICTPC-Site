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
}

export function OrgBanner({ smo, devclub }: OrgBannerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* SMO MUICT */}
      <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary-50/50 via-white to-white border-primary-100 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white font-mono text-xs font-bold shadow-sm">
              SMO
            </span>
            <Badge variant="primary" size="sm">
              Student Organization
            </Badge>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {smo.name}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {smo.description}
          </p>
        </div>
        <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-slate-400">
          Faculty of ICT, Mahidol University
        </div>
      </Card>

      {/* Dev Club MUICT */}
      <Card className="p-6 sm:p-8 bg-gradient-to-br from-lime-50/50 via-white to-white border-lime-200/80 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-lime-950 font-mono text-xs font-bold shadow-sm">
              DEV
            </span>
            <Badge variant="lime" size="sm">
              Developer Community
            </Badge>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {devclub.name}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {devclub.description}
          </p>
        </div>
        <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-slate-400">
          Software Engineering &amp; Competitive Programming
        </div>
      </Card>
    </div>
  );
}
