'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-config';

interface CardTiltProps {
  children: React.ReactNode;
  maxRotation?: number;
  perspective?: number;
  className?: string;
}

/**
 * CardTilt - 3D perspective tilt effect on hover.
 */
export const CardTilt: React.FC<CardTiltProps> = ({ 
  children, 
  maxRotation = 8,
  perspective = 1000,
  className = ""
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouchDevice || prefersReduced || !cardRef.current) return;

    const card = cardRef.current;
    
    const xTo = gsap.quickTo(card, "rotateY", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(card, "rotateX", { duration: 0.5, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const rotateY = ((mouseX - centerX) / centerX) * maxRotation;
      const rotateX = ((centerY - mouseY) / centerY) * maxRotation;
      
      xTo(rotateY);
      yTo(rotateX);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxRotation]);

  return (
    <div 
      ref={cardRef} 
      className={`relative inline-block ${className}`}
      style={{ perspective: `${perspective}px` }}
    >
      {children}
    </div>
  );
};
