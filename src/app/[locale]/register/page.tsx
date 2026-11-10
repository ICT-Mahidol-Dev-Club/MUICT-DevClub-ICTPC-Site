"use client";

import { useTranslations } from "next-intl";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { registrationSchema, type RegistrationFormValues } from "@/lib/validation";
import { registrationService } from "@/lib/services";
import { siteConfig } from "@/config/site.config";

// TODO(UI): Replace raw form markup with <RegistrationForm /> component
// Props contract: see /docs/COMPONENT_CONTRACTS.md → RegistrationForm
export default function RegisterPage() {
  const t = useTranslations("register");
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      teamName: "",
      members: [{ nickname: "", fullName: "", studentId: "", email: "", faculty: "ICT", year: 1 }],
      consentGiven: undefined as unknown as true,
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "members" });

  if (!siteConfig.registrationOpen) {
    return (
      <div>
        {/* TODO(UI): ClosedBanner */}
        <p>{t("registrationClosed")}</p>
      </div>
    );
  }

  async function onSubmit(data: RegistrationFormValues) {
    setSubmitState("loading");
    try {
      await registrationService.submit(data);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div role="alert">
        {/* TODO(UI): SuccessBanner */}
        <p>{t("form.success")}</p>
      </div>
    );
  }

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading, description */}
      <h1>{t("heading")}</h1>
      <p>{t("description")}</p>

      {/* TODO(UI): RegistrationForm — props: form, fields, errors, submitState, onAddMember, onRemoveMember */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="teamName">{t("form.teamName")}</label>
          <input id="teamName" {...register("teamName")} />
          {errors.teamName && <span role="alert">{errors.teamName.message}</span>}
        </div>

        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <legend>
              {t("form.member")} {index + 1}
            </legend>

            <label>{t("form.nickname")}
              <input {...register(`members.${index}.nickname`)} />
            </label>
            {errors.members?.[index]?.nickname && (
              <span role="alert">{errors.members[index]?.nickname?.message}</span>
            )}

            <label>{t("form.fullName")}
              <input {...register(`members.${index}.fullName`)} />
            </label>

            <label>{t("form.studentId")}
              <input {...register(`members.${index}.studentId`)} />
            </label>

            <label>{t("form.email")}
              <input type="email" {...register(`members.${index}.email`)} />
            </label>

            <label>{t("form.faculty")}
              <select {...register(`members.${index}.faculty`)}>
                <option value="ICT">ICT</option>
                <option value="DST">DST</option>
              </select>
            </label>

            <label>{t("form.year")}
              <input type="number" min={1} max={4} {...register(`members.${index}.year`, { valueAsNumber: true })} />
            </label>

            {index > 0 && (
              <button type="button" onClick={() => remove(index)}>
                {t("form.removeMember")}
              </button>
            )}
          </fieldset>
        ))}

        {fields.length < 3 && (
          <button
            type="button"
            onClick={() =>
              append({ nickname: "", fullName: "", studentId: "", email: "", faculty: "ICT", year: 1 })
            }
          >
            {t("form.addMember")}
          </button>
        )}

        <div>
          <label>
            <input type="checkbox" {...register("consentGiven")} />
            {t("form.consent")}
          </label>
          {errors.consentGiven && <span role="alert">{errors.consentGiven.message}</span>}
        </div>

        {submitState === "error" && <p role="alert">{t("form.error")}</p>}

        <button type="submit" disabled={submitState === "loading"}>
          {submitState === "loading" ? "…" : t("form.submit")}
        </button>
      </form>
    </div>
  );
}
