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
    { href: "/about", label: t("about") },
    { href: "/rules", label: t("rules") },
    { href: "/schedule", label: t("schedule") },
    { href: "/register", label: t("register"), highlight: true },
    { href: "/teams", label: t("teams") },
    { href: "/scores", label: t("scores") },
    { href: "/problems", label: t("problems") },
    { href: "/practice", label: t("practice") },
    { href: "/organizers", label: t("organizers") },
    { href: "/developers", label: t("developers") },
    { href: "/contact", label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "")) return true;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-slate-900 tracking-tight hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-lg p-1 -ml-1"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white font-mono text-sm font-bold shadow-sm">
                &gt;_
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-mono font-bold tracking-tight text-primary-600">
                  {siteName}
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold text-slate-400 border-l border-slate-200 pl-2">
                  Faculty of ICT
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1 overflow-x-auto py-1"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                    active
                      ? "bg-primary-50 text-primary-600 font-semibold"
                      : link.highlight
                      ? "text-primary-600 hover:bg-primary-50/60 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
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
            className="hidden md:flex xl:hidden items-center gap-1"
          >
            {[
              { href: "/about", label: t("about") },
              { href: "/rules", label: t("rules") },
              { href: "/schedule", label: t("schedule") },
              { href: "/register", label: t("register"), highlight: true },
              { href: "/teams", label: t("teams") },
              { href: "/scores", label: t("scores") },
            ].map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? "bg-primary-50 text-primary-600 font-semibold"
                      : link.highlight
                      ? "text-primary-600 hover:bg-primary-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
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
              className="flex items-center rounded-lg border border-slate-200 bg-slate-100/80 p-0.5 text-xs font-mono font-medium"
            >
              <button
                type="button"
                role="radio"
                aria-checked={currentLocale === "en"}
                onClick={() => toggleLocale("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currentLocale === "en"
                    ? "bg-white text-primary-600 font-bold shadow-sm"
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
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currentLocale === "th"
                    ? "bg-white text-primary-600 font-bold shadow-sm"
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
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
          className="xl:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-white/95 backdrop-blur-md overflow-y-auto border-t border-slate-200 px-4 py-6"
        >
          <div className="flex flex-col gap-1 max-w-md mx-auto">
            <Link
              href="/"
              className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                pathname === "/" ? "bg-primary-50 text-primary-600 font-semibold" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>{t("home")}</span>
              <span className="text-xs font-mono text-slate-400">/</span>
            </Link>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    active
                      ? "bg-primary-50 text-primary-600 font-semibold"
                      : link.highlight
                      ? "bg-primary-600 text-white font-semibold shadow-sm my-1"
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

            <div className="pt-4 mt-4 border-t border-slate-200">
              <Link
                href="/admin"
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
