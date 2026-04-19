'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-config';

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * MagneticButton - Traps the cursor and pulls the button towards it.
 * Only active on desktop/pointer devices.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  strength = 40,
  className = "" 
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouchDevice || prefersReduced || !triggerRef.current) return;

    const nav = triggerRef.current;
    const xTo = gsap.quickTo(nav, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(nav, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = nav.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * (strength / 100));
      yTo(y * (strength / 100));
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={triggerRef} className={`inline-block h-full w-full ${className}`}>
      {children}
    </div>
  );
};
