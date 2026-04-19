'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

const faqs = [
  { q: "What is your monthly supply capacity?", a: "We handle and export up to 800+ Metric Tons per month from our facility in India." },
  { q: "Do you provide lab analysis reports?", a: "Yes, we provide batch-wise laboratory reports for protein and ash content on request." },
  { q: "What are your standard payment terms?", a: "We typically work with L/C or T/T. Specific terms can be negotiated for long-term contracts." },
  { q: "Which ports do you ship from?", a: "Our primary hub is Chennai Port, India, offering direct global connectivity." }
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="faq" className="bg-white">
      <div ref={ref} className="h-full flex flex-col justify-center">
         <div className="mb-8 lg:mb-12">
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
              Procurement Support
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-tight tracking-tighter italic">
              Knowledge <br />
              <span className="text-[var(--c-primary)] NOT-italic">Repository</span>
            </h2>
         </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="group p-5 lg:p-7 bg-[var(--c-surface)] rounded-[24px] border border-black/5 hover:border-[var(--c-primary)]/20 transition-all duration-700 shadow-sm">
                 <h4 className="text-[14px] lg:text-[16px] font-black mb-2 text-[var(--c-text-primary)] leading-none tracking-tight group-hover:text-[var(--c-primary)] transition-colors italic">{faq.q}</h4>
                 <p className="text-[11px] lg:text-[13px] text-[var(--c-text-secondary)] leading-tight font-medium opacity-60 group-hover:opacity-100 transition-opacity">{faq.a}</p>
              </div>
            ))}
          </div>
      </div>
    </SectionWrapper>
  );
}
