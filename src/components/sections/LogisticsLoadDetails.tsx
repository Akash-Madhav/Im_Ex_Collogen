'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

export default function LogisticsLoadDetails() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="logistics" className="bg-white">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Visual Module */}
        <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-xl group order-2 lg:order-1">
           <Image 
             src="/images/drying_yard.png" 
             alt="Container Loading Facility" 
             fill 
             className="object-cover transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-[var(--c-primary)]/10 mix-blend-multiply opacity-20" />
           <div className="absolute top-10 right-10 flex flex-col items-end">
              <span className="text-white text-5xl lg:text-6xl font-black leading-none drop-shadow-2xl italic">FCL</span>
              <span className="text-white text-[8px] lg:text-[9px] font-black uppercase tracking-widest drop-shadow">Full Container Load</span>
           </div>
        </div>

        {/* Info Module */}
        <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
           <div>
              <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
                Logistics Logic
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter mb-4 italic">
                Technical <br />
                <span className="text-[var(--c-primary)] NOT-italic">Loading Specs</span>
              </h2>
           </div>

           <div className="space-y-4 lg:space-y-6">
              <div className="p-5 lg:p-7 bg-[var(--c-surface)] rounded-[24px] border border-[var(--c-border)] group hover:border-[var(--c-primary)] transition-all duration-700 shadow-sm">
                 <h4 className="font-black text-[var(--c-primary)] mb-2 uppercase text-[9px] tracking-widest">40ft FCL HC Container</h4>
                 <p className="text-[12px] lg:text-[13px] text-[var(--c-text-secondary)] leading-tight font-medium">
                    Hydraulic high-density baling ensures maximum cubic utilization. We pack **26 Metric Tons** per 40ft High Cube container.
                 </p>
              </div>
              <div className="p-5 lg:p-7 bg-[var(--c-surface)] rounded-[24px] border border-[var(--c-border)] group hover:border-[var(--c-primary)] transition-all duration-700 shadow-sm">
                 <h4 className="font-black text-[var(--c-primary)] mb-2 uppercase text-[9px] tracking-widest">20ft FCL Container</h4>
                 <p className="text-[12px] lg:text-[13px] text-[var(--c-text-secondary)] leading-tight font-medium">
                    Optimized for trials and regional port restrictions, we supply 20ft containers with a verified payload of **14-16 Metric Tons**.
                 </p>
              </div>
              <div className="flex gap-8 lg:gap-12 pt-4">
                 <div>
                    <div className="text-[8px] lg:text-[9px] font-black text-[var(--c-text-muted)] uppercase tracking-[0.2em] mb-1">Primary Port</div>
                    <div className="text-lg lg:text-xl font-black text-[var(--c-text-primary)]">Chennai, India</div>
                 </div>
                 <div>
                    <div className="text-[8px] lg:text-[9px] font-black text-[var(--c-text-muted)] uppercase tracking-[0.2em] mb-1">Avg Lead Time</div>
                    <div className="text-lg lg:text-xl font-black text-[var(--c-text-primary)]">14-21 Days</div>
                 </div>
              </div>
           </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
