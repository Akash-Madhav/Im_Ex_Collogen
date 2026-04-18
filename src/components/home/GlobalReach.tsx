'use client';

import { useEffect, useRef } from 'react';
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
  { tag: 'Healthcare', title: 'Precision Collagen', desc: 'Medical-grade derivatives for biomedical research.' },
  { tag: 'Nutrition', title: 'Edible Gelatin', desc: 'High-yield raw material for protein density.' },
  { tag: 'Pet Care', title: 'Natural Supplements', desc: 'Sustainable sorted material for safe chews.' },
  { tag: 'Technical', title: 'Industrial Glue', desc: 'Reliable supply for adhesive manufacturing.' },
];

const markets = [ 'European Union', 'South East Asia', 'United Kingdom', 'United States', 'Middle East' ];

export default function GlobalReach() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section ref={containerRef} className="section-padding bg-bg-secondary overflow-hidden border-b border-border-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-12 mb-10">
            <SectionHeading 
              align="center"
              kicker="International Footprint"
              title={<>Global Sectors. <span className="italic">Authorized Supply.</span></>}
            />
          </div>

          {/* Applications Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectors.map((sector, i) => (
              <Card key={i} variant="glass" interactive className="reach-card">
                <Badge variant="outline" className="mb-4">{sector.tag}</Badge>
                <h3 className="text-xl font-display font-medium text-text-premium mb-3">{sector.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed font-body">{sector.desc}</p>
              </Card>
            ))}
          </div>

          {/* Markets Sidebar */}
          <div className="lg:col-span-4 space-y-8 reach-card">
            <h4 className="text-[13px] font-body font-bold uppercase tracking-[0.2em] text-accent-gold">Primary Export Zones</h4>
            <div className="space-y-4">
              {markets.map((market, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="h-[1px] w-0 group-hover:w-8 bg-accent-gold transition-all duration-500" />
                  <span className="text-text-muted font-body text-[15px] group-hover:text-text-premium transition-colors cursor-default">
                    {market}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-8 block">
              <Button href="/products">Technical Specifications</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
