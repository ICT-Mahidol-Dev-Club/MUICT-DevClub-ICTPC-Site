"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { inquirySchema, type InquiryFormValues } from "@/lib/validation";
import { inquiryService } from "@/lib/services";
import { siteConfig } from "@/config/site.config";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { LineOpenChatLink } from "@/components/sections/LineOpenChatLink";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tFaq = useTranslations("faq");
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit } = form;

  async function onSubmit(data: InquiryFormValues) {
    setSubmitState("loading");
    try {
      await inquiryService.submit(data);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const faqItems = tFaq.raw("items") as Array<{ q: string; a: string }>;

  return (
    <div className="pb-16">
      <PageHeader
        badge="GET IN TOUCH"
        heading={t("heading")}
        description={t("description")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* LINE OpenChat Card */}
        <LineOpenChatLink
          url={siteConfig.lineOpenChatUrl}
          promptText={t("line")}
          buttonLabel={t("lineButton")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              Send an Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-4">
              Our organizing committee will reply to your registered email address.
            </p>
            <ContactForm
              form={form}
              submitState={submitState}
              onSubmit={handleSubmit(onSubmit)}
              labels={{
                name: t("form.name"),
                email: t("form.email"),
                message: t("form.message"),
                submit: t("form.submit"),
                success: t("form.success"),
                error: t("form.error"),
              }}
            />
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-6">
            <FaqAccordion
              heading={tFaq("heading")}
              items={faqItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
