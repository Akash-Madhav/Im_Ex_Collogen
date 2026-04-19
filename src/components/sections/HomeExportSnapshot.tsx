'use client';

import React, { useRef, useState } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import SectionWrapper from '@/components/layout/SectionWrapper';

const markets = [
  { name: 'Indonesia', image: '/images/market_indonesia.png', desc: 'Primary collagen manufacturing hub.' },
  { name: 'Vietnam', image: '/images/market_vietnam.png', desc: 'Rising electronics and processing center.' },
  { name: 'China', image: '/images/market_china.png', desc: 'Largest global raw material importer.' },
  { name: 'Germany', image: '/images/market_germany.png', desc: 'Precision industrial gelatin market.' },
];

export default function HomeExportSnapshot() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { from: { opacity: 0, y: 20 } });

  return (
    <SectionWrapper id="export-snapshot" className="bg-[var(--c-dark)]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={markets[index].image} 
          alt="Market Background" 
          fill 
          className="object-cover brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div ref={containerRef} className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-12 items-center">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[8px] font-black uppercase tracking-[0.3em] backdrop-blur-xl shadow-2xl">
              <Globe size={12} className="text-[var(--c-primary-light)]" /> Global Supply Matrix
            </div>
            
            <div className="min-h-[100px] lg:min-h-[140px]">
              <h2 key={index} className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.05] tracking-tighter italic">
                Strategic <br />
                Exporter to <br />
                <span className="text-[var(--c-primary-light)]">
                  {markets[index].name}
                </span>
              </h2>
            </div>

            <p className="text-sm lg:text-base xl:text-lg text-white/50 max-w-lg leading-relaxed font-medium min-h-[50px]">
              {markets[index].desc} Consistent bulk supply with certified compliance for global industrial giants.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/export" className="btn-primary bg-white text-[var(--c-dark)] hover:bg-white/90 py-4 px-10 text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                Distribution Network
              </Link>
            </div>
          </div>
          
          {/* Market Selection Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {markets.map((m, i) => (
              <button 
                key={m.name} 
                onClick={() => setIndex(i)}
                className={`p-6 lg:p-10 rounded-[28px] lg:rounded-[32px] border text-left relative overflow-hidden backdrop-blur-md transition-all ${
                  index === i 
                    ? 'bg-white border-white scale-[1.02]' 
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span className={`text-xl lg:text-2xl font-black block mb-2 tracking-tighter transition-colors ${
                  index === i ? 'text-[var(--c-primary)]' : 'text-white'
                }`}>
                  {m.name}
                </span>
                <span className={`text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] ${
                  index === i ? 'text-[var(--c-text-secondary)] opacity-100' : 'text-white/20 opacity-60'
                }`}>
                  {index === i ? 'Priority Market' : 'Tap to Survey'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
