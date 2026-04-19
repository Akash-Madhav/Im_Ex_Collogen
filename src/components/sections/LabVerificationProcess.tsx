'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function LabVerificationProcess() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, x: 20 } });

  return (
    <section ref={ref} className="snap-section h-screen bg-[var(--c-surface)] flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="space-y-10">
               <div>
                  <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
                    Audit & Verification
                  </div>
                  <h2 className="text-4xl xl:text-5xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter mb-8">
                    Lab Verification <br />
                    <span className="text-[var(--c-primary)]">& Sampling</span>
                  </h2>
               </div>
               <div className="space-y-8 text-[15px] xl:text-[17px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
                  <p>
                     Aroon Blossom Impex provides batch-wise lab analysis reports on request. We work with accredited third-party laboratories to verify all critical chemical parameters before cargo loading.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                       'Pre-approval Samples',
                       'Consignment Health Certs',
                       'Moisture & pH Verification',
                       'Grade Segregation Labs'
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-xs font-black text-[var(--c-text-primary)] uppercase tracking-widest border-l-4 border-[var(--c-primary)] pl-4">
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="bg-white p-12 xl:p-16 rounded-[48px] shadow-2xl border border-black/5 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-[var(--c-primary)]" />
               <h4 className="text-2xl font-black mb-6 tracking-tight uppercase">Request Technical Specs</h4>
               <p className="text-[14px] text-[var(--c-text-secondary)] mb-10 leading-relaxed font-medium">Download our detailed PDF specification matrix for your technical procurement and formulation team.</p>
               <a 
                 href="/certificates/apeda.pdf" 
                 download 
                 className="btn-primary w-full text-center py-5 text-[11px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg hover:scale-[1.02] transition-transform"
               >
                  Download Data Sheet (PDF)
               </a>
               <div className="mt-8 flex items-center justify-center gap-2 opacity-30">
                  <span className="w-2 h-2 rounded-full bg-black/20" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Secured Document PDF</span>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
