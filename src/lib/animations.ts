import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Global premium easing for industrial feel
const PREMIUM_EASE = 'expo.out';

export const initSectionReveal = (element: string | HTMLElement, direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
  const y = direction === 'up' ? 60 : direction === 'down' ? -60 : 0;
  const x = direction === 'left' ? 60 : direction === 'right' ? -60 : 0;

  gsap.from(element, {
    y,
    x,
    opacity: 0,
    duration: 1.4,
    ease: PREMIUM_EASE,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
};

export const initStaggerReveal = (elements: string | HTMLElement[] | NodeListOf<Element>, stagger: number = 0.15) => {
  gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger,
    ease: PREMIUM_EASE,
    scrollTrigger: {
      trigger: elements[0] instanceof HTMLElement ? elements[0] : elements as any,
      start: 'top 85%',
    },
  });
};

export const initCounter = (element: string | HTMLElement, endValue: number, suffix: string = '') => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration: 2.5,
    ease: "power2.out", // Counters feel better with a slightly more geometric ease
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
    },
    onUpdate: () => {
      if (typeof element === 'string') {
        const el = document.querySelector(element);
        if (el) el.textContent = Math.ceil(obj.value).toLocaleString() + suffix;
      } else {
        element.textContent = Math.ceil(obj.value).toLocaleString() + suffix;
      }
    },
  });
};

