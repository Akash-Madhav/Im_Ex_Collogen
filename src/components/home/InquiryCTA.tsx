'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { magneticButton } from '@/lib/interactions';

export default function InquiryCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (btnRef.current) {
      const cleanup = magneticButton(btnRef.current);
      return cleanup;
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-image-bg py-32 md:py-48 text-center overflow-hidden relative"
    >
      {/* Background Texture */}
      <style jsx>{`
        section::before {
          content: '';
          position: absolute; inset: 0; z-index: -2;
          background-image: url('/port_logistics_closeup.png');
          background-size: cover;
          background-position: center;
          opacity: 0.25;
        }
        section::after {
          content: '';
          position: absolute; inset: 0; z-index: -1;
          background: rgba(10, 12, 11, 0.82);
        }
      `}</style>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/12 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-[clamp(36px,6vw,52px)] font-display font-medium text-text-primary leading-[1.1] mb-12">
          Looking for a Reliable <br />
          <span className="italic">Buffalo Pelt Supplier?</span>
        </h2>
        
        <div className="flex justify-center">
          <Link 
            ref={btnRef}
            href="/contact"
            className="btn-primary-large inline-flex px-12 py-5 bg-accent text-bg font-bold uppercase tracking-widest text-[15px] rounded-sm transition-all hover:bg-[#E8B84A] shadow-[0_12px_40px_rgba(200,146,42,0.35)]"
          >
            Start Supply Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
