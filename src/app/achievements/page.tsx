'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    year: '2012',
    title: 'Operational Debut',
    desc: 'Established primary collection nodes in Southern India, standardizing raw material intake for consistent collagen output.',
  },
  {
    year: '2014',
    title: 'Global Export Authorization',
    desc: 'Secured critical international quality certifications, enabling direct B2B supply to the European Union and East Asia.',
  },
  {
    year: '2017',
    title: ' Chennai Facility Expansion',
    desc: 'Expanded processing capacity to 1,500 MT per month with the integration of semi-automated dehairing lines.',
  },
  {
    year: '2021',
    title: 'Zero-Waste Initiative',
    desc: 'Implemented a closed-loop processing system, repurposing organic by-products and improving eco-compliance scores.',
  },
  {
    year: '2024',
    title: 'Digital Spec Protocol',
    desc: 'Launch of real-time batch testing data portal for tier-1 pharmaceutical manufacturing clients.',
  },
];

export default function AchievementsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.milestone-card', {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 bg-bg">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left: Sticky Image Column (40%) */}
        <div className="lg:w-[40%] h-[400px] lg:h-screen lg:sticky lg:top-0 order-2 lg:order-1 relative overflow-hidden">
          <Image 
            src="/industrial_selection.png"
            alt="Industrial Excellence"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-bg" />
        </div>

        {/* Right: Content Column (60%) */}
        <div className="lg:w-[60%] px-6 md:px-20 py-20 order-1 lg:order-2">
          <div className="max-w-2xl">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-6">
              Corporate Evolution
            </h5>
            <h1 className="text-[clamp(40px,5vw,64px)] font-display font-medium text-text-primary leading-[1.1] mb-12">
              A Decade of <br />
              <span className="italic">Industrial Precision.</span>
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed mb-20 opacity-90">
              The journey of IndoPelts International is a timeline of rigorous refinement. From a local procurement agent to a Tier-1 global exporter, we have focused exclusively on perfecting the science of buffalo pelt preservation.
            </p>

            {/* Timeline */}
            <div className="timeline-container relative pl-8 border-l border-border/40 space-y-20">
              {milestones.map((item, i) => (
                <div key={i} className="milestone-card relative group">
                  {/* Dot */}
                  <div className="absolute -left-[37px] top-2 w-[17px] h-[17px] rounded-full border-2 border-accent bg-bg z-10 scale-75 group-hover:scale-100 transition-transform duration-300" />
                  
                  <div className="space-y-4">
                    <span className="text-[32px] font-mono font-bold text-accent-dim group-hover:text-accent transition-colors duration-300">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-text-tertiary leading-relaxed max-w-lg group-hover:text-text-secondary transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-32 pt-20 border-t border-border flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-text-tertiary">Next Step</p>
                <p className="text-text-primary font-bold mt-2">Explore our industrial grade pelts</p>
              </div>
              <Link 
                href="/products" 
                className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-bg transition-all duration-300"
              >
                →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
