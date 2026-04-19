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
    stagger: 0.2
  });

  return (
    <section ref={containerRef} className="snap-section bg-[var(--c-surface)] relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
            EXPORT
          </div>
          <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
            Bulk Supply. Global Reach.
          </h2>
          <p className="text-lg text-[var(--c-text-secondary)]">
            Reliable container supply from India to collagen and pet food manufacturers worldwide. Full logistics management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
          {caps.map((cap, index) => (
            <div key={index} className="bg-white border border-[var(--c-border)] rounded-2xl p-10 shadow-card hover:shadow-hover hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-[64px] h-[64px] bg-[var(--c-primary-light)] rounded-xl flex items-center justify-center text-[var(--c-primary)] mb-20 group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <h4 className="text-[20px] font-bold text-[var(--c-text-primary)] mb-4">{cap.title}</h4>
              <p className="text-[14px] text-[var(--c-text-secondary)] leading-relaxed mb-10 min-h-[60px]">{cap.desc}</p>
              <div className="inline-block px-4 py-1.5 bg-[var(--c-primary-light)] border border-[var(--c-primary)]/10 text-[var(--c-primary)] font-bold text-[12px] rounded-full uppercase tracking-wide">
                {cap.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
