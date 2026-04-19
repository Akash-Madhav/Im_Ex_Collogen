import React from 'react';
import Image from 'next/image';
import ExportCapability from '@/components/sections/ExportCapability';
import FinalCTA from '@/components/sections/FinalCTA';
import PageHeader from '@/components/layout/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Buffalo Hide Export from India — Container Supply | Aroon Blossom Impex",
  description: "Global supply chain logistics for buffalo limed pelts. 26 MT per 40ft HC container, shipping from Chennai Port. Serving major hubs in Indonesia, Vietnam, China, and Europe.",
};

const docs = [
  'Commercial Invoice',
  'Packing List',
  'Certificate of Origin (COO)',
  'Health Certificate',
  'Bill of Lading (B/L)',
  'Weight Certificate',
  'Quality & Analysis Certificate'
];

export default function ExportPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <PageHeader 
        label="Logistics & Supply Chain"
        title="Global Export Capability"
        description="Serving the global collagen and pet food industries with efficient logistics, reliable container supply, and 100% documentation compliance."
      />

      <ExportCapability />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                 src="/images/container_loading.png" 
                 alt="Container Loading at Port" 
                 fill 
                 className="object-cover"
               />
            </div>
            <div className="space-y-8">
               <h2 className="text-3xl font-bold">Logistics & Load Specs</h2>
               <div className="space-y-6">
                  <div className="p-6 bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)]">
                     <h4 className="font-bold text-[var(--c-primary)] mb-2 uppercase text-xs tracking-widest">40ft FCL HC Container</h4>
                     <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">
                        Hydraulic baling allows us to maximize density. We pack approximately **26 Metric Tons** per 40ft High Cube container, ensuring maximum freight efficiency for our buyers.
                     </p>
                  </div>
                  <div className="p-6 bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)]">
                     <h4 className="font-bold text-[var(--c-primary)] mb-2 uppercase text-xs tracking-widest">20ft FCL Container</h4>
                     <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">
                        For trial orders and smaller factories, we supply 20ft containers with a payload of approximately **14-16 Metric Tons**.
                     </p>
                  </div>
                  <div className="flex gap-8 pt-4">
                     <div>
                        <div className="text-xs font-bold text-[var(--c-text-muted)] uppercase tracking-widest mb-1">Primary Port</div>
                        <div className="text-lg font-bold">Chennai Port, India</div>
                     </div>
                     <div>
                        <div className="text-xs font-bold text-[var(--c-text-muted)] uppercase tracking-widest mb-1">Lead Time</div>
                        <div className="text-lg font-bold">2-3 Weeks</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--c-surface)]">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
              <div className="bg-[var(--c-primary)] p-10 rounded-2xl text-white shadow-xl">
                 <h3 className="text-2xl font-bold mb-6">Documentation Compliance</h3>
                 <p className="text-sm text-white/75 mb-8 leading-relaxed">
                    We manage all export documentation end-to-end to ensure smooth customs clearance at your destination port.
                 </p>
                 <ul className="space-y-4">
                    {docs.map((doc, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                         <span className="text-[var(--c-primary-light)]">✔</span> {doc}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="space-y-10 lg:pt-6 lg:pl-10">
                 <div>
                    <h3 className="text-2xl font-bold mb-4">Countries We Serve</h3>
                    <p className="text-lg text-[var(--c-text-secondary)] leading-relaxed">
                       Aroon Blossom Impex has established supply routes to the world's largest collagen hubs.
                    </p>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {['Indonesia', 'Vietnam', 'China', 'Thailand', 'Germany', 'USA', 'South Korea', 'Italy', 'Brazil'].map(country => (
                      <div key={country} className="flex items-center gap-3 p-4 bg-white border border-[var(--c-border)] rounded-lg shadow-sm font-bold text-[var(--c-text-primary)]">
                         <span className="text-lg">🌍</span> {country}
                      </div>
                    ))}
                 </div>
                 <div className="p-8 bg-[var(--c-primary-light)] rounded-2xl border border-[var(--c-primary)]/10">
                    <h4 className="font-bold text-[var(--c-primary)] mb-2">Transit & Logistics Quote</h4>
                    <p className="text-sm text-[var(--c-text-secondary)]">We offer FOB (Free on Board) and CIF (Cost, Insurance, and Freight) terms to all major ports. Contact us for a landed cost calculation.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
