'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const reasons = [
  {
    num: '01',
    title: 'Stable Bulk Supply Chain',
    desc: '800+ tons/month with buffer stock to prevent supply disruption — even during seasonal fluctuations.'
  },
  {
    num: '02',
    title: 'Export Compliance Expertise',
    desc: 'APEDA and CAPEXIL certified. Full documentation managed end-to-end including health certificates and COO.'
  },
  {
    num: '03',
    title: 'Custom Processing Capability',
    desc: 'Adjustable moisture, thickness grading, and chemical composition to match your factory’s exact input specification.'
  },
  {
    num: '04',
    title: 'Consistent Quality Batches',
    desc: 'Batch-wise lab testing ensures the same chemical composition shipment to shipment — eliminating process surprises.'
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 20, opacity: 0 },
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="snap-section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 px-4">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
            The Supplier Standard That Keeps Buyers Coming Back
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {reasons.map((item, index) => (
            <div key={index} className="relative p-10 border border-[var(--c-border)] rounded-2xl transition-all duration-500 hover:shadow-hover hover:-translate-y-2 group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--c-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="font-mono text-[40px] font-bold text-[var(--c-border)] group-hover:text-[var(--c-primary-light)] transition-colors duration-300 mb-6 leading-none">
                  {item.num}
               </div>
               <h4 className="text-[18px] font-bold text-[var(--c-text-primary)] mb-4 leading-tight">{item.title}</h4>
               <p className="text-[14px] text-[var(--c-text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
