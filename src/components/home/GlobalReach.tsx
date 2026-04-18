'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '../shared/SectionHeading';
import { Card } from '../shared/Card';
import { Badge } from '../shared/Badge';
import { Button } from '../shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const markets = [
  { name: 'European Union', image: '/market_eu.png' },
  { name: 'United States', image: '/market_usa.png' },
  { name: 'South East Asia', image: '/market_seasia.png' },
  { name: 'Middle East', image: '/market_meast.png' },
];

export default function GlobalReach() {
  const [activeBg, setActiveBg] = useState(markets[0].image);

  return (
    <section 
      className="relative py-32 lg:py-48 overflow-hidden border-b border-white/5 transition-colors duration-1000"
    >
      {/* IMMERSIVE DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {markets.map((market, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeBg === market.image ? 'opacity-30' : 'opacity-0'}`}
          >
            <Image 
              src={market.image}
              alt={market.name}
              fill
              className="object-cover grayscale"
            />
          </div>
        ))}
        {/* Overlays for readability */}
        <div className="absolute inset-0 z-10 bg-bg-primary/85 md:bg-bg-primary/90" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary opacity-60" />
      </div>

      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-12 mb-12 lg:mb-20">
            <SectionHeading 
              align="center"
              kicker="International Footprint"
              title={<>Global Reach. <span className="italic text-accent-gold drop-shadow-sm">Authorized Supply.</span></>}
            />
          </div>

          {/* Markets Visual Selectors */}
          <div className="lg:col-span-12">
            <h4 className="text-[11px] font-body font-bold uppercase tracking-[0.4em] text-accent-gold mb-12 text-center opacity-70">
              Interactive Export Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {markets.map((market, i) => (
                <div 
                  key={i} 
                  onMouseEnter={() => setActiveBg(market.image)}
                  className={`group relative h-[220px] rounded-sm overflow-hidden border transition-all duration-500 cursor-pointer shadow-xl ${activeBg === market.image ? 'border-accent-gold ring-1 ring-accent-gold/50' : 'border-white/10 opacity-70 hover:opacity-100'}`}
                >
                  <Image 
                    src={market.image}
                    alt={market.name}
                    fill
                    className={`object-cover transition-all duration-[1.5s] ease-premium ${activeBg === market.image ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0'}`}
                  />
                  <div className={`absolute inset-0 bg-bg-primary/40 transition-opacity duration-700 ${activeBg === market.image ? 'opacity-0' : 'opacity-100'}`} />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-end justify-between items-center mb-2">
                       <span className="text-text-premium font-display text-xl tracking-tight relative z-10">
                        {market.name}
                      </span>
                    </div>
                    <div className={`h-0.5 bg-accent-gold transition-all duration-700 ${activeBg === market.image ? 'w-full' : 'w-0'}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-24 flex justify-center">
              <Button href="/products" variant="secondary" size="lg">Technical Specifications Matrix</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
