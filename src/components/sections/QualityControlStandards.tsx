'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/layout/SectionWrapper';

export default function QualityControlStandards() {

  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="quality-controls" className="bg-[var(--c-surface)]">
      <div ref={ref} className="h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
              Supply Integrity
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] mb-4 lg:mb-6 leading-[1.1] tracking-tighter italic">
              Rigorous <span className="text-[var(--c-primary)] NOT-italic">Quality Controls</span>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-[var(--c-text-secondary)] leading-relaxed mb-6 lg:mb-8 font-medium opacity-80">
              Every batch undergoes strict inspection before bailing, ensuring that only pelts meeting your factory’s specific dehairing requirements are loaded for export.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {[
                'Traceable Raw Materials',
                'PH-Balanced Liming',
                'Uniform Thickness Grading',
                'Accredited Lab Reports'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 lg:gap-3 p-3 bg-white rounded-xl border border-[var(--c-border)] font-bold text-[9px] lg:text-[10px] uppercase tracking-widest text-[var(--c-primary)]">
                  <CheckCircle size={12} className="text-[var(--c-primary)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-lg skew-x-1 border border-black/5 bg-white">
             <div className="absolute inset-0 bg-[var(--c-primary)]/5" />
             <div className="absolute inset-0 flex items-center justify-center text-[var(--c-primary)]/10 font-black uppercase tracking-[0.3em] text-[10px] text-center p-12">
                Factory Audit <br/> Inspection Module
             </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
