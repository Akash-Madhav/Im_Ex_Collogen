'use client';

import { useEffect, useRef } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Anchor, Globe2, Ship, Truck } from 'lucide-react';
import gsap from 'gsap';

const regions = [
  { name: 'Southeast Asia', desc: 'Indonesia, Vietnam, Thailand', leadTime: '12-15 Days', icon: Globe2 },
  { name: 'Europe', desc: 'Germany, Italy, UK', leadTime: '24-28 Days', icon: Globe2 },
  { name: 'East Asia', desc: 'China, Japan, South Korea', leadTime: '15-18 Days', icon: Globe2 },
  { name: 'Americas', desc: 'USA, Brazil, Mexico', leadTime: '30-35 Days', icon: Globe2 },
];

export default function ExportMarkets() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.logistics-card');
      gsap.from(items, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  return (
    <section className="bg-brand-background section-padding border-t border-brand-primary/5 relative">
      <div className="max-w-7xl mx-auto space-y-16" ref={containerRef}>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading 
            kicker="Global Logistics"
            title="Fast Container Loading from Chennai Port"
            className="max-w-2xl"
          />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-brand-body/80 bg-white px-5 py-3 shadow-sm border border-brand-primary/5">
              <Ship className="text-brand-accent w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">FOB / CIF Options</span>
            </div>
            <div className="flex items-center gap-3 text-brand-body/80 bg-white px-5 py-3 shadow-sm border border-brand-primary/5">
              <Anchor className="text-brand-accent w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Customs Cleared</span>
            </div>
          </div>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div key={region.name} className="logistics-card bg-white p-8 border border-brand-primary/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-full bg-brand-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <region.icon size={18} className="text-brand-accent" />
              </div>
              <h4 className="text-xl font-playfair font-bold text-brand-primary mb-2 py-1 border-b border-brand-primary/10">
                {region.name}
              </h4>
              <p className="text-brand-body/70 text-sm mb-4">
                {region.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent bg-brand-accent/5 px-3 py-1.5 w-fit">
                <Truck size={14} />
                <span>Est. {region.leadTime}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
