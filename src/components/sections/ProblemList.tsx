"use client";

import React, { useState, useMemo } from "react";
import type { ProblemSet } from "@/types";
import { ProblemCard } from "./ProblemCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";

export interface ProblemListProps {
  problems: ProblemSet[];
  difficultyLabels: Record<"easy" | "medium" | "hard", string>;
}

export function ProblemList({ problems, difficultyLabels }: ProblemListProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Extract distinct years from problem publish dates
  const availableYears = useMemo(() => {
    const years = new Set<string>();
    problems.forEach((p) => {
      const year = new Date(p.publishedAt).getFullYear();
      if (!isNaN(year)) years.add(String(year));
    });
    return Array.from(years).sort().reverse();
  }, [problems]);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      // Difficulty match
      if (selectedDifficulty !== "all" && problem.difficulty !== selectedDifficulty) {
        return false;
      }
      // Year match
      if (selectedYear !== "all") {
        const problemYear = String(new Date(problem.publishedAt).getFullYear());
        if (problemYear !== selectedYear) return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = problem.title.toLowerCase().includes(q);
        const matchesTags = problem.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!matchesTitle && !matchesTags) return false;
      }
      return true;
    });
  }, [problems, selectedDifficulty, selectedYear, searchQuery]);

  if (problems.length === 0) {
    return (
      <EmptyState
        title="No Problems Available"
        message="Problems will be published here after the contest conclusion."
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls Bar: Search, Difficulty Tabs, and Year Selector */}
      <div className="flex flex-col items-stretch justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 md:flex-row md:items-center">
        {/* Search */}
        <div className="max-w-sm flex-1">
          <Input
            placeholder="Search problems by name or #tag…"
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
          />
        </div>

        {/* Filters: Difficulty & Year */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Difficulty filter */}
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setSelectedDifficulty("all")}
              className={`rounded-md px-3 py-1.5 transition-colors ${
                selectedDifficulty === "all"
                  ? "bg-white font-semibold text-primary-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setSelectedDifficulty("easy")}
              className={`rounded-md px-3 py-1.5 transition-colors ${
                selectedDifficulty === "easy"
                  ? "bg-white font-semibold text-emerald-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {difficultyLabels.easy}
            </button>
            <button
              type="button"
              onClick={() => setSelectedDifficulty("medium")}
              className={`rounded-md px-3 py-1.5 transition-colors ${
                selectedDifficulty === "medium"
                  ? "bg-white font-semibold text-amber-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {difficultyLabels.medium}
            </button>
            <button
              type="button"
              onClick={() => setSelectedDifficulty("hard")}
              className={`rounded-md px-3 py-1.5 transition-colors ${
                selectedDifficulty === "hard"
                  ? "bg-white font-semibold text-rose-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {difficultyLabels.hard}
            </button>
          </div>

          {/* Year selector */}
          {availableYears.length > 0 && (
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-600"
              aria-label="Filter by year"
            >
              <option value="all">All Years</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Grid or Empty */}
      {filteredProblems.length === 0 ? (
        <EmptyState
          title="No problems found"
          message="No problems matched the selected filters. Try adjusting your query."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProblems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              difficultyLabel={difficultyLabels[problem.difficulty] || problem.difficulty}
            />
          ))}
        </div>
      )}
    </div>
  );
}
