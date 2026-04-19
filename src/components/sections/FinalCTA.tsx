'use client';

import React from 'react';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 20, opacity: 0 }
  });

  return (
    <section ref={containerRef} className="snap-section bg-[var(--c-primary)] text-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-white/50">
             READY TO SOURCE
          </div>
          <h2 className="text-h1 font-bold text-white leading-tight">
             Ready to Source Reliable <br /> Buffalo Limed Pelts?
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
             Tell us your monthly requirement and we will respond within 24 hours with custom specifications and competitive export pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
             <Link href="#inquiry-form" className="px-10 py-5 bg-white text-[var(--c-primary)] rounded-lg font-bold text-base hover:bg-white/90 hover:-translate-y-1 transition-all shadow-xl">
                Request Quote
             </Link>
             <a 
               href="https://wa.me/91XXXXXXXXXX" 
               target="_blank" 
               className="btn-whatsapp px-10 py-5 font-bold text-base shadow-xl"
             >
                WhatsApp Now
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
