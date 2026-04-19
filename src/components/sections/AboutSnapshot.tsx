'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';

export default function AboutSnapshot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 20, opacity: 0 },
    stagger: 0.1
  });

  return (
    <SectionWrapper id="about-snapshot" className="bg-white">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-4 lg:space-y-6 z-10 py-4 lg:py-0">
          <div>
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-3">
              Institutional Profile
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--c-text-primary)] leading-[1.05] tracking-tighter mb-2 italic">
              Strategic <br />
              <span className="text-[var(--c-primary)]">Industrial Export</span>
            </h2>
          </div>

          <div className="space-y-3 text-[13px] lg:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
            <p>
              Aroon Blossom Impex is an institutional-grade gateway for high-yield collagen raw materials, engineered for volume and consistency.
            </p>
            <p>
              Processing over <span className="text-black font-bold">800+ tons monthly</span>, our facility ensures absolute chemical traceability.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-1">
            {['Government Certified', 'Zero-Waste Logic', 'Custom Gradation', 'Direct Registry'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[9px] font-black text-[var(--c-text-primary)] uppercase tracking-widest border-l-2 border-[var(--c-primary)]/20 pl-2">
                {item}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link href="/about" className="group flex items-center gap-2 w-fit">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--c-text-primary)]">Enterprise History</span>
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-xs group-hover:bg-[var(--c-primary)] group-hover:text-white transition-all">
                →
              </div>
            </Link>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[32px] overflow-hidden shadow-xl group border border-black/5">
           <Image 
              src="/images/factory_exterior.png" 
              alt="Aroon Blossom Impex Facility" 
              fill 
              className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           
           {/* Industrial Badge */}
           <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-white/95 backdrop-blur-xl p-5 lg:p-8 rounded-[24px] shadow-2xl border border-white/20 z-20 max-w-[240px]">
              <div className="text-[9px] font-black text-[var(--c-primary)] uppercase tracking-widest mb-2">Industrial Export</div>
              <div className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] mb-1 tracking-tighter">800<span className="text-[var(--c-primary)]">+</span> Tons</div>
              <p className="text-[10px] text-[var(--c-text-muted)] font-black uppercase tracking-widest opacity-60">Monthly Capacity</p>
           </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
