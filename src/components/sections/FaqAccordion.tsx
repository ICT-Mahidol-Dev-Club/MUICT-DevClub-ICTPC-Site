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
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          {heading}
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Quick answers to commonly asked questions about ICTPC.
        </p>
      </div>

      <Card className="p-4 sm:p-6 bg-white border-slate-200">
        <Accordion type="single" className="border-none divide-slate-100">
          {items.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="hover:text-primary-600 font-semibold text-slate-900 text-sm sm:text-base py-3.5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}
