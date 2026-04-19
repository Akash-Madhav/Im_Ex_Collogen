import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";


const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1F5D3A",
};

export const metadata: Metadata = {
  title: "Aroon Blossom Impex | Premium Buffalo Limed Pelts Exporter",
  description: "Global B2B exporter of Buffalo Limed Pelts for Collagen and Pet Food industries. APEDA certified, 800+ tons/month capacity. Quality-assured industrial raw materials from India.",
  keywords: "buffalo limed pelts supplier India, raw hides for collagen export, pet food raw material hides supplier, APEDA certified hide exporter, collagen raw material India bulk supply",
  alternates: {
    languages: {
      'en': '/en',
      'ja': '/ja',
      'ko': '/ko',
      'de': '/de',
      'zh': '/zh',
    },
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable}`}>
      <body className="antialiased selection:bg-[var(--c-primary)] selection:text-white bg-[var(--c-bg)] overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SmoothScrollProvider>
            <Navbar />
            <main id="main-content" className="relative z-10">{children}</main>
            <Footer />
            <WhatsAppWidget />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


