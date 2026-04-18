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
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;
    
    // Split text with better word-wrap safety
    const split = new SplitType(h1Ref.current, { 
      types: 'lines,words,chars',
      tagName: 'span'
    });
    
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Set initial states
    gsap.set('.hero-stat-block', { y: 20, opacity: 0 });

    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from(split.chars, {
        y: 60,
        opacity: 0,
        stagger: 0.02,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.4')
      .from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to('.hero-stat-block', {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');

    // High-end Background Parallax
    if (bgImageRef.current) {
      gsap.to(bgImageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    return () => split.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-bg-primary"
    >
      {/* Background with Parallax Hook */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgImageRef} className="absolute inset-x-0 -top-1/4 h-[150%]">
          <Image 
            src="/hero_main_image.png"
            alt="Premium Buffalo Pelts Industrial Setting"
            fill
            className="object-cover opacity-60 grayscale-[0.05]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-20 container-custom">
        <div className="max-w-[850px]">
          <div className="hero-badge mb-8">
            <Badge variant="accent" dot>Corporate Global Supply</Badge>
          </div>

          <h1 
            ref={h1Ref}
            className="text-[clamp(48px,7.5vw,92px)] font-display font-bold leading-[1.02] tracking-tighter mb-8 text-text-premium"
          >
            Defining the Standard of <span className="text-accent-gold italic drop-shadow-[0_0_15px_rgba(200,146,42,0.15)]">Refinement.</span>
          </h1>

          <p className="hero-sub text-[20px] text-text-muted leading-relaxed mb-12 max-w-[560px] font-body">
            High-integrity processing for global collagen extraction. Traceable, laboratory-verified, and industrially graded output.
          </p>

          <div className="hero-cta flex flex-wrap gap-5">
            <Button href="/products" size="lg">Technical Catalog</Button>
            <Button variant="secondary" href="/contact" size="lg">Supply RFQ</Button>
          </div>
        </div>
      </div>

      {/* Industrial Stat Strip - Refined Entrance */}
      <div className="absolute bottom-16 right-6 md:right-12 flex items-center gap-10 border-l border-white/5 pl-12 py-4 backdrop-blur-md bg-white/[0.02] rounded-sm border border-white/[0.03]">
        <div className="hero-stat-block text-right">
          <p className="text-[10px] font-bold text-text-dim uppercase tracking-[.25em] mb-1">Scale</p>
          <p className="text-3xl font-display font-bold text-accent-gold">1,500<span className="text-xs font-mono ml-1 opacity-50">MT/MO</span></p>
        </div>
        <div className="w-[1px] h-10 bg-white/10" />
        <div className="hero-stat-block text-right">
          <p className="text-[10px] font-bold text-text-dim uppercase tracking-[.25em] mb-1">Standard</p>
          <p className="text-3xl font-display font-bold text-accent-gold">ISO 9001</p>
        </div>
      </div>
    </section>
  );
}
