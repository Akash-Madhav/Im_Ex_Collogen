'use client';

import React from 'react';
import ProductsSection from '@/components/sections/ProductsSection';
import FinalCTA from '@/components/sections/FinalCTA';
import QualitySpecs from '@/components/sections/QualitySpecs';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function ProductsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(headerRef, { from: { opacity: 0, scale: 1.02 } });

  return (
    <div className="pt-24 lg:pt-32">
      <section ref={headerRef} className="bg-[var(--c-surface)] py-16 md:py-24 border-b border-[var(--c-border)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-bold text-[var(--c-text-primary)] mb-6">Industrial Raw Materials</h1>
            <p className="text-xl text-[var(--c-text-secondary)] leading-relaxed">
              Precision-processed buffalo limed pelts for the world's most demanding collagen extraction and pet food manufacturing facilities.
            </p>
          </div>
        </div>
      </section>

      <ProductsSection />
      
      <div className="bg-white pb-20">
         <div className="container-custom">
            <div className="p-8 lg:p-16 bg-[var(--c-surface)] rounded-2xl border border-[var(--c-border)]">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Comparison Matrix</h2>
                    <p className="text-[var(--c-text-secondary)] leading-relaxed">
                       While both grades share our rigorous baseline quality, they are optimized for different industrial end-uses.
                    </p>
                  </div>
                  <div className="space-y-4">
                     <CompareRow label="Focus" col="Protein Stability" pet="Odor & Flexibility" />
                     <CompareRow label="Ash Level" col="Ultra-Low (<4%)" pet="Standard (<8%)" />
                     <CompareRow label="Liming" col="Deep Hydrolysis" pet="Clean Dehairing" />
                  </div>
               </div>
            </div>
         </div>
      </div>

      <QualitySpecs />
      <FinalCTA />
    </div>
  );
}

function CompareRow({ label, col, pet }: { label: string, col: string, pet: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-[var(--c-border)] text-sm">
       <span className="font-bold text-[var(--c-text-muted)] uppercase text-[10px] tracking-widest">{label}</span>
       <span className="font-bold text-[var(--c-primary)]">{col}</span>
       <span className="font-bold text-[var(--c-text-primary)]">{pet}</span>
    </div>
  );
}
