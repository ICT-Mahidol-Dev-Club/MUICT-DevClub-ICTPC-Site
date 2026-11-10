"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { adminLoginSchema, type AdminLoginFormValues } from "@/lib/validation";
import { adminService } from "@/lib/services";
import { useRouter } from "next/navigation";

// TODO(UI): Replace with <AdminLoginForm />
export default function AdminLoginPage() {
  const t = useTranslations("admin.login");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<AdminLoginFormValues>({
    resolver: zodResolver(adminLoginSchema),
  });

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
    <div>
      {/* TODO(UI): AdminLoginCard */}
      <h1>{t("heading")}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="admin-email">{t("email")}
          <input id="admin-email" type="email" {...register("email")} />
        </label>
        {errors.email && <span role="alert">{errors.email.message}</span>}

        <label htmlFor="admin-password">{t("password")}
          <input id="admin-password" type="password" {...register("password")} />
        </label>
        {errors.password && <span role="alert">{errors.password.message}</span>}

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "…" : t("submit")}
        </button>
      </form>
    </div>
  );
}

