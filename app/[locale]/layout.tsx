import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import TransitionProvider from "@/components/loading/transition-provider";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

import { routing } from "@/i18n/routing";
type Props = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "id" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <TransitionProvider>{children}</TransitionProvider>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
