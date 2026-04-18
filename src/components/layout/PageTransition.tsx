'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLenis } from '@studio-freight/react-lenis';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();
  const wipeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top instantly
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    const wipe = wipeRef.current;
    const content = contentRef.current;
    if (!wipe || !content) return;

    // Horizontal wipe animation
    const tl = gsap.timeline();
    
    tl.set(wipe, { 
      scaleX: 1, 
      transformOrigin: 'left',
      backgroundColor: 'var(--color-accent)'
    })
    .to(wipe, {
      scaleX: 0,
      transformOrigin: 'right',
      duration: 0.4,
      ease: 'power3.inOut',
      delay: 0.1
    })
    .fromTo(content,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    );

  }, [pathname, lenis]);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Wipe Panel */}
      <div 
        ref={wipeRef}
        className="fixed inset-0 z-[100] pointer-events-none scale-x-0"
      />
      
      {/* Content */}
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
