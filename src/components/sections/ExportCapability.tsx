'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';

const caps = [
  {
    title: 'Container Loading',
    desc: '20ft/40ft FCL supply. Hydraulic baled for maximum density and transit safety.',
    detail: '26 MT per 40ft FCL',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M6 3v14M18 3v14M2 11h20M7 7h10M7 13h10" />
      </svg>
    )
  },
  {
    title: 'Shipping Terms',
    desc: 'FOB and CIF options. Full export documentation managed for industrial giants.',
    detail: 'Chennai Port — Primary',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 21h20M2 17l2-2h16l2 2v4H2v-4zM5 15V8a7 7 0 1114 0v7" />
      </svg>
    )
  },
  {
    title: 'Markets Served',
    desc: 'Indonesia · Vietnam · China · Thailand · Germany · and major global hubs.',
    detail: 'Long-term contracts',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    )
  }
];

export default function ExportCapability() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 20, opacity: 0 },
    stagger: 0.1
  });

  return (
    <SectionWrapper id="export-capability" className="bg-[var(--c-surface)]">
      <div ref={containerRef} className="h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 lg:mb-12 gap-4">
          <div className="max-w-xl">
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-3">
              Global Supply Chain
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter italic">
              Bulk Supply. <br />
              <span className="text-[var(--c-primary)] NOT-italic">Global Reach.</span>
            </h2>
          </div>
          <p className="text-sm lg:text-base text-[var(--c-text-secondary)] max-w-sm italic font-medium opacity-70">
            Reliable container supply for collagen and pet food manufacturers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caps.map((cap, index) => (
            <div key={index} className="group bg-white p-6 lg:p-8 rounded-[24px] border border-black/5 shadow-md transition-all duration-700 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--c-primary-light)] flex items-center justify-center text-[var(--c-primary)] mb-4 shrink-0 group-hover:scale-105 transition-transform">
                {cap.icon}
              </div>
              <h4 className="text-[14px] lg:text-[16px] font-black text-[var(--c-text-primary)] mb-2 tracking-tight uppercase leading-none">{cap.title}</h4>
              <p className="text-[11px] lg:text-[12px] text-[var(--c-text-secondary)] leading-tight font-medium opacity-60 group-hover:opacity-100 mb-4 min-h-[40px]">{cap.desc}</p>
              <div className="mt-auto px-4 py-1 bg-[var(--c-surface)] border border-[var(--c-border)] text-[var(--c-primary)] font-black text-[8px] rounded-full uppercase tracking-widest transition-all group-hover:bg-[var(--c-primary)] group-hover:text-white">
                {cap.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
