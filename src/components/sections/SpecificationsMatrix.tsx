'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function SpecificationsMatrix() {

  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={ref} className="bg-white pb-20">


      <div className="container-custom">
        <div className="p-8 lg:p-16 bg-[var(--c-surface)] rounded-2xl border border-[var(--c-border)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comparison Matrix</h2>
              <p className="text-[var(--c-text-secondary)] leading-relaxed">
                While both grades share our rigorous baseline quality, they are optimized for different industrial end-uses.
              </p>
            </div>
            <div className="space-y-4">
              <CompareRow label="Focus" col="Protein Stability" pet="Odor & Flexibility" />
              <CompareRow label="Ash Level" col="Ultra-Low (<4%)" pet="Standard (<8%)" />
              <CompareRow label="Liming" col="Deep Hydrolysis" pet="Clean Dehairing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareRow({ label, col, pet }: { label: string, col: string, pet: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-[var(--c-border)] text-sm">
      <span className="font-bold text-[var(--c-text-muted)] uppercase text-[10px] tracking-widest">{label}</span>
      <span className="font-bold text-[var(--c-primary)]">{col}</span>
      <span className="font-bold text-[var(--c-text-primary)]">{pet}</span>
    </div>
  );
}
