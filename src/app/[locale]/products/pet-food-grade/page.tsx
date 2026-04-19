'use client';

import React from 'react';
import Image from 'next/image';
import InquiryForm from '@/components/sections/InquiryForm';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const specs = [
  { p: "Flexibility", v: "High", n: "Easily moldable/rollable for high-quality dog chews." },
  { p: "Odor Control", v: "Controlled", n: "Processed to minimize organic odor for natural pet treats." },
  { p: "Moisture", v: "12-16%", n: "Maintains texture while preventing bacterial growth." },
  { p: "Protein", v: "70-75%", n: "High nutritional value for premium pet food ingredients." },
  { p: "Sheet Thickness", v: "Graded", n: "Consistent thickness per batch for manufacturing efficiency." }
];

export default function PetFoodGradePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { from: { y: 20, opacity: 0 } });

  return (
    <div className="pt-24 lg:pt-32">
      <section ref={containerRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
             <div className="space-y-8">
                <div>
                   <div className="inline-block bg-[var(--c-tag-pet)] text-[#B45309] text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-4">Pet Treat Raw Material</div>
                   <h1 className="text-h1 font-bold text-[var(--c-text-primary)]">Pet Food Grade <br /> Buffalo Limed Pelts</h1>
                </div>
                
                <p className="text-xl text-[var(--c-text-secondary)] leading-relaxed">
                   Clean, safe, and nutritionally rich raw material for natural pet treat production. Our Pet Food Grade pelts are processed with a focus on hygiene, odor control, and physical flexibility.
                </p>

                <div className="space-y-4">
                   <h3 className="text-xl font-bold">Manufacturing Matrix</h3>
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
                     src="/images/warehouse_stock.png" 
                     alt="Pet Food Grade Pelt Quality" 
                     fill 
                     className="object-cover"
                   />
                </div>
                
                <div className="p-8 bg-[#B45309] text-white rounded-2xl shadow-xl">
                   <h4 className="text-lg font-bold mb-4">For Pet Food Companies</h4>
                   <p className="text-sm text-white/80 leading-relaxed mb-6">
                      Our solar-dried pelts provide the perfect texture and nutritional profile for premium pet chews. Guaranteed chemical-free preservation.
                   </p>
                   <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-white/60">
                      <li>• Clean & Odor Controlled</li>
                      <li>• High Structural Support</li>
                      <li>• Safe Solar Preservation</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--c-tag-pet)] py-12 border-y border-[#B45309]/10">
         <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
               <h3 className="text-2xl font-bold mb-2 text-[#B45309]">Ready to source Pet Food Grade?</h3>
               <p className="text-[var(--c-text-secondary)]">Connect with our export desk for bulk FCL availability.</p>
            </div>
            <a href="#inquiry-form" className="btn-primary" style={{ backgroundColor: '#B45309' }}>Request Bulk Quote</a>
         </div>
      </section>

      <InquiryForm />
    </div>
  );
}
