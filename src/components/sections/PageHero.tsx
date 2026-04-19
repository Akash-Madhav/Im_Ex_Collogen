'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  label?: string;
}

export default function PageHero({ title, subtitle, image, label }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={containerRef} className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--c-dark)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--c-dark)] via-[var(--c-dark)]/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {label && (
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--c-primary-light)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-primary)]" />
              {label}
            </div>
          )}
          <h1 className="text-hero font-bold text-white mb-8 leading-[1.1]">
            {title}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Design Decor */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[var(--c-primary)]/5 -z-10 translate-x-1/4 skew-x-[-12deg]" />
    </section>
  );
}
