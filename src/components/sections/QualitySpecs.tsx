'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function QualitySpecs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="snap-section bg-[var(--c-surface)] relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-white/60 mb-4">
            QUALITY ASSURANCE
          </div>
          <h2 className="text-h2 font-bold text-white mb-6">
            Consistent Chemical Composition
          </h2>
          <p className="text-lg text-white/80">
            Every batch tested against industrial parameters. Lab analysis and batch reports available on request for technical procurement teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/20 rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <div className="bg-white/10 p-10 text-center hover:bg-white/15 transition-colors">
            <div className="text-[48px] font-bold font-mono mb-2">80%+</div>
            <div className="text-base font-bold text-white/90 mb-1">Protein Content</div>
            <div className="text-[13px] text-white/60 font-medium">Collagen Grade · Range: 65–80%</div>
          </div>
          <div className="bg-white/10 p-10 text-center hover:bg-white/15 transition-colors">
            <div className="text-[48px] font-bold font-mono mb-2">&lt;4%</div>
            <div className="text-base font-bold text-white/90 mb-1">Ash Content</div>
            <div className="text-[13px] text-white/60 font-medium">Critical for extraction · Range: 3–8%</div>
          </div>
          <div className="bg-white/10 p-10 text-center hover:bg-white/15 transition-colors">
            <div className="text-[48px] font-bold font-mono mb-2">12–14%</div>
            <div className="text-base font-bold text-white/90 mb-1">Moisture</div>
            <div className="text-[13px] text-white/60 font-medium">Solar Drying · Range: 10–20%</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-white/60 max-w-2xl mx-auto italic">
            * Lab testing available on request. Custom specification batches accepted based on buyer requirements. Detailed spec sheets downloadable in the contact section.
          </p>
        </div>
      </div>
    </section>
  );
}
