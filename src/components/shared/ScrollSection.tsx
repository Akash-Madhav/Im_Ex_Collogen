'use client';

import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * ScrollSection - Automates a smooth reveal animation when entering the viewport.
 * Provides the "screen optimised" feel by ensuring content isn't static.
 */
export function ScrollSection({ children, className = '', delay = 0 }: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none', // Just play once for premium feel
        }
      });
    }, section);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
