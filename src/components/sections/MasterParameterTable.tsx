'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const fullSpecs = [
  { param: 'Moisture Content', range: '10% – 20%', preferred: '12% – 16%', impact: 'Prevents bacterial growth' },
  { param: 'Protein Content', range: '65% – 80%', preferred: '70% – 78%', impact: 'Collagen yield & strength' },
  { param: 'Ash Content', range: '3% – 8%', preferred: '3% – 6%', impact: 'Critical for extraction purity' },
  { param: 'Dehairing', range: 'Complete', preferred: '99%+ clean', impact: 'Reduces filtration time' },
  { param: 'Thickness', range: 'Graded', preferred: 'Uniform per batch', impact: 'Swelling consistency' },
];

export default function MasterParameterTable() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 20 } });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Master Parameter Table</h2>
          <p className="text-[var(--c-text-secondary)]">Standard reference values for our buffalo limed pelts export cargo.</p>
        </div>

        <div className="overflow-x-auto border border-[var(--c-border)] rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[var(--c-surface)]">
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border-[var(--c-border)]">Parameter</th>
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border-[var(--c-border)]">Acceptable</th>
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border-[var(--c-border)]">Preferred</th>
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border-[var(--c-border)]">Impact</th>
              </tr>
            </thead>
            <tbody>
              {fullSpecs.map((spec, i) => (
                <tr key={i} className="hover:bg-[var(--c-surface)]/50 transition-colors">
                  <td className="p-6 text-sm font-bold border-b border-[var(--c-border)]">{spec.param}</td>
                  <td className="p-6 text-sm border-b border-[var(--c-border)] font-mono">{spec.range}</td>
                  <td className="p-6 text-sm border-b border-[var(--c-border)] font-mono font-bold text-[var(--c-primary)]">{spec.preferred}</td>
                  <td className="p-6 text-sm border-b border-[var(--c-border)] text-[var(--c-text-secondary)]">{spec.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
