import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getSiteName } from "@/config/site.config";

export async function generateMetadata(): Promise<Metadata> {
  const siteName = getSiteName();
  return {
    title: {
      template: `%s | ${siteName}`,
      default: `${siteName} — ICT Programming Contest`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* TODO(UI): add <SiteHeader /> and <SiteFooter /> here */}
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

