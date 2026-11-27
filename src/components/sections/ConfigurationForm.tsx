"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Input } from "../ui/Input";
import { Checkbox } from "../ui/Checkbox";
import { UseFormReturn } from "react-hook-form";
import { ConfigFormValues } from "@/lib/validation";
import { Alert } from "../ui/Alert";

export interface ConfigurationFormProps {
  form: UseFormReturn<ConfigFormValues>;
  loading: boolean;
  error: string | null;
  onSubmit: (e: React.BaseSyntheticEvent) => void;
  labels: {
    edition: string;
    showEdition: string;
    dateTime: string;
    reset: string;
    venue: string;
    rulesThai: string;
    rulesEnglish: string;
    revealScores: string;
    enableRegistrations: string;
    save: string;
    errorTitle: string;
  },
}

export function ConfigurationForm({
  form,
  labels,
  loading,
  error,
  onSubmit
}: ConfigurationFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit}>
      <Card className="border-slate-200 bg-white p-6 shadow-card">
        <CardContent className="space-y-4 p-0">
          <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2">
            <div className="flex items-end gap-4">
              <div className="w-20 shrink-0">
                <Input
                  label={labels.edition}
                  placeholder="67"
                  inputMode="numeric"
                  maxLength={3}
                  required
                  error={errors.eventYear?.message}
                  {...register("eventYear")}
                />
              </div>
              {/* Match the input box height (py-2 + text-sm + border) so the checkbox centers on it */}
              <div className="flex h-[38px] items-center">
                <Checkbox
                  label={labels.showEdition}
                  error={errors.showYearInName?.message}
                  {...register("showYearInName")}
                />
              </div>
            </div>
            <Input
              type="url"
              label="OpenChat URL"
              placeholder="https://line.me/ti/g2/..."
              error={errors.lineOpenChatUrl?.message}
              {...register("lineOpenChatUrl")}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-end gap-2">
              <div className="min-w-0 flex-1">
                <Input
                  type="datetime-local"
                  label={labels.dateTime}
                  error={errors.eventDate?.message}
                  {...register("eventDate")}
                />
              </div>
              <Button
                type="button"
                variant="secondary"
                className="shrink-0"
              >
                {labels.reset}
              </Button>
            </div>
            
            <Input
              label={labels.venue}
              placeholder="Faculty of ICT, Mahidol University, Salaya"
              required
              error={errors.venue?.message}
              {...register("venue")}
            />
          </div>

          <Textarea
            label={labels.rulesThai}
            rows={8}
            placeholder="พิมพ์กฏและกติกาการแข่งขันที่นี่"
            required
            error={errors.rulesTh?.message}
            {...register("rulesTh")}
          />
          <Textarea
            label={labels.rulesEnglish}
            rows={8}
            placeholder="Competition rules and regulations here..."
            required
            error={errors.rulesEn?.message}
            {...register("rulesEn")}
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
            <div className="min-w-0 flex-1">
              <Input
                type="url"
                label="Score CSV URL"
                placeholder="https://docs.google.com/spreadsheets/d/.../export?format=csv"
                error={errors.scoresCsvUrl?.message}
                {...register("scoresCsvUrl")}
              />
            </div>
            {/* Match the input box height (py-2 + text-sm + border) so the checkbox centers on it */}
            <div className="flex shrink-0 items-center sm:h-[38px]">
              <Checkbox
                label={labels.revealScores}
                error={errors.scoresPublished?.message}
                {...register("scoresPublished")}
              />
            </div>
          </div>

          <Checkbox
            label={labels.enableRegistrations}
            error={errors.registrationOpen?.message}
            {...register("registrationOpen")}
          />

          {error && (
            <Alert variant="error" title={labels.errorTitle}>
              {error}
            </Alert>
          )}
          
          <Button
            type="submit"
            variant="primary"
            loading={loading}
            disabled={loading}
          >
            {labels.save}
          </Button>

        </CardContent>
      </Card>
    </form>
  );
}