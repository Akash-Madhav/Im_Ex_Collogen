'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();
  const contentRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  // Scroll to top and trigger transition
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    // Initial load / path change exit
    const tl = gsap.timeline();
    
    // Performance: Only run full wipe if DOM is ready
    if (wipeRef.current && contentRef.current) {
      tl.set(wipeRef.current, { scaleY: 1, transformOrigin: 'top' })
        .to(wipeRef.current, { 
          scaleY: 0, 
          duration: 0.8, 
          ease: 'expo.inOut',
          delay: 0.1
        })
        .fromTo(contentRef.current, 
          { opacity: 0, y: 10 }, 
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        );
    }
  }, [pathname, lenis]);

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div ref={contentRef} className="will-change-opacity">
        {children}
      </div>

      {/* Simplified High-Speed Wipe */}
      <div 
        ref={wipeRef}
        className="fixed inset-0 bg-brand-primary z-[150] pointer-events-none scale-y-0"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
