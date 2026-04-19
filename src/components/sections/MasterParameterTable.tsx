'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

const fullSpecs = [
  { param: 'Moisture Content', range: '10% – 20%', preferred: '12% – 16%', impact: 'Prevents bacterial growth' },
  { param: 'Protein Content', range: '65% – 80%', preferred: '70% – 78%', impact: 'Collagen yield & strength' },
  { param: 'Ash Content', range: '3% – 8%', preferred: '3% – 6%', impact: 'Critical for extraction purity' },
  { param: 'Dehairing', range: 'Complete', preferred: '99%+ clean', impact: 'Reduces filtration time' },
  { param: 'Thickness', range: 'Graded', preferred: 'Uniform', impact: 'Swelling consistency' },
];

export default function MasterParameterTable() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="parameter-table" className="bg-white">
      <div ref={ref} className="h-full flex flex-col justify-center">
        <div className="mb-8 lg:mb-12">
          <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
            Technical Standards
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-tight tracking-tighter italic">
            Master <br />
            <span className="text-[var(--c-primary)] NOT-italic">Parameter Reference</span>
          </h2>
        </div>

        <div className="overflow-x-auto border border-black/5 rounded-[24px] shadow-lg bg-[var(--c-surface)]/50 backdrop-blur-md">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[var(--c-primary)] text-white">
                <th className="p-4 lg:p-6 text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10">Parameter</th>
                <th className="p-4 lg:p-6 text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10">Working Range</th>
                <th className="p-4 lg:p-6 text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10 text-[var(--c-primary-light)]">Preferred Spec</th>
                <th className="p-4 lg:p-6 text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10 opacity-70">Extraction Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {fullSpecs.map((spec, i) => (
                <tr key={i} className="hover:bg-white transition-all duration-500 group">
                  <td className="p-4 lg:p-6 text-[12px] lg:text-[13px] font-black text-[var(--c-text-primary)] group-hover:text-[var(--c-primary)]">{spec.param}</td>
                  <td className="p-4 lg:p-6 text-[11px] lg:text-[12px] font-black font-mono opacity-50 group-hover:opacity-100">{spec.range}</td>
                  <td className="p-4 lg:p-6 text-[11px] lg:text-[12px] font-black font-mono text-[var(--c-primary)]">{spec.preferred}</td>
                  <td className="p-4 lg:p-6 text-[11px] lg:text-[12px] text-[var(--c-text-secondary)] font-medium italic group-hover:text-black">{spec.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
}
