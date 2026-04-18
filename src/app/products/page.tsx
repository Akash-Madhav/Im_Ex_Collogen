'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const mainSpecs = [
  { field: 'Material Source', spec: 'Young Bubalus Bubalis (Indian Buffalo)' },
  { field: 'Chemical Process', spec: 'Standardized Calcium Hydroxide Liming' },
  { field: 'Dehairing Method', spec: 'Dual-Stage Mechanical Scrapers' },
  { field: 'Fiber Integrity', spec: '98.5% Preserved Collagen Matrix' },
  { field: 'Moisture Content', spec: '14% — 18% (Ambient Stabilized)' },
  { field: 'Surface Condition', spec: 'Clean-Trimmed, Zero Residual Flesh' },
];

const shippingSpecs = [
  { label: 'Standard Load', val: '26 MT', sub: 'Per 40ft High-Cube' },
  { label: 'Packaging', val: 'Pressed Bales', sub: 'PP-Wrapped / Iron Strapped' },
  { label: 'Bale Weight', val: '100 - 120 KG', sub: 'Variable per Batch' },
  { label: 'Dispatch Hub', val: 'Chennai', sub: 'India (MAA Port)' },
];

export default function ProductsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from('.product-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.product-sub', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .from('.product-image-container', { x: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
      .from('.spec-row', { y: 20, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' }, '-=0.4');
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 bg-bg">
      
      {/* Split Hero Section */}
      <section className="flex flex-col lg:flex-row border-b border-border">
        {/* Left: Product Info */}
        <div className="lg:w-1/2 px-6 md:px-20 py-20 flex flex-col justify-center">
          <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-6">
            Industrial Raw Material
          </h5>
          <h1 className="product-title text-[clamp(40px,5vw,64px)] font-display font-medium text-text-primary leading-[1.1] mb-8">
            Buffalo Dried <br />
            <span className="italic">Limed Pelts.</span>
          </h1>
          <p className="product-sub text-text-secondary text-lg leading-relaxed max-w-lg mb-12 opacity-90">
            Engineered specifically for the high-yield extraction of Type I and Type III collagen. Our pelts undergo a proprietary liming cycle that maintains molecular chain integrity while optimizing fiber opening.
          </p>
          
          <div className="flex gap-4">
            <button className="px-10 py-4 bg-accent text-bg font-bold uppercase tracking-widest text-xs rounded hover:bg-[#E8B84A] transition-all">
              Request Technical COA
            </button>
          </div>
        </div>

        {/* Right: Product Image */}
        <div className="lg:w-1/2 h-[500px] lg:h-auto relative overflow-hidden product-image-container">
          <Image 
            src="/industrial_pelts_hero.png"
            alt="Buffalo Dried Limed Pelts"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-24 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Table Area */}
            <div className="lg:col-span-7">
              <h2 className="text-[28px] font-display font-medium text-text-primary mb-12 flex items-center gap-4">
                Technical Blueprint
                <div className="flex-1 h-[1px] bg-border" />
              </h2>
              
              <div className="space-y-0 border-t border-border">
                {mainSpecs.map((item, i) => (
                  <div key={i} className="spec-row grid grid-cols-1 sm:grid-cols-2 py-6 border-b border-border group hover:bg-surface-2 transition-colors duration-200">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-text-tertiary">
                      {item.field}
                    </span>
                    <span className="text-[15px] font-body text-text-primary font-medium">
                      {item.spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Sidebar info */}
            <div className="lg:col-span-5 bg-surface border border-border p-10 rounded-lg">
              <h4 className="text-[18px] font-display font-bold text-accent mb-6">Critical for Collagen Extraction</h4>
              <p className="text-sm text-text-tertiary leading-relaxed mb-8">
                The Bloom strength and viscosity of the final gelatin/collagen product are directly proportional to the preservation of the raw pelt. Our Chennai-based facility ensures consistent nitrogen levels and residual ash monitoring to meet Tier-1 pharmaceutical spec.
              </p>
              <ul className="space-y-4">
                {['Nitrogen Content > 15%', 'Ash Residue < 2%', 'Moisture Precision', 'Zero Preservative Use'].map((tag) => (
                  <li key={tag} className="flex items-center gap-3 text-xs font-mono text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics Grid */}
      <section className="bg-surface py-24 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-display font-medium text-text-primary text-center mb-16">Logistics & Loading Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {shippingSpecs.map((item, i) => (
              <div key={i} className="p-8 border border-border bg-bg/50 rounded-lg text-center hover:border-accent/40 transition-all duration-300">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-4">{item.label}</p>
                <p className="text-[24px] font-mono font-bold text-accent mb-1">{item.val}</p>
                <p className="text-[12px] text-text-tertiary italic">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
