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
    <section ref={ref} className="snap-section h-screen bg-white flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
         <div className="mb-12 xl:mb-20">
            <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
              Procurement Support
            </div>
            <h2 className="text-4xl xl:text-6xl font-black text-[var(--c-text-primary)] leading-tight tracking-tighter italic">
              Knowledge <br />
              <span className="text-[var(--c-primary)]">Repository</span>
            </h2>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="group p-10 xl:p-12 bg-[var(--c-surface)] rounded-[40px] border border-black/5 hover:border-[var(--c-primary)]/20 transition-all duration-700 shadow-xl">
                 <h4 className="text-xl xl:text-2xl font-black mb-4 text-[var(--c-text-primary)] leading-none tracking-tight group-hover:text-[var(--c-primary)] transition-colors">{faq.q}</h4>
                 <p className="text-[14px] xl:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity">{faq.a}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}

