'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

const docs = [
  'Commercial Invoice',
  'Packing List',
  'Certificate of Origin',
  'Health Certificate',
  'Bill of Lading',
];

export default function GlobalMarketDocumentation() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="documentation" className="bg-[var(--c-surface)]">
      <div ref={ref} className="h-full flex flex-col justify-center">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Documentation Module */}
            <div className="bg-[var(--c-primary)] p-6 lg:p-10 rounded-[28px] text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full" />
               <h3 className="text-xl lg:text-2xl font-black mb-4 tracking-tighter uppercase leading-tight italic">Compliance & <br /> <span className="NOT-italic opacity-80">Documentation</span></h3>
               <p className="text-[12px] lg:text-[13px] text-white/70 mb-6 leading-tight font-medium">
                  Institutional management for zero port delays and seamless global entry.
               </p>
               <ul className="space-y-2">
                  {docs.map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-[9px] lg:text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2 last:border-0 opacity-80 hover:opacity-100 transition-opacity">
                       <span className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center text-[7px] border border-white/10 group-hover:bg-white/20 transition-all">✔</span> {doc}
                    </li>
                  ))}
               </ul>
            </div>
            
            {/* Market Presence Module */}
            <div className="space-y-6 lg:space-y-8">
               <div>
                  <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-3">
                    Global Supply
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-[1.05] tracking-tighter mb-4 italic">
                    Serving Global <br />
                    <span className="text-[var(--c-primary)] NOT-italic">Industrial Hubs</span>
                  </h3>
               </div>
               <div className="grid grid-cols-2 gap-3">
                  {['Indonesia', 'Vietnam', 'China', 'Thailand', 'Germany', 'USA'].map(country => (
                    <div key={country} className="flex items-center gap-2 p-3 bg-white border border-black/5 rounded-xl shadow font-black text-[9px] uppercase tracking-widest text-[var(--c-text-primary)] hover:border-[var(--c-primary)] transition-all">
                       🌍 {country}
                    </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </SectionWrapper>
  );
}
