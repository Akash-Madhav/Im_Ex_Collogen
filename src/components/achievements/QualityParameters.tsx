'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

const parameters = [
  { spec: 'Moisture Content', value: '14% – 18%', impact: 'Prevents bacterial growth, ensures long shelf-life.' },
  { spec: 'Dehairing Quality', value: '99.9% Clean', impact: 'Reduces filtration time during collagen extraction.' },
  { spec: 'Thickness (Graded)', value: '3mm / 5mm / 8mm', impact: 'Uniform swelling during the acid/alkali pretreatment.' },
  { spec: 'Protein Yield', value: 'High Yield', impact: 'Maximized gelatin blooming strength (Bloom value).' },
  { spec: 'Liming Chemical', value: 'Industrial Grade Lime', impact: 'Safe, controlled alkaline hydrolysis.' },
  { spec: 'Preservation', value: 'Sun-Dried', impact: 'Natural UV exposure avoids chemical preservatives.' },
];

export default function QualityParameters() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const rows = containerRef.current.querySelectorAll('.spec-row');
    
    gsap.from(rows, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section className="bg-brand-background section-padding">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        
        <div className="text-center mb-16">
          <SectionHeading 
            kicker="Technical Specifications"
            title="Lab-Referenced Parameters"
            className="flex flex-col items-center"
          />
          <p className="text-brand-body/80 mt-6 max-w-2xl mx-auto font-inter">
            Our strict adherence to index parameters ensures that every shipment integrates seamlessly into your manufacturing process with zero unpredictable variables.
          </p>
        </div>

        <div className="bg-white border border-brand-primary/10 rounded-2xl overflow-hidden shadow-industrial">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-brand-primary text-white p-6 md:px-10 uppercase tracking-widest text-xs font-bold">
             <div className="md:col-span-3">Parameter</div>
             <div className="md:col-span-3">Standard Value</div>
             <div className="md:col-span-6">Industrial Impact</div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-brand-primary/5">
            {parameters.map((param, index) => (
              <div key={index} className="spec-row grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:px-10 items-center hover:bg-brand-background/50 transition-colors">
                <div className="md:col-span-3 font-bold text-brand-primary flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent shrink-0 hidden md:block" />
                  {param.spec}
                </div>
                <div className="md:col-span-3 font-playfair font-black text-xl text-brand-primary">
                  {param.value}
                </div>
                <div className="md:col-span-6 text-brand-body/80 text-sm leading-relaxed">
                  {param.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
