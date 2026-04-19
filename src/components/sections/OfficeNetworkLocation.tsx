'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function OfficeNetworkLocation() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 20 } });

  return (
    <section ref={ref} className="h-[400px] w-full bg-[var(--c-surface)] relative border-t border-[var(--c-border)]">
      <div className="absolute inset-0 flex items-center justify-center text-[var(--c-text-muted)] font-bold uppercase tracking-widest text-xs">
        [ Interactive Logistics Map Embed ]
      </div>
      <div className="container-custom relative h-full pointer-events-none">
        <div className="absolute top-10 left-10 p-6 bg-white rounded-xl shadow-2xl border border-[var(--c-border)] max-w-xs pointer-events-auto">
           <h4 className="font-bold text-[var(--c-primary)] mb-2 uppercase text-[10px] tracking-wider">Registered Office</h4>
           <p className="text-sm text-[var(--c-text-primary)] font-bold mb-1">Aroon Blossom Impex</p>
           <p className="text-xs text-[var(--c-text-secondary)] leading-relaxed">Chennai Port Zone, Tamil Nadu, India. Serving global procurement since 2012.</p>
        </div>
      </div>
    </section>
  );
}
