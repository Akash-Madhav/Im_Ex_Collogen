'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import gsap from 'gsap';

import { ScrollSection } from '@/components/shared/ScrollSection';

const mainSpecs = [
  { field: 'Material Source', spec: 'Bubalus Bubalis (Indian Buffalo)' },
  { field: 'Chemical Process', spec: 'Standardized Calcium Hydroxide Liming' },
  { field: 'Fiber Integrity', spec: '98.5% Preserved Collagen Matrix' },
  { field: 'Moisture Content', spec: '14% — 18% (Ambient Stabilized)' },
];

const shippingSpecs = [
  { label: 'Standard Load', val: '26 MT', sub: 'Per 40ft High-Cube' },
  { label: 'Packaging', val: 'Pressed Bales', sub: 'PP-Wrapped / Strapped' },
  { label: 'Hub', val: 'MAA Port', sub: 'Chennai, India' },
  { label: 'Lead Time', val: '15 Days', sub: 'Standard Dispatch' },
];

export default function ProductsPage() {
  return (
    <div className="bg-bg-primary pt-24">
      
      {/* SECTION 1: PRODUCT HERO */}
      <ScrollSection>
        <section className="border-b border-white/5 overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 lg:py-32 items-center">
              <div className="product-reveal space-y-8">
                <Badge variant="accent" dot>Industrial Raw Material</Badge>
                <h1 className="text-[clamp(48px,6.5vw,84px)] font-display font-bold leading-[1.02] text-text-premium tracking-tighter">
                  Buffalo Dried <br /><span className="italic text-accent-gold drop-shadow-sm">Limed Pelts.</span>
                </h1>
                <p className="text-text-muted text-xl leading-relaxed max-w-[500px] font-body opacity-90">
                  Engineered specifically for the high-yield extraction of Type I and Type III collagen. Our proprietary liming cycle maintains molecular chain integrity.
                </p>
                <div className="flex gap-4">
                  <Button size="lg">Request Technical COA</Button>
                  <Button variant="ghost" size="lg">Batch History</Button>
                </div>
              </div>
              <div className="relative h-[550px] rounded-sm overflow-hidden product-reveal shadow-2xl ring-1 ring-white/10 group">
                <Image 
                  src="/industrial_pelts_hero.png" 
                  alt="Industrial Pelts" 
                  fill 
                  className="object-cover transition-all duration-[1.2s] ease-premium group-hover:scale-110" 
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-primary/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 2: TECHNICAL SPECS */}
      <ScrollSection>
        <section className="section-padding border-b border-border-subtle bg-bg-secondary">
          <div className="container-custom">
            <SectionHeading kicker="Engineering Blueprint" title="Detailed Specifications" className="mb-16" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8 space-y-2">
                {mainSpecs.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-6 border-b border-border-subtle group hover:px-4 transition-all duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim">{item.field}</span>
                    <span className="text-text-premium font-display font-medium">{item.spec}</span>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-4 p-8 glass-elevated border border-accent-gold/10">
                <h4 className="text-accent-gold font-display font-bold mb-4">Batch Consistency</h4>
                <p className="text-sm text-text-dim font-body leading-relaxed">
                  Our Chennai facility monitors nitrogen levels and residual ash in every batch to meet tier-1 pharmaceutical protocols.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 3: LOGISTICS GRID */}
      <ScrollSection>
        <section className="section-padding border-b border-border-subtle">
          <div className="container-custom">
            <SectionHeading align="center" kicker="Supply Chain" title="Logistics Parameters" className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shippingSpecs.map((item, i) => (
                <Card key={i} variant="glass" className="text-center group hover:-translate-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[.25em] text-text-dim mb-4">{item.label}</p>
                  <p className="text-2xl font-display font-bold text-accent-gold mb-1">{item.val}</p>
                  <p className="text-[11px] text-text-dim italic">{item.sub}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 4: QUALITY ASSURANCE */}
      <ScrollSection>
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <SectionHeading kicker="Compliance" title="Quality Assurance Standards" />
                <div className="space-y-4">
                  {['Nitrogen Content > 15%', 'Ash Residue < 2%', 'Zero Preservative Use', 'Environmentally Stabilized'].map((point, i) => (
                    <div key={i} className="flex items-center gap-4 text-text-muted font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <Card variant="elevated" padding="lg" className="border-accent-gold/20">
                <h4 className="text-xl font-display font-bold text-text-premium mb-4 italic">Verification Protocol</h4>
                <p className="text-text-dim text-sm leading-relaxed mb-8">
                  Every shipment is accompanied by a laboratory certificate of analysis (COA) confirming fiber density and moisture balance.
                </p>
                <Button variant="secondary" className="w-full">Download Sample COA</Button>
              </Card>
            </div>
          </div>
        </section>
      </ScrollSection>

    </div>
  );
}
