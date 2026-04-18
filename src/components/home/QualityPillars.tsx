'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldCheck, Recycle, Factory, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

const pillars = [
  {
    title: 'Precision Sourcing',
    desc: 'Direct ethical procurement from certified abattoirs, ensuring full traceability from farm to factory.',
    icon: ShieldCheck,
  },
  {
    title: 'Controlled Liming',
    desc: 'Localized lime pits with strictly monitored pH and duration for optimal fiber opening.',
    icon: Factory,
  },
  {
    title: 'Solar Drying',
    desc: 'Harnessing natural UV and thermal energy for chemical-free preservation and moisture control.',
    icon: Recycle,
  },
  {
    title: 'Standard Testing',
    desc: 'Batch-wise lab analysis for protein yield, moisture percentage, and residual chemical analysis.',
    icon: ClipboardCheck,
  }
];

export default function QualityPillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.from('.pillar-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'expo.out'
    });
  }, []);

  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
          <div className="max-w-2xl">
            <SectionHeading 
              kicker="Operational Excellence"
              title="The Architecture of Industrial Trust"
            />
            <p className="mt-8 text-xl text-brand-body leading-relaxed">
              We don't just export products; we engineer consistent outcomes. Our quality management system is designed to eliminate manufacturing variables for our clients.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <button className="glass-card px-10 py-6 font-black uppercase text-[10px] tracking-widest text-brand-primary flex items-center gap-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              Download Industrial Dossier
              <ArrowUpRight size={18} className="text-brand-accent" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-item glass-card p-12 hover:border-brand-accent/50 transition-colors duration-700 bg-white shadow-industrial">
              <div className="w-12 h-12 rounded-xl bg-brand-background flex items-center justify-center text-brand-primary mb-10">
                <pillar.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-playfair font-black mb-6 text-brand-primary">{pillar.title}</h4>
              <p className="text-sm font-medium leading-[1.8] text-brand-body/70 opacity-90">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
