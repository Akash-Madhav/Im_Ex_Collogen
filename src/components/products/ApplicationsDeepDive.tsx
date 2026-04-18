'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Microscope, PawPrint, Droplets, Activity } from 'lucide-react';
import gsap from 'gsap';

const applicationsData = [
  {
    id: 'collagen',
    title: 'Collagen Peptides',
    icon: Microscope,
    description: 'High-purity limed pelts engineered for enzymatic hydrolysis to produce type I and III collagen.',
    specs: [
      { label: 'Required Yield', value: '78%+' },
      { label: 'Moisture Limit', value: '< 15%' },
      { label: 'Dehairing', value: 'Absolute (99.9%)' }
    ]
  },
  {
    id: 'petfood',
    title: 'Pet Chews & Treats',
    icon: PawPrint,
    description: 'Tough, resilient buffalo hide perfectly suited for long-lasting, natural dog chews.',
    specs: [
      { label: 'Thickness', value: '3mm - 8mm' },
      { label: 'Chemicals', value: 'Food-Safe' },
      { label: 'Integrity', value: 'High Tear Strength' }
    ]
  },
  {
    id: 'gelatin',
    title: 'Gelatin Production',
    icon: Droplets,
    description: 'Standardized raw material for pharmaceutical capsules and food-grade gelatin extraction.',
    specs: [
      { label: 'Bloom Strength', value: 'Optimized' },
      { label: 'pH Level', value: 'Stabilized' },
      { label: 'Preparation', value: 'Alkali-Ready' }
    ]
  },
  {
    id: 'food',
    title: 'Traditional Food',
    icon: Activity,
    description: 'Cleaned and processed skins prepared specifically for Southeast Asian food markets (Krecek/Krupuk).',
    specs: [
      { label: 'Sanitation', value: 'Food-Grade' },
      { label: 'Visual', value: 'Clean & White' },
      { label: 'Residual Lime', value: 'Minimal' }
    ]
  }
];

export default function ApplicationsDeepDive() {
  const [activeTab, setActiveTab] = useState(applicationsData[0].id);

  const activeApp = applicationsData.find(app => app.id === activeTab) || applicationsData[0];

  return (
    <section className="bg-white section-padding border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading 
          kicker="Industry Focus"
          title="Engineered for Your Process"
          align="center"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Menu */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {applicationsData.map((app) => {
              const isActive = activeTab === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveTab(app.id)}
                  className={`flex items-center gap-4 p-6 transition-all duration-300 border-l-[3px] text-left
                    ${isActive 
                      ? 'bg-brand-background border-brand-accent text-brand-primary shadow-sm' 
                      : 'bg-transparent border-transparent text-brand-body/60 hover:bg-brand-background/50 hover:text-brand-primary'
                    }
                  `}
                >
                  <app.icon size={24} className={isActive ? 'text-brand-accent' : ''} />
                  <span className="font-playfair font-bold text-lg">{app.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Content Area */}
          <div className="lg:w-2/3 bg-brand-primary p-8 md:p-12 text-white relative overflow-hidden shadow-industrial">
             {/* Large background icon */}
             <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
               <activeApp.icon size={300} />
             </div>

             <div className="relative z-10 space-y-8 h-full flex flex-col justify-center">
               <div className="space-y-4">
                 <h3 className="text-4xl font-playfair font-black text-white">{activeApp.title}</h3>
                 <p className="text-white/80 font-inter leading-relaxed max-w-xl text-lg">
                   {activeApp.description}
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                 {activeApp.specs.map((spec, i) => (
                   <div key={i} className="space-y-1">
                     <p className="text-xs uppercase tracking-widest font-bold text-white/50">{spec.label}</p>
                     <p className="text-xl font-playfair font-bold text-brand-accent">{spec.value}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
