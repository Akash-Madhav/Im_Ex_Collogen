'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SectionHeading } from '@/components/shared/SectionHeading';

export default function InfrastructureCapability() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const images = sectionRef.current.querySelectorAll('.infra-img');
    
    gsap.from(images, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      scale: 0.9,
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'expo.out'
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-padding border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <SectionHeading 
              kicker="Infrastructure"
              title="100,000 Sq Ft Processing Hub"
            />
            <p className="text-brand-body text-lg leading-relaxed">
              Located strategically near the Chennai commercial port, our facility boasts expansive open-air concrete yards designed for optimal sun drying of buffalo pelts. 
            </p>
            <p className="text-brand-body/80 leading-relaxed font-inter">
              This vast footprint allows us to process and dry hundreds of tons simultaneously, preventing bottlenecks during peak demand periods. Advanced mechanical balers on-site pack the dried limed pelts into maximum-density cubes, optimizing ocean freight container space for our buyers.
            </p>
            
            <ul className="space-y-4 pt-4 border-t border-brand-primary/10">
              <li className="flex items-center gap-4 text-brand-primary font-bold">
                 <span className="w-2 h-2 rounded-full bg-brand-accent" /> Concrete Sun-Drying Yards
              </li>
              <li className="flex items-center gap-4 text-brand-primary font-bold">
                 <span className="w-2 h-2 rounded-full bg-brand-accent" /> High-Pressure Hydraulic Balers
              </li>
              <li className="flex items-center gap-4 text-brand-primary font-bold">
                 <span className="w-2 h-2 rounded-full bg-brand-accent" /> 24h Transit to Major Ports
              </li>
            </ul>
          </div>

          {/* Asymmetrical Image Grid */}
          <div className="relative h-[600px] w-full">
            <div className="infra-img absolute top-0 right-0 w-[80%] h-[60%] rounded-2xl overflow-hidden shadow-industrial z-10">
              <Image 
                src="/infrastructure_hub.png" 
                alt="Industrial Facility" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="infra-img absolute bottom-0 left-0 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-industrial z-20 border-4 border-white">
              <Image 
                src="/port_logistics_closeup.png" 
                alt="Logistics Port" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Decal */}
            <div className="absolute top-[50%] left-[65%] w-32 h-32 bg-brand-primary rounded-full flex items-center justify-center z-30 text-white font-playfair font-black text-center leading-tight shadow-xl">
               Port<br/>Proximate
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
