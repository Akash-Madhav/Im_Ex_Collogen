'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

const infra = [
  {
    title: '800+ Ton Capacity',
    desc: 'Equipped with large-scale liming pits and graded sorting bays for massive monthly volumes.',
    icon: '🏗'
  },
  {
    title: 'Concrete Solar Yards',
    desc: 'Clean yards ensuring chemical-free, natural solar drying for optimal moisture control.',
    icon: '☀️'
  },
  {
    title: 'Certified Lab Testing',
    desc: 'In-house and third-party verification for protein content and pH stability.',
    icon: '🧪'
  }
];

export default function InfrastructureShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="infrastructure" className="bg-[var(--c-surface)]">
      <div ref={ref} className="h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 lg:mb-12 gap-4">
          <div className="max-w-xl">
            <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
              Industrial Capacity
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter italic">
              World-Class <br />
              <span className="text-[var(--c-primary)] NOT-italic">Infrastructure</span>
            </h2>
          </div>
          <p className="text-sm lg:text-base text-[var(--c-text-secondary)] max-w-sm italic font-medium opacity-70">
            Advanced processing facilities designed for industrial scale and global reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {infra.map((item, i) => (
            <div key={i} className="group bg-white p-6 lg:p-8 rounded-[24px] border border-black/5 shadow-md transition-all duration-700">
               <div className="w-12 h-12 rounded-lg bg-[var(--c-surface)] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                 {item.icon}
               </div>
               <h4 className="text-[14px] lg:text-[16px] font-black text-[var(--c-text-primary)] mb-2 tracking-tight uppercase leading-none">{item.title}</h4>
               <p className="text-[11px] lg:text-[12px] text-[var(--c-text-secondary)] leading-tight font-medium opacity-60 group-hover:opacity-100">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
