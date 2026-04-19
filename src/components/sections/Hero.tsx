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
    <section ref={containerRef} className="snap-section min-h-screen flex flex-col justify-between bg-white pt-32 pb-10 overflow-hidden">
      <div className="container-custom flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="z-10">
            <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] uppercase text-[var(--c-primary)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-primary)] animate-pulse" />
              Buffalo Limed Pelts Exporter · India
            </div>

            <h1 className="text-hero font-bold text-[var(--c-text-primary)] leading-[1.1] mb-6">
              Export-Quality <br />
              <span className="text-[var(--c-primary)]">Buffalo Limed Pelts</span> <br />
              For Collagen & Pet Food
            </h1>

            <p className="text-lg text-[var(--c-text-secondary)] leading-relaxed max-w-[500px] mb-8">
              Consistent bulk supply up to 800+ tons/month with certified export compliance. Custom processing available to meet your precise industrial specifications.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <MagneticButton className="w-auto h-auto">
                <Link href="#inquiry-form" className="btn-primary">
                  Request Quote
                </Link>
              </MagneticButton>
              <MagneticButton className="w-auto h-auto">
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  className="btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[450px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl skew-x-[-1deg] rotate-[-1deg] transition-all duration-700">
            <Image
              src="/images/drying_yard.png"
              alt="Buffalo Limed Pelts Processing"
              fill
              className="object-cover brightness-90"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero Footer Metrics */}
      <div className="container-custom py-8 border-t border-[var(--c-border)]">
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <MetricSmall key={i} metric={metric} />
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--c-primary-light)] -z-10 translate-x-1/2 skew-x-[-12deg] opacity-70" />
    </section>
  );
}

function MetricSmall({ metric }: { metric: any }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, metric.value);

  return (
    <div className="text-center">
      <span className="block text-2xl md:text-3xl font-bold text-[var(--c-primary)]">
        <span ref={ref}>{metric.value}</span>{metric.suffix}
      </span>
      <span className="block text-[10px] md:text-[11px] font-bold text-[var(--c-text-primary)] uppercase tracking-wider">
        {metric.label}
      </span>
    </div>
  );
}
