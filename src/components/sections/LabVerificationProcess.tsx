'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionWrapper from '@/components/layout/SectionWrapper';

export default function LabVerificationProcess() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, scale: 0.98 } });

  return (
    <SectionWrapper id="lab-verification" className="bg-[var(--c-surface)]">
      <div ref={ref} className="h-full flex flex-col justify-center">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
             
             {/* Text Content */}
             <div className="space-y-6 lg:space-y-8">
                <div>
                   <div className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
                     Audit & Verification
                   </div>
                   <h2 className="text-2xl lg:text-3xl font-black text-[var(--c-text-primary)] leading-[1.1] tracking-tighter mb-4 italic">
                     Lab Verification <br />
                     <span className="text-[var(--c-primary)] NOT-italic">& Sampling</span>
                   </h2>
                </div>
                <div className="space-y-6 text-[13px] lg:text-[15px] text-[var(--c-text-secondary)] leading-relaxed font-medium">
                   <p className="opacity-80">
                      Aroon Blossom Impex provides batch-wise lab analysis reports on request, working with accredited third-party laboratories to ensure absolute standard compliance.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      {[
                        'Pre-approval Samples',
                        'Consignment Health Certs',
                        'Moisture & pH Verification',
                        'Grade Segregation Labs'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[9px] font-black text-[var(--c-text-primary)] uppercase tracking-widest border-l-2 border-[var(--c-primary)]/30 pl-3">
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>

             {/* Action Module */}
             <div className="bg-white p-6 lg:p-10 rounded-[28px] shadow-xl border border-black/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--c-primary)]" />
                <h4 className="text-[15px] lg:text-[17px] font-black mb-3 tracking-tight uppercase leading-none italic">Technical Specs</h4>
                <p className="text-[11px] lg:text-[12px] text-[var(--c-text-secondary)] mb-6 leading-tight font-medium opacity-60">
                  Download our detailed PDF specification matrix for your technical and procurement teams.
                </p>
                <a 
                  href="/certificates/apeda.pdf" 
                  download 
                  className="btn-primary w-full text-center py-3 text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg block"
                >
                   Download Data Sheet
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 opacity-20">
                   <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                   <span className="text-[8px] font-black uppercase tracking-widest">Secured PDF Module</span>
                </div>
             </div>

         </div>
      </div>
    </SectionWrapper>
  );
}
