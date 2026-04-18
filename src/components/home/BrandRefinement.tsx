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

const stats = [
  { number: '12', unit: 'YR', label: 'Export Authority' },
  { number: '300', unit: '+', label: 'Annual Shipments' },
  { number: '100', unit: '%', label: 'Process Audit' },
];

const pillars = [
  { title: 'Selection', desc: 'Automated weight grading and visual fiber inspection.' },
  { title: 'Controlled Liming', desc: 'Calibrated pH cycles for protein retention.' },
  { title: 'Precision Mechanicals', desc: 'Dual-stage Scraper dehairing for surface integrity.' },
  { title: 'Hygienic Drying', desc: 'Ambient cycles achieving 14-18% moisture equilibrium.' },
];

export default function BrandRefinement() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.refinement-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-bg-primary overflow-hidden border-b border-border-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-12">
            <SectionHeading 
              kicker="Quality Architecture"
              title={<>Refined Processing. <span className="italic">Unmatched Consistency.</span></>}
            />
          </div>

          {/* Stats & Context */}
          <div className="lg:col-span-5 space-y-12">
            <p className="text-text-muted text-lg leading-relaxed font-body">
              IndoPelts International specializes in the rigorous processing of buffalo dried limed pelts, bridging the gap between raw industrial availability and high-spec global manufacturing standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="refinement-card group">
                  <div className="text-[32px] font-display font-bold text-accent-gold leading-none mb-1">
                    {stat.number}<span className="text-sm font-mono text-text-dim">{stat.unit}</span>
                  </div>
                  <div className="text-[10px] font-body font-bold uppercase tracking-[0.1em] text-text-dim">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" href="/achievements">
              Operational Roadmap
            </Button>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <Card key={i} variant="glass" padding="md" className="refinement-card group cursor-default">
                <Badge variant="accent" className="mb-6">0{i+1}</Badge>
                <h4 className="text-lg font-display font-bold text-text-premium mb-3">{pillar.title}</h4>
                <p className="text-sm text-text-dim font-body leading-relaxed group-hover:text-text-muted transition-colors">
                  {pillar.desc}
                </p>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
