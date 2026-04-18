'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import { DURATIONS, EASINGS } from '../../lib/motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

/**
 * Luxury Design System - Button
 * Consistent, premium buttons with magnetic field compatibility.
 */
export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  onClick, 
  type = 'button',
  disabled = false
}: ButtonProps) {
  
  const baseStyles = "magnetic relative inline-flex items-center justify-center gap-3 font-body font-bold uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden group rounded-sm";
  
  const sizeStyles = {
    sm: "px-6 py-3 text-[9px]",
    md: "px-10 py-5 text-[11px]",
    lg: "px-14 py-6 text-[13px] tracking-[0.2em]"
  };
  
  const variants = {
    // Luxury Gold (Primary)
    primary: "bg-accent-gold text-bg-primary hover:bg-accent-soft shadow-premium hover:shadow-gold",
    
    // Minimal Outline (Secondary)
    secondary: "bg-transparent text-accent-gold border border-accent-gold/40 hover:border-accent-gold hover:bg-accent-gold/5",
    
    // Inverted / Ghost
    ghost: "bg-transparent text-text-premium border border-white/10 hover:border-white/40 hover:bg-white/5",
    
    // Premium Glass
    glass: "glass-subtle text-text-premium hover:glass animate-glass-pulse hover:scale-[1.02] border-white/10"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-3 transform group-hover:translate-x-1 transition-transform duration-500">
        {children}
      </span>
      {/* Structural reveal effect */}
      <div className="absolute inset-0 bg-white/10 transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
    </>
  );

  const finalClassName = cn(baseStyles, sizeStyles[size], variants[variant], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={finalClassName}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
