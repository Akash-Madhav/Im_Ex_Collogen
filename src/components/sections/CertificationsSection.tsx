'use client';

import React from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const certs = [
  {
    title: 'APEDA certified',
    desc: 'Agricultural and Processed Food Products Export Development Authority.',
    image: '/images/apeda_logo.png',
    link: '/certificates/apeda.pdf'
  },
  {
    title: 'CAPEXIL Member',
    desc: 'Chemical and Allied Products Export Promotion Council registered exporter.',
    image: '/images/capexil_logo.png',
    link: '/certificates/capexil.pdf'
  }
];

export default function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 40, opacity: 0 },
    stagger: 0.2
  });

  return (
    <section ref={containerRef} className="snap-section bg-[var(--c-surface)] relative overflow-hidden flex flex-col justify-center">
      <div className="container-custom py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--c-primary-light)] text-[var(--c-primary)] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            Global Compliance
          </div>
          <h2 className="text-h2 font-bold text-[var(--c-text-primary)] leading-tight">
            Government Registered & <br />
            <span className="text-[var(--c-primary)] text-5xl italic font-serif">Certified Exporter</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-transparent hover:border-[var(--c-primary)]/20 transition-all duration-700 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-primary-light)] rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150 group-hover:rotate-12" />
              
              <div className="relative w-32 h-32 lg:w-44 lg:h-44 mb-8 transition-transform duration-700 group-hover:scale-110">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[var(--c-text-primary)] uppercase tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-[15px] text-[var(--c-text-secondary)] leading-relaxed max-w-[280px]">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-10">
                <a 
                  href={cert.link} 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[12px] font-bold text-[var(--c-primary)] uppercase tracking-widest border-b-2 border-[var(--c-primary)]/10 hover:border-[var(--c-primary)] transition-all pb-1 group/btn"
                >
                  View Certificate
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </a>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="w-2 h-2 rounded-full bg-[var(--c-primary)] animate-pulse" />
                <span className="text-[10px] font-bold text-[var(--c-primary)] uppercase tracking-wider">Verified State</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[13px] text-[var(--c-text-muted)] font-medium max-w-md mx-auto">
            Our facility and processes are strictly audited for compliance with Indian export standards and buyer-specific quality protocols.
          </p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 border-[40px] border-[var(--c-primary)] rounded-full" />
      </div>
    </section>
  );
}
