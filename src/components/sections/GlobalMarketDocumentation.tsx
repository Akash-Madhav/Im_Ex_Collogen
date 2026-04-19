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
    <section ref={ref} className="section-padding bg-[var(--c-surface)]">
      <div className="container-custom">
         <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div className="bg-[var(--c-primary)] p-10 rounded-2xl text-white shadow-xl">
               <h3 className="text-2xl font-bold mb-6">Documentation Compliance</h3>
               <p className="text-sm text-white/75 mb-8 leading-relaxed">
                  We manage all export documentation end-to-end to ensure smooth customs clearance at your destination port.
               </p>
               <ul className="space-y-4">
                  {docs.map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                       <span className="text-[var(--c-primary-light)]">✔</span> {doc}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="space-y-10 lg:pt-6 lg:pl-10">
               <div>
                  <h3 className="text-2xl font-bold mb-4">Countries We Serve</h3>
                  <p className="text-lg text-[var(--c-text-secondary)] leading-relaxed">
                     Aroon Blossom Impex has established supply routes to the world's largest collagen hubs.
                  </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {['Indonesia', 'Vietnam', 'China', 'Thailand', 'Germany', 'USA'].map(country => (
                    <div key={country} className="flex items-center gap-3 p-4 bg-white border border-[var(--c-border)] rounded-lg shadow-sm font-bold text-[var(--c-text-primary)]">
                       <span className="text-lg">🌍</span> {country}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
