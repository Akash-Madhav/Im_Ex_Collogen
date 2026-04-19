'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

export default function HeritageNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="heritage" className="bg-white">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Text Area */}
        <div className="space-y-6 lg:space-y-8 z-10">
          <div>
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
              Institutional Story
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter mb-4 italic">
              The Logic of <br />
              <span className="text-[var(--c-primary)] NOT-italic">Industrial Consistency</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-[14px] lg:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
            <p>
              Aroon Blossom Impex was engineered with a single directive: to bridge the delta between Indian raw material availability and global manufacturing precision.
            </p>
            <p>
              Our internal protocols ensure every batch is a predictable variable in our clients' complex extraction formulas for collagen and pet-food conglomerates.
            </p>
          </div>

          <div className="bg-[var(--c-surface)] p-6 lg:p-8 rounded-[24px] border border-[var(--c-border)] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--c-primary)]/5 rounded-bl-full transition-transform group-hover:scale-150" />
             <p className="font-bold text-[var(--c-primary)] italic text-base lg:text-lg leading-snug relative z-10">
                "Efficiency is result of chemical predictability in the raw materials we provide."
             </p>
          </div>
        </div>

        {/* Visual Area */}
        <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-xl skew-x-1 group">
           <Image 
             src="/images/drying_yard.png" 
             alt="Heritage and Process" 
             fill 
             className="object-cover"
           />
           <div className="absolute inset-0 bg-[var(--c-primary)]/10 mix-blend-multiply opacity-20" />
           <div className="absolute bottom-10 right-10 flex flex-col items-end">
              <span className="text-white text-5xl lg:text-6xl font-black leading-none drop-shadow-2xl italic">20+</span>
              <span className="text-white text-[8px] lg:text-[9px] font-black uppercase tracking-widest drop-shadow text-right">Years of Industrial Export</span>
           </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
