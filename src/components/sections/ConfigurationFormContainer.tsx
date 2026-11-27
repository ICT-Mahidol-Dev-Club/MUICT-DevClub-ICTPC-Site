"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfigFormValues, configSchema } from "@/lib/validation";
import { updateConfig } from "@/app/[locale]/admin/configuration/actions";
import { ConfigurationForm, ConfigurationFormProps } from "./ConfigurationForm";
import { toBangkokInput } from "@/lib/validation/datetime";

export function ConfigurationFormContainer({
  config,
  labels,
}: {
  config: ConfigFormValues;
  labels: ConfigurationFormProps["labels"];
}) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<ConfigFormValues>({
    resolver: zodResolver(configSchema),
    defaultValues: { ...config, eventDate: toBangkokInput(config.eventDate) },
  });

  async function onSubmit(data: ConfigFormValues) {
    setLoading(true);
    setError(null);
    const result = await updateConfig(data);
    console.log("submit")
    if (result.error) setError(result.error);
    setLoading(false);
  }

  return (
    <ConfigurationForm
      form={form}
      loading={loading}
      error={error}
      onSubmit={form.handleSubmit(onSubmit)}
      labels={labels}
    />
  );
}