'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../shared/Button';
import { Badge } from '../shared/Badge';
import { MagneticButton } from '../animations/MagneticButton';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { gsap } from '@/lib/gsap-config';

export default function InquiryCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGsapReveal(contentRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1,
    start: 'top 85%'
  });

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '25%',
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden bg-bg-primary">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="absolute inset-x-0 -top-1/4 h-[150%]">
          <Image 
            src="/port_logistics_closeup.png"
            alt="Industrial Logistics"
            fill
            className="object-cover opacity-30 grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/90 to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary" />
      </div>

      <div ref={contentRef} className="container-custom relative z-10 text-center">
        <div data-reveal-item>
          <Badge variant="outline" className="mb-8">Global Procurement</Badge>
        </div>
        <h2 data-reveal-item className="text-4xl md:text-6xl font-display font-bold text-text-premium mb-12 leading-tight">
          Ready to Initiate your <br />
          <span className="italic text-accent-gold">Industrial Supply Cycle?</span>
        </h2>
        <div data-reveal-item className="flex flex-col sm:flex-row justify-center gap-6">
          <MagneticButton className="w-full sm:w-auto">
            <Button href="/contact" size="lg" className="w-full sm:px-16">Request Batch COA</Button>
          </MagneticButton>
          <MagneticButton className="w-full sm:w-auto">
            <Button variant="ghost" href="/products" size="lg" className="w-full sm:px-12 underline underline-offset-8">Technical Specs</Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
