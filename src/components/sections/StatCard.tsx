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
    <Link href={href} className="group block">
      <Card className="border-slate-200 p-6 transition-all duration-200 hover:border-primary-300 hover:shadow-card-hover group-hover:-translate-y-0.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
            {label}
          </span>
          <span className="text-slate-300 transition-colors group-hover:text-primary-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        <div className="mt-3">
          <span className="font-mono text-3xl font-extrabold text-slate-900 transition-colors group-hover:text-primary-600 sm:text-4xl">
            {count}
          </span>
        </div>
      </Card>
    </Link>
  );
}
