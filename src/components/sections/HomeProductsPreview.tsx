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
  },
  {
    title: 'Pet Food Grade Pelts',
    desc: 'Clean, flexible sheets perfect for high-protein dog chews.',
    image: '/images/warehouse_stock.png',
  }
];

export default function HomeProductsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={ref} className="snap-section bg-[var(--c-surface)]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
              Industrial Grade Raw Material
            </h2>
            <p className="text-lg text-[var(--c-text-secondary)]">
              Consistent supply for global markets. Processed to meet strict chemical specifications.
            </p>
          </div>
          <Link href="/products" className="btn-secondary">
            View All Specifications
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previews.map((item, i) => (
            <div key={i} className="group relative h-[400px] rounded-2xl overflow-hidden shadow-card">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm max-w-[280px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
