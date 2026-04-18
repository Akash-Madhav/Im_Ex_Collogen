'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false
}: ButtonProps) {
  
  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-inter font-bold uppercase tracking-wider text-sm transition-all duration-500 overflow-hidden group px-8 py-4";
  
  const variants = {
    primary: "bg-brand-primary text-white border border-brand-primary hover:shadow-industrial-hover hover:-translate-y-[2px]",
    secondary: "bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-industrial-hover",
    ghost: "bg-transparent text-white border border-white hover:bg-white hover:text-brand-primary",
    white: "bg-white text-brand-primary shadow-industrial hover:shadow-industrial-hover hover:-translate-y-[2px]"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 transform group-hover:translate-x-1 transition-transform duration-500">
        {children}
      </span>
      {/* Structural hover effect - pseudo element sweep */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-brand-accent transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
      )}
    </>
  );

  const finalClassName = `${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

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
