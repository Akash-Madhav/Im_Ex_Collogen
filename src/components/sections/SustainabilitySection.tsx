'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const initiatives = [
  {
    icon: '♻',
    title: 'Trimmings → Collagen',
    desc: 'Pelt trimmings and off-cuts are processed into collagen meal, maximizing protein extraction yield for zero-waste production.',
    theme: 'green'
  },
  {
    icon: '⚡',
    title: 'Fat → Industrial Use',
    desc: 'Animal fat recovered during processing is directed to industrial tallow and biofuel applications, powering other industries.',
    theme: 'amber'
  },
  {
    icon: '🐾',
    title: 'Waste → Pet Chews',
    desc: 'Lower-grade material is processed into natural pet chew raw material — ensuring 100% hide utilization without landfill impact.',
    theme: 'blue'
  }
];

export default function SustainabilitySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 20, opacity: 0 },
    stagger: 0.15
  });

  return (
    <section ref={containerRef} className="h-screen bg-[var(--c-surface)] relative flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">

      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 xl:mb-24 px-4">
          <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
            Industrial Stewardship
          </div>
          <h2 className="text-4xl xl:text-6xl font-black text-[var(--c-text-primary)] leading-tight tracking-tighter mb-8">
            The Circular Economy of <br />
            <span className="text-[var(--c-primary)] underline decoration-[var(--c-primary-light)] underline-offset-8">Raw Material Utilization</span>
          </h2>
          <p className="text-xl text-[var(--c-text-secondary)] leading-relaxed max-w-2xl mx-auto italic font-medium">
            Zero waste. Maximum yield. We extract value from every fiber, ensuring our industrial footprint remains as clean as our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10">
          {initiatives.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl border border-[var(--c-border)] rounded-[40px] p-10 xl:p-14 shadow-2xl group hover:border-[var(--c-primary)] flex flex-col items-center text-center">
               <div className={`w-20 h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center text-4xl mb-10 shadow-lg ${
                 item.theme === 'green' ? 'bg-[#E8F5EE] text-[#1F5D3A]' : item.theme === 'amber' ? 'bg-[#FFF3E0] text-[#B45309]' : 'bg-[#E3F2FD] text-[#0D47A1]'
               }`}>
                 {item.icon}
               </div>
               <h4 className="text-2xl font-black text-[var(--c-text-primary)] mb-6 tracking-tight uppercase leading-none">{item.title}</h4>
               <p className="text-[14px] xl:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
