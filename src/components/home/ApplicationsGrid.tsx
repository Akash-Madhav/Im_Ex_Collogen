'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Microscope, PawPrint, Droplets, Utensils } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

const applications = [
  {
    title: 'Collagen Peptides',
    desc: 'High-purity raw material for pharmaceutical-grade collagen extraction. High nitrogen content, low mineral residue.',
    icon: Microscope,
    tag: 'Medical'
  },
  {
    title: 'Pet Nutrition',
    desc: 'The gold standard for natural dog chews. Durable, high-protein structure that provides superior dental benefits.',
    icon: PawPrint,
    tag: 'Pet Care'
  },
  {
    title: 'Edible Gelatin',
    desc: 'Stable Bloom value pelts for confectionery, dairy, and dessert applications across global food markets.',
    icon: Droplets,
    tag: 'Food Grade'
  },
  {
    title: 'Traditional Markets',
    desc: 'Processed to strict cultural standards for culinary use in traditional Asian markets (Krecek/Krupuk).',
    icon: Utensils,
    tag: 'Consumer'
  }
];

export default function ApplicationsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.from('.app-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className="premium-gradient section-padding relative overflow-hidden">
      {/* Decorative Blur Backgrounds - Optimized for Desktop only */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24">
          <SectionHeading 
            kicker="Industrial Versatility"
            title="Sectors We Power With Precision Raw Materials"
          />
          <p className="mt-8 text-xl font-medium text-brand-primary/60 max-w-2xl leading-relaxed">
            From medical devices to consumer goods, our pelts are the invisible foundation of the global bio-commodity supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index} 
              className="app-card group glass-card p-10 hover:bg-brand-primary hover:text-white transition-all duration-500 cursor-default"
            >
              <div className="mb-10 flex justify-between items-start">
                 <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-white/10 group-hover:text-brand-accent transition-all duration-500">
                    <app.icon size={32} strokeWidth={1.5} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent/60 group-hover:text-white/40 border border-brand-accent/20 px-3 py-1 rounded-full">
                   {app.tag}
                 </span>
              </div>
              
              <h3 className="text-2xl font-playfair font-black mb-6 group-hover:text-white transition-colors">
                {app.title}
              </h3>
              
              <p className="text-sm font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                {app.desc}
              </p>
              
              <div className="mt-10 pt-8 border-t border-brand-primary/5 group-hover:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
