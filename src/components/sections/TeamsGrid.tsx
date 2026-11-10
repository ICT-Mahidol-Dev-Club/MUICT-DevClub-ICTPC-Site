"use client";

import React, { useState, useMemo } from "react";
import type { PublicTeam } from "@/types";
import { TeamCard } from "./TeamCard";
import { Input } from "@/components/ui/Input";
import { EmptyState } from "@/components/ui/EmptyState";

export interface TeamsGridProps {
  teams: PublicTeam[];
  labels: {
    memberCount: string; // template with {count}
    statusLabels: Record<"pending" | "confirmed" | "rejected", string>;
  };
}

export function TeamsGrid({ teams, labels }: TeamsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeams = useMemo(() => {
    if (!searchQuery.trim()) return teams;
    const query = searchQuery.toLowerCase();
    return teams.filter(
      (team) =>
        team.teamName.toLowerCase().includes(query) ||
        team.members.some(
          (m) =>
            m.nickname.toLowerCase().includes(query) || m.faculty.toLowerCase().includes(query),
        ),
    );
  }, [teams, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex max-w-xl flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Search by team name or member nickname…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          leftIcon={
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          rightIcon={
            searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-slate-400 hover:text-slate-600 focus:outline-none"
                aria-label="Clear search"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : undefined
          }
        />
        <div className="shrink-0 self-center font-mono text-xs text-slate-500 sm:self-auto">
          {filteredTeams.length} of {teams.length} teams
        </div>
      </div>

      {/* Grid or Empty */}
      {filteredTeams.length === 0 ? (
        <EmptyState
          title="No teams found"
          message={
            searchQuery
              ? `No teams matched "${searchQuery}". Try a different keyword.`
              : "No teams have been confirmed yet. Check back soon!"
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTeams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              memberCountLabel={labels.memberCount.replace("{count}", String(team.memberCount))}
              statusLabel={labels.statusLabels[team.status] || team.status}
            />
          ))}
        </div>
      )}
    </div>
  );
}
