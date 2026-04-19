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
    <section ref={containerRef} className="snap-section bg-[var(--c-surface)] relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 px-4">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
            SUSTAINABILITY
          </div>
          <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
            Zero Waste Processing
          </h2>
          <p className="text-lg text-[var(--c-text-secondary)]">
            Every part of the raw material is utilized, reducing environmental impact and maximizing resource value for our global partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
          {initiatives.map((item, index) => (
            <div key={index} className="bg-white border border-[var(--c-primary)]/10 rounded-2xl p-10 shadow-[0_2px_12px_rgba(31,93,58,0.08)] group hover:-translate-y-2 transition-all duration-500">
               <div className={`w-[64px] h-[64px] rounded-xl flex items-center justify-center text-[28px] mb-8 transition-transform group-hover:scale-110 ${
                 item.theme === 'green' ? 'bg-[#E8F5EE]' : item.theme === 'amber' ? 'bg-[#FFF3E0]' : 'bg-[#E3F2FD]'
               }`}>
                 {item.icon}
               </div>
               <h4 className="text-[18px] font-bold text-[var(--c-text-primary)] mb-4">{item.title}</h4>
               <p className="text-[14px] text-[var(--c-text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
