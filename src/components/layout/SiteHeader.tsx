"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { getSiteName, siteConfig } from "@/config/site.config";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";

export interface SiteHeaderProps {
  currentLocale: "en" | "th";
  currentPath: string;
}

export function SiteHeader({ currentLocale, currentPath }: SiteHeaderProps) {
  const t = useTranslations("nav");
  const siteName = getSiteName();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleLocale = (newLocale: "en" | "th") => {
    if (newLocale !== currentLocale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  const navLinks = [
    { href: "/register", label: t("register"), highlight: true },
    { href: "/teams", label: t("teams") },
    { href: "/scores", label: t("scores") },
    { href: "/problems", label: t("problems") },
    { href: "/practice", label: t("practice") },
    { href: "/developers", label: t("developers") },
    { href: "/contact", label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "")) return true;
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="-ml-1 flex items-center gap-2.5 rounded-lg p-1 font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 font-mono text-sm font-bold text-white shadow-sm">
                &gt;_
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-lg font-bold tracking-tight text-primary-600">
                  {siteName}
                </span>
                <span className="hidden border-l border-slate-200 pl-2 text-xs font-semibold text-slate-400 sm:inline-block">
                  Faculty of ICT
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-1 overflow-x-auto py-1 xl:flex"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                    active
                      ? "bg-primary-50 font-semibold text-primary-600"
                      : link.highlight
                        ? "font-semibold text-primary-600 hover:bg-primary-50/60"
                        : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Tablet Nav (compact main links) */}
          <nav
            aria-label="Tablet Navigation"
            className="hidden items-center gap-1 md:flex xl:hidden"
          >
            {[
              { href: "/register", label: t("register"), highlight: true },
              { href: "/teams", label: t("teams") },
              { href: "/scores", label: t("scores") },
            ].map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-primary-50 font-semibold text-primary-600"
                      : link.highlight
                        ? "text-primary-600 hover:bg-primary-50"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-2.5">
            {/* Locale Toggle */}
            <div
              role="radiogroup"
              aria-label="Language selection"
              className="flex items-center rounded-lg border border-slate-200 bg-slate-100/80 p-0.5 font-mono text-xs font-medium"
            >
              <button
                type="button"
                role="radio"
                aria-checked={currentLocale === "en"}
                onClick={() => toggleLocale("en")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  currentLocale === "en"
                    ? "bg-white font-bold text-primary-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={currentLocale === "th"}
                onClick={() => toggleLocale("th")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  currentLocale === "th"
                    ? "bg-white font-bold text-primary-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                TH
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 xl:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-slate-200 bg-white/95 px-4 py-6 backdrop-blur-md xl:hidden"
        >
          <div className="mx-auto flex max-w-md flex-col gap-1">
            <Link
              href="/"
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium ${
                pathname === "/"
                  ? "bg-primary-50 font-semibold text-primary-600"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>{t("home")}</span>
              <span className="font-mono text-xs text-slate-400">/</span>
            </Link>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium ${
                    active
                      ? "bg-primary-50 font-semibold text-primary-600"
                      : link.highlight
                        ? "my-1 bg-primary-600 font-semibold text-white shadow-sm"
                        : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.highlight && (
                    <Badge variant="lime" size="sm">
                      Open
                    </Badge>
                  )}
                </Link>
              );
            })}

            <div className="mt-4 border-t border-slate-200 pt-4">
              <Link
                href="/admin"
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-900"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>{t("admin")}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
