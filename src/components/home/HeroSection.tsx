'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function HeroSection() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;

    // Split text animation
    const split = new SplitType(h1Ref.current, { types: 'chars' });
    
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from('.hero-tag', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
      .from(split.chars, {
        y: 60,
        opacity: 0,
        stagger: 0.025,
        duration: 0.7,
        ease: 'power3.out'
      }, '-=0.3')
      .from('.hero-sub', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
      .from('.hero-cta-btn', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('.stat-block', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, '-=0.2');

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-bg"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata" 
          poster="/hero_main_poster.png"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay Fade */}
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            background: 'linear-gradient(to right, rgba(10,12,11,0.92) 0%, rgba(10,12,11,0.7) 60%, rgba(10,12,11,0.2) 100%)' 
          }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-20">
        <div className="max-w-[700px]">
          <div className="hero-tag inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-accent">
              India Buffalo Hide Exporter
            </span>
          </div>

          <h1 
            ref={h1Ref}
            className="text-[clamp(48px,7vw,80px)] font-display font-bold leading-[1.08] tracking-tight mb-6 text-text-primary"
          >
            Defining the Standard of <span className="text-accent">Pelts.</span>
          </h1>

          <p className="hero-sub text-[18px] text-text-secondary leading-relaxed mb-10 max-w-[520px]">
            High-integrity processing for global collagen extraction. Traceable, laboratory-verified, and industrially graded.
          </p>

          <div className="hero-cta flex flex-wrap gap-4">
            <button className="hero-cta-btn px-8 py-4 bg-accent text-bg font-bold uppercase tracking-wider text-sm rounded hover:bg-[#E8B84A] transition-all hover:-translate-y-1 shadow-lg hover:shadow-accent/20">
              Explore Specs
            </button>
            <button className="hero-cta-btn px-8 py-4 bg-transparent border border-white/20 text-text-primary font-bold uppercase tracking-wider text-sm rounded hover:bg-white/5 transition-all hover:-translate-y-1 hover:border-white/40">
              Industrial Catalog
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="hero-stats absolute bottom-12 left-6 md:left-20 flex items-end gap-12 border-t border-accent/20 pt-6">
          <div className="stat-block">
            <p className="text-[32px] font-mono font-bold text-accent">1,500+</p>
            <p className="text-[11px] font-semibold text-text-tertiary tracking-widest uppercase mt-1">MT Monthly</p>
          </div>
          <div className="w-[1px] h-10 bg-accent/30 hidden sm:block" />
          <div className="stat-block">
            <p className="text-[32px] font-mono font-bold text-accent">10+</p>
            <p className="text-[11px] font-semibold text-text-tertiary tracking-widest uppercase mt-1">Export Zones</p>
          </div>
          <div className="w-[1px] h-10 bg-accent/30 hidden sm:block" />
          <div className="stat-block">
            <p className="text-[32px] font-mono font-bold text-accent">0%</p>
            <p className="text-[11px] font-semibold text-text-tertiary tracking-widest uppercase mt-1">Defect Rate</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-6 md:right-20 flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-accent origin-top animate-scrollDrop" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent rotate-90 origin-right translate-y-8">Scroll</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDrop {
          0% { transform: scaleY(0); opacity: 0; }
          50% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(0); opacity: 0; transform-origin: bottom; }
        }
        .animate-scrollDrop {
          animation: scrollDrop 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
