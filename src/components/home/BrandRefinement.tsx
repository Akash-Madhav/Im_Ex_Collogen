'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Card } from '../shared/Card';
import { Badge } from '../shared/Badge';
import { SectionHeading } from '../shared/SectionHeading';
import { CardTilt } from '../animations/CardTilt';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const applications = [
  { title: 'Pharmaceutical', desc: 'Type I Collagen extraction with zero-chemical residue.', img: '/industrial_selection.png' },
  { title: 'Edible Gelatin', desc: 'Food-grade compliant processing for global confectionary.', img: '/product_pelts_bundles.png' },
  { title: 'Cosmeceuticals', desc: 'Hydrolyzed protein sourcing for premium skincare.', img: '/industrial_pelts_hero.png' },
  { title: 'Technical Industry', desc: 'Standardized raw input for high-tensile binding.', img: '/infrastructure_hub.png' },
];

export default function BrandRefinement() {
  const gridRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useGsapReveal(gridRef, {
    from: { y: 40, opacity: 0, scale: 0.97 },
    stagger: 0.12,
    duration: 0.7,
    ease: 'power3.out',
    start: 'top 84%'
  });

  useGsapReveal(pillarsRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1,
    duration: 0.6
  });

  return (
    <section className="section-padding bg-bg-secondary border-y border-white/5">
      <div className="container-custom">
        <div className="mb-20">
          <SectionHeading 
            kicker="The Standard of Refinement"
            title={<>Industrial Grade. <br /><span className="italic text-accent-gold">Laboratory Precision.</span></>}
          />
        </div>

        {/* Quality Pillars */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {[
            { label: 'Integrity', val: 'Fiber chain preservation focused processing.' },
            { label: 'Traceability', val: 'Digital batch logging from source to port.' },
            { label: 'Consistency', val: 'Standardized liming cycles for batch parity.' },
            { label: 'Compliance', val: 'Aligned with global pharmaceutical protocols.' },
          ].map((item, i) => (
            <div key={i} data-reveal-item className="space-y-4">
              <Badge variant="outline" className="text-[10px]">{item.label}</Badge>
              <p className="text-text-premium font-display font-medium leading-relaxed">{item.val}</p>
            </div>
          ))}
        </div>

        {/* Application Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, i) => (
            <CardTilt key={i} data-reveal-item>
              <Card variant="glass" className="h-full group overflow-hidden">
                <div className="relative h-48 mb-6 overflow-hidden rounded-sm">
                  <Image 
                    src={app.img} 
                    alt={app.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-lg font-display font-bold text-text-premium mb-3">{app.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{app.desc}</p>
              </Card>
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
