import React from 'react';
import InquiryForm from '@/components/sections/InquiryForm';
import PageHeader from '@/components/layout/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Aroon Blossom Impex — Inquiry for Buffalo Limed Pelts Export",
  description: "Get in touch with our export desk for bulk buffalo limed pelt inquiries. Request technical specifications, logistics quotes, or sampling batches for collagen and pet food manufacturing.",
};

const faqs = [
  { q: "What is your monthly supply capacity?", a: "We currently handle and export up to 800+ Metric Tons per month from our facility in India." },
  { q: "Do you provide lab analysis reports?", a: "Yes, we provide batch-wise laboratory reports for protein, ash, and moisture content on request before each shipment." },
  { q: "What are your standard payment terms?", a: "We typically work with L/C (Letter of Credit) or T/T (Telegraphic Transfer). Specific terms can be negotiated for long-term supply contracts." },
  { q: "Can you provide custom specifications?", a: "Absolutely. We can adjust the liming duration, thickness grading, and moisture levels to meet your factory's specific requirement." },
  { q: "Which ports do you ship from?", a: "Our primary export hub is Chennai Port (India), which offers direct global connectivity to major hubs in SE Asia and Europe." }
];

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <PageHeader 
        title="Contact Our Export Desk"
        description="Connect directly with our procurement team to discuss bulk requirements, logistics, and technical specifications for buffalo limed pelts."
      />

      <InquiryForm />

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Procurement Questions</h2>
              <p className="text-[var(--c-text-secondary)]">Quick answers for international industrial buyers.</p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="p-8 bg-[var(--c-surface)] rounded-2xl border border-[var(--c-border)]">
                   <h4 className="text-lg font-bold mb-3 text-[var(--c-text-primary)]">{faq.q}</h4>
                   <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Map Placeholder or direct office info */}
      <section className="h-[400px] w-full bg-[var(--c-surface)] relative border-t border-[var(--c-border)]">
         <div className="absolute inset-0 flex items-center justify-center text-[var(--c-text-muted)] font-bold uppercase tracking-widest text-xs">
            [ Interactive Logistics Map Embed ]
         </div>
         <div className="container-custom relative h-full pointer-events-none">
            <div className="absolute top-10 left-10 p-6 bg-white rounded-xl shadow-2xl border border-[var(--c-border)] max-w-xs pointer-events-auto">
               <h4 className="font-bold text-[var(--c-primary)] mb-2 uppercase text-[10px] tracking-wider">Registered Office</h4>
               <p className="text-sm text-[var(--c-text-primary)] font-bold mb-1">Aroon Blossom Impex</p>
               <p className="text-xs text-[var(--c-text-secondary)] leading-relaxed">Chennai Port Zone, Tamil Nadu, India. Serving global procurement since 2012.</p>
            </div>
         </div>
      </section>
    </div>
  );
}
