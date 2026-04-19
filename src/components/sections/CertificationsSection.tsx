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
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="snap-section h-screen bg-[var(--c-surface)] relative overflow-auto lg:overflow-hidden flex flex-col justify-center py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 xl:gap-24 items-center">
          
          <div className="space-y-10">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--c-primary-light)] text-[var(--c-primary)] text-[10px] xl:text-[11px] font-black uppercase tracking-[0.3em] mb-6">
                Institutional Trust
              </div>
              <h2 className="text-4xl xl:text-5xl font-bold text-[var(--c-text-primary)] leading-[1.05] tracking-tight mb-8">
                Globally Validated <br />
                <span className="text-[var(--c-primary)] text-6xl xl:text-7xl block mt-2">Compliance</span>
              </h2>
              <p className="text-lg text-[var(--c-text-secondary)] leading-relaxed max-w-md">
                Our operations are governed by India's apex export authorities, ensuring every ton of limed pelt meets the rigorous standards of international procurement.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <TrustPoint title="800+ Tons Monthly" desc="High-volume capability with government export clearance." />
              <TrustPoint title="Batch-Wise Analysis" desc="Third-party lab reports for every consignment." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {certs.map((cert, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-[40px] p-10 xl:p-12 shadow-2xl border border-transparent hover:border-[var(--c-primary)]/20 flex flex-col items-center text-center overflow-hidden"
              >
                <div className="relative w-32 h-32 xl:w-40 xl:h-40 mb-10">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-contain filter grayscale group-hover:grayscale-0"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl xl:text-2xl font-black text-[var(--c-text-primary)] uppercase tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[13px] xl:text-sm text-[var(--c-text-secondary)] leading-relaxed opacity-60 group-hover:opacity-100">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <a 
                    href={cert.link} 
                    target="_blank"
                    className="btn-primary py-3 px-6 text-[10px] font-bold uppercase tracking-widest rounded-full"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
}

function TrustPoint({ title, desc }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg text-[var(--c-primary)] font-bold italic">
        ★
      </div>
      <div>
        <h4 className="text-sm font-black text-[var(--c-text-primary)] uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-xs text-[var(--c-text-muted)] font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

