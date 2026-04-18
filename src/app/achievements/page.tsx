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
      gsap.from('.milestone-card', {
        scrollTrigger: {
          trigger: '.timeline-area',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
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
      <ScrollSection>
        <section className="section-padding timeline-area border-b border-white/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4">
                <h3 className="text-xl font-display font-bold text-text-premium mb-6">Historical Trajectory</h3>
                <p className="text-text-muted font-body leading-relaxed">
                  Our legacy is built on the pursuit of zero-defect processing. From local procurement to global logistics authority.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-12 relative border-l border-white/10 pl-10">
                {milestones.map((item, i) => (
                  <div key={i} className="milestone-card relative group">
                    <div className="absolute -left-[54px] top-2 w-4 h-4 rounded-full border-2 border-accent-gold bg-bg-primary z-10 scale-75 group-hover:scale-110 transition-transform" />
                    <span className="text-[28px] font-display font-bold text-accent-gold/40 group-hover:text-accent-gold transition-colors block mb-2">{item.year}</span>
                    <h4 className="text-xl font-display font-medium text-text-premium mb-3">{item.title}</h4>
                    <p className="text-text-dim text-sm leading-relaxed max-w-xl">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

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
