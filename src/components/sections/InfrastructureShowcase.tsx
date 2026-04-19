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
    <section ref={ref} className="snap-section h-screen bg-[var(--c-surface)] flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 xl:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
              Industrial Capacity
            </div>
            <h2 className="text-4xl xl:text-5xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter">
              World-Class <br />
              <span className="text-[var(--c-primary)]">Infrastructure</span>
            </h2>
          </div>
          <p className="text-lg text-[var(--c-text-secondary)] max-w-sm italic font-medium">
            Our hub in Chennai features advanced processing facilities designed for industrial scale and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {infra.map((item, i) => (
            <div key={i} className="group bg-white p-12 xl:p-14 rounded-[40px] border border-black/5 shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-[var(--c-surface)] flex items-center justify-center text-3xl mb-10">
                 {item.icon}
               </div>
               <h4 className="text-2xl font-black text-[var(--c-text-primary)] mb-4 tracking-tight uppercase leading-none">{item.title}</h4>
               <p className="text-sm xl:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium opacity-70 group-hover:opacity-100">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

