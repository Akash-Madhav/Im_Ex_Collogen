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
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center pt-20 overflow-hidden bg-[var(--c-dark)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover brightness-[0.25] contrast-125 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-dark)] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {label && (
            <div className="flex items-center gap-3 text-[10px] xl:text-[11px] font-black tracking-[0.4em] uppercase text-[var(--c-primary-light)] mb-10">
              <span className="w-12 h-[1px] bg-[var(--c-primary-light)]" />
              {label}
            </div>
          )}
          <h1 className="text-6xl xl:text-9xl font-black text-white mb-10 leading-[0.95] tracking-tighter italic">
            {title}
          </h1>
          <p className="text-xl xl:text-2xl text-white/50 leading-relaxed max-w-2xl font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Industrial Accents */}
      <div className="absolute right-0 bottom-0 p-12 xl:p-20 hidden lg:block z-20">
        <div className="flex items-center gap-6">
          <div className="w-[1px] h-32 bg-white/10" />
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] vertical-rl rotate-180">Institution Matrix</span>
          </div>
        </div>
      </div>
    </section>
  );
}

