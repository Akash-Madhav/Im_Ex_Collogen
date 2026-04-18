'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const regions = [
  {
    name: 'South East Asia',
    desc: 'Vietnam, Thailand, Indonesia',
    transit: '8 - 12 DAYS',
  },
  {
    name: 'East Asia',
    desc: 'China, Taiwan, Japan',
    transit: '14 - 18 DAYS',
  },
  {
    name: 'Europe',
    desc: 'Italy, Spain, Germany',
    transit: '28 - 35 DAYS',
  },
  {
    name: 'Americas',
    desc: 'USA, Brazil, Mexico',
    transit: '40 - 45 DAYS',
  },
];

export default function ExportMarkets() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.logistics-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-image-bg py-24 md:py-32"
    >
      {/* Logistics Background */}
      <style jsx>{`
        section::before {
          background-image: url('/global_trade_cargo.png');
          opacity: 0.2;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-6">
              Global Supply
            </h5>
            <h2 className="text-[clamp(32px,4vw,48px)] font-display font-medium text-text-primary leading-[1.1]">
              Fast Container Loading <br />
              <span className="italic">from Chennai Port.</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="font-mono text-[32px] font-bold text-accent">98.4%</p>
            <p className="text-[11px] font-semibold text-text-tertiary tracking-widest uppercase mt-1">On-Time Departure</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <div 
              key={i}
              className="logistics-card p-8 bg-[#0A0C0B]/70 border border-border rounded-lg backdrop-blur-[8px] transition-all duration-300 hover:border-accent/30 hover:scale-[1.02] group"
            >
              <h4 className="region-name font-body font-bold text-[16px] text-text-primary">
                {region.name}
              </h4>
              <p className="region-countries text-[13px] text-text-tertiary mt-1 mb-6">
                {region.desc}
              </p>
              <div className="transit-time inline-block px-3 py-1 rounded-full border border-accent/30 text-accent font-mono text-[11px]">
                {region.transit}
              </div>
            </div>
          ))}
        </div>

        {/* Global Hub Map Callout */}
        <div className="mt-16 p-8 bg-surface-2 border border-border rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-text-primary font-bold">Port Information: Chennai (MAA)</p>
            <p className="text-sm text-text-tertiary">Strategic proximity to primary tanning hubs for reduced inland emissions.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping mb-2" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-text-tertiary">Live Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
