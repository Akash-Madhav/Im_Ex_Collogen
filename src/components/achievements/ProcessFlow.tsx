'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SectionHeading } from '@/components/shared/SectionHeading';

const steps = [
  {
    num: '01',
    title: 'Sourcing & Collection',
    desc: 'Direct procurement from certified abattoirs across domestic meat processing zones, ensuring traceable and fresh raw material.',
  },
  {
    num: '02',
    title: 'Washing & Fleshing',
    desc: 'Intensive washing cycles to remove blood and dirt, followed by mechanical fleshing to remove adhering fat and meat.',
  },
  {
    num: '03',
    title: 'Liming & Dehairing',
    desc: 'Treated in localized lime pits for 12-15 days. Ensures complete hair removal and swells the pelt for collagen breakdown.',
  },
  {
    num: '04',
    title: 'Sun Drying & Trimming',
    desc: 'Air-dried under controlled sunlight to reach 14-18% moisture. Edges are trimmed for uniformity and ease of packing.',
  },
  {
    num: '05',
    title: 'Sorting & Baling',
    desc: 'Graded by thickness (3mm, 5mm) and bundled tightly into hydraulic bales. Ready for container stuffing and export.',
  }
];

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const processSteps = containerRef.current.querySelectorAll('.process-step');
    const lines = containerRef.current.querySelectorAll('.process-line');

    gsap.from(processSteps, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from(lines, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 1,
      stagger: 0.2,
      ease: 'power3.inOut',
      delay: 0.2
    });
  }, []);

  return (
    <section className="bg-white section-padding border-t border-brand-primary/5">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        
        <div className="text-center mb-20">
          <SectionHeading 
            kicker="Methodology"
            title="The Processing Pipeline"
            className="flex flex-col items-center"
          />
        </div>

        <div className="space-y-0 relative">
          {steps.map((step, index) => (
            <div key={index} className="process-step relative flex gap-8 md:gap-16 pb-16 last:pb-0 group">
              
              {/* Timeline Line */}
              {index !== steps.length - 1 && (
                <div className="process-line absolute top-12 left-[1.15rem] md:left-[2.15rem] w-[2px] h-full bg-brand-primary/10 group-hover:bg-brand-accent/50 transition-colors duration-500" />
              )}
              
              {/* Number Node */}
              <div className="relative z-10 flex flex-col items-center mt-1">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-brand-background border-2 border-brand-primary flex items-center justify-center text-brand-primary font-playfair font-black text-lg md:text-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="pt-2 md:pt-4">
                <h4 className="text-2xl md:text-3xl font-playfair font-bold text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h4>
                <p className="text-brand-body text-base md:text-lg leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
