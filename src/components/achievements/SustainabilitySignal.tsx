'use client';

import { Leaf } from 'lucide-react';

export default function SustainabilitySignal() {
  return (
    <section className="bg-brand-primary text-white py-16 px-6 relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Leaf size={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex items-start gap-6 max-w-2xl">
          <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center shrink-0">
             <Leaf className="text-brand-accent" size={28} />
          </div>
          <div className="space-y-3">
             <h4 className="text-2xl font-playfair font-bold">Natural Drying. Ethical Sourcing.</h4>
             <p className="text-white/70 text-sm leading-relaxed font-inter">
               We utilize India's abundant solar energy for the drying process, drastically reducing the carbon footprint compared to mechanical heat tunnels. We source exclusively from certified abattoirs to ensure humane and fully traceable supply chains.
             </p>
          </div>
        </div>

        <div className="flex gap-8 border-l border-white/10 pl-8 md:pl-12">
           <div className="space-y-1">
             <p className="text-4xl font-playfair font-black text-brand-accent">100%</p>
             <p className="text-xs uppercase tracking-widest text-white/50">Solar Dried</p>
           </div>
           <div className="space-y-1">
             <p className="text-4xl font-playfair font-black text-white">0%</p>
             <p className="text-xs uppercase tracking-widest text-white/50">Chemical Preservatives</p>
           </div>
        </div>

      </div>
    </section>
  );
}
