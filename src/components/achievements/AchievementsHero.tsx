'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function AchievementsHero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    
    const text = new SplitType(titleRef.current, { types: 'chars' });
    
    gsap.from(text.chars, {
      y: 40,
      opacity: 0,
      duration: 1.5,
      stagger: 0.02,
      ease: 'expo.out',
    });

    gsap.from('.fade-in-up', {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'expo.out',
      delay: 0.4,
    });
  }, []);

  return (
    <section ref={containerRef} className="pt-40 pb-20 px-6 md:px-12 lg:px-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in-up inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-brand-accent"></div>
          <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase">
            Capabilities & Scale
          </span>
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black tracking-tight mb-8">
          Industrial Scale. <br/>
          <span className="italic font-light text-brand-background/90 text-[clamp(2.5rem,5vw,6rem)]">Precision Metrics.</span>
        </h1>
        
        <p className="fade-in-up text-lg md:text-xl text-white/80 max-w-2xl font-inter leading-relaxed">
          From robust infrastructure to unparalleled quality control, discover the numbers and processes that make us the preferred partner for global collagen and gelatin manufacturers.
        </p>
      </div>
    </section>
  );
}
