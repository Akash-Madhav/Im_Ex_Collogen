import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect } from 'react';
import Lenis from 'lenis';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Singleton GSAP instance for global context/defaults
export const gsapInstance = gsap;

/**
 * Connects Lenis to GSAP ticker for synchronized animation frame delivery
 */
export const initLenis = () => {
  if (typeof window === 'undefined') return null;

  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
  });

  // Sync scroll trigger with lenis
  lenis.on('scroll', ScrollTrigger.update);

  // Add lenis to gsap ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Disable lag smoothing for better sync
  gsap.ticker.lagSmoothing(0);

  return lenis;
};

export { gsap, ScrollTrigger };
