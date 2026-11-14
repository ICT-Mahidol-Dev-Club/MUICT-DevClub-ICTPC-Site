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
    description: string;
    email: string;
    password: string;
    submit: string;
    error: string;
    errorTitle: string;
    toPublic: string;
  };
}

export function AdminLoginForm({ form, loading, error, onSubmit, labels }: AdminLoginFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="mx-auto w-full max-w-md">
      <Card className="border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <CardHeader className="p-0 pb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 font-mono text-base font-bold text-white shadow-sm">
            ADM
          </div>
          <CardTitle as="h1" className="text-xl font-bold text-slate-900 sm:text-2xl">
            {labels.heading}
          </CardTitle>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            {labels.description}
          </p>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <Input
              label={labels.email}
              id="admin-email"
              type="email"
              placeholder="admin@ictpc.local"
              autoComplete="email"
              required
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label={labels.password}
              id="admin-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              error={errors.password?.message}
              {...register("password")}
            />

            {error && (
              <Alert variant="error" title={labels.errorTitle}>
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

          <div className="mt-6 border-t border-slate-100 pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-primary-600"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>{labels.toPublic}</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
