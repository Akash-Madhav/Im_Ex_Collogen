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
          <Link href="/products" className="btn-secondary py-3.5 px-8 text-xs font-bold uppercase tracking-widest whitespace-nowrap self-start md:self-end rounded-full shadow-lg hover:shadow-xl transition-all">
            {t('cta')}
          </Link>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {previews.map((item, i) => (
            <div key={i} className={`group relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[5/4] rounded-[40px] overflow-hidden shadow-lg border border-black/5 bg-neutral-900 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 ${i === 2 ? 'lg:col-span-2 lg:aspect-[21/9]' : ''}`}>
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Bottom Content Panel matching the reference image */}
              <div className="absolute inset-x-[10%] bottom-0 top-[25%] md:top-[30%] bg-[#2a2a2a]/95 rounded-t-[40px] p-8 md:p-12 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:bg-[#333333]/95">
                
                {/* Floating Pill on top edge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-max">
                  <span className="inline-block px-8 py-3 rounded-full bg-white text-[#0a4b3d] text-sm md:text-base font-black uppercase tracking-widest shadow-xl border border-black/5">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-6 md:mt-8 flex flex-col h-full justify-center">
                  <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-[1.05] tracking-tight whitespace-pre-line">
                    {item.title.split(' ').join('\n')}
                  </h3>
                  {/* Optional description hidden for purer bold look */}
                  <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed max-w-sm hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
