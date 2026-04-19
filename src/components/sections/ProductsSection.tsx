"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      title: "Collagen Grade",
      tag: "Industrial Extraction",
      tagColor: "bg-[var(--c-tag-collagen)]",
      desc: "High-protein, ultra-low ash pelts optimized for enzymatic hydrolysis in collagen plants.",
      specs: [
        { label: 'Protein', value: '80%+' },
        { label: 'Ash Content', value: '<4%' },
        { label: 'End Use', value: 'Industrial Extraction' }
      ],
      image: "/images/grading_process.png"
    },
    {
      title: "Pet Food Grade",
      tag: "Dog Chews & Treats",
      tagColor: "bg-[var(--c-tag-pet)]",
      desc: "Clean, odor-controlled flexible sheets suitable for dog chew manufacturing and natural treats.",
      specs: [
        { label: 'Flexibility', value: 'Very High' },
        { label: 'Liming', value: 'Controlled pH' },
        { label: 'End Use', value: 'Treat Manufacturing' }
      ],
      image: "/images/warehouse_stock.png"
    },
    {
      title: "Gelatin Grade",
      tag: "Food & Pharma",
      tagColor: "bg-blue-50 text-blue-700",
      desc: "Specialized processing to maximize Bloom yield for food and pharmaceutical gelatin production.",
      specs: [
        { label: 'Bloom Yield', value: 'High Performance' },
        { label: 'Purity', value: 'Pharmaceutical Standard' },
        { label: 'End Use', value: 'Gelatin Production' }
      ],
      image: "/images/liming_pits.png"
    },
    {
      title: "Tannery Grade",
      tag: "Leather Manufacturing",
      tagColor: "bg-amber-50 text-amber-700",
      desc: "Full-thickness pelts with preserved natural grain for premium upholstery and footwear leather.",
      specs: [
        { label: 'Grain Size', value: 'Uniform Standard' },
        { label: 'Thickness', value: 'Max Preserved' },
        { label: 'End Use', value: 'Tannery / Footwear' }
      ],
      image: "/images/pelt_texture.png"
    }
  ];

  return (
    <section ref={containerRef} className="bg-white flex flex-col justify-center py-16 pt-28 md:pt-32 overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col">
        <div className="text-center max-w-3xl mx-auto mb-12 shrink-0">
          <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-4">
            Technical Catalog
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--c-text-primary)]">
            Engineered Raw Materials
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full h-[750px] xl:h-[850px]">
          {products.map((prod, idx) => (
            <div
              key={prod.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[var(--c-border)] shadow-lg transition-all duration-700 ease-out`}
              style={{ flex: activeIndex === idx ? 4 : 1 }}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <Image 
                src={prod.image} 
                alt={prod.title} 
                fill 
                className="object-cover" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-3 py-1 rounded-full ${prod.tagColor} text-[10px] font-black uppercase tracking-wider whitespace-nowrap`}>
                    {prod.tag}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-3xl font-bold mb-2 whitespace-nowrap">
                  {prod.title}
                </h3>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    activeIndex === idx ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/80 text-sm md:text-base mb-4 max-w-md">
                    {prod.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {prod.specs.map((spec, i) => (
                      <div key={i}>
                        <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{spec.label}</div>
                        <div className="text-sm font-semibold">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


