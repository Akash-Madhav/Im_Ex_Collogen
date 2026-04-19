'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap-config';
import { Button } from '../shared/Button';
import { Badge } from '../shared/Badge';
import { SplitHeading } from '../animations/SplitHeading';
import { MagneticButton } from '../animations/MagneticButton';
import { useCountUp } from '@/hooks/useCountUp';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const statsRef1 = useRef<HTMLSpanElement>(null);
  const statsRef2 = useRef<HTMLSpanElement>(null);

  // Stats Count-up
  useCountUp(statsRef1, 1500, ' MT/MO');
  useCountUp(statsRef2, 9001, ''); // For ISO 9001

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!videoLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.5)
        .from('.hero-cta-btn', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.7)
        .from('.hero-stat-block', { 
          y: 15, 
          opacity: 0, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'power3.out' 
        }, 0.9);

      // Background Parallax
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
    }, containerRef);

    return () => ctx.revert();
  }, [videoLoaded]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[700px] h-screen w-full flex items-center overflow-hidden bg-bg-primary"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgImageRef} className="absolute inset-x-0 -top-1/4 h-[150%]">
          {/* Using image as requested, adding video support if needed later */}
          <Image 
            src="/hero_main_image.png"
            alt="Premium Buffalo Pelts Industrial Setting"
            fill
            className="object-cover opacity-50 grayscale-[0.05]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-20 container-custom pt-32 md:pt-0">
        <div className="max-w-[850px]">
          <div className="hero-badge mb-6 md:mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
            <Badge variant="accent" dot>Corporate Global Supply</Badge>
          </div>

          <SplitHeading 
            tag="h1" 
            text="Defining the Standard of Pelts." 
            animateOnScroll={false} 
            delay={0.3}
            className="text-[clamp(38px,8vw,92px)] font-display font-bold leading-[1.05] md:leading-[1.02] tracking-tighter mb-8 text-text-premium"
          />

          <p className="hero-sub text-[16px] md:text-[20px] text-text-muted leading-relaxed mb-10 md:mb-12 max-w-[560px] font-body opacity-0">
            High-integrity processing for global collagen extraction. Traceable, laboratory-verified, and industrially graded output.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 sm:gap-6">
            <MagneticButton className="hero-cta-btn w-full sm:w-auto">
              <Button href="/products" size="lg" className="w-full">Technical Catalog</Button>
            </MagneticButton>
            <MagneticButton className="hero-cta-btn w-full sm:w-auto">
              <Button variant="secondary" href="/contact" size="lg" className="w-full">Supply RFQ</Button>
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-12 md:bottom-16 right-6 md:right-12 items-center gap-10 border-l border-white/5 pl-12 py-4 backdrop-blur-md bg-white/[0.02] rounded-sm border border-white/[0.03]">
        <div className="hero-stat-block text-right">
          <p className="text-[10px] font-bold text-text-dim uppercase tracking-[.25em] mb-1">Scale</p>
          <p className="text-3xl font-display font-bold text-accent-gold">
            <span ref={statsRef1}>0</span>
          </p>
        </div>
        <div className="w-[1px] h-10 bg-white/10" />
        <div className="hero-stat-block text-right">
          <p className="text-[10px] font-bold text-text-dim uppercase tracking-[.25em] mb-1">Standard</p>
          <p className="text-3xl font-display font-bold text-accent-gold">
            ISO <span ref={statsRef2}>0</span>
          </p>
        </div>
      </div>
    </section>
  );
}
