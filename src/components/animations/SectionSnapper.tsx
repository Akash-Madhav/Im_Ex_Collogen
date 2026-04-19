'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

/**
 * SectionSnapper - Automatically applies GSAP snapping to .snap-section elements.
 * Optimized for performance and compatibility with Lenis.
 */
export default function SectionSnapper() {
  useEffect(() => {
    // Only snap on desktop (screen width >= 1024px)
    if (window.innerWidth < 1024) return;

    const sections = gsap.utils.toArray('.snap-section');
    if (sections.length === 0) return;

    // Create a snapping trigger for the entire page
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.6 },
          delay: 0.02,
          ease: 'power1.inOut'
        }
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
