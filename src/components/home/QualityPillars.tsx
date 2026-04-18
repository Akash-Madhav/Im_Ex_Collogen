'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    num: '01',
    title: 'Selection & Sorting',
    desc: 'Automated weight grading and visual fiber inspection at primary collection nodes.',
  },
  {
    num: '02',
    title: 'Controlled Liming',
    desc: 'Calibrated pH cycles using specialized non-corrosive liming agents for protein retention.',
  },
  {
    num: '03',
    title: 'Precision Mechanicals',
    desc: 'Machine-dehairing and trimming protocols that maintain a defect-free surface area.',
  },
  {
    num: '04',
    title: 'Hygienic Drying',
    desc: 'Controlled ambient drying cycles to achieve the optimal 14-18% moisture equilibrium.',
  },
];

export default function QualityPillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pillar-card', {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-image-bg py-24 md:py-32 overflow-hidden"
    >
      {/* Background Texture Overlay */}
      <style jsx>{`
        section::before {
          background-image: url('/infrastructure_hub.png');
          opacity: 0.15;
        }
        section::after {
          content: '';
          position: absolute; inset: 0; z-index: -1;
          background: rgba(10, 12, 11, 0.88);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Section Text */}
          <div className="space-y-10">
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-6">
                Operational Integrity
              </h5>
              <h2 className="text-[clamp(32px,4vw,48px)] font-display font-medium text-text-primary leading-[1.1] mb-8">
                Architecture of <br />
                <span className="italic">Industrial Trust.</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-lg mb-10">
                Our processing pipeline is engineered to eliminate variability. By standardizing every touchpoint from sorting to container loading, we deliver a consistent bio-commodity that manufacturers can rely on for high-precision output.
              </p>
              
              <button className="px-8 py-4 bg-transparent border border-white/20 text-text-primary font-bold uppercase tracking-wider text-[12px] rounded hover:bg-white/5 transition-all flex items-center gap-3 group">
                Download Industrial Dossier
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right: Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <div 
                key={i}
                className="pillar-card p-8 border-l-2 border-border transition-all duration-300 hover:border-accent group"
              >
                <div className="step-num font-mono text-[11px] font-bold text-accent tracking-[0.1em] mb-4">
                  STEP {pillar.num}
                </div>
                <h4 className="text-[16px] font-body font-semibold text-text-primary mb-3">
                  {pillar.title}
                </h4>
                <p className="text-text-tertiary text-[14px] leading-relaxed group-hover:text-text-secondary transition-colors">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
