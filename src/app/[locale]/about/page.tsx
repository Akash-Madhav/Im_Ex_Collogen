import React from 'react';
import AboutClient from '@/components/views/AboutClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Aroon Blossom Impex — Established Buffalo Hide Exporters",
  description: "Learn about the heritage and industrial capacity of Aroon Blossom Impex. Government-registered exporter of buffalo limed pelts with an 800+ ton monthly capacity in Chennai, India.",
};

export default function AboutPage() {
  return <AboutClient />;
}
