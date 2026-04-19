'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const caps = [
  {
    title: 'Container Loading',
    desc: '20ft and 40ft FCL container supply. Hydraulic baled for maximum density and transit safety.',
    detail: '26 MT per 40ft FCL',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M6 3v14M18 3v14M2 11h20M7 7h10M7 13h10" />
      </svg>
    )
  },
  {
    title: 'Shipping Terms',
    desc: 'FOB and CIF options. Export documentation managed — Commercial Invoice, Packing List, Health Certificate.',
    detail: 'Chennai Port — Primary',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 21h20M2 17l2-2h16l2 2v4H2v-4zM5 15V8a7 7 0 1114 0v7" />
      </svg>
    )
  },
  {
    title: 'Markets Served',
    desc: 'Indonesia · Vietnam · China · Thailand · Germany · and major global collagen hubs.',
    detail: 'Long-term supply contracts',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    )
  }
];

export default function ExportCapability() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="snap-section h-screen bg-[var(--c-surface)] relative flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 xl:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
              Global Supply Chain
            </div>
            <h2 className="text-4xl xl:text-5xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter">
              Bulk Supply. <br />
              <span className="text-[var(--c-primary)]">Global Reach.</span>
            </h2>
          </div>
          <p className="text-lg text-[var(--c-text-secondary)] max-w-sm italic font-medium">
            Reliable container supply from India to collagen and pet food manufacturers worldwide. Full logistics management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {caps.map((cap, index) => (
            <div key={index} className="group bg-white p-12 xl:p-14 rounded-[40px] border border-black/5 shadow-2xl hover:border-[var(--c-primary)]/20 transition-all duration-1000 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-[var(--c-primary-light)] flex items-center justify-center text-[var(--c-primary)] mb-12 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {cap.icon}
              </div>
              <h4 className="text-2xl font-black text-[var(--c-text-primary)] mb-4 tracking-tight uppercase leading-none">{cap.title}</h4>
              <p className="text-sm xl:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity mb-8 min-h-[60px]">{cap.desc}</p>
              <div className="mt-auto px-6 py-2 bg-[var(--c-surface)] border border-[var(--c-border)] text-[var(--c-primary)] font-black text-[10px] rounded-full uppercase tracking-widest group-hover:bg-[var(--c-primary)] group-hover:text-white transition-all">
                {cap.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

