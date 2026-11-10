import React from "react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export interface StatCardProps {
  label: string;
  count: number | string;
  href: string;
}

export function StatCard({ label, count, href }: StatCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="p-6 transition-all duration-200 border-slate-200 hover:border-primary-300 hover:shadow-card-hover group-hover:-translate-y-0.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            {label}
          </span>
          <span className="text-slate-300 group-hover:text-primary-600 transition-colors">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        <div className="mt-3">
          <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 group-hover:text-primary-600 transition-colors">
            {count}
          </span>
        </div>
      </Card>
    </Link>
  );
}
