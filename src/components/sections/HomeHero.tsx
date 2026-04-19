'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';


const metrics = [
  { value: 800, suffix: '+ Tons', label: 'Monthly Supply' },
  { value: 100, suffix: '%', label: 'Govt. Certified' },
  { value: 15, suffix: '+', label: 'Global Markets' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1,
    duration: 1
  });

  return (
    <section ref={containerRef} className="shared-section-fit bg-[var(--c-dark)]">
      {/* Aesthetic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/home_hero_aesthetic.png" 
          alt="Home Hero Aesthetics" 
          fill 
          className="object-cover brightness-50 contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[var(--c-dark)]" />
      </div>

      <div className="container-custom h-full flex flex-col justify-between relative z-10 pt-20 lg:pt-32 pb-4 lg:pb-8 overflow-hidden">
        {/* Main Content Space */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="z-10">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] mb-4 lg:mb-6 tracking-tight">
                Export-Quality <br />
                <span className="text-[var(--c-primary-light)]">Buffalo Limed Pelts</span> <br />
                Precision Industrial Supply
              </h1>

              <p className="text-sm lg:text-base xl:text-lg text-white/70 leading-relaxed max-w-[550px] mb-6 lg:mb-8 font-medium">
                <span className="text-white font-bold">Aroon Blossom Impex</span> supplies high-quality buffalo limed pelts to leading <span className="text-[var(--c-primary-light)] font-bold italic">collagen and pet food manufacturers</span> across Asia and Europe.
              </p>
            </div>

            {/* Right Column Visual Overlay */}
            <div className="hidden lg:block relative p-6 xl:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              <div className="space-y-3 xl:space-y-4">
                <div className="w-10 h-1 bg-[var(--c-primary-light)]" />
                <h3 className="text-sm xl:text-base font-bold text-white">Advanced Industrial <br/>Processing</h3>
                <p className="text-[10px] xl:text-[11px] text-white/60 leading-relaxed">Our facilities ensure strictly controlled pH levels and uniform liming protocols for premium grade output.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Footer Metrics */}
        <div className="py-2 xl:py-4 border-t border-white/10 mt-auto">
          <div className="grid grid-cols-3 gap-8 py-2 xl:py-4">
            {metrics.map((metric, i) => (
              <MetricSmall key={i} metric={metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricSmall({ metric }: { metric: any }) {
  return (
    <div className="text-center">
      <span className="block text-3xl md:text-4xl font-black text-white">
        {metric.value}{metric.suffix}
      </span>
      <span className="block text-[10px] md:text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">
        {metric.label}
      </span>
    </div>
  );
}


