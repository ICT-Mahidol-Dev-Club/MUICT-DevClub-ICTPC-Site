"use client";

import { useTranslations } from "next-intl";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  registrationSchema,
  type RegistrationFormValues,
} from "@/lib/validation";
import { registrationService } from "@/lib/services";
import { siteConfig } from "@/config/site.config";
import { PageHeader } from "@/components/ui/PageHeader";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { ClosedBanner } from "@/components/sections/ClosedBanner";
import { SuccessBanner } from "@/components/sections/SuccessBanner";

export default function RegisterPage() {
  const t = useTranslations("register");
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      teamName: "",
      members: [
        {
          nickname: "",
          fullName: "",
          studentId: "",
          email: "",
          faculty: "ICT",
          year: 1,
        },
      ],
      consentGiven: undefined as unknown as true,
    },
  });

  const { control, handleSubmit } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  async function onSubmit(data: RegistrationFormValues) {
    setSubmitState("loading");
    try {
      await registrationService.submit(data);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  if (!siteConfig.registrationOpen) {
    return (
      <div className="pb-16">
        <PageHeader
          badge="APPLY"
          heading={t("heading")}
          description={t("description")}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClosedBanner message={t("registrationClosed")} />
        </div>
      </div>
    );
  }

  if (submitState === "success") {
    return (
      <div className="pb-16">
        <PageHeader
          badge="APPLY"
          heading={t("heading")}
          description={t("description")}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SuccessBanner message={t("form.success")} />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <PageHeader
        badge="APPLY"
        heading={t("heading")}
        description={t("description")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RegistrationForm
          form={form}
          fields={fields}
          onAddMember={() =>
            append({
              nickname: "",
              fullName: "",
              studentId: "",
              email: "",
              faculty: "ICT",
              year: 1,
            })
          }
          onRemoveMember={(index) => remove(index)}
          submitState={submitState}
          errorMessage={t("form.error")}
          onSubmit={handleSubmit(onSubmit)}
          labels={{
            teamName: t("form.teamName"),
            member: t("form.member"),
            nickname: t("form.nickname"),
            fullName: t("form.fullName"),
            studentId: t("form.studentId"),
            email: t("form.email"),
            faculty: t("form.faculty"),
            year: t("form.year"),
            addMember: t("form.addMember"),
            removeMember: t("form.removeMember"),
            consent: t("form.consent"),
            submit: t("form.submit"),
            error: t("form.error"),
          }}
        />
      </div>
    </div>
  );
}
