'use client';

import React from 'react';
import Image from 'next/image';
import InquiryForm from '@/components/sections/InquiryForm';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const specs = [
  { p: "Protein Content", v: "80%+", n: "Dry basis, optimized for high Bloom strength gelatin." },
  { p: "Ash Content", v: "<4%", n: "Ultra-low mineral content for pure extraction." },
  { p: "Moisture", v: "12-14%", n: "Controlled solar drying ensures stability during transit." },
  { p: "pH Level", v: "11.5 - 12.5", n: "Maintained alkaline state for easy pretreatment." },
  { p: "Fat Content", v: "<1%", n: "Thoroughly de-fatted for lean extraction yield." }
];

export default function CollagenGradePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { from: { y: 20, opacity: 0 } });

  return (
    <div className="pt-24 lg:pt-32">
      <section ref={containerRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
             <div className="space-y-8">
                <div>
                   <div className="inline-block bg-[var(--c-tag-collagen)] text-[var(--c-primary)] text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-4">Industrial Grade</div>
                   <h1 className="text-h1 font-bold text-[var(--c-text-primary)]">Collagen Grade <br /> Buffalo Limed Pelts</h1>
                </div>
                
                <p className="text-xl text-[var(--c-text-secondary)] leading-relaxed">
                   Specifically engineered for collagen manufacturers requiring high protein yield and minimal chemical impurities. Our Collagen Grade pelts undergo deep liming to ensure fiber opening for maximum enzymatic accessibility.
                </p>

                <div className="space-y-4">
                   <h3 className="text-xl font-bold">Technical Specifications</h3>
                   <div className="border border-[var(--c-border)] rounded-2xl overflow-hidden">
                      {specs.map((spec, i) => (
                        <div key={i} className="p-6 border-b border-[var(--c-border)] last:border-0 hover:bg-[var(--c-surface)] transition-colors">
                           <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-[var(--c-text-primary)]">{spec.p}</span>
                              <span className="font-mono font-bold text-[var(--c-primary)] text-lg">{spec.v}</span>
                           </div>
                           <div className="text-xs text-[var(--c-text-muted)] font-medium">{spec.n}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="lg:sticky lg:top-32 space-y-8">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                   <Image 
                     src="/images/grading_process.png" 
                     alt="Collagen Grade Pelt Quality" 
                     fill 
                     className="object-cover"
                     style={{ viewTransitionName: 'product-image-collagen' } as any}
                   />
                </div>
                
                <div className="p-8 bg-[var(--c-primary)] text-white rounded-2xl shadow-xl">
                   <h4 className="text-lg font-bold mb-4">For Collagen Manufacturers</h4>
                   <p className="text-sm text-white/80 leading-relaxed mb-6">
                      Our consistent chemical composition reduces your pretreatment time and improves extraction yields. Every batch is traceable and tested.
                   </p>
                   <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-white/60">
                      <li>• High Bloom Strength Potential</li>
                      <li>• Low Pretreatment Variation</li>
                      <li>• Verified Ash Stability</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--c-primary-light)] py-12 border-y border-[var(--c-primary)]/10">
         <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
               <h3 className="text-2xl font-bold mb-2">Ready to source Collagen Grade?</h3>
               <p className="text-[var(--c-text-secondary)]">Request a technical spec sheet or a container quote today.</p>
            </div>
            <a href="#request-quote" className="btn-primary">Request Bulk Quote</a>
         </div>
      </section>

      <InquiryForm />
    </div>
  );
}
