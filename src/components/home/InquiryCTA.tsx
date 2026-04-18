'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function InquiryCTA() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 -top-20 -bottom-20 scale-110">
        <Image 
          src="/global_trade_cargo.png" 
          alt="Global Trade Cargo" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-white text-4xl md:text-6xl font-playfair leading-tight">
          Looking for a Reliable Buffalo Pelt Supplier?
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          Tell us your monthly requirement and we will respond within 24 hours with a custom 
          quote and shipping timeline.
        </p>
        <div className="pt-6">
          <Link 
            href="/contact"
            className="inline-block border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-brand-primary transition-all duration-300 transform hover:scale-105"
          >
            Start an Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
