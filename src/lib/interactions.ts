import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Magnetic button effect
 */
export function magneticButton(el: HTMLElement) {
  if (!el || window.innerWidth < 768) return;

  const moveHandler = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { 
      x: x * 0.3, 
      y: y * 0.3, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
  };

  const leaveHandler = () => {
    gsap.to(el, { 
      x: 0, 
      y: 0, 
      duration: 0.6, 
      ease: 'elastic.out(1, 0.4)' 
    });
  };

  el.addEventListener('mousemove', moveHandler);
  el.addEventListener('mouseleave', leaveHandler);

  return () => {
    el.removeEventListener('mousemove', moveHandler);
    el.removeEventListener('mouseleave', leaveHandler);
  };
}

/**
 * Card tilt 3D effect
 */
export function tiltCard(el: HTMLElement) {
  if (!el || window.innerWidth < 768) return;

  const moveHandler = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    gsap.to(el, {
      rotateX: -y * 8,
      rotateY: x * 8,
      transformPerspective: 800,
      duration: 0.4, 
      ease: 'power2.out'
    });
  };

  const leaveHandler = () => {
    gsap.to(el, { 
      rotateX: 0, 
      rotateY: 0, 
      duration: 0.6, 
      ease: 'elastic.out(1, 0.5)' 
    });
  };

  el.addEventListener('mousemove', moveHandler);
  el.addEventListener('mouseleave', leaveHandler);

  return () => {
    el.removeEventListener('mousemove', moveHandler);
    el.removeEventListener('mouseleave', leaveHandler);
  };
}

/**
 * Count up animation
 */
export function initCounters() {
  const elements = document.querySelectorAll('[data-count]');
  
  elements.forEach(el => {
    const targetEl = el as HTMLElement;
    const target = parseFloat(targetEl.dataset.target || '0');
    const suffix = targetEl.dataset.suffix || '';
    
    ScrollTrigger.create({
      trigger: targetEl,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            targetEl.textContent = Math.round(obj.val).toLocaleString() + suffix;
          }
        });
      }
    });
  });
}

/**
 * Global section reveal entry animation
 */
export function initSectionAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  
  elements.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      },
      y: window.innerWidth < 768 ? 20 : 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
}
