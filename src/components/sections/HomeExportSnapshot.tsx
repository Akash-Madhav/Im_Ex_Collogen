'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { gsap } from '@/lib/gsap-config';

const markets = [
  { name: 'Indonesia', image: '/images/market_indonesia.png', desc: 'Primary collagen manufacturing hub.' },
  { name: 'Vietnam', image: '/images/market_vietnam.png', desc: 'Rising electronics and processing center.' },
  { name: 'China', image: '/images/market_china.png', desc: 'Largest global raw material importer.' },
  { name: 'Germany', image: '/images/market_germany.png', desc: 'Precision industrial gelatin market.' },
];

export default function HomeExportSnapshot() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={containerRef} className="relative bg-[var(--c-dark)] overflow-hidden h-screen flex flex-col justify-center">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={markets[index].image} 
          alt="Market Background" 
          fill 
          className="object-cover brightness-[0.3] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-xl shadow-2xl">
              <Globe size={16} className="text-[var(--c-primary-light)]" /> Global Supply Matrix
            </div>
            
            <div className="min-h-[160px] xl:min-h-[220px]">
              <h2 key={index} className="text-4xl md:text-5xl xl:text-7xl font-black text-white leading-[1.05] tracking-tighter italic">
                Strategic <br />
                Exporter to <br />
                <span className="text-[var(--c-primary-light)]">
                  {markets[index].name}
                </span>
              </h2>
            </div>

            <p className="text-lg xl:text-xl text-white/50 max-w-lg leading-relaxed font-medium min-h-[60px]">
              {markets[index].desc} Consistent bulk supply with certified compliance for global industrial giants.
            </p>

            <div className="flex gap-4 pt-6">
              <Link href="/export" className="btn-primary bg-white text-[var(--c-dark)] hover:bg-white/90 py-5 px-12 text-[11px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                Distribution Network
              </Link>
            </div>
          </div>
          
          {/* Market Selection Grid */}
          <div className="grid grid-cols-2 gap-4 xl:gap-6">
            {markets.map((m, i) => (
              <button 
                key={m.name} 
                onClick={() => setIndex(i)}
                className={`p-10 xl:p-14 rounded-[40px] border text-left relative overflow-hidden backdrop-blur-md group ${
                  index === i 
                    ? 'bg-white border-white' 
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span className={`text-2xl xl:text-3xl font-black block mb-3 tracking-tighter transition-colors ${
                  index === i ? 'text-[var(--c-primary)]' : 'text-white'
                }`}>
                  {m.name}
                </span>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                  index === i ? 'text-[var(--c-text-secondary)] opacity-100' : 'text-white/20 opacity-60'
                }`}>
                  {index === i ? 'Priority Market' : 'Tap to Survey'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



