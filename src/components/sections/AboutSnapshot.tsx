'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function AboutSnapshot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="h-screen bg-white relative flex flex-col justify-center overflow-auto lg:overflow-hidden py-20 xl:py-24">

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-24 items-center">
          
          <div className="space-y-10 z-10">
            <div>
              <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
                Institutional Profile
              </div>
              <h2 className="text-4xl xl:text-6xl font-black text-[var(--c-text-primary)] leading-[1] tracking-tighter mb-8 italic">
                Strategic <br />
                <span className="text-[var(--c-primary)]">Industrial Export</span>
              </h2>
            </div>

            <div className="space-y-6 text-[15px] xl:text-[17px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
              <p>
                Aroon Blossom Impex is an institutional-grade gateway for high-yield collagen raw materials. We supply the world's most demanding procurement managers with buffalo limed pelts that exceed global technical benchmarks.
              </p>
              <p>
                Operating out of Chennai, India, our facility is engineered for volume, consistency, and absolute chemical traceability—processing over 800+ tons monthly for the most exclusive supply chains.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4">
              {[
                'Government Certified',
                'Zero-Waste Logic',
                'Custom Gradation',
                'Direct Registry'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-black text-[var(--c-text-primary)] uppercase tracking-widest border-l-4 border-black/5 pl-4 hover:border-[var(--c-primary)]">
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href="/about" className="group flex items-center gap-4 w-fit">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--c-text-primary)] group-hover:text-[var(--c-primary)]">Enterprise History</span>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[var(--c-primary)] group-hover:bg-[var(--c-primary)] group-hover:text-white">
                  →
                </div>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] xl:aspect-[1/1] rounded-[60px] overflow-hidden shadow-2xl group border border-black/5">
             <Image 
                src="/images/factory_exterior.png" 
                alt="Aroon Blossom Impex Facility" 
                fill 
                className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100" />
             
             {/* Industrial Badge */}
             <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl border border-white/20 z-20 max-w-[280px]">
                <div className="text-[10px] font-black text-[var(--c-primary)] uppercase tracking-widest mb-3">Industrial Output</div>
                <div className="text-4xl font-black text-[var(--c-text-primary)] mb-2 tracking-tighter shrink-0">800<span className="text-[var(--c-primary)]">+</span> Tons</div>
                <p className="text-[11px] text-[var(--c-text-muted)] font-black uppercase tracking-widest opacity-60">Verified Monthly Capacity</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}


