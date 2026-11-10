"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { adminLoginSchema, type AdminLoginFormValues } from "@/lib/validation";
import { adminService } from "@/lib/services";
import { useRouter } from "@/i18n/navigation";
import { AdminLoginForm } from "@/components/sections/AdminLoginForm";

export default function AdminLoginPage() {
  const t = useTranslations("admin.login");
  const router = useRouter();
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
      await adminService.login(data);
      router.push("/admin");
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <AdminLoginForm
        form={form}
        loading={loading}
        error={error}
        onSubmit={handleSubmit(onSubmit)}
        labels={{
          heading: t("heading"),
          email: t("email"),
          password: t("password"),
          submit: t("submit"),
          error: t("error"),
        }}
      />
    </div>
  );
}
