'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: '12', unit: 'YR', label: 'Export Authority' },
  { number: '300', unit: '+', label: 'Annual Shipments' },
  { number: '100', unit: '%', label: 'Process Audit' },
];

export default function AboutSnapshot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      gsap.from('.about-content-inner', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-surface py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Stats cards (45%) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="stat-card relative overflow-hidden bg-surface-2 border border-border p-8 rounded-lg group transition-all duration-300 hover:border-border-light hover:-translate-y-1 hover:shadow-glow-card"
              >
                {/* Gold bar hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-accent-dim scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="flex items-baseline gap-2">
                  <span className="number text-[56px] font-mono font-bold leading-none text-accent">
                    {stat.number}
                  </span>
                  <span className="unit text-xl font-mono text-text-tertiary">
                    {stat.unit}
                  </span>
                </div>
                <div className="text-[13px] font-body font-medium uppercase tracking-[0.1em] text-text-tertiary mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Text content (55%) */}
          <div className="lg:col-span-7 about-content-inner">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-6">
              Industrial Pedigree
            </h5>
            <h2 className="text-[clamp(32px,4vw,48px)] font-display font-medium text-text-primary mb-8 leading-[1.2]">
              India&apos;s Trusted Partner in <br />
              <span className="italic">Buffalo Pelt Procurement.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 opacity-90">
              For over a decade, IndoPelts International has bridged the gap between raw industrial availability and high-precision global manufacturing. Our facility in Chennai specializes in the rigorous processing of buffalo dried limed pelts, ensuring zero fiber damage and maximum yield for our partners in the pharmaceutical and pet food sectors.
            </p>
            
            <Link 
              href="/achievements"
              className="group inline-flex items-center gap-3 text-accent font-bold uppercase tracking-wider text-[14px]"
            >
              Explore our operations
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
