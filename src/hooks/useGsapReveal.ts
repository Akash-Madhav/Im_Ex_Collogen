import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '@/lib/gsap-config';

interface RevealConfig {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  scrub?: boolean | number;
}

/**
 * A reusable hook to register GSAP ScrollTrigger reveals.
 * Automatically cleans up on unmount.
 */
export const useGsapReveal = (
  ref: RefObject<HTMLElement | null>,
  config: RevealConfig = {}
) => {
  const {
    from = { y: 30, opacity: 0 },
    to = { y: 0, opacity: 1 },
    start = 'top 85%',
    delay = 0,
    stagger = 0,
    duration = 0.8,
    ease = 'power3.out',
    scrub = false
  } = config;

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Find elements to animate - either the ref itself or elements with data-reveal-item
      const target = ref.current?.querySelectorAll('[data-reveal-item]').length 
        ? ref.current.querySelectorAll('[data-reveal-item]') 
        : ref.current;

      gsap.fromTo(target, 
        from, 
        {
          ...to,
          delay,
          stagger,
          duration,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            scrub,
            toggleActions: scrub ? undefined : 'play none none none',
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, from, to, start, delay, stagger, duration, ease, scrub]);
};
