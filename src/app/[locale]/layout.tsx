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
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader
            currentLocale={locale as "en" | "th"}
            currentPath=""
          />
          <main className="flex-1 flex flex-col">{children}</main>
          <SiteFooter siteName={siteName} year={siteConfig.eventYear} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
