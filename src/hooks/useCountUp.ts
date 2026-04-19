import { useEffect, RefObject } from 'react';
import { gsap } from '@/lib/gsap-config';

/**
 * useCountUp - Animates a number from 0 to target value on scroll.
 */
export const useCountUp = (
  ref: RefObject<HTMLElement | null>,
  target: number,
  suffix: string = '',
  duration: number = 2
) => {
  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      ref.current.innerText = `${target}${suffix}`;
      return;
    }

    const obj = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: target,
        duration: duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = `${Math.floor(obj.value)}${suffix}`;
          }
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, target, suffix, duration]);
};
