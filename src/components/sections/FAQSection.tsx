'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const faqs = [
  { q: "What is your monthly supply capacity?", a: "We currently handle and export up to 800+ Metric Tons per month from our facility in India." },
  { q: "Do you provide lab analysis reports?", a: "Yes, we provide batch-wise laboratory reports for protein, ash, and moisture content on request." },
  { q: "What are your standard payment terms?", a: "We typically work with L/C or T/T. Specific terms can be negotiated for long-term contracts." },
  { q: "Which ports do you ship from?", a: "Our primary hub is Chennai Port, India, offering direct global connectivity." }
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.95 } });

  return (
    <section ref={ref} className="section-padding bg-white">
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
  );
}
