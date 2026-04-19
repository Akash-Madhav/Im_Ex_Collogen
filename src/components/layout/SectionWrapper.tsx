'use client';

import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

/**
 * SectionWrapper standardizes the "Shared Fit" logic across the platform.
 * It enforces h-screen viewports, manages internal scaling, and ensures 
 * content remains "fold-safe" with built-in overflow handling.
 */
export default function SectionWrapper({ 
  children, 
  id, 
  className = "", 
  containerClassName = "" 
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`shared-section-fit ${className}`}
    >
      <div className={`container-custom shared-section-content ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
