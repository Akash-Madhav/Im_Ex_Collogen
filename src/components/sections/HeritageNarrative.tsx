'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function HeritageNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 40 } });

  return (
    <section ref={ref} className="snap-section h-screen bg-white flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="space-y-10 z-10">
            <div>
              <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
                Institutional Story
              </div>
              <h2 className="text-4xl xl:text-5xl font-black text-[var(--c-text-primary)] leading-tight tracking-tighter mb-8">
                The Logic of <br />
                <span className="text-[var(--c-primary)]">Industrial Consistency</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-[15px] xl:text-[17px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
              <p>
                Aroon Blossom Impex was engineered with a single directive: to bridge the delta between Indian raw material availability and global manufacturing precision. What began as a local hub has evolved into a strategic export gateway for the world's leading collagen and pet-food conglomerates.
              </p>
              <p>
                Our structural advantage lies in our deep procurement network and our rigorous liming protocols—ensuring every batch delivered is a predictable variable in our clients' complex extraction formulas.
              </p>
            </div>

            <div className="bg-[var(--c-surface)] p-10 rounded-[32px] border border-[var(--c-border)] shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--c-primary)]/5 rounded-bl-full transition-transform group-hover:scale-150" />
               <p className="font-bold text-[var(--c-primary)] italic text-lg leading-snug relative z-10">
                  "Efficiency is not accidental. It is the result of chemical predictability in the raw materials we provide."
               </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] xl:aspect-[1/1] rounded-[60px] overflow-hidden shadow-2xl skew-x-1 group">
             <Image 
               src="/images/drying_yard.png" 
               alt="Heritage and Process" 
               fill 
               className="object-cover"
             />
             <div className="absolute inset-0 bg-[var(--c-primary)]/10 mix-blend-multiply opacity-20" />
             <div className="absolute bottom-10 right-10 flex flex-col items-end">
                <span className="text-white text-6xl font-black leading-none drop-shadow-2xl">20+</span>
                <span className="text-white text-[10px] font-black uppercase tracking-widest drop-shadow">Years of Industrial Export</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

