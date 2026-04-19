import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/layout/CustomCursor";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased selection:bg-[var(--c-primary)] selection:text-white overflow-x-hidden bg-[var(--c-bg)]">
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>
            <main id="main-content" className="relative z-10">{children}</main>
          </PageTransition>
          <Footer />
          <WhatsAppWidget />
          <MobileStickyBar />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
