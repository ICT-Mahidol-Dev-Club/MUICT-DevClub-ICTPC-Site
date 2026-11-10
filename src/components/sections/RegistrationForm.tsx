"use client";

import React from "react";
import type { UseFormReturn, UseFieldArrayReturn } from "react-hook-form";
import type { RegistrationFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";

export interface RegistrationFormProps {
  form: UseFormReturn<RegistrationFormValues>;
  fields: UseFieldArrayReturn<RegistrationFormValues, "members">["fields"];
  onAddMember: () => void;
  onRemoveMember: (index: number) => void;
  submitState: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  onSubmit?: (e: React.FormEvent) => void;
  labels: {
    teamName: string;
    member: string;
    nickname: string;
    fullName: string;
    studentId: string;
    email: string;
    faculty: string;
    year: string;
    addMember: string;
    removeMember: string;
    consent: string;
    submit: string;
    error: string;
  };
}

export function RegistrationForm({
  form,
  fields,
  onAddMember,
  onRemoveMember,
  submitState,
  errorMessage,
  onSubmit,
  labels,
}: RegistrationFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  const isLoading = submitState === "loading";

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto max-w-3xl space-y-8">
      {/* Team Details Section */}
      <Card className="border-slate-200 bg-white p-6 sm:p-8">
        <div className="mb-6 border-b border-slate-100 pb-4">
          <span className="rounded border border-primary-200 bg-primary-50 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-primary-600">
            Step 1
          </span>
          <h2 className="mt-2 text-xl font-bold text-slate-900">Team Information</h2>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Choose a unique and creative name for your team.
          </p>
        </div>

        <Input
          label={labels.teamName}
          id="teamName"
          placeholder="e.g. Binary Beasts, Null Pointers"
          required
          error={errors.teamName?.message}
          {...register("teamName")}
        />
      </Card>

      {/* Team Members Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="rounded border border-primary-200 bg-primary-50 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-primary-600">
              Step 2
            </span>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              Team Members ({fields.length}/3)
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
              Each team must have 1 to 3 members from ICT or DST programs.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {fields.map((field, index) => {
            const memberErrors = errors.members?.[index];
            const isLeader = index === 0;

            return (
              <Card key={field.id} className="overflow-hidden border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/80 px-6 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 font-mono text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {labels.member} {index + 1}
                    </span>
                    {isLeader && (
                      <Badge variant="primary" size="sm">
                        Team Contact
                      </Badge>
                    )}
                  </div>

                  {!isLeader && (
                    <button
                      type="button"
                      onClick={() => onRemoveMember(index)}
                      className="rounded-md px-2.5 py-1 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-50 hover:text-rose-700"
                    >
                      {labels.removeMember}
                    </button>
                  )}
                </div>

                <div className="space-y-4 p-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      label={labels.fullName}
                      placeholder="e.g. Somsak Jaidee"
                      required
                      error={memberErrors?.fullName?.message}
                      {...register(`members.${index}.fullName`)}
                    />

                    <Input
                      label={labels.nickname}
                      placeholder="e.g. Som"
                      required
                      error={memberErrors?.nickname?.message}
                      {...register(`members.${index}.nickname`)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      label={labels.studentId}
                      placeholder="e.g. 6688001"
                      required
                      error={memberErrors?.studentId?.message}
                      {...register(`members.${index}.studentId`)}
                    />

                    <Input
                      label={labels.email}
                      type="email"
                      autoComplete="off"
                      placeholder="e.g. student@student.mahidol.edu"
                      required
                      error={memberErrors?.email?.message}
                      {...register(`members.${index}.email`)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Faculty Select */}
                    <div>
                      <label
                        htmlFor={`faculty-${index}`}
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        {labels.faculty} <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id={`faculty-${index}`}
                        {...register(`members.${index}.faculty`)}
                        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      >
                        <option value="ICT">Faculty of ICT (ICT)</option>
                        <option value="DST">Digital Science &amp; Tech (DST)</option>
                      </select>
                      {memberErrors?.faculty && (
                        <p className="mt-1.5 text-xs font-medium text-rose-600">
                          {memberErrors.faculty.message}
                        </p>
                      )}
                    </div>

                    {/* Academic Year Select */}
                    <div>
                      <label
                        htmlFor={`year-${index}`}
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        {labels.year} <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id={`year-${index}`}
                        {...register(`members.${index}.year`, { valueAsNumber: true })}
                        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      >
                        <option value={1}>Year 1</option>
                        <option value={2}>Year 2</option>
                        <option value={3}>Year 3</option>
                        <option value={4}>Year 4</option>
                      </select>
                      {memberErrors?.year && (
                        <p className="mt-1.5 text-xs font-medium text-rose-600">
                          {memberErrors.year.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {fields.length < 3 && (
          <Button
            type="button"
            variant="outline"
            fullWidth
            onClick={onAddMember}
            className="border-2 border-dashed border-slate-300 py-3 hover:border-primary-500 hover:bg-primary-50/50"
            leftIcon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
          >
            {labels.addMember}
          </Button>
        )}
      </div>

      {/* Terms & Consent */}
      <Card className="border-slate-200 bg-slate-50 p-6">
        <div className="space-y-4">
          <Checkbox
            id="consentGiven"
            label={labels.consent}
            error={errors.consentGiven?.message}
            {...register("consentGiven")}
          />
        </div>
      </Card>

      {/* Global Error Banner if submission failed */}
      {submitState === "error" && (
        <Alert variant="error" title="Submission Failed">
          {errorMessage || labels.error}
        </Alert>
      )}

      {/* Submit Action */}
      <div className="flex flex-col items-center justify-end gap-4 pt-2 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          loading={isLoading}
          disabled={isLoading}
          className="w-full px-8 sm:w-auto"
        >
          {labels.submit}
        </Button>
      </div>
    </form>
  );
}
