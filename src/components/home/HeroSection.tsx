'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Button } from '../shared/Button';
import { Badge } from '../shared/Badge';

export default function HeroSection() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;
    const split = new SplitType(h1Ref.current, { types: 'chars' });
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from(split.chars, {
        y: 80,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=0.4')
      .from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

    return () => split.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-bg-primary"
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_main_image.png"
          alt="Premium Buffalo Pelts Industrial Setting"
          fill
          className="object-cover opacity-50 grayscale-[0.1]"
          priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
      </div>

      <div className="relative z-20 container-custom">
        <div className="max-w-[750px]">
          <div className="hero-badge mb-8">
            <Badge variant="accent" dot>Corporate Global Supply</Badge>
          </div>

          <h1 
            ref={h1Ref}
            className="text-[clamp(44px,7vw,84px)] font-display font-bold leading-[1.05] tracking-tight mb-8 text-text-premium"
          >
            Defining the Standard of <span className="text-accent-gold italic">Refinement.</span>
          </h1>

          <p className="hero-sub text-[19px] text-text-muted leading-relaxed mb-10 max-w-[540px] font-body">
            High-integrity processing for global collagen extraction. Traceable, laboratory-verified, and industrially graded output.
          </p>

          <div className="hero-cta flex flex-wrap gap-5">
            <Button href="/products">Technical Catalog</Button>
            <Button variant="secondary" href="/contact">Supply RFQ</Button>
          </div>
        </div>
      </div>

      {/* Industrial Stat Strip */}
      <div className="absolute bottom-16 right-6 md:right-12 flex items-center gap-12 border-l border-accent-gold/20 pl-16 py-4 backdrop-blur-sm bg-bg-primary/20 rounded-sm">
        <div className="text-right">
          <p className="text-[10px] font-bold text-text-dim uppercase tracking-[.25em] mb-1">Scale</p>
          <p className="text-2xl font-display font-bold text-accent-gold">1,500<span className="text-xs font-mono ml-1">MT/MO</span></p>
        </div>
        <div className="w-[1px] h-8 bg-border-subtle" />
        <div className="text-right">
          <p className="text-[10px] font-bold text-text-dim uppercase tracking-[.25em] mb-1">Standard</p>
          <p className="text-2xl font-display font-bold text-accent-gold">ISO 9001</p>
        </div>
      </div>
    </section>
  );
}
