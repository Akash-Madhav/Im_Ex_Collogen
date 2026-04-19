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
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="min-h-screen bg-white overflow-auto flex flex-col justify-center py-20 lg:py-32">

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 xl:mb-20">
          <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
            Technical Catalog
          </div>
          <h2 className="text-4xl xl:text-5xl font-bold text-[var(--c-text-primary)] mb-6">
            Engineered Raw Materials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          <ProductCard 
            title="Collagen Grade"
            tag="Industrial Extraction"
            tagColor="bg-[var(--c-tag-collagen)]"
            desc="High-protein, ultra-low ash pelts optimized for enzymatic hydrolysis in collagen plants."
            specs={[
              { label: 'Protein', value: '80%+' },
              { label: 'Ash Content', value: '<4%' },
              { label: 'End Use', value: 'Industrial Extraction' }
            ]}
            image="/images/grading_process.png"
          />
          <ProductCard 
            title="Pet Food Grade"
            tag="Dog Chews & Treats"
            tagColor="bg-[var(--c-tag-pet)]"
            desc="Clean, odor-controlled flexible sheets suitable for dog chew manufacturing and natural treats."
            specs={[
              { label: 'Flexibility', value: 'Very High' },
              { label: 'Liming', value: 'Controlled pH' },
              { label: 'End Use', value: 'Treat Manufacturing' }
            ]}
            image="/images/warehouse_stock.png"
          />
          <ProductCard 
            title="Gelatin Grade"
            tag="Food & Pharma"
            tagColor="bg-blue-50 text-blue-700"
            desc="Specialized processing to maximize Bloom yield for food and pharmaceutical gelatin production."
            specs={[
              { label: 'Bloom Yield', value: 'High Performance' },
              { label: 'Purity', value: 'Pharmaceutical Standard' },
              { label: 'End Use', value: 'Gelatin Production' }
            ]}
            image="/images/liming_pits.png"
          />
          <ProductCard 
            title="Tannery Grade"
            tag="Leather Manufacturing"
            tagColor="bg-amber-50 text-amber-700"
            desc="Full-thickness pelts with preserved natural grain for premium upholstery and footwear leather."
            specs={[
              { label: 'Grain Size', value: 'Uniform Standard' },
              { label: 'Thickness', value: 'Max Preserved' },
              { label: 'End Use', value: 'Tannery / Footwear' }
            ]}
            image="/images/pelt_texture.png"
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ title, tag, tagColor, desc, specs, image }: any) {
  return (
    <div className="group flex flex-col md:flex-row bg-[var(--c-surface)] rounded-3xl overflow-hidden border border-[var(--c-border)] hover:border-[var(--c-primary)] shadow-xl lg:h-[350px]">
      <div className="relative w-full md:w-2/5 h-[200px] md:h-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-8 xl:p-10 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <span className={`inline-block px-3 py-1 rounded-full ${tagColor} text-[9px] font-black uppercase tracking-widest`}>
            {tag}
          </span>
          <h3 className="text-2xl font-bold text-[var(--c-text-primary)]">{title}</h3>
          <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">{desc}</p>
        </div>
        <div className="mt-6 pt-6 border-t border-[var(--c-border)] space-y-2">
          {specs.map((spec: any, idx: number) => (
            <div key={idx} className="flex justify-between text-[11px] font-bold">
              <span className="text-[var(--c-text-muted)] uppercase tracking-widest">{spec.label}</span>
              <span className="text-[var(--c-primary)]">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


