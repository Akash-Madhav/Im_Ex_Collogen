'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import Image from 'next/image';

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
    desc: 'Specialized liming for maximum food-grade gelatin bloom yield.',
    image: '/images/liming_pits.png',
    tag: 'Gelatin',
  },
  {
    title: 'Tannery Grade Pelts',
    desc: 'Direct tannery supply for premium full-grain leather processing.',
    image: '/images/pelt_texture.png',
    tag: 'Tannery',
  }
];

export default function HomeProductsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={ref} className="h-screen bg-[var(--c-surface)] flex flex-col justify-center overflow-auto lg:overflow-hidden py-10">

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 xl:mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] xl:text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-3">
              Product Portfolio
            </div>
            <h2 className="text-3xl xl:text-4xl font-bold text-[var(--c-text-primary)] mb-4">
              Precision Raw Materials
            </h2>
          </div>
          <Link href="/products" className="btn-secondary py-3 px-8 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            All Specifications →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
          {previews.map((item, i) => (
            <div key={i} className="group relative h-[300px] xl:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 p-8 xl:p-10">
                <h3 className="text-2xl xl:text-3xl font-black text-white mb-3 leading-none tracking-tighter italic">{item.title}</h3>
                <p className="text-white/50 text-[11px] xl:text-[12px] leading-relaxed max-w-[220px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


