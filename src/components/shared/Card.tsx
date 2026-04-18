import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'elevated';
  interactive?: boolean;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Luxury Design System - Card
 * Foundational container for information blocks.
 */
export function Card({ 
  children, 
  variant = 'default', 
  interactive = false, 
  className = '',
  padding = 'md'
}: CardProps) {
  
  const variants = {
    default: "bg-bg-secondary border border-border-subtle",
    glass: "glass-subtle hover:glass",
    elevated: "bg-bg-elevated border border-white/5 shadow-premium"
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-8",
    lg: "p-12"
  };

  return (
    <div className={cn(
      "rounded-sm transition-all duration-premium",
      variants[variant],
      paddings[padding],
      interactive && "hover:border-accent-gold/40 hover:-translate-y-1 cursor-pointer",
      className
    )}>
      {children}
    </div>
  );
}
