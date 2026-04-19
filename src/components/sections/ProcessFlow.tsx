'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Raw Hide Selection',
    desc: 'Direct procurement from certified abattoirs with traceable, fresh raw material.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4zM4 9h16M4 14h16" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Liming Process',
    desc: 'Controlled pits with monitored pH for optimal fiber opening and dehairing.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 12h14M2 17l5-5-5-5M22 7l-5 5 5 5" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Solar Drying',
    desc: 'Bespoke solar drying on concrete yards — chemical-free moisture control to 12–16%.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'Sorting & Grading',
    desc: 'Batch-wise grading by protein and moisture for consistent quality shipments.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
        <circle cx="7" cy="12" r="1.5" fill="currentColor" />
        <circle cx="17" cy="18" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    num: '05',
    title: 'Packing & Export',
    desc: 'Hydraulic baling into 20ft/40ft FCL. Full compliance documentation provided.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3zM3 10h18M10 10v11" />
      </svg>
    )
  }
];

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { opacity: 0, x: 20 },
    stagger: 0.2
  });

  return (
    <section ref={containerRef} className="snap-section bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
            From Raw Hide to Export-Ready Pelts
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            A controlled 5-step process ensuring consistent quality and chemical stability for every shipment.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Arrow Path */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[var(--c-border)] to-transparent -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="text-[11px] font-bold text-[var(--c-primary)] font-mono uppercase tracking-widest mb-4">
                  STEP {step.num}
                </div>
                
                <div className="w-[90px] h-[90px] bg-[var(--c-primary-light)] rounded-full flex items-center justify-center text-[var(--c-primary)] border-2 border-transparent transition-all duration-500 group-hover:border-[var(--c-primary)] group-hover:scale-110 mb-6 group-hover:bg-white group-hover:shadow-xl relative overflow-hidden">
                   {step.icon}
                   <div className="absolute inset-0 bg-[var(--c-primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10 group-hover:text-white" />
                </div>
                
                <h4 className="text-[16px] font-bold text-[var(--c-text-primary)] mb-3">{step.title}</h4>
                <p className="text-[13px] text-[var(--c-text-secondary)] leading-relaxed max-w-[200px]">{step.desc}</p>
                
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-[var(--c-border)] animate-bounce font-mono">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
