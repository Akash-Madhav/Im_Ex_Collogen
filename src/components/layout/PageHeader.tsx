'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

interface PageHeaderProps {
  title: string;
  description: string;
  label?: string;
  className?: string;
}

export default function PageHeader({ title, description, label, className }: PageHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { from: { opacity: 0, y: 30 } });

  return (
    <section ref={ref} className={`bg-[var(--c-surface)] py-16 md:py-24 border-b border-[var(--c-border)] ${className || ''}`}>
      <div className="container-custom">
        <div className="max-w-3xl">
          {label && (
            <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--c-primary)] mb-4">
              {label}
            </div>
          )}
          <h1 className="text-h1 font-bold text-[var(--c-text-primary)] mb-6">
            {title}
          </h1>
          <p className="text-xl text-[var(--c-text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
