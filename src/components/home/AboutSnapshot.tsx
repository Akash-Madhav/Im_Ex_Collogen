'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { initCounter } from '@/lib/animations';
import { SectionHeading } from '@/components/shared/SectionHeading';

export default function AboutSnapshot() {
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (stat1Ref.current) initCounter(stat1Ref.current, 10, '+');
    if (stat2Ref.current) initCounter(stat2Ref.current, 1500, '+');
    if (stat3Ref.current) initCounter(stat3Ref.current, 10, '+');
  }, []);

  return (
    <section className="bg-brand-background section-padding relative">
      {/* Decorative Blueprint Lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-brand-primary/5 hidden lg:block" />
      <div className="absolute top-0 right-[10%] w-[1px] h-full bg-brand-primary/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* Text Content - Left Side */}
        <div className="lg:col-span-5 space-y-12">
          <SectionHeading 
            kicker="Crafting Industrial Foundations"
            title="India's Trusted Partner in Buffalo Hide Derivatives"
          />
          
          <div className="space-y-8 text-brand-body">
            <p className="text-xl font-playfair italic leading-relaxed text-brand-primary">
              <span className="text-5xl float-left mr-3 mt-1 font-black text-brand-accent not-italic">W</span>
              e are an Indian supplier specializing in the processing and export of buffalo dried limed pelts.
            </p>
            <p className="font-inter leading-relaxed opacity-90">
              Our operations supply consistent, high-quality raw materials to collagen manufacturers, gelatin producers, pet food processors, and traditional food industries globally.
            </p>
          </div>

          <Link 
            href="/achievements" 
            className="inline-flex items-center gap-4 text-brand-primary font-bold group pt-4"
          >
            <span className="relative overflow-hidden">
              <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">View Our Credentials</span>
              <span className="absolute left-0 top-0 inline-block transform translate-y-full group-hover:translate-y-0 text-brand-accent transition-transform duration-300">View Our Credentials</span>
            </span>
            <div className="w-12 h-[1px] bg-brand-primary/30 group-hover:bg-brand-accent group-hover:w-16 transition-all duration-300" />
          </Link>
        </div>

        {/* Masonry Stats Grid - Right Side */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6">
          {/* Secondary Stat 1 */}
          <div className="bg-brand-primary p-8 md:p-10 shadow-industrial scale-100 hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-500">
            <span ref={stat1Ref} className="text-5xl md:text-6xl font-playfair font-black text-white block mb-2">0</span>
            <p className="text-brand-accent uppercase tracking-[0.1em] text-xs font-bold">Years in Hide Processing</p>
          </div>
          
          {/* Secondary Stat 2 */}
          <div className="bg-white p-8 md:p-10 shadow-industrial scale-100 hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-500 border border-brand-primary/5">
            <span ref={stat3Ref} className="text-5xl md:text-6xl font-playfair font-black text-brand-primary block mb-2">0</span>
            <p className="text-brand-body uppercase tracking-[0.1em] text-xs font-bold opacity-70">Countries Served</p>
          </div>

          {/* Large Anchor Stat */}
          <div className="col-span-2 bg-white p-12 shadow-industrial scale-100 hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-500 border border-brand-primary/5">
            <div className="flex items-baseline gap-2 mb-2">
              <span ref={stat2Ref} className="text-6xl md:text-8xl font-playfair font-black text-brand-primary tracking-tighter">0</span>
              <span className="text-2xl font-black text-brand-accent">MT</span>
            </div>
            <p className="text-brand-body uppercase tracking-[0.2em] text-sm font-bold opacity-70">Monthly Export Capacity</p>
            <div className="w-full h-[1px] bg-brand-primary/10 mt-8 mb-6" />
            <p className="text-sm text-brand-body/60 max-w-sm">Consistent bulk supply capabilities ensuring uninterrupted production lines for our global partners.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
