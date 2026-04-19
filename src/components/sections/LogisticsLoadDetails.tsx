'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function LogisticsLoadDetails() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
             <Image 
               src="/images/drying_yard.png" 
               alt="Container Loading Facility" 
               fill 
               className="object-cover"
             />
          </div>
          <div className="space-y-8">
             <h2 className="text-3xl font-bold">Logistics & Load Specs</h2>
             <div className="space-y-6">
                <div className="p-6 bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)]">
                   <h4 className="font-bold text-[var(--c-primary)] mb-2 uppercase text-xs tracking-widest">40ft FCL HC Container</h4>
                   <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">
                      Hydraulic baling allows us to maximize density. We pack approximately **26 Metric Tons** per 40ft High Cube container.
                   </p>
                </div>
                <div className="p-6 bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)]">
                   <h4 className="font-bold text-[var(--c-primary)] mb-2 uppercase text-xs tracking-widest">20ft FCL Container</h4>
                   <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">
                      For trial orders, we supply 20ft containers with a payload of approximately **14-16 Metric Tons**.
                   </p>
                </div>
                <div className="flex gap-8 pt-4">
                   <div>
                      <div className="text-xs font-bold text-[var(--c-text-muted)] uppercase tracking-widest mb-1">Primary Port</div>
                      <div className="text-lg font-bold">Chennai Port, India</div>
                   </div>
                   <div>
                      <div className="text-xs font-bold text-[var(--c-text-muted)] uppercase tracking-widest mb-1">Lead Time</div>
                      <div className="text-lg font-bold">2-3 Weeks</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
