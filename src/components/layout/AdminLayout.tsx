"use client";

import React, { useState } from "react";
import type { AdminSession } from "@/types";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export interface AdminLayoutProps {
  children: React.ReactNode;
  session?: AdminSession;
}

export function AdminLayout({ children, session }: AdminLayoutProps) {
  const t = useTranslations("admin.nav");
  const pathname = usePathname();
  const [loggingOut, setLoggingOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.href = "/en/admin/login";
    } finally {
      setLoggingOut(false);
    }
  };

  const navItems = [
    {
      href: "/admin",
      label: t("dashboard"),
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      exact: true,
    },
    {
      href: "/admin/registrations",
      label: t("registrations"),
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      href: "/admin/inquiries",
      label: t("inquiries"),
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
  ];

  const isActive = (item: { href: string; exact?: boolean }) => {
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 md:flex-row">
      {/* Mobile admin header */}
      <div className="flex items-center justify-between bg-slate-900 px-4 py-3 text-white md:hidden">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-primary-400">ICTPC</span>
          <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300">Admin</span>
        </div>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-800"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Admin Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } shrink-0 flex-col border-r border-slate-800 bg-slate-900 text-slate-300 md:flex md:w-64`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 p-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 font-mono text-xs font-bold text-white">
              ADM
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-white">ICTPC Admin</div>
              <div className="max-w-[140px] truncate text-xs text-slate-400">
                {session?.email || "Staff Portal"}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1.5 p-4" aria-label="Admin navigation">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary-600 font-semibold text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="space-y-2 border-t border-slate-800 p-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>{t("toPublic")}</span>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            fullWidth
            loading={loggingOut}
            onClick={handleLogout}
            className="justify-start text-rose-400 hover:bg-rose-950/40 hover:text-rose-300"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            {t("signOut")}
          </Button>
        </div>
      </aside>

      {/* Main Admin Area */}
      <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
