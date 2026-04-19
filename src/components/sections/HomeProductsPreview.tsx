'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import Image from 'next/image';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { useTranslations } from 'next-intl';

export default function HomeProductsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 20 } });
  
  const t = useTranslations('Products');

  const previews = [
    {
      title: t('buffaloTitle'),
      desc: t('buffaloDesc'),
      image: '/images/grading_process.png',
      tag: 'Collagen',
    },
    {
      title: t('petFoodTitle'),
      desc: t('petFoodDesc'),
      image: '/images/warehouse_stock.png',
      tag: 'Pet Food',
    },
    {
      title: t('customTitle'),
      desc: t('customDesc'),
      image: '/images/liming_pits.png',
      tag: 'Custom',
    }
  ];

  return (
    <SectionWrapper id="products-preview" className="bg-[var(--c-surface)]">
      <div ref={ref} className="h-full flex flex-col justify-center">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-16 gap-6 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs font-black tracking-widest uppercase text-[var(--c-primary)] mb-3">
              Product Portfolio
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--c-text-primary)] mb-4">
              Precision Raw Materials
            </h2>
            <p className="text-sm md:text-base text-[var(--c-text-muted)] max-w-xl">
              Industrial standard and lab-verified materials engineered for high-yield extraction and premium manufacturing processes.
            </p>
          </div>
          <Link href="/products" className="btn-secondary py-3 px-8 text-xs font-bold uppercase tracking-widest whitespace-nowrap self-start md:self-end">
            {t('cta')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {previews.map((item, i) => (
            <div key={i} className="group relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[16/11] rounded-2xl md:rounded-[32px] overflow-hidden shadow-lg border border-black/5 bg-neutral-900 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                {/* Top Tag */}
                <div className="self-start">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white text-[var(--c-primary)] text-xs font-black uppercase tracking-widest shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Content Panel with Glassmorphism */}
                <div className="mt-auto p-5 md:p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 font-medium leading-relaxed max-w-md line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
