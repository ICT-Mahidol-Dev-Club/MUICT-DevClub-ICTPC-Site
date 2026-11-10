"use client";

import React from "react";
import type { UseFormReturn } from "react-hook-form";
import type { InquiryFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";

export interface ContactFormProps {
  form: UseFormReturn<InquiryFormValues>;
  submitState: "idle" | "loading" | "success" | "error";
  onSubmit?: (e: React.FormEvent) => void;
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
}

export function ContactForm({
  form,
  submitState,
  onSubmit,
  labels,
}: ContactFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  const isLoading = submitState === "loading";

  if (submitState === "success") {
    return (
      <Card className="p-8 sm:p-10 text-center border-emerald-200 bg-emerald-50/50 shadow-card">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mx-auto mb-4">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Message Sent</h3>
        <p className="text-sm text-slate-700 leading-relaxed max-w-md mx-auto">
          {labels.success}
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-card">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <Input
          label={labels.name}
          id="contact-name"
          placeholder="e.g. Somchai Srisuk"
          required
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label={labels.email}
          id="contact-email"
          type="email"
          placeholder="e.g. somchai@student.mahidol.edu"
          required
          error={errors.email?.message}
          {...register("email")}
        />

        <Textarea
          label={labels.message}
          id="contact-message"
          rows={5}
          placeholder="How can we help you regarding the contest, registration, or rules?"
          required
          error={errors.message?.message}
          {...register("message")}
        />

        {submitState === "error" && (
          <Alert variant="error" title="Send Failed">
            {labels.error}
          </Alert>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          {labels.submit}
        </Button>
      </form>
    </Card>
  );
}
