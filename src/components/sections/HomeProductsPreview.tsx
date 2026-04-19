'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import Image from 'next/image';
import SectionWrapper from '@/components/layout/SectionWrapper';

const previews = [
  {
    title: 'Collagen Grade Pelts',
    desc: '80%+ Protein content optimized for industrial collagen extraction.',
    image: '/images/grading_process.png',
    tag: 'Collagen',
  },
  {
    title: 'Pet Food Grade Pelts',
    desc: 'Clean, dehaired sheets for high-protein dog chews.',
    image: '/images/warehouse_stock.png',
    tag: 'Pet Food',
  },
  {
    title: 'Gelatin Grade Pelts',
    desc: 'Specialized liming for maximum gelatin bloom yield.',
    image: '/images/liming_pits.png',
    tag: 'Gelatin',
  },
  {
    title: 'Tannery Grade Pelts',
    desc: 'Premium full-grain leather processing grade.',
    image: '/images/pelt_texture.png',
    tag: 'Tannery',
  }
];

export default function HomeProductsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 20 } });

  return (
    <SectionWrapper id="products-preview" className="bg-[var(--c-surface)]">
      <div ref={ref} className="h-full flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-6 lg:mb-10 gap-4">
          <div className="max-w-xl">
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-2">
              Product Portfolio
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--c-text-primary)] mb-2">
              Precision Raw Materials
            </h2>
          </div>
          <Link href="/products" className="btn-secondary py-2 px-6 text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
            All Specifications →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previews.map((item, i) => (
            <div key={i} className="group relative h-[280px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-white">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 rounded bg-white text-[var(--c-primary)] text-[8px] font-black uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-black text-white mb-2 leading-none tracking-tighter italic">{item.title}</h3>
                <p className="text-white/60 text-[10px] lg:text-[11px] leading-tight max-w-[200px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
