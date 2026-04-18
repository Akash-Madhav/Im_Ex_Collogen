import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import PageTransition from "@/components/layout/PageTransition";
import { LenisProvider } from "@/lib/lenis-context";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d1f1a",
};

export const metadata: Metadata = {
  title: "Premium Buffalo Dried Limed Pelts | Top Indian Exporter",
  description: "Bulk supply of high-spec Buffalo Dried Limed Pelts for Collagen, Gelatin, and Pet Food industries. Reliable Indian exporter serving 10+ global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-brand-accent selection:text-white overflow-x-hidden">
        <div className="noise-overlay" />
        <LenisProvider>
          <Navbar />
          <PageTransition>
            <main id="main-content" className="relative z-10">{children}</main>
          </PageTransition>
          <Footer />
          <WhatsAppWidget />
        </LenisProvider>
      </body>
    </html>
  );
}
