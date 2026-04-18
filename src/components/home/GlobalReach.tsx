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

const sectors = [
  { tag: 'Healthcare', title: 'Precision Collagen', desc: 'Medical-grade derivatives for research.' },
  { tag: 'Nutrition', title: 'Edible Gelatin', desc: 'High-yield raw material for density.' },
  { tag: 'Pet Care', title: 'Natural Supplements', desc: 'Sustainable material for safe chews.' },
  { tag: 'Technical', title: 'Industrial Glue', desc: 'Reliable supply for adhesives.' },
];

const markets = [
  { name: 'European Union', image: '/market_eu.png' },
  { name: 'United States', image: '/market_usa.png' },
  { name: 'South East Asia', image: '/market_seasia.png' },
  { name: 'Middle East', image: '/market_meast.png' },
];

export default function GlobalReach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBg, setActiveBg] = useState(markets[0].image);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reach-card', {
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
      className="relative section-padding overflow-hidden border-b border-border-subtle transition-colors duration-1000"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-12 mb-10">
            <SectionHeading 
              align="center"
              kicker="International Footprint"
              title={<>Global Sectors. <span className="italic">Authorized Supply.</span></>}
            />
          </div>

          {/* Applications Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
            {sectors.map((sector, i) => (
              <Card key={i} variant="glass" interactive className="reach-card">
                <Badge variant="outline" className="mb-4">{sector.tag}</Badge>
                <h3 className="text-lg font-display font-medium text-text-premium mb-3">{sector.title}</h3>
                <p className="text-xs text-text-dim leading-relaxed font-body">{sector.desc}</p>
              </Card>
            ))}
          </div>

          {/* Markets Visual Selectors */}
          <div className="lg:col-span-12">
            <h4 className="text-[11px] font-body font-bold uppercase tracking-[0.3em] text-accent-gold mb-12 text-center opacity-70">
              Interactive Export Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reach-card">
              {markets.map((market, i) => (
                <div 
                  key={i} 
                  onMouseEnter={() => setActiveBg(market.image)}
                  className={`group relative h-[180px] rounded-sm overflow-hidden border transition-all duration-500 cursor-pointer ${activeBg === market.image ? 'border-accent-gold ring-1 ring-accent-gold' : 'border-white/10 opacity-70 hover:opacity-100'}`}
                >
                  <Image 
                    src={market.image}
                    alt={market.name}
                    fill
                    className={`object-cover transition-all duration-700 ${activeBg === market.image ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0'}`}
                  />
                  <div className={`absolute inset-0 bg-bg-primary/40 transition-opacity ${activeBg === market.image ? 'opacity-0' : 'opacity-100'}`} />
                  
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className="text-text-premium font-display text-lg tracking-tight">
                      {market.name}
                    </span>
                    <div className={`h-1 bg-accent-gold transition-all duration-500 ${activeBg === market.image ? 'w-full' : 'w-0'}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-20 flex justify-center">
              <Button href="/products" variant="secondary">Technical Specifications Matrix</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
