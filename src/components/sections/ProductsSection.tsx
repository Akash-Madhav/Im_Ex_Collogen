'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 40, opacity: 0 },
    stagger: 0.2
  });

  return (
    <section ref={containerRef} className="snap-section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
            Processed for Industrial Precision
          </h2>
          <p className="text-lg text-[var(--c-text-secondary)]">
            Two specialized grades — each engineered for the exact requirements of your industry. Quality consistent batch-to-batch.
          </p>
        </div>

        {/* Product 1: Collagen Grade */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 lg:mb-32">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl skew-y-[1deg]">
            <Image 
              src="/images/grading_process.png" 
              alt="Collagen Grade Buffalo Limed Pelts" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block bg-[var(--c-tag-collagen)] text-[var(--c-primary)] text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full">
              Collagen Grade
            </div>
            <h3 className="text-3xl font-bold text-[var(--c-text-primary)]">Collagen Grade Buffalo Limed Pelts</h3>
            <p className="text-[var(--c-text-secondary)] leading-relaxed">
              High-protein, low-ash pelts optimized for enzymatic hydrolysis in collagen and gelatin extraction plants. Engineered for maximum yield and process efficiency.
            </p>
            
            <div className="space-y-2 py-4 border-y border-[var(--c-border)]">
              <SpecRow label="Protein Content" value="80%+ (preferred 70–78%)" highlight />
              <SpecRow label="Ash Content" value="<4% (preferred 3–6%)" highlight />
              <SpecRow label="Moisture" value="12–14% (range 10–20%)" />
              <SpecRow label="Dehairing" value="99%+ Clean — Industrial Liming" />
            </div>

            <div className="flex flex-wrap gap-2 py-4">
              {['High Protein', 'Extraction Ready', 'Custom Specs', 'Low Ash'].map(tag => (
                <span key={tag} className="text-[12px] font-medium px-4 py-1.5 rounded-full bg-[var(--c-surface)] text-[var(--c-text-secondary)] border border-[var(--c-border)]">
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/products/collagen-grade" className="btn-primary inline-block">
              View Full Specifications
            </Link>
          </div>
        </div>

        {/* Product 2: Pet Food Grade */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center flex-row-reverse">
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl skew-y-[-1deg]">
            <Image 
              src="/images/warehouse_stock.png" 
              alt="Pet Food Grade Buffalo Limed Pelts" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block bg-[var(--c-tag-pet)] text-[#B45309] text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full">
              Pet Food Grade
            </div>
            <h3 className="text-3xl font-bold text-[var(--c-text-primary)]">Pet Food Grade Buffalo Limed Pelts</h3>
            <p className="text-[var(--c-text-secondary)] leading-relaxed">
              Clean, odor-controlled, and flexible pelts suitable for dog chew manufacturing, natural pet treats, and high-protein pet food ingredient processing.
            </p>

            <div className="space-y-2 py-4 border-y border-[var(--c-border)]">
              <SpecRow label="Flexibility" value="High — Suitable for Forming" highlight />
              <SpecRow label="Odor" value="Controlled Process Standards" highlight />
              <SpecRow label="Moisture" value="12–16% Controlled" />
              <SpecRow label="Supply" value="Bulk — 20ft / 40ft FCL" />
            </div>

            <div className="flex flex-wrap gap-2 py-4">
              {['Dog Chew Ready', 'Flexible Sheets', 'Odor Controlled', 'Bulk Supply'].map(tag => (
                <span key={tag} className="text-[12px] font-medium px-4 py-1.5 rounded-full bg-[var(--c-surface)] text-[var(--c-text-secondary)] border border-[var(--c-border)]">
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/products/pet-food-grade" className="btn-primary inline-block">
              View Full Specifications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-[var(--c-text-secondary)] font-medium">{label}</span>
      <span className={`font-bold font-mono ${highlight ? 'text-[var(--c-primary)]' : 'text-[var(--c-text-primary)]'}`}>{value}</span>
    </div>
  );
}
