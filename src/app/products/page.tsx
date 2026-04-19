'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { CardTilt } from '@/components/animations/CardTilt';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { SplitHeading } from '@/components/animations/SplitHeading';
import { gsap } from '@/lib/gsap-config';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useScrollSkew } from '@/hooks/useScrollSkew';

const mainSpecs = [
  { field: 'Material Source', spec: 'Bubalus Bubalis (Indian Buffalo)' },
  { field: 'Chemical Process', spec: 'Standardized Calcium Hydroxide Liming' },
  { field: 'Fiber Integrity', spec: '98.5% Preserved Collagen Matrix' },
  { field: 'Moisture Content', spec: '14% — 18% (Ambient Stabilized)' },
];

const industries = [
  { id: 'pharma', name: 'Pharmaceutical', content: 'High-purity collagen extraction for medical-grade gelatin. Our process guarantees zero chemical carryover, essential for surgical and injectable applications.' },
  { id: 'edible', name: 'Premium Edible', content: 'Food-safe processing for high-clarity gelatin. Ideal for the confectionery industry where transparency and bloom strength are critical parameters.' },
  { id: 'tech', name: 'Technical', content: 'High-tensile hide derivatives for technical manufacturing. Engineered for durability and consistent cross-linking density.' },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('pharma');
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);

  // Apply scroll skew to hero product image
  useScrollSkew('.hero-product-img', 4);

  useGsapReveal(specsRef, {
    from: { x: -20, opacity: 0 },
    stagger: 0.05,
  });

  useGsapReveal(featureRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1,
  });

  const handleTabChange = (id: string) => {
    if (id === activeTab || isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveTab(id);
        setIsAnimating(false);
      }
    });

    tl.to(tabContentRef.current, {
      y: 10,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in'
    });
  };

  useEffect(() => {
    if (tabContentRef.current) {
      gsap.fromTo(tabContentRef.current, 
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out', delay: 0.2 }
      );
    }
  }, [activeTab]);

  useEffect(() => {
     // Hero Image Clip-path reveal
     const heroImg = document.querySelector('.hero-product-img');
     if (heroImg) {
        gsap.fromTo(heroImg, 
          { clipPath: 'inset(0 0 0 100%)' },
          { clipPath: 'inset(0 0 0 0%)', duration: 1.5, ease: 'power4.inOut' }
        );
     }
  }, []);

  return (
    <div ref={containerRef} className="bg-bg-primary pt-24">
      
      {/* SECTION 1: PRODUCT HERO */}
      <section className="border-b border-white/5 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 lg:py-32 items-center">
            <div className="space-y-8">
              <Badge variant="accent" dot>Industrial Raw Material</Badge>
              <SplitHeading 
                tag="h1" 
                text="Buffalo Dried Limed Pelts." 
                animateOnScroll={false}
                className="text-[clamp(48px,6.5vw,84px)] font-display font-bold leading-[1.02] text-text-premium tracking-tighter"
              />
              <p className="text-text-muted text-xl leading-relaxed max-w-[500px] font-body">
                Engineered specifically for the high-yield extraction of Type I and Type III collagen. Our proprietary liming cycle maintains molecular chain integrity.
              </p>
              <div className="flex gap-4">
                <MagneticButton>
                  <Button size="lg">Request Technical COA</Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="ghost" size="lg">Batch History</Button>
                </MagneticButton>
              </div>
            </div>
            <div className="hero-product-img relative h-[550px] rounded-sm overflow-hidden shadow-2xl ring-1 ring-white/10 group">
              <Image 
                src="/industrial_pelts_hero.png" 
                alt="Industrial Pelts" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-primary/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL SPECS */}
      <section className="section-padding border-b border-border-subtle bg-bg-secondary">
        <div className="container-custom">
          <SectionHeading kicker="Engineering Blueprint" title="Detailed Specifications" className="mb-16" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div ref={specsRef} className="lg:col-span-8 space-y-2">
              {mainSpecs.map((item, i) => (
                <div key={i} data-reveal-item className="flex justify-between items-center py-6 border-b border-border-subtle group hover:px-4 transition-all duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim">{item.field}</span>
                  <span className="text-text-premium font-display font-medium">{item.spec}</span>
                </div>
              ))}
            </div>
            <div className="lg:col-span-4">
              <CardTilt>
                <div className="p-8 glass-elevated border border-accent-gold/10 h-full">
                  <h4 className="text-accent-gold font-display font-bold mb-4">Batch Consistency</h4>
                  <p className="text-sm text-text-dim font-body leading-relaxed">
                    Our Chennai facility monitors nitrogen levels and residual ash in every batch to meet tier-1 pharmaceutical protocols.
                  </p>
                </div>
              </CardTilt>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRY TAB SWITCHER */}
      <section className="section-padding border-b border-border-subtle">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-16 px-4 py-2 border-b border-white/5">
            {industries.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-2xl font-display font-bold pb-4 transition-all relative ${
                  activeTab === tab.id ? 'text-accent-gold' : 'text-text-dim hover:text-text-premium'
                }`}
              >
                {tab.name}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold animate-[scale-x_0.3s_ease]" />
                )}
              </button>
            ))}
          </div>
          
          <div ref={tabContentRef} className="max-w-3xl">
            <h3 className="text-3xl font-display font-bold text-text-premium mb-6">
              Industry Specifics: <span className="italic text-accent-gold">{industries.find(t => t.id === activeTab)?.name}</span>
            </h3>
            <p className="text-lg text-text-muted leading-relaxed font-body">
              {industries.find(t => t.id === activeTab)?.content}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURE CARDS */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <div ref={featureRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Hydraulic Bales', desc: 'High-density compression for optimized container utilization.' },
              { title: 'Moisture Guard', desc: 'Climate-controlled stabilization preventing fiber degradation.' },
              { title: 'Global Export', desc: 'Seamless MAA Port logistics to rotating global destinations.' },
            ].map((feature, i) => (
              <CardTilt key={i} data-reveal-item>
                <Card variant="glass" className="h-full border-white/5 hover:border-accent-gold/20 transition-colors">
                   <h4 className="text-xl font-display font-bold text-text-premium mb-4">{feature.title}</h4>
                   <p className="text-sm text-text-dim leading-relaxed">{feature.desc}</p>
                </Card>
              </CardTilt>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
