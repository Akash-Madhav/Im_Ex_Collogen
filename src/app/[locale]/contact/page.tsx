import React from 'react';
import InquiryForm from '@/components/sections/InquiryForm';
import PageHero from '@/components/sections/PageHero';
import FAQSection from '@/components/sections/FAQSection';
import OfficeNetworkLocation from '@/components/sections/OfficeNetworkLocation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Aroon Blossom Impex — Inquiry for Buffalo Limed Pelts Export",
  description: "Get in touch with our export desk for bulk buffalo limed pelt inquiries. Request technical specifications, logistics quotes, or sampling batches for collagen and pet food manufacturing.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        label="Get in Touch"
        title="Contact Our Global Export Desk"
        subtitle="Connect directly with our procurement team to discuss bulk requirements, logistics, and technical specifications for buffalo limed pelts."
        image="/images/drying_yard.png"
      />
      <InquiryForm />
      <FAQSection />
      <OfficeNetworkLocation />
    </div>
  );
}
