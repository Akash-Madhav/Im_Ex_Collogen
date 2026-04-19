'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function AboutSnapshot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="snap-section bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8 z-10">
            <div>
              <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
                ABOUT US
              </div>
              <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
                India's Trusted Bulk Exporter of Buffalo Limed Pelts
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--c-text-secondary)] leading-relaxed">
              <p>
                Aroon Blossom Impex is a government-registered exporter of buffalo limed pelts supplying collagen manufacturers and pet food companies across global markets with consistent quality and reliable bulk supply.
              </p>
              <p>
                Our processing facility handles up to 800+ tons per month with controlled liming, grading, and export-ready packing for 20ft and 40ft containers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                'APEDA & CAPEXIL Certified',
                'Consistent Chemical Composition',
                'Custom Processing Capability',
                'Direct Export — No Middlemen'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[15px] font-bold text-[var(--c-text-primary)]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--c-primary-light)] text-[var(--c-primary)] flex items-center justify-center text-[10px]">✔</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/about" className="text-[var(--c-primary)] font-bold border-b-2 border-transparent hover:border-[var(--c-primary)] transition-all pb-1 group flex items-center gap-2 w-fit">
                Learn More About Us 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
             <Image 
                src="/images/factory_exterior.png" 
                alt="Aroon Blossom Impex Facility" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-[var(--c-primary)]/10 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-700" />
             
             {/* Industrial Badge */}
             <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-[var(--c-border)] z-20 max-w-[240px] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="text-[11px] font-bold text-[var(--c-primary)] uppercase tracking-wider mb-2">Facility Capacity</div>
                <div className="text-3xl font-bold text-[var(--c-text-primary)] mb-1">800+ Tons</div>
                <p className="text-[11px] text-[var(--c-text-muted)] font-medium leading-tight">Monthly Liming & Grading Capacity at our Chennai Hub.</p>
             </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Texture */}
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-[var(--c-surface)] opacity-50 -z-10 skew-x-[12deg] -translate-x-1/2" />
    </section>
  );
}
