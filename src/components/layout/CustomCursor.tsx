'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable cursor on mobile
    if (window.innerWidth < 1024) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (!dot || !ring) return;

    // Mouse movement
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Dot snaps instantly
      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Ring follows with lag (lerp)
      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    // Hover states
    const onMouseEnterLink = () => {
      gsap.to(ring, {
        width: 56,
        height: 56,
        backgroundColor: 'rgba(200,146,42,0.1)',
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(ring, {
        width: 36,
        height: 36,
        backgroundColor: 'transparent',
        duration: 0.3,
      });
    };

    const onMouseEnterImage = () => {
      gsap.to(ring, {
        width: 80,
        height: 80,
        borderStyle: 'dashed',
        duration: 0.3,
      });
      ring.setAttribute('data-text', 'VIEW');
    };

    const onMouseLeaveImage = () => {
      gsap.to(ring, {
        width: 36,
        height: 36,
        borderStyle: 'solid',
        duration: 0.3,
      });
      ring.removeAttribute('data-text');
    };

    window.addEventListener('mousemove', onMouseMove);

    // Attach listeners to all interactive elements
    const updateListeners = () => {
      const links = document.querySelectorAll('a, button, .interactive');
      const images = document.querySelectorAll('.image-zoom-wrap, .application-card, .metric-card');

      links.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });

      images.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterImage);
        el.addEventListener('mouseleave', onMouseLeaveImage);
      });
    };

    updateListeners();
    
    // Check for DOM changes to re-add listeners if needed
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-accent/60 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color] duration-300 hidden lg:flex"
        style={{ borderColor: 'rgba(200,146,42,0.6)' }}
      >
        <span className="text-[9px] font-mono font-bold text-accent pointer-events-none opacity-0 transition-opacity duration-300 ring-text" style={{ color: 'var(--color-accent)' }}>
          {ringRef.current?.getAttribute('data-text')}
        </span>
      </div>
      <style jsx global>{`
        @media (min-width: 1024px) {
          * { cursor: none !important; }
        }
        [data-text] .ring-text {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}
