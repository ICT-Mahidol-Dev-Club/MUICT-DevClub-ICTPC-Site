import React from "react";
import type { PublicTeam } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface TeamCardProps {
  team: PublicTeam;
  memberCountLabel: string;
  statusLabel: string;
}

export function TeamCard({ team, memberCountLabel, statusLabel }: TeamCardProps) {
  const statusBadgeVariant = {
    confirmed: "success" as const,
    pending: "warning" as const,
    rejected: "danger" as const,
  }[team.status];

  return (
    <Card className="flex h-full flex-col justify-between shadow-card transition-all hover:border-slate-300 hover:shadow-card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle
              as="h3"
              className="text-base text-slate-900 group-hover:text-primary-600 sm:text-lg"
            >
              {team.teamName}
            </CardTitle>
            <p className="font-mono text-xs text-slate-500">{memberCountLabel}</p>
          </div>
          <Badge variant={statusBadgeVariant} size="sm" dot>
            {statusLabel}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="border-t border-slate-100 pt-3">
          <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-400">
            Members
          </h4>
          <ul className="space-y-1.5">
            {team.members.map((member, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between rounded-md bg-slate-50/80 px-2.5 py-1.5 text-xs text-slate-700"
              >
                <span className="font-medium text-slate-900">{member.nickname}</span>
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
