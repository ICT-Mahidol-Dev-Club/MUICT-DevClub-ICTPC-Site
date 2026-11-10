"use client";

import React, { createContext, useContext, useState } from "react";

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
}

export function Accordion({
  children,
  type = "single",
  defaultValue,
  className = "",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value],
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={`divide-y divide-slate-200 border-y border-slate-200 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItemContext = createContext<{ value: string; isOpen: boolean } | null>(
  null,
);

export function AccordionItem({
  value,
  children,
  className = "",
}: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be inside an Accordion");

  const isOpen = ctx.openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={`group ${className}`}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = useContext(AccordionContext);
  const itemCtx = useContext(AccordionItemContext);
  if (!ctx || !itemCtx) {
    throw new Error("AccordionTrigger must be inside AccordionItem");
  }

  const { value, isOpen } = itemCtx;

  return (
    <button
      type="button"
      onClick={() => ctx.toggleItem(value)}
      aria-expanded={isOpen}
      className={`flex w-full items-center justify-between py-4 text-left font-medium text-slate-900 hover:text-primary-600 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 ${className}`}
    >
      <span className="text-base">{children}</span>
      <svg
        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
          isOpen ? "rotate-180 text-primary-600" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export function AccordionContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const itemCtx = useContext(AccordionItemContext);
  if (!itemCtx) {
    throw new Error("AccordionContent must be inside AccordionItem");
  }

  if (!itemCtx.isOpen) return null;

  return (
    <div
      role="region"
      className={`pb-4 pt-1 text-sm text-slate-600 leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}
