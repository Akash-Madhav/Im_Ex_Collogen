'use client';

import React from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * MagneticButton - Lightweight wrapper component.
 * (Magnetic movement disabled as per user request for static buttons)
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`inline-block h-full w-full ${className}`}>
      {children}
    </div>
  );
};
