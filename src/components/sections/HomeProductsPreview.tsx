'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import Image from 'next/image';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

// Encapsulating the card in its own component makes GSAP hover timelines much cleaner to manage per-item
function ProductCard({ item, index }: { item: any, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!panelRef.current || !textContentRef.current) return;

    // Initial state: Panel is shifted down, text is hidden and shifted down
    gsap.set(panelRef.current, { yPercent: 20, opacity: 0 });
    gsap.set(textContentRef.current, { y: 20, opacity: 0 });

    const ctx = gsap.context(() => {
      // Create a paused timeline for the hover effect
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'cubic-bezier(0.22, 1, 0.36, 1)', duration: 0.4 } })
        .to(panelRef.current, { yPercent: 0, opacity: 1 }, 0)
        .to(textContentRef.current, { y: 0, opacity: 1 }, 0.1); // slight stagger for the text
      
      // Store timeline on the element or ref to play/reverse it
      tweenRef.current = tl as any;
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  const handleMouseEnter = () => tweenRef.current?.play();
  const handleMouseLeave = () => tweenRef.current?.reverse();

  const handleClick = (e: React.MouseEvent) => {
    if (!item.href) return;
    
    // Check if View Transitions API is supported
    if (document.startViewTransition) {
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(item.href);
      });
    }
  };

  return (
    <Link 
      href={item.href || '#'}
      onClick={handleClick}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[5/4] rounded-[40px] overflow-hidden shadow-lg border border-black/5 bg-neutral-900 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-2xl ${index === 2 ? 'lg:col-span-2 lg:aspect-[21/9]' : ''}`}
    >
      <Image 
        src={item.image} 
        alt={item.title} 
        fill 
        data-vt-image={item.tag.toLowerCase()}
        className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
        style={{ viewTransitionName: `product-image-${item.tag.toLowerCase()}` } as any}
      />
      
      {/* Bottom Content Panel animated by GSAP */}
      <div 
        ref={panelRef}
        className="absolute inset-x-[6%] md:inset-x-[8%] bottom-0 top-[20%] md:top-[25%] bg-[#2a2a2a]/95 rounded-t-[32px] md:rounded-t-[40px] p-6 md:p-8 lg:p-10 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pointer-events-none"
      >
        {/* Floating Pill on top edge */}
        <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 w-max">
          <span className="inline-block px-6 md:px-8 py-2 md:py-3 rounded-full bg-white text-[#0a4b3d] text-xs md:text-sm font-black uppercase tracking-widest shadow-xl border border-black/5">
            {item.tag}
          </span>
        </div>

        <div ref={textContentRef} className="mt-4 md:mt-8 flex flex-col h-full justify-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-[1.1] tracking-tight pr-4">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-white/70 font-medium leading-relaxed max-w-sm hidden md:block">
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function HomeProductsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 20 } });
  
  const t = useTranslations('Products');
  const locale = useLocale();

  const previews = [
    {
      title: t('buffaloTitle'),
      desc: t('buffaloDesc'),
      image: '/images/grading_process.png',
      tag: 'Collagen',
      href: `/${locale}/products/collagen-grade`
    },
    {
      title: t('petFoodTitle'),
      desc: t('petFoodDesc'),
      image: '/images/warehouse_stock.png',
      tag: 'PetFood',
      href: `/${locale}/products/pet-food-grade`
    },
    {
      title: t('customTitle'),
      desc: t('customDesc'),
      image: '/images/liming_pits.png',
      tag: 'Custom',
      href: `/${locale}/products`
    }
  ];

  return (
    <SectionWrapper id="products-preview" className="bg-[var(--c-surface)]">
      <div ref={ref} className="h-full w-full flex flex-col justify-center">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-14 gap-6 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs font-black tracking-widest uppercase text-[var(--c-primary)] mb-3">
              Product Portfolio
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--c-text-primary)] mb-4">
              Precision Raw Materials
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[var(--c-text-muted)] max-w-xl font-medium">
              Industrial standard and lab-verified materials engineered for high-yield extraction and premium manufacturing processes.
            </p>
          </div>
          <Link href={`/${locale}/products`} className="btn-secondary py-3.5 px-8 text-xs font-bold uppercase tracking-widest whitespace-nowrap self-start md:self-end rounded-full shadow-lg hover:shadow-xl transition-all">
            {t('cta')}
          </Link>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {previews.map((item, i) => (
            <ProductCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
