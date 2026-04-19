'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function LabVerificationProcess() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, x: 20 } });

  return (
    <section ref={ref} className="section-padding bg-[var(--c-surface)]">
      <div className="container-custom">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Lab Verification & Sampling</h2>
              <div className="space-y-6 text-lg text-[var(--c-text-secondary)]">
                 <p>
                    Aroon Blossom Impex provides batch-wise lab analysis reports on request. We work with accredited third-party laboratories to verify all critical chemical parameters before cargo loading.
                 </p>
                 <ul className="space-y-4">
                    {[
                      'Representative samples sent for pre-approval',
                      'Third-party health certificate per consignment',
                      'Moisture and pH certificates',
                      'Consistent grade segregation'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-[var(--c-text-primary)]">
                         <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-[var(--c-border)]">
               <h4 className="text-xl font-bold mb-6">Request Technical Specs</h4>
               <p className="text-sm text-[var(--c-text-secondary)] mb-8">Download our detailed PDF specification sheet for your technical procurement team.</p>
               <a href="/certificates/apeda.pdf" download className="btn-primary w-full text-center">
                  Download Product Specs (PDF)
               </a>
            </div>
         </div>
      </div>
    </section>
  );
}
