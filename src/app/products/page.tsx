import Image from 'next/image';
import { Download, Package, Truck, Layers, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import ApplicationsDeepDive from '@/components/products/ApplicationsDeepDive';

const fullSpecs = [
  { parameter: 'Moisture Content', value: '14 - 18%', notes: 'Max limit enforced.' },
  { parameter: 'Protein Content', value: '75 - 82%', notes: 'Lab tested yield.' },
  { parameter: 'Thickness', value: '3 - 8mm', notes: 'Uniform sorting.' },
  { parameter: 'Dehairing', value: '> 99.9%', notes: 'Machine dehaired.' },
  { parameter: 'Residual Lime', value: '< 1.0%', notes: 'Multi-stage wash.' },
  { parameter: 'Trimming', value: '100%', notes: 'Zero external fat.' },
];

export default function ProductsPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-background">
      
      {/* Product Hero - Optimized */}
      <section className="section-padding border-b border-brand-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
          
          <div className="lg:col-span-6 relative aspect-square overflow-hidden rounded-3xl shadow-xl shadow-brand-primary/10">
            <Image 
              src="/product_pelts_bundles.png" 
              alt="Buffalo Dried Limed Pelts" 
              fill 
              className="object-cover grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card-dark rounded-xl border-none">
               <span className="text-brand-accent text-[8px] font-black tracking-widest uppercase block mb-1">Grade Spec</span>
               <h3 className="text-white text-xl font-playfair font-black">Bulk Pelts Grade A</h3>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <SectionHeading 
                kicker="Primary Commodity"
                title="Buffalo Dried Limed Pelts"
              />
              <p className="text-lg text-brand-body leading-relaxed max-w-xl font-medium opacity-80">
                Processed via a specialized 22-day cycle to ensure fiber integrity for precision collagen and gelatin extraction protocols.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-y border-brand-primary/5 py-8">
              {[
                { label: 'Purity', val: '99.9%' }, 
                { label: 'Traceable', val: 'Full' }, 
                { label: 'Drying', val: 'Solar' }, 
                { label: 'Load', val: '26 MT' }
              ].map((item, i) => (
                <div key={i} className="space-y-0">
                  <p className="text-[8px] font-black uppercase text-brand-accent tracking-tighter opacity-70">{item.label}</p>
                  <p className="text-lg font-playfair font-black text-brand-primary">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="!px-10 !py-4 shadow-xl active:scale-95 transition-transform">
                Request Quote
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Table - Simplified Rendering */}
      <section className="section-padding bg-white relative">
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          <SectionHeading 
            kicker="Technical Integrity"
            title="Reference Parameters"
            align="center"
          />
          
          <div className="overflow-hidden rounded-2xl border border-brand-primary/5 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest">
                  <th className="py-6 px-8">Parameter</th>
                  <th className="py-6 px-8">Limit</th>
                  <th className="py-6 px-8 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-primary/5">
                {fullSpecs.map((spec, index) => (
                  <tr key={index} className="hover:bg-brand-background/30 transition-colors">
                    <td className="py-6 px-8">
                      <span className="text-brand-primary font-bold text-sm block">{spec.parameter}</span>
                    </td>
                    <td className="py-6 px-8">
                      <span className="text-lg font-playfair font-black text-brand-accent">{spec.value}</span>
                    </td>
                    <td className="py-6 px-8 text-brand-body text-xs font-medium hidden md:table-cell opacity-50">
                      {spec.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grade Classification - Performance Optimized */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { tag: 'Grade A', title: 'Premium Spec', desc: 'Pharmaceutical collagen & edible gelatin.', bg: 'bg-white' },
            { tag: 'Grade B', title: 'Industrial Spec', desc: 'Technical gelatin & natural pet chews.', bg: 'bg-brand-primary text-white' }
          ].map((grade, i) => (
            <div key={i} className={`p-12 rounded-3xl border border-brand-primary/5 shadow-sm ${grade.bg} relative overflow-hidden group hover:-translate-y-1 transition-transform`}>
              <div className="space-y-4 relative z-10">
                <span className="text-brand-accent text-[9px] font-black tracking-widest uppercase">{grade.tag}</span>
                <h3 className={`text-3xl font-playfair font-black ${i === 1 ? 'text-white' : ''}`}>{grade.title}</h3>
                <p className={`text-base font-medium opacity-70 ${i === 1 ? 'text-white/70' : ''}`}>{grade.desc}</p>
                <div className="pt-6 border-t border-brand-primary/5 group-hover:border-white/10" />
                <button className="text-[9px] font-black uppercase tracking-widest text-brand-accent">Specifications Summary →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ApplicationsDeepDive />

      {/* Logistics Overview */}
      <section className="bg-brand-primary section-padding text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 relative z-10">
          {[
            { icon: Layers, title: 'Hydraulic Bales' },
            { icon: Package, title: 'Moisture Guard' },
            { icon: Truck, title: 'Global Export' }
          ].map((item, i) => (
            <div key={i} className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                 <item.icon size={40} strokeWidth={1} className="text-brand-accent" />
              </div>
              <h4 className="text-2xl font-playfair font-black text-white">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed font-inter">
                Optimizing export container footprints for safe and sustainable global transit.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
