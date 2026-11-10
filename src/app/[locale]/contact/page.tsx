"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { inquirySchema, type InquiryFormValues } from "@/lib/validation";
import { inquiryService } from "@/lib/services";
import { siteConfig } from "@/config/site.config";

// TODO(UI): Replace with <ContactForm /> and <ContactInfo />
export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryFormValues>({ resolver: zodResolver(inquirySchema) });

  async function onSubmit(data: InquiryFormValues) {
    setSubmitState("loading");
    try {
      await inquiryService.submit(data);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading, description */}
      <h1>{t("heading")}</h1>
      <p>{t("description")}</p>

      {submitState === "success" ? (
        <p role="status">{t("form.success")}</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="contact-name">{t("form.name")}
            <input id="contact-name" {...register("name")} />
          </label>
          {errors.name && <span role="alert">{errors.name.message}</span>}

          <label htmlFor="contact-email">{t("form.email")}
            <input id="contact-email" type="email" {...register("email")} />
          </label>
          {errors.email && <span role="alert">{errors.email.message}</span>}

          <label htmlFor="contact-message">{t("form.message")}
            <textarea id="contact-message" {...register("message")} rows={5} />
          </label>
          {errors.message && <span role="alert">{errors.message.message}</span>}

          {submitState === "error" && <p role="alert">{t("form.error")}</p>}

          <button type="submit" disabled={submitState === "loading"}>
            {submitState === "loading" ? "…" : t("form.submit")}
          </button>
        </form>
      )}

      {/* TODO(UI): LineOpenChatLink — props: url, buttonLabel */}
      <p>{t("line")}</p>
      <a href={siteConfig.lineOpenChatUrl} target="_blank" rel="noopener noreferrer">
        {t("lineButton")}
      </a>
    </div>
  );
}

