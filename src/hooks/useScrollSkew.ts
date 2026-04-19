import { useEffect } from 'react';
import { gsap } from '@/lib/gsap-config';

/**
 * useScrollSkew - Applies a skew effect to elements based on scroll velocity.
 */
export const useScrollSkew = (selector: string, maxSkew: number = 4) => {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let lastY = window.scrollY;
    const skewSetter = gsap.quickSetter(selector, 'skewY', 'deg');
    const proxy = { skew: 0 };

    const updateProxy = () => {
      const currentY = window.scrollY;
      const velocity = (currentY - lastY) * -0.04;
      
      // Clamp velocity to maxSkew
      const clampedVelocity = Math.max(Math.min(velocity, maxSkew), -maxSkew);
      
      // Smooth out the skew returning to 0
      gsap.to(proxy, {
        skew: clampedVelocity,
        duration: 0.5,
        ease: 'power3.out',
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew)
      });

      lastY = currentY;
    };

    gsap.ticker.add(updateProxy);
    return () => {
      gsap.ticker.remove(updateProxy);
      // Reset skew on unmount
      gsap.set(selector, { skewY: 0 });
    };
  }, [selector, maxSkew]);
};
