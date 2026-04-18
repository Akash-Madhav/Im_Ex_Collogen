'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [label, setLabel] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add('has-custom-cursor');

    // ⚡ HIGH PERFORMANCE TRACKING
    const xTo = gsap.quickTo(dot, 'x', { duration: 0 });
    const yTo = gsap.quickTo(dot, 'y', { duration: 0 });

    const rxTo = gsap.quickTo(ring, 'x', { duration: 0.18, ease: 'power3.out' });
    const ryTo = gsap.quickTo(ring, 'y', { duration: 0.18, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
      rxTo(clientX);
      ryTo(clientY);
    };

    // 🎯 MAGNETIC EFFECT
    const magneticStrength = 0.35;

    const applyMagnet = (el: HTMLElement, e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: relX * magneticStrength,
        y: relY * magneticStrength,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const resetMagnet = (el: HTMLElement) => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    // 🧠 EVENT DELEGATION (NO DUPLICATES)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as any;
      if (!target || typeof target.closest !== 'function') return;

      const link = target.closest('a, button, .interactive') as HTMLElement;
      const image = target.closest(
        '.image-zoom-wrap, .application-card, .metric-card'
      ) as HTMLElement;

      if (link) {
        gsap.to(ring, {
          width: 56,
          height: 56,
          backgroundColor: 'rgba(200,146,42,0.1)',
          duration: 0.25,
        });
        setLabel('');
      }

      if (image) {
        gsap.to(ring, {
          width: 80,
          height: 80,
          borderStyle: 'dashed',
          duration: 0.25,
        });
        setLabel('VIEW');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as any;
      if (!target || typeof target.closest !== 'function') return;

      if (target.closest('a, button, .interactive')) {
        gsap.to(ring, {
          width: 36,
          height: 36,
          backgroundColor: 'transparent',
          duration: 0.25,
        });
      }

      if (
        target.closest(
          '.image-zoom-wrap, .application-card, .metric-card'
        )
      ) {
        gsap.to(ring, {
          width: 36,
          height: 36,
          borderStyle: 'solid',
          duration: 0.25,
        });
        setLabel('');
      }
    };

    // 🧲 MAGNETIC MOVE HANDLER
    const handleMouseMoveMagnet = (e: MouseEvent) => {
      const target = e.target as any;
      if (!target || typeof target.closest !== 'function') return;
      const magnetEl = target.closest('.magnetic') as HTMLElement;

      if (magnetEl) {
        applyMagnet(magnetEl, e);
      }
    };

    const handleMouseLeaveMagnet = (e: MouseEvent) => {
      const target = e.target as any;
      if (!target || typeof target.closest !== 'function') return;
      const magnetEl = target.closest('.magnetic') as HTMLElement;

      if (magnetEl) {
        resetMagnet(magnetEl);
      }
    };

    // 👆 CLICK FEEDBACK
    const handleMouseDown = () => {
      gsap.to(ring, { scale: 0.75, duration: 0.15 });
    };

    const handleMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.2 });
    };

    // 🎧 LISTENERS
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    document.addEventListener('mousemove', handleMouseMoveMagnet);
    document.addEventListener('mouseleave', handleMouseLeaveMagnet);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);

      document.removeEventListener('mousemove', handleMouseMoveMagnet);
      document.removeEventListener('mouseleave', handleMouseLeaveMagnet);

      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      {/* RING */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] border rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hidden lg:flex transition-[width,height,background-color] duration-300"
        style={{
          borderColor: 'rgba(200,146,42,0.6)',
        }}
      >
        <span className="text-[9px] font-mono font-bold pointer-events-none opacity-0 transition-opacity duration-200 ring-text"
          style={{ color: 'var(--color-accent)' }}
        >
          {label}
        </span>
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          html.has-custom-cursor * {
            cursor: none !important;
          }
        }

        .ring-text {
          letter-spacing: 0.08em;
        }

        [data-visible='true'] .ring-text,
        .ring-text:not(:empty) {
          opacity: 1 !important;
        }

        /* Optional premium effect */
        .has-custom-cursor .cursor-ring {
          mix-blend-mode: difference;
        }
      `}</style>
    </>
  );
}
