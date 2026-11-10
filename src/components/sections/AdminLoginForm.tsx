"use client";

import React from "react";
import type { UseFormReturn } from "react-hook-form";
import type { AdminLoginFormValues } from "@/lib/validation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Link } from "@/i18n/navigation";

export interface AdminLoginFormProps {
  form: UseFormReturn<AdminLoginFormValues>;
  loading: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  labels: {
    heading: string;
    email: string;
    password: string;
    submit: string;
    error: string;
  };
}

export function AdminLoginForm({
  form,
  loading,
  error,
  onSubmit,
  labels,
}: AdminLoginFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-6 sm:p-8 border-slate-200 bg-white shadow-card">
        <CardHeader className="p-0 pb-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white font-mono text-base font-bold mx-auto mb-3 shadow-sm">
            ADM
          </div>
          <CardTitle as="h1" className="text-xl sm:text-2xl font-bold text-slate-900">
            {labels.heading}
          </CardTitle>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Sign in to access registrations and inquiries.
          </p>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <Input
              label={labels.email}
              id="admin-email"
              type="email"
              placeholder="admin@ictpc.local"
              required
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label={labels.password}
              id="admin-password"
              type="password"
              placeholder="••••••••"
              required
              error={errors.password?.message}
              {...register("password")}
            />

            {error && (
              <Alert variant="error" title="Access Denied">
                {error}
              </Alert>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
              disabled={loading}
            >
              {labels.submit}
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-primary-600 transition-colors font-medium inline-flex items-center gap-1"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Public Contest Site</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
