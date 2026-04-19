'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const metrics = [
  { value: 800, suffix: '+ Tons', label: 'Monthly Supply' },
  { value: 100, suffix: '%', label: 'Govt. Certified' },
  { value: 15, suffix: '+', label: 'Global Markets' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.2,
    duration: 1.2
  });

  return (
    <section ref={containerRef} className="snap-section h-screen relative flex flex-col justify-between overflow-hidden bg-[var(--c-dark)]">
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

      <div className="container-custom flex-1 flex flex-col justify-center relative z-10 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="z-10">
            <div className="flex items-center gap-2 text-[11px] xl:text-[12px] font-bold tracking-[0.08em] uppercase text-[var(--c-primary-light)] mb-3 lg:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-primary-light)] animate-pulse" />
              Buffalo Limed Pelts Exporter · India
            </div>

            <h1 className="text-hero font-bold text-white leading-[1] mb-3 lg:mb-5">
              Export-Quality <br />
              <span className="text-[var(--c-primary-light)]">Buffalo Limed Pelts</span> <br />
              Precision Industrial Supply
            </h1>

            <p className="text-base xl:text-lg text-white/70 leading-relaxed max-w-[550px] mb-6 lg:mb-8">
              Specialized source for high-purity collagen raw materials and pet food grade pelts. Delivering industrial excellence across 15+ global markets with 800+ ton monthly capacity.
            </p>

            <div className="flex flex-wrap gap-4 mb-4 lg:mb-8">
              <MagneticButton className="w-auto h-auto">
                <Link href="/contact" className="btn-primary bg-white text-[var(--c-dark)] hover:bg-white/90 border-none shadow-xl py-2.5 xl:py-3 px-8 xl:px-10 text-[11px] xl:text-xs">
                  Request Quote
                </Link>
              </MagneticButton>
              <MagneticButton className="w-auto h-auto">
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  className="btn-whatsapp bg-transparent border-2 border-white/20 hover:bg-white/10 py-2.5 xl:py-3 px-8 xl:px-10 text-[11px] xl:text-xs"
                >
                  WhatsApp Expert
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column Visual Overlay */}
          <div className="hidden lg:block relative p-8 xl:p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl skew-x-[-2deg] rotate-[-2deg]">
            <div className="space-y-4 xl:space-y-5">
              <div className="w-12 h-1 bg-[var(--c-primary-light)]" />
              <h3 className="text-lg xl:text-xl font-bold text-white">Advanced Industrial <br/>Processing</h3>
              <p className="text-xs xl:text-sm text-white/60">Our facilities ensure strictly controlled pH levels and uniform liming protocols for premium grade output.</p>
              <Link href="/quality" className="inline-flex items-center gap-2 text-[var(--c-primary-light)] font-bold text-[9px] xl:text-[10px] uppercase tracking-[0.2em] hover:gap-4 transition-all">
                Quality Protocol →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Footer Metrics */}
      <div className="container-custom py-4 xl:py-6 relative z-10">
        <div className="grid grid-cols-3 gap-8 py-4 xl:py-6 border-t border-white/10">
          {metrics.map((metric, i) => (
            <MetricSmall key={i} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricSmall({ metric }: { metric: any }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, metric.value);

  return (
    <div className="text-center">
      <span className="block text-3xl md:text-4xl font-black text-white">
        <span ref={ref}>{metric.value}</span>{metric.suffix}
      </span>
      <span className="block text-[10px] md:text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">
        {metric.label}
      </span>
    </div>
  );
}

