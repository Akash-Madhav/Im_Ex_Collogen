'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const infra = [
  {
    title: '800+ Ton Capacity',
    desc: 'Our facility is equipped with large-scale liming pits and graded sorting bays for massive monthly volumes.',
    icon: '🏗'
  },
  {
    title: 'Concrete Solar Yards',
    desc: 'Clean concrete yards ensuring chemical-free, natural solar drying for optimal moisture control.',
    icon: '☀️'
  },
  {
    title: 'Certified Lab Testing',
    desc: 'In-house and third-party verification for protein content, ash levels, and pH stability.',
    icon: '🧪'
  }
];

export default function InfrastructureShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.95 } });

  return (
    <section ref={ref} className="section-padding bg-[var(--c-surface)]">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-h2 font-bold mb-6">World-Class infrastructure</h2>
          <p className="text-lg text-[var(--c-text-secondary)] max-w-2xl">
            Our hub in Chennai features advanced processing facilities designed for industrial scale and ecological responsibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infra.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-[var(--c-border)] shadow-sm hover:shadow-hover transition-all">
               <div className="text-4xl mb-6">{item.icon}</div>
               <h4 className="text-xl font-bold mb-4">{item.title}</h4>
               <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
