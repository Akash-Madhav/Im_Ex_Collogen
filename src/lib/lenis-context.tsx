'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // 1. Register Plugin
    gsap.registerPlugin(ScrollTrigger);

    // 2. Clear scroll memory to prevent jump on reload
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    // 3. Perfect Sync between Lenis and GSAP ScrollTrigger
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      gsap.ticker.lagSmoothing(500); // Reset to default
    };
  }, []);

  return (
    <ReactLenis 
      root 
      ref={lenisRef}
      autoRaf={false} // We handle RAF manually via GSAP ticker for perfect sync
      options={{ 
        duration: 1.5,
        lerp: 0.08, // Very smooth, slightly weighted
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
      
      {/* Lenis critical CSS for smoothness */}
      <style jsx global>{`
        html.lenis {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto;
        }
        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }
        .lenis.lenis-stopped {
          overflow: hidden;
        }
        .lenis.lenis-scrolling iframe {
          pointer-events: none;
        }
      `}</style>
    </ReactLenis>
  );
};
