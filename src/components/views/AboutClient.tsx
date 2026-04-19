'use client';

import React from 'react';
import Image from 'next/image';
import CertificationsSection from '@/components/sections/CertificationsSection';
import FinalCTA from '@/components/sections/FinalCTA';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function AboutClient() {
  const headerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(headerRef, { from: { opacity: 0, y: 30 } });

  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Header */}
      <section ref={headerRef} className="bg-[var(--c-surface)] py-16 md:py-24 border-b border-[var(--c-border)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-bold text-[var(--c-text-primary)] mb-6">Our Company Story</h1>
            <p className="text-xl text-[var(--c-text-secondary)] leading-relaxed">
              Establishing the global benchmark for buffalo limed pelts through industrial precision, sustainable practices, and government-certified reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-lg text-[var(--c-text-secondary)] leading-relaxed">
              <h2 className="text-3xl font-bold text-[var(--c-text-primary)]">Decades of Industrial Heritage</h2>
              <p>
                Founded on the principles of quality and consistency, Aroon Blossom Impex has grown from a local procurement hub into a leading international exporter of buffalo hides and limed pelts. We bridge the gap between India's vast livestock resources and the specialized needs of global collagen and pet food manufacturers.
              </p>
              <p>
                Our vision is to provide a seamless, traceable supply chain where every pelt delivered matches the exact chemical and physical specifications required for high-yield industrial extraction.
              </p>
              <div className="bg-[var(--c-primary-light)] p-8 rounded-2xl border-l-4 border-[var(--c-primary)] box-shadow-card">
                 <p className="font-bold text-[var(--c-primary)] italic">
                    "We don't just sell raw materials; we provide the chemical consistency that ensures our partners' production lines run at maximum efficiency."
                 </p>
                 <div className="mt-4 text-sm font-bold text-[var(--c-text-primary)]">— Managing Director, Aroon Blossom Impex</div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                 src="/images/grading_process.png" 
                 alt="Quality Control at Aroon Blossom Impex" 
                 fill 
                 className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section-padding bg-[var(--c-surface)]">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-h2 font-bold mb-6">World-Class Infrastructure</h2>
            <p className="text-lg text-[var(--c-text-secondary)] max-w-2xl">
              Our hub in Chennai features advanced processing facilities designed for industrial scale and ecological responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfraCard 
               title="800+ Ton Capacity" 
               desc="Our facility is equipped with large-scale liming pits and graded sorting bays to handle massive monthly volumes without compromise." 
               icon="🏗"
            />
            <InfraCard 
               title="Concrete Solar Yards" 
               desc="Spacious, clean concrete yards ensuring chemical-free, natural solar drying for optimal moisture control and hide preservation." 
               icon="☀️"
            />
            <InfraCard 
               title="Certified Lab Testing" 
               desc="In-house quality checkpoints and third-party laboratory verification for protein content, ash levels, and pH stability." 
               icon="🧪"
            />
          </div>
        </div>
      </section>

      <CertificationsSection />
      <FinalCTA />
    </div>
  );
}

function InfraCard({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl border border-[var(--c-border)] shadow-sm hover:shadow-hover transition-all">
       <div className="text-4xl mb-6">{icon}</div>
       <h4 className="text-xl font-bold mb-4">{title}</h4>
       <p className="text-sm text-[var(--c-text-secondary)] leading-relaxed">{desc}</p>
    </div>
  );
}
