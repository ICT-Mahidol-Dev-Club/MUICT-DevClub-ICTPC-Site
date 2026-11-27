import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { getSiteName } from "@/config/site.config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { configService } from "@/lib/services";
import { ConfigProvider } from "@/components/layout/ConfigProvider";

export async function generateMetadata(): Promise<Metadata> {
  const config = await configService.get();
  const siteName = getSiteName(config);
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
  const config = await configService.get();
  const siteName = getSiteName(config);

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <ConfigProvider config={config}>
            <SiteHeader currentLocale={locale as "en" | "th"} currentPath="" siteName={siteName} />
            <main className="flex flex-1 flex-col">{children}</main>
            <SiteFooter siteName={siteName} year={config.eventYear} />
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
