'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

export default function SpecificationsMatrix() {

  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 20 } });

  return (
    <SectionWrapper id="specifications-matrix" className="bg-white">
      <div ref={ref} className="p-6 lg:p-10 bg-[var(--c-surface)] rounded-[24px] border border-[var(--c-border)]/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-3">
              Technical Audit
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--c-text-primary)] mb-3 tracking-tighter italic">Comparison Matrix</h2>
            <p className="text-sm lg:text-base text-[var(--c-text-secondary)] leading-tight opacity-70">
              While both grades share our rigorous baseline, they are optimized for different industrial end-uses.
            </p>
          </div>
          <div className="space-y-1">
            <CompareRow label="Focus" col="Protein Stability" pet="Odor & Flexibility" />
            <CompareRow label="Ash Level" col="Ultra-Low (<4%)" pet="Standard (<8%)" />
            <CompareRow label="Liming" col="Deep Hydrolysis" pet="Clean Dehairing" />
            <CompareRow label="Yield" col="High Bloom" pet="Bulk Volume" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function CompareRow({ label, col, pet }: { label: string, col: string, pet: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-[var(--c-border)]/50 text-[12px] lg:text-[13px]">
      <span className="font-black text-[var(--c-text-muted)] uppercase text-[9px] tracking-widest">{label}</span>
      <span className="font-bold text-[var(--c-primary)] italic">{col}</span>
      <span className="font-bold text-[var(--c-text-primary)]">{pet}</span>
    </div>
  );
}
