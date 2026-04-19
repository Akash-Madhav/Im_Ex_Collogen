'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function LogisticsLoadDetails() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={ref} className="snap-section h-screen bg-white flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] xl:aspect-[1/1] rounded-[60px] overflow-hidden shadow-2xl group">
             <Image 
               src="/images/drying_yard.png" 
               alt="Container Loading Facility" 
               fill 
               className="object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-[var(--c-primary)]/10 mix-blend-multiply opacity-20" />
             <div className="absolute top-10 right-10 flex flex-col items-end">
                <span className="text-white text-6xl font-black leading-none drop-shadow-2xl italic">FCL</span>
                <span className="text-white text-[10px] font-black uppercase tracking-widest drop-shadow">Full Container Load</span>
             </div>
          </div>
          <div className="space-y-10">
             <div>
                <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
                  Logistics Logic
                </div>
                <h2 className="text-4xl xl:text-5xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter mb-8">
                  Technical <br />
                  <span className="text-[var(--c-primary)]">Loading Specs</span>
                </h2>
             </div>

             <div className="space-y-6">
                <div className="p-8 xl:p-10 bg-[var(--c-surface)] rounded-[32px] border border-[var(--c-border)] group hover:border-[var(--c-primary)] transition-all duration-700 shadow-xl">
                   <h4 className="font-black text-[var(--c-primary)] mb-3 uppercase text-[10px] tracking-widest">40ft FCL HC Container</h4>
                   <p className="text-[14px] xl:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
                      Hydraulic high-density baling allows us to maximize cubic utilization. We pack approximately **26 Metric Tons** per 40ft High Cube container for global transit safety.
                   </p>
                </div>
                <div className="p-8 xl:p-10 bg-[var(--c-surface)] rounded-[32px] border border-[var(--c-border)] group hover:border-[var(--c-primary)] transition-all duration-700 shadow-xl">
                   <h4 className="font-black text-[var(--c-primary)] mb-3 uppercase text-[10px] tracking-widest">20ft FCL Container</h4>
                   <p className="text-[14px] xl:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
                      Optimized for trial procurements and specific regional port restrictions, we supply 20ft containers with a verified payload of **14-16 Metric Tons**.
                   </p>
                </div>
                <div className="flex gap-12 pt-6">
                   <div>
                      <div className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-[0.2em] mb-2">Primary Port</div>
                      <div className="text-xl font-black text-[var(--c-text-primary)]">Chennai, India</div>
                   </div>
                   <div>
                      <div className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-[0.2em] mb-2">Average Lead Time</div>
                      <div className="text-xl font-black text-[var(--c-text-primary)]">14-21 Days</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

