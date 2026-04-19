'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const docs = [
  'Commercial Invoice',
  'Packing List',
  'Certificate of Origin',
  'Health Certificate',
  'Bill of Lading',
];

export default function GlobalMarketDocumentation() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={ref} className="snap-section h-screen bg-[var(--c-surface)] flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
         <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-center">
            <div className="bg-[var(--c-primary)] p-12 xl:p-16 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-full" />

               <h3 className="text-3xl font-black mb-8 tracking-tighter uppercase">Documentation <br /> Compliance</h3>
               <p className="text-[15px] xl:text-[16px] text-white/80 mb-10 leading-relaxed font-medium">
                  We manage all export documentation end-to-end to ensure zero port delays and 100% customs compliance.
               </p>
               <ul className="space-y-4">
                  {docs.map((doc, i) => (
                    <li key={i} className="flex items-center gap-4 text-xs xl:text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-4 last:border-0">
                       <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✔</span> {doc}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="space-y-12 lg:pl-10">
               <div>
                  <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
                    Global Distribution
                  </div>
                  <h3 className="text-4xl xl:text-5xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter mb-6">
                    Serving the World's <br />
                    <span className="text-[var(--c-primary)]">Industrial Hubs</span>
                  </h3>
                  <p className="text-[15px] xl:text-[17px] text-[var(--c-text-secondary)] leading-relaxed font-medium italic">
                     Aroon Blossom Impex has established strategic supply routes to the world's largest collagen and pet-food processing centers.
                  </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Indonesia', 'Vietnam', 'China', 'Thailand', 'Germany', 'USA'].map(country => (
                    <div key={country} className="flex items-center gap-3 p-5 bg-white border border-black/5 rounded-2xl shadow-xl font-black text-xs uppercase tracking-widest text-[var(--c-text-primary)] hover:border-[var(--c-primary)] transition-all">
                       <span className="text-xl">🌍</span> {country}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

