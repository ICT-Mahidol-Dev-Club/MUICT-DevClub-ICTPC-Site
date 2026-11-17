"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Input } from "../ui/Input";
import { Checkbox } from "../ui/Checkbox";

export interface ConfigurationFormProps {
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
  },
}

export function ConfigurationForm({
  labels
}: ConfigurationFormProps) {
  return (
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
              />
            </div>
            {/* Match the input box height (py-2 + text-sm + border) so the checkbox centers on it */}
            <div className="flex h-[38px] items-center">
              <Checkbox
                label={labels.showEdition}
              />
            </div>
          </div>
          <Input
            type="url"
            label="OpenChat URL"
            placeholder="https://line.me/ti/g2/..."
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-end gap-2">
            <div className="min-w-0 flex-1">
              <Input
                type="datetime-local"
                label={labels.dateTime}
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
          />
        </div>

        <Textarea
          label={labels.rulesThai}
          rows={8}
          placeholder="พิมพ์กฏและกติกาการแข่งขันที่นี่"
          required
        />
        <Textarea
          label={labels.rulesEnglish}
          rows={8}
          placeholder="Competition rules and regulations here..."
          required
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
          <div className="min-w-0 flex-1">
            <Input
              type="url"
              label="Score CSV URL"
              placeholder="https://docs.google.com/spreadsheets/d/.../export?format=csv"
            />
          </div>
          {/* Match the input box height (py-2 + text-sm + border) so the checkbox centers on it */}
          <div className="flex shrink-0 items-center sm:h-[38px]">
            <Checkbox
              label={labels.revealScores}
            />
          </div>
        </div>

        <Checkbox
          label={labels.enableRegistrations}
        />

        <Button
          type="button"
          variant="primary"
        >
          {labels.save}
        </Button>

      </CardContent>
    </Card>
  );
}