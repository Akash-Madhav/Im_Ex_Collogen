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
    <section ref={containerRef} className="h-screen bg-[var(--c-primary)] relative flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">

      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 xl:mb-24 px-4">
          <div className="text-[11px] font-black tracking-[0.3em] uppercase text-white/50 mb-6">
            Chemical Protocols
          </div>
          <h2 className="text-4xl xl:text-6xl font-black text-white leading-tight tracking-tighter mb-8">
            Predictable <br />
            <span className="text-[var(--c-primary-light)]">Composition</span>
          </h2>
          <p className="text-xl text-white/70 font-medium italic">
            Every batch tested against industrial parameters. Direct technical alignment with your procurement team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 rounded-[48px] overflow-hidden mb-12 shadow-2xl border border-white/10">
          <div className="bg-white/5 p-12 xl:p-16 text-center">
            <div className="text-7xl font-black text-white mb-4 font-heading">80%<span className="text-white/30 text-4xl">+</span></div>
            <div className="text-lg font-black text-white/90 mb-2 uppercase tracking-widest">Protein</div>
            <div className="text-[12px] text-white/40 font-medium tracking-tight">Collagen Grade · Range: 65–82%</div>
          </div>
          <div className="bg-white/5 p-12 xl:p-16 text-center border-x border-white/5">
            <div className="text-7xl font-black text-white mb-4 font-heading">&lt;4%</div>
            <div className="text-lg font-black text-white/90 mb-2 uppercase tracking-widest">Ash</div>
            <div className="text-[12px] text-white/40 font-medium tracking-tight">Extraction Ready · Range: 3–8%</div>
          </div>
          <div className="bg-white/5 p-12 xl:p-16 text-center">
            <div className="text-7xl font-black text-white mb-4 font-heading">12<span className="text-white/30 text-4xl">%</span></div>
            <div className="text-lg font-black text-white/90 mb-2 uppercase tracking-widest">Moisture</div>
            <div className="text-[12px] text-white/40 font-medium tracking-tight">Solar Controlled · Range: 10–20%</div>
          </div>
        </div>


        <div className="text-center">
          <p className="text-[12px] text-white/40 max-w-2xl mx-auto font-medium uppercase tracking-widest">
            * Batch reports available per consignment. Custom specs accepted.
          </p>
        </div>
      </div>
    </section>
  );
}


