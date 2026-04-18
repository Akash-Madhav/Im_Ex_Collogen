'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Button } from '@/components/shared/Button';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';

const HeroParticles = dynamic(() => import('./HeroParticles'), { ssr: false });

export default function HeroSection() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Performance: Check mobile early
  useEffect(() => {
    const checkMobile = window.innerWidth < 1024;
    setIsMobile(checkMobile);
    if (checkMobile) setVideoLoaded(true);
    // Timeout fallback for large assets
    const timeout = setTimeout(() => setVideoLoaded(true), 3500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!h1Ref.current || !videoLoaded) return;

    const text = new SplitType(h1Ref.current, { types: 'chars' });
    const tl = gsap.timeline();

    // High Performance Entry
    tl.from(text.chars, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.02,
      ease: "power4.out",
    })
    .from('.hero-fade-in', {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.8");

    // Parallax logic moved to a simplified version
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        const bg = containerRef.current.querySelector('.hero-bg') as HTMLElement;
        if (bg) bg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);

  }, [videoLoaded]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-primary">
      {/* Cinematic Background - Optimized */}
      <div className="absolute inset-0 z-0 hero-bg scale-110 will-change-transform">
        {!isMobile && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.webp"
            className="w-full h-full object-cover opacity-60 grayscale"
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
        {isMobile && (
          <Image 
             src="/hero_main_poster.png" 
             alt="Industrial Background" 
             fill 
             className="object-cover opacity-50 grayscale"
             priority
             loading="eager"
             quality={75}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-transparent to-brand-primary" />
      </div>

      <div className="absolute inset-0 z-0 opacity-20">
        <HeroParticles />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full pt-32 h-full">
        <div className="space-y-12 text-center lg:text-left">
          <div className="hero-fade-in flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <span className="glass-border px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-brand-accent transition-none">
              Global Trade Authority
            </span>
          </div>
          
          <h1 ref={h1Ref} className="font-playfair font-black text-white leading-[0.95] tracking-tight text-balance">
            Defining the <br/>
            <span className="italic font-light text-brand-accent/90">Standard of Pelts.</span>
          </h1>
          
          <div className="hero-fade-in glass-card p-8 md:p-12 border-none max-w-3xl relative">
            <p className="text-lg md:text-xl text-white/80 font-inter leading-relaxed">
              Consistent supply of <span className="text-white font-bold">Buffalo Dried Limed Pelts</span> engineered for high-yield collagen and gelatin extraction protocols.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <Button variant="primary" className="!px-10 !py-5 shadow-2xl active:scale-95 transition-transform">
                Explore Specs
                <ArrowRight size={18} />
              </Button>
              <button className="flex items-center gap-4 text-white font-bold tracking-widest text-[9px] uppercase hover:text-brand-accent transition-colors">
                Industrial Catalog
                <Download size={14} />
              </button>
            </div>
          </div>
          
          <div className="hero-fade-in pt-8 flex flex-wrap gap-x-12 gap-y-6 justify-center lg:justify-start">
             {[
               { label: 'Export Capacity', val: '1,500 MT' },
               { label: 'Quality Index', val: '99.9%' },
               { label: 'Port Transit', val: '24h' }
             ].map((stat, i) => (
               <div key={i} className="space-y-1">
                 <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
                 <p className="text-xl font-playfair font-black text-white">{stat.val}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
