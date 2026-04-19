'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { CheckCircle } from 'lucide-react';

export default function QualityControlStandards() {

  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <section ref={ref} className="section-padding bg-[var(--c-surface)]">


      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
              Rigorous Quality Controls
            </h2>
            <p className="text-lg text-[var(--c-text-secondary)] leading-relaxed mb-8">
              Every batch undergoes strict inspection before bailing. We ensure that only pelts meeting your factory’s specific protein and dehairing requirements are loaded for export.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Traceable Raw Materials',
                'PH-Balanced Liming',
                'Uniform Thickness Grading',
                'Accredited Lab Reports'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[var(--c-border)] font-bold text-sm">
                  <CheckCircle size={18} className="text-[var(--c-primary)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl skew-x-1">
             <div className="absolute inset-0 bg-[var(--c-primary)]/10" />
             <div className="absolute inset-0 flex items-center justify-center text-[var(--c-primary)]/20 font-bold uppercase tracking-widest">
                Factory Audit Visual
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
