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
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  const [isFirstBg, setIsFirstBg] = useState(true);

  useGsapReveal(containerRef, { from: { opacity: 0, y: 30 } });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % markets.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Cross-fade background images
    const activeBg = isFirstBg ? bgRef2 : bgRef1;
    const inactiveBg = isFirstBg ? bgRef1 : bgRef2;

    gsap.to(activeBg.current, { opacity: 1, duration: 1.5, ease: 'power2.inOut' });
    gsap.to(inactiveBg.current, { opacity: 0, duration: 1.5, ease: 'power2.inOut' });
    
    setIsFirstBg(!isFirstBg);
  }, [index]);

  return (
    <section ref={containerRef} className="snap-section relative bg-[var(--c-dark)] overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef1} className="absolute inset-0 opacity-100 transition-none">
          <Image 
            src={markets[index].image} 
            alt="Market Background" 
            fill 
            className="object-cover brightness-50 grayscale-[0.3]"
          />
        </div>
        <div ref={bgRef2} className="absolute inset-0 opacity-0 transition-none">
          <Image 
            src={markets[(index + 1) % markets.length].image} 
            alt="Market Background Next" 
            fill 
            className="object-cover brightness-50 grayscale-[0.3]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--c-dark)] via-[var(--c-dark)]/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Globe size={14} className="text-[var(--c-primary-light)]" /> Global Reach
            </div>
            
            <div className="overflow-hidden h-[120px] md:h-[160px]">
              <h2 key={index} className="text-h2 font-bold text-white leading-tight animate-fade-up">
                Leading Exporter to <br />
                <span className="text-[var(--c-primary-light)] underline decoration-[var(--c-primary)] decoration-4 underline-offset-8">
                  {markets[index].name}
                </span>
              </h2>
            </div>

            <p className="text-xl text-white/70 max-w-lg leading-relaxed h-[60px]">
              {markets[index].desc} Consistent bulk supply with certified compliance.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/export" className="btn-primary bg-white text-[var(--c-dark)] hover:bg-white/90">
                Explore Markets
              </Link>
            </div>
          </div>
          
          {/* Market Selection Grid */}
          <div className="grid grid-cols-2 gap-4">
            {markets.map((m, i) => (
              <button 
                key={m.name} 
                onClick={() => setIndex(i)}
                className={`p-10 rounded-2xl border transition-all duration-500 text-left relative overflow-hidden group ${
                  index === i 
                    ? 'bg-white border-white scale-105 shadow-2xl' 
                    : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'
                }`}
              >
                <span className={`text-2xl font-black block mb-2 transition-colors ${
                  index === i ? 'text-[var(--c-primary)]' : 'text-white'
                }`}>
                  {m.name}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${
                  index === i ? 'text-[var(--c-text-secondary)]' : 'text-white/20'
                }`}>
                  {index === i ? 'Active Market' : 'Tap to View'}
                </span>
                {index === i && (
                  <div className="absolute bottom-0 left-0 h-1 bg-[var(--c-primary)] animate-progress-line" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-line {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-progress-line {
          animation: progress-line 5s linear forwards;
        }
        @keyframes fade-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-up {
          animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}

