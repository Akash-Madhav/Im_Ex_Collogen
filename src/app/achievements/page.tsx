'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { SplitHeading } from '@/components/animations/SplitHeading';
import { CardTilt } from '@/components/animations/CardTilt';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { gsap } from '@/lib/gsap-config';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollSkew } from '@/hooks/useScrollSkew';

const pipelineSteps = [
  { id: '01', title: 'Quality Intake', desc: 'Raw material procurement with strict node validation.' },
  { id: '02', title: 'Fiber Cleaning', desc: 'Mechanical and chemical separation of non-collagenous proteins.' },
  { id: '03', title: 'Liming Cycle', desc: 'Surgical calcium hydroxide treatment to stabilize molecular chains.' },
  { id: '04', title: 'Batch Grading', desc: 'Technical analysis and classification for pharmaceutical end-use.' },
  { id: '05', title: 'Precision Baling', desc: 'Compressed stabilization for global moisture-controlled export.' },
];

const metrics = [
  { val: 99.8, suffix: '%', label: 'Batch Consistency' },
  { val: 12, suffix: '+', label: 'Global Certifications' },
  { val: 1500, suffix: ' MT', label: 'Monthly Throughput' },
  { val: 24, suffix: 'hr', label: 'Inquiry Response' },
];

export default function AchievementsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  // Metrics Count-up
  const metric1 = useRef(null);
  const metric2 = useRef(null);
  const metric3 = useRef(null);
  const metric4 = useRef(null);
  
  useCountUp(metric1, 99.8, '%');
  useCountUp(metric2, 12, '+');
  useCountUp(metric3, 1500, ' MT');
  useCountUp(metric4, 24, 'hr');

  // Apply scroll skew to infrastructure images
  useScrollSkew('.clip-reveal', 4);

  useGsapReveal(metricsRef, {
    from: { y: 40, opacity: 0, scale: 0.96 },
    stagger: 0.12,
  });

  useGsapReveal(tableRef, {
    from: { x: -20, opacity: 0 },
    stagger: 0.05,
    duration: 0.5
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infrastructure Images Clip-path reveal
      gsap.utils.toArray('.clip-reveal').forEach((el: any) => {
        gsap.fromTo(el, 
          { clipPath: 'inset(0 100% 0 0)' },
          { 
            clipPath: 'inset(0 0% 0 0)', 
            duration: 1.1, 
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%'
            }
          }
        );
      });

      // Connecting line animation for pipeline
      gsap.from('.pipeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: '.pipeline-area',
          start: 'top 30%',
          end: 'bottom 70%',
          scrub: 1.5
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-bg-primary pt-24 overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/infrastructure_hub.png"
            alt="Corporate Infrastructure"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <SplitHeading 
            tag="h1" 
            text="Defining the Industrial Trajectory." 
            animateOnScroll={true} 
            className="text-white font-display font-bold leading-[1.1]"
          />
        </div>
      </section>

      {/* SECTION 2: METRICS */}
      <section className="section-padding bg-bg-secondary border-b border-white/5">
        <div className="container-custom">
          <div ref={metricsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((item, i) => (
              <CardTilt key={i} data-reveal-item>
                <Card variant="elevated" className="text-center group">
                  <h4 className="text-4xl font-display font-bold text-accent-gold mb-2">
                    <span ref={i === 0 ? metric1 : i === 1 ? metric2 : i === 2 ? metric3 : metric4}>0</span>
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-text-dim group-hover:text-accent-gold transition-colors">{item.label}</p>
                </Card>
              </CardTilt>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PIPELINE */}
      <section className="pipeline-area section-padding border-b border-white/5 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <SectionHeading 
                kicker="Operational Protocol"
                title={<>A Five-Phase <br /><span className="italic text-accent-gold">Refinement Cycle.</span></>}
              />
              <p className="mt-8 text-text-muted text-lg leading-relaxed max-w-sm">
                Each shipment undergoes a rigorous stabilization process to ensure maximum nitrogen retention and fiber integrity for pharmaceutical extraction.
              </p>
            </div>
            
            <div className="lg:col-span-7 relative pl-12 md:pl-20">
              {/* Vertical Connecting Line */}
              <div className="pipeline-line absolute left-0 md:left-4 top-4 bottom-4 w-px bg-white/10" />
              <div className="pipeline-line absolute left-0 md:left-4 top-4 bottom-4 w-px bg-accent-gold origin-top" />

              <div className="space-y-16">
                {pipelineSteps.map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[54px] md:-left-[86px] top-2 w-10 md:w-16 h-px bg-white/10 group-hover:bg-accent-gold transition-colors" />
                    <div className="absolute -left-[64px] md:-left-[96px] top-1 w-6 h-6 rounded-full bg-bg-primary border border-white/10 flex items-center justify-center z-10 group-hover:border-accent-gold transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold scale-0 group-hover:scale-100 transition-transform" />
                    </div>
                    
                    <span className="text-xs font-mono text-accent-gold mb-3 block">{step.id}</span>
                    <h4 className="text-2xl font-display font-bold text-text-premium mb-4">{step.title}</h4>
                    <p className="text-text-dim text-lg leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INFRASTRUCTURE REVEAL */}
      <section className="section-padding bg-bg-secondary overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="clip-reveal rounded-sm overflow-hidden aspect-[16/10] bg-surface-2 group">
              <Image 
                src="/industrial_selection.png" 
                alt="Procurement Detail" 
                fill 
                className="object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
              />
            </div>
            <div className="clip-reveal rounded-sm overflow-hidden aspect-[16/10] bg-surface-2 group" style={{ transitionDelay: '0.2s' }}>
              <Image 
                src="/port_logistics_closeup.png" 
                alt="Logistics Detail" 
                fill 
                className="object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <SplitHeading 
            tag="h2" 
            text="Driving the Future of Biopolymers." 
            className="text-4xl font-display font-bold text-text-premium mb-12"
          />
          <div className="flex justify-center gap-6">
            <MagneticButton>
              <Button size="lg" href="/products">View Technical Specs</Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="ghost" size="lg" href="/contact">Inquiry Portal</Button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
