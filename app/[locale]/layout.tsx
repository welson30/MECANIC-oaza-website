import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { localBusinessSchema } from "@/lib/schema";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import "../globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL("https://oaza-mobile-mechanic.vercel.app"),
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: "https://oaza-mobile-mechanic.vercel.app",
      siteName: "OAZA Mobile Mechanic",
      locale: locale === "en" ? "en_US" : locale === "pt" ? "pt_BR" : "es_US",
      type: "website",
    },
    robots: { index: true, follow: true },
    alternates: {
      languages: {
        en: "/en",
        pt: "/pt",
        es: "/es",
      },
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Navbar locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
