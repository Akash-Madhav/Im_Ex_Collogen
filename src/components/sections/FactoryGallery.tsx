'use client';

import React from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

const photos = [
  { src: '/images/drying_yard.png', alt: 'Solar Drying Yard wide shot', span: 'col-span-2' },
  { src: '/images/liming_pits.png', alt: 'Industrial Liming Pits' },
  { src: '/images/grading_process.png', alt: 'Sorting and Grading Area' },
  { src: '/images/warehouse_stock.png', alt: 'Baled Pelts in Warehouse' },
  { src: '/images/container_loading.png', alt: 'Container Loading at Port' }
];

export default function FactoryGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { opacity: 0, scale: 0.95 },
    stagger: 0.1
  });

  return (
    <section ref={containerRef} className="snap-section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 px-4">
          <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
            FACILITY
          </div>
          <h2 className="text-h2 font-bold text-[var(--c-text-primary)] mb-6">
            Actual Processing & Export Operations
          </h2>
          <p className="text-lg text-[var(--c-text-secondary)]">
            Authentic documentation of our processing hub. Transparency in every step of the supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3] ${photo.span || ''}`}
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 text-white text-[13px] font-bold tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                 {photo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
