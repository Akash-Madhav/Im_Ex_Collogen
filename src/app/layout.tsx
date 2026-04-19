import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/layout/CustomCursor";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";

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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0C0B",
};

export const metadata: Metadata = {
  title: "IndoPelts International | Premium Buffalo Dried Limed Pelts",
  description: "Advanced B2B Buffalo Pelt Export for Collagen, Gelatin, and Industrial Sectors. India's trusted partner for high-spec industrial raw materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="antialiased selection:bg-brand-accent selection:text-white overflow-x-hidden bg-bg">
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>
            <main id="main-content" className="relative z-10">{children}</main>
          </PageTransition>
          <Footer />
          <WhatsAppWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
