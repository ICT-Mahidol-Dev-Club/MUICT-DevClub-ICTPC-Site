import React from "react";
import type { PublicTeam } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface TeamCardProps {
  team: PublicTeam;
  memberCountLabel: string;
  statusLabel: string;
}

export function TeamCard({
  team,
  memberCountLabel,
  statusLabel,
}: TeamCardProps) {
  const statusBadgeVariant = {
    confirmed: "success" as const,
    pending: "warning" as const,
    rejected: "danger" as const,
  }[team.status];

  return (
    <Card className="h-full flex flex-col justify-between hover:border-slate-300 transition-all shadow-card hover:shadow-card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle as="h3" className="text-base sm:text-lg text-slate-900 group-hover:text-primary-600">
              {team.teamName}
            </CardTitle>
            <p className="text-xs font-mono text-slate-500">
              {memberCountLabel}
            </p>
          </div>
          <Badge variant={statusBadgeVariant} size="sm" dot>
            {statusLabel}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="border-t border-slate-100 pt-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Members
          </h4>
          <ul className="space-y-1.5">
            {team.members.map((member, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between text-xs text-slate-700 bg-slate-50/80 px-2.5 py-1.5 rounded-md"
              >
                <span className="font-medium text-slate-900">
                  {member.nickname}
                </span>
                <span className="font-mono text-slate-500">
                  {member.faculty} · Yr {member.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
