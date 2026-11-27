"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/auth/admin-guard";
import { configService } from "@/lib/services";
import { ConfigFormValues, configSchema } from "@/lib/validation";
import { getTranslations } from "next-intl/server";

export async function updateConfig(data: ConfigFormValues) {
  await requireAdminSession();
  const t = await getTranslations("admin.configuration");

  const parsed = configSchema.safeParse(data);
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  try {
    await configService.update(parsed.data);
  } catch (_) {
    return { error: t("error") }
  }
  
  revalidatePath("/[locale]", "layout");
  return { error: null };
}