'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { ScrollSection } from '@/components/shared/ScrollSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  { year: '2012', title: 'Operational Debut', desc: 'Established primary collection nodes in Southern India, standardizing intake.' },
  { year: '2014', title: 'Global Authorization', desc: 'Secured international quality certifications for EU and East Asia distribution.' },
  { year: '2017', title: 'Capacity Scaling', desc: 'Expanded Chennai processing facility to 1,500 MT per month capacity.' },
  { year: '2021', title: 'Zero-Waste Initiative', desc: 'Implemented closed-loop systems, repurposing organic by-products.' },
  { year: '2024', title: 'Digital Spec Protocol', desc: 'Launched real-time chemical data portal for tier-1 pharma clients.' },
];

export default function AchievementsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PINNING THE LEFT SIDE
      ScrollTrigger.create({
        trigger: '.timeline-area',
        start: 'top 100px',
        end: 'bottom bottom',
        pin: '.timeline-left',
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
      });

      // 2. Timeline Line Growth
      gsap.to('.timeline-progress', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-area',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      });

      // 2. Individual Milestone Highlight
      const cards = gsap.utils.toArray('.milestone-card');
      cards.forEach((card: any) => {
        gsap.to(card.querySelector('.milestone-dot'), {
          backgroundColor: 'var(--color-accent)',
          borderColor: 'var(--color-accent)',
          scale: 1.2,
          boxShadow: '0 0 15px rgba(200, 146, 42, 0.4)',
          duration: 0.4,
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play reverse play reverse'
          }
        });

        gsap.to(card.querySelector('span'), {
          color: 'var(--color-accent)',
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play reverse play reverse'
          }
        });
      });

      // 3. Overall Entrance Animation
      gsap.from('.milestone-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.timeline-area',
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-bg-primary pt-24">
      
      {/* SECTION 1: HERO */}
      <ScrollSection>
        <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/industrial_selection.png"
              alt="Corporate History"
              fill
              className="object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
          </div>
          <div className="container-custom relative z-10">
            <SectionHeading 
              kicker="Corporate Evolution"
              title={<>A Decade of <br /><span className="italic text-accent-gold">Industrial Precision.</span></>}
            />
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 2: TIMELINE */}
      <section className="timeline-area bg-bg-primary border-b border-white/5 overflow-visible relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
            
            {/* PINNED LEFT SIDE */}
            <div className="timeline-left lg:col-span-4 h-fit py-32 lg:py-48 flex flex-col justify-start">
              <Badge variant="outline" className="mb-6 w-fit">Historical Trajectory</Badge>
              <h3 className="text-3xl lg:text-5xl font-display font-bold text-text-premium mb-8 leading-[1.1]">
                A decade of <span className="italic text-accent-gold">Industrial</span> precision.
              </h3>
              <p className="text-text-muted font-body text-lg leading-relaxed opacity-80 max-w-sm">
                From local procurement to global logistics authority. Our trajectory is defined by zero-defect output.
              </p>
            </div>

            {/* SCROLLING RIGHT SIDE */}
            <div className="lg:col-span-8 relative pl-10 md:pl-16 py-32 lg:py-48">
              {/* Dynamic Scroll Line */}
              <div className="absolute left-0 top-32 lg:top-48 bottom-32 lg:bottom-48 w-[1px] bg-white/5 origin-top" />
              <div className="timeline-progress absolute left-0 top-32 lg:top-48 w-[1px] bg-accent-gold origin-top transition-shadow duration-700 shadow-[0_0_15px_rgba(200,146,42,0.5)]" style={{ height: '0%' }} />

              <div className="space-y-32">
                {milestones.map((item, i) => (
                  <div key={i} className="milestone-card relative group">
                    {/* Bullet Indicator */}
                    <div className="absolute -left-[45px] md:-left-[69px] top-2 w-10 md:w-12 h-[1px] bg-white/10 group-hover:bg-accent-gold/50 transition-all opacity-40 group-hover:opacity-100" />
                    <div className="milestone-dot absolute -left-[54px] md:-left-[78px] top-2 w-4 h-4 rounded-full border border-white/20 bg-bg-primary z-10 transition-all duration-500" />
                    
                    <span className="text-[32px] md:text-[56px] font-display font-bold text-text-premium/5 group-hover:text-accent-gold/20 transition-all duration-700 block mb-6 leading-none">
                      {item.year}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-text-premium mb-6 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
                    <p className="text-text-dim text-lg leading-relaxed max-w-xl font-body opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRIAL IMPACT */}
      <ScrollSection>
        <section className="section-padding bg-bg-secondary border-b border-white/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="elevated" className="text-center">
                <h4 className="text-3xl font-display font-bold text-accent-gold mb-2">99.8%</h4>
                <p className="text-[10px] uppercase tracking-widest text-text-dim">Batch Consistency</p>
              </Card>
              <Card variant="elevated" className="text-center">
                <h4 className="text-3xl font-display font-bold text-accent-gold mb-2">10+</h4>
                <p className="text-[10px] uppercase tracking-widest text-text-dim">Global Compliance Awards</p>
              </Card>
              <Card variant="elevated" className="text-center">
                <h4 className="text-3xl font-display font-bold text-accent-gold mb-2">Tier-1</h4>
                <p className="text-[10px] uppercase tracking-widest text-text-dim">Pharma Grade Preferred</p>
              </Card>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 4: NEXT STEP CTA */}
      <ScrollSection>
        <section className="section-padding text-center">
          <div className="container-custom">
            <Badge variant="outline" className="mb-8">Looking Forward</Badge>
            <h2 className="text-4xl font-display font-bold text-text-premium mb-12">Building the Future of <span className="italic text-accent-gold">Global Collagen.</span></h2>
            <div className="flex justify-center gap-6">
              <Button variant="primary" href="/products">View Products</Button>
              <Button variant="ghost" href="/contact">Partner with us</Button>
            </div>
          </div>
        </section>
      </ScrollSection>


    </div>
  );
}
