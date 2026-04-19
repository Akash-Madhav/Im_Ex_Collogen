'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';

const initiatives = [
  {
    icon: '♻',
    title: 'Collagen Tier',
    desc: 'Trimmings processed into high-yield collagen meal.',
    theme: 'green'
  },
  {
    icon: '⚡',
    title: 'Energy Tier',
    desc: 'Recovered fat directed to biofuel & tallow.',
    theme: 'amber'
  },
  {
    icon: '🐾',
    title: 'Nutrient Tier',
    desc: 'Lower-grade material for natural pet chews.',
    theme: 'blue'
  }
];

export default function SustainabilitySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { opacity: 0, scale: 0.98 },
    stagger: 0.1
  });

  return (
    <SectionWrapper id="sustainability" className="bg-[var(--c-surface)]">
      <div ref={containerRef} className="h-full flex flex-col justify-center">
        
        {/* Section Title */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-2">
            Industrial Stewardship
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-tight tracking-tighter italic">
            Circular <span className="text-[var(--c-primary)] NOT-italic">Economy</span>
          </h2>
        </div>

        {/* Centerpiece Grid */}
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-3 items-center gap-6 lg:gap-12">
          
          {/* Card 1: Left */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
             <FactorCard item={initiatives[0]} />
          </div>

          {/* Central Hub & Card 3 Column */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8 lg:gap-12">
            {/* Hub */}
            <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-white shadow-xl border-2 border-[var(--c-primary-light)] flex flex-col items-center justify-center p-6 text-center relative group hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 rounded-full bg-[var(--c-primary)] opacity-5 animate-pulse" />
              <h3 className="text-base lg:text-xl font-black text-[var(--c-text-primary)] leading-tight tracking-tighter uppercase italic">
                Strategic <br />
                <span className="text-[var(--c-primary)] NOT-italic">Solutions</span>
              </h3>
              <div className="mt-2 w-8 h-1 bg-[var(--c-primary)] rounded-full" />
            </div>

            {/* Card 3: Bottom (Desktop) */}
            <div className="hidden lg:flex justify-center">
               <FactorCard item={initiatives[2]} />
            </div>
          </div>

          {/* Card 2: Right */}
          <div className="order-3 lg:order-3 flex justify-center lg:justify-start">
             <FactorCard item={initiatives[1]} />
          </div>

          {/* Card 3: Mobile Flow */}
          <div className="lg:hidden order-4 flex justify-center">
             <FactorCard item={initiatives[2]} />
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}

function FactorCard({ item }: { item: any }) {
  return (
    <div className="bg-white border border-[var(--c-border)]/20 rounded-[20px] p-4 lg:p-6 shadow-lg w-full max-w-[260px] hover:border-[var(--c-primary)] transition-all group backdrop-blur-sm text-center">
       <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-lg lg:text-xl mb-3 shadow-sm group-hover:scale-110 transition-transform mx-auto ${
         item.theme === 'green' ? 'bg-[#E8F5EE] text-[#1F5D3A]' : item.theme === 'amber' ? 'bg-[#FFF3E0] text-[#B45309]' : 'bg-[#E3F2FD] text-[#0D47A1]'
       }`}>
         {item.icon}
       </div>
       <h4 className="text-[13px] lg:text-[14px] font-black text-[var(--c-text-primary)] mb-1 tracking-tight uppercase leading-none">{item.title}</h4>
       <p className="text-[10px] lg:text-[11px] text-[var(--c-text-secondary)] leading-tight font-medium opacity-70 group-hover:opacity-100 transition-opacity">
         {item.desc}
       </p>
    </div>
  );
}
