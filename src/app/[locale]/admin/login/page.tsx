"use client";

import { useLocale, useTranslations } from "next-intl";
import { getPathname } from "@/i18n/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { adminLoginSchema, type AdminLoginFormValues } from "@/lib/validation";
import { AdminLoginForm } from "@/components/sections/AdminLoginForm";

export default function AdminLoginPage() {
  const t = useTranslations("admin.login");
  const locale = useLocale();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<AdminLoginFormValues>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = form;

  async function onSubmit(data: AdminLoginFormValues) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError(t("error"));
        return;
      }

      // Hard navigation so the server re-renders /admin with the new cookie
      window.location.href = getPathname({ href: "/admin", locale });
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <AdminLoginForm
        form={form}
        loading={loading}
        error={error}
        onSubmit={handleSubmit(onSubmit)}
        labels={{
          heading: t("heading"),
          description: t("description"),
          email: t("email"),
          password: t("password"),
          submit: t("submit"),
          error: t("error"),
          errorTitle: t("errorTitle"),
          toPublic: t("toPublic"),
        }}
      />
    </div>
  );
}
