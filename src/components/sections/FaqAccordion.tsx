import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqAccordionProps {
  heading: string;
  items: readonly FaqItem[] | FaqItem[];
}

export function FaqAccordion({ heading, items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{heading}</h2>
        <p className="mt-1 text-sm text-slate-500">
          Quick answers to commonly asked questions about ICTPC.
        </p>
      </div>

      <Card className="border-slate-200 bg-white p-4 sm:p-6">
        <Accordion type="single" className="divide-slate-100 border-none">
          {items.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="py-3.5 text-sm font-semibold text-slate-900 hover:text-primary-600 sm:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}
