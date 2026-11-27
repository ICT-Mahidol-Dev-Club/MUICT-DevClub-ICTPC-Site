"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import type { Inquiry } from "@/types";
import { inquiryService } from "@/lib/services";
import { InquiriesTable } from "@/components/sections/InquiriesTable";

interface Props {
  initialInquiries: Inquiry[];
}

export function InquiriesClient({ initialInquiries }: Props) {
  const t = useTranslations("admin.inquiries");
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);

  const handleResolve = async (id: string) => {
    try {
      const updated = await inquiryService.resolve(id);
      setInquiries((prev) => prev.map((item) => (item.id === id ? updated : item)));
    } catch {
      // In case of mock error, optimistically mark resolved
      setInquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, resolved: true } : item)),
      );
    }
  };

  return (
    <InquiriesTable
      inquiries={inquiries}
      labels={{
        resolve: t("resolve"),
        open: t("open"),
        resolved: t("resolved"),
        header: t.raw("header"),
        empty: t.raw("empty"),
        done: t("done"),
      }}
      onResolve={handleResolve}
    />
  );
}
