import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { getSiteName, siteConfig } from "@/config/site.config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

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
  const siteName = getSiteName();

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader currentLocale={locale as "en" | "th"} currentPath="" />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter siteName={siteName} year={siteConfig.eventYear} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
