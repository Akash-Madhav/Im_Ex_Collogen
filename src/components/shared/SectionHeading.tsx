import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

/**
 * Luxury Design System - SectionHeading
 * Editorial typography with refined accents.
 */
export function SectionHeading({ 
  kicker, 
  title, 
  align = 'left', 
  dark = false,
  className = ''
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "space-y-6",
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      <div className={cn(
        "flex items-center gap-4",
        align === 'center' && "justify-center"
      )}>
        {align === 'center' && <div className="h-[1px] w-12 bg-accent-gold/20" />}
        <h3 className="text-[11px] font-body font-bold uppercase tracking-[0.25em] text-accent-gold">
          {kicker}
        </h3>
        <div className="h-[1px] flex-grow max-w-[60px] bg-accent-gold/20" />
      </div>
      
      <h2 className="text-[clamp(32px,5vw,56px)] font-display font-bold leading-[1.1] text-text-premium tracking-tight">
        {title}
      </h2>
    </div>
  );
}
