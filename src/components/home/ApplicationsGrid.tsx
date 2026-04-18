'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { tiltCard } from '@/lib/interactions';

const sectors = [
  {
    tag: 'Healthcare',
    title: 'Precision Collagen',
    desc: 'Pure buffalo derivations optimized for medical-grade collagen fiber extraction and biomedical research protocols.',
  },
  {
    tag: 'Nutrition',
    title: 'Edible Gelatin',
    desc: 'High-yield raw material for premium edible gelatin production, ensuring superior clarity and protein density.',
  },
  {
    tag: 'Pet Care',
    title: 'Natural Supplements',
    desc: 'Safe, sustainable, and traceable raw material specifically sorted for natural pet food and chew manufacturing.',
  },
  {
    tag: 'Technical',
    title: 'Industrial Gelatin',
    desc: 'Reliable supply for technical gelatin used in photographic, matchwood, and industrial adhesive manufacturing.',
  },
];

export default function ApplicationsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Reveal animation
    gsap.from('.application-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Apply tilt to each card
    const tiltCleanups: (void | (() => void))[] = cardsRef.current.map(card => {
      if (card) return tiltCard(card);
    });

    return () => {
      tiltCleanups.forEach(cleanup => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-image-bg py-24 md:py-32"
    >
      {/* Infrastructure Texture */}
      <style jsx>{`
        section::before {
          background-image: url('/infrastructure_hub.png');
          opacity: 0.12;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h5 className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-4">
            Industrial Reach
          </h5>
          <h2 className="text-[clamp(32px,4vw,48px)] font-display font-medium text-text-primary leading-tight">
            Sectors We Power <br />
            <span className="italic">Across the Global Curve.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, i) => (
            <div 
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              className="application-card relative overflow-hidden p-8 md:p-12 bg-[#111510]/80 border border-border rounded-lg backdrop-blur-[12px] group transition-all duration-300 hover:border-accent/40 hover:shadow-glow-card"
            >
              {/* Radial glow on hover */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/15 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="sector-tag inline-block px-3 py-1 rounded-full border border-accent/30 text-[10px] font-bold uppercase tracking-[0.14em] text-accent mb-6">
                {sector.tag}
              </div>

              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                {sector.title}
              </h3>
              <p className="text-text-secondary text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {sector.desc}
              </p>

              <Link 
                href="/products"
                className="card-link mt-8 pt-6 border-t border-border flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-[12px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
