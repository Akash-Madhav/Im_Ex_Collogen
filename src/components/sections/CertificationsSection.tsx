'use client';

import React from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';

const certs = [
  {
    title: 'APEDA certified',
    desc: 'Agricultural and Processed Food Export Development Authority.',
    image: '/images/apeda_logo.png',
    link: '/certificates/apeda.pdf'
  },
  {
    title: 'CAPEXIL Member',
    desc: 'Chemical and Allied Products Export Promotion Council.',
    image: '/images/capexil_logo.png',
    link: '/certificates/capexil.pdf'
  }
];

export default function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 20, opacity: 0 },
    stagger: 0.1
  });

  return (
    <SectionWrapper id="certifications" className="bg-[var(--c-surface)]">
      <div ref={containerRef} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-center">
          
          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--c-primary-light)] text-[var(--c-primary)] text-[8px] font-black uppercase tracking-[0.3em] mb-4">
                Institutional Trust
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter mb-4 italic">
                Validated <br />
                <span className="text-[var(--c-primary)] NOT-italic">Compliance</span>
              </h2>
              <p className="text-sm lg:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium opacity-80 max-w-sm">
                Governed by India's apex export authorities, ensuring every ton meets the most rigorous standards.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:gap-4 pt-2">
              <TrustPoint title="800+ Tons Monthly" desc="High-volume govt. clearance." />
              <TrustPoint title="Lab Verified" desc="Consignment reports standard." />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {certs.map((cert, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-[24px] p-6 lg:p-10 shadow-lg border border-[var(--c-border)]/20 hover:border-[var(--c-primary)]/30 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="relative w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-6 shrink-0">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs lg:text-[13px] font-black text-[var(--c-text-primary)] uppercase tracking-tight leading-none">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] text-[var(--c-text-secondary)] leading-tight opacity-60">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-4 lg:mt-6">
                  <a 
                    href={cert.link} 
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-2 bg-[var(--c-surface)] text-[var(--c-primary)] text-[8px] font-black uppercase tracking-widest rounded-full border border-[var(--c-border)] hover:bg-[var(--c-primary)] hover:text-white transition-all shadow-sm"
                  >
                    View cert →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function TrustPoint({ title, desc }: any) {
  return (
    <div className="flex items-center gap-6">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg text-[var(--c-primary)] text-sm font-bold">
        ★
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-sm font-black text-[var(--c-text-primary)] uppercase tracking-widest leading-none mb-1.5">{title}</h4>
        <p className="text-xs text-[var(--c-primary)] font-medium leading-tight">{desc}</p>
      </div>
    </div>
  );
}
