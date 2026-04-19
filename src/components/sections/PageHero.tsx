'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  label?: string;
}

export default function PageHero({ title, subtitle, image, label }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="page-hero" className="bg-[var(--c-dark)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover brightness-[0.2] contrast-125 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-dark)] via-transparent to-transparent opacity-60" />
      </div>

      <div ref={containerRef} className="relative z-10 w-full">
        <div className="max-w-4xl">
          {label && (
            <div className="flex items-center gap-2 text-[9px] font-black tracking-[0.4em] uppercase text-[var(--c-primary-light)] mb-6">
              <span className="w-10 h-[1px] bg-[var(--c-primary-light)]" />
              {label}
            </div>
          )}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1] tracking-tighter italic">
            {title}
          </h1>
          <p className="text-base lg:text-lg xl:text-xl text-white/50 leading-relaxed max-w-2xl font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Industrial Accents */}
      <div className="absolute right-0 bottom-0 p-8 hidden lg:block z-20">
        <div className="flex items-center gap-4 opacity-30">
          <div className="w-[1px] h-20 bg-white" />
          <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] vertical-rl rotate-180">Institution Matrix</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
