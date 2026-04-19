'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Badge } from '../shared/Badge';
import { SectionHeading } from '../shared/SectionHeading';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const regions = [
  { name: 'European Union', ports: 'Rotterdam, Antwerp, Hamburg', delay: 0 },
  { name: 'South East Asia', ports: 'Haiphong, Bangkok, Port Klang', delay: 100 },
  { name: 'Middle East', ports: 'Jebel Ali, Jeddah, Aqaba', delay: 200 },
  { name: 'North America', ports: 'Long Beach, Newark, Savannah', delay: 300 },
];

export default function GlobalReach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const regionsRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    start: 'top 85%'
  });

  useGsapReveal(regionsRef, {
    from: { opacity: 0, x: -10 },
    stagger: 0.07,
    start: 'top 80%'
  });

  return (
    <section ref={containerRef} className="section-padding bg-bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <SectionHeading 
              kicker="Logistics Authority"
              title={<>A Reliable Link in the <br /><span className="italic text-accent-gold">Global Supply Chain.</span></>}
            />
            
            <div ref={regionsRef} className="space-y-10">
              {regions.map((region, i) => (
                <div key={i} data-reveal-item className="group flex items-start gap-6 border-l border-white/5 pl-8 hover:border-accent-gold transition-colors duration-500">
                  <span className="text-[10px] font-mono font-bold text-accent-gold/40 mt-1">0{i+1}</span>
                  <div>
                    <h4 className="text-xl font-display font-bold text-text-premium mb-2 group-hover:text-accent-gold transition-colors">{region.name}</h4>
                    <p className="text-sm text-text-dim leading-relaxed font-body">{region.ports}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-surface-2 rounded-sm border border-white/5 overflow-hidden group">
            <div className="absolute inset-0 z-0">
               <Image 
                src="/global_trade_cargo.png"
                alt="Global Supply Chain Logistics"
                fill
                className="object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[2s]"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-transparent to-bg-primary/20" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="relative w-full h-full border border-white/10 rounded-full animate-pulse-slow">
                 <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-gold rounded-full shadow-[0_0_15px_rgba(200,146,42,0.8)]" />
                 <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent-gold/60 rounded-full" />
                 <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent-gold/40 rounded-full" />
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Badge variant="glass" className="backdrop-blur-md">Active Global Nodes</Badge>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
