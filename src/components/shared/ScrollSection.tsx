'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * ScrollSection - High-performance replacement for Framer Motion reveals.
 * Uses GSAP ScrollTrigger for hardware-accelerated entrance.
 */
export const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGsapReveal(sectionRef, {
    from: { y: 40, opacity: 0 },
    delay,
    duration: 0.8,
    ease: 'power3.out',
    start: 'top 85%'
  });

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};
