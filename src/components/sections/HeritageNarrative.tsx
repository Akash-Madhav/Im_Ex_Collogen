'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function HeritageNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 40 } });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-lg text-[var(--c-text-secondary)] leading-relaxed">
            <h2 className="text-3xl font-bold text-[var(--c-text-primary)]">Decades of Industrial Heritage</h2>
            <p>
              Founded on the principles of quality and consistency, Aroon Blossom Impex has grown from a local procurement hub into a leading international exporter of buffalo hides and limed pelts. We bridge the gap between India's vast livestock resources and the specialized needs of global manufacturers.
            </p>
            <p>
              Our vision is to provide a seamless, traceable supply chain where every pelt delivered matches the exact chemical and physical specifications required for high-yield industrial extraction.
            </p>
            <div className="bg-[var(--c-primary-light)] p-8 rounded-2xl border-l-4 border-[var(--c-primary)] shadow-sm">
               <p className="font-bold text-[var(--c-primary)] italic">
                  "We don't just sell raw materials; we provide the chemical consistency that ensures our partners' production lines run at maximum efficiency."
               </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl skew-y-1">
             <Image 
               src="/images/drying_yard.png" 
               alt="Heritage and Process" 
               fill 
               className="object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
