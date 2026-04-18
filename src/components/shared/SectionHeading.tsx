import { ReactNode } from 'react';

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({ 
  kicker, 
  title, 
  align = 'left', 
  dark = false,
  className = ''
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <div className="flex items-center gap-4">
        {align === 'center' && <div className={`h-[1px] w-12 ${dark ? 'bg-white/20' : 'bg-brand-primary/10'}`} />}
        <h3 className={`text-xs font-inter font-bold uppercase tracking-[0.2em] mb-0 ${dark ? 'text-brand-accent' : 'text-brand-body opacity-60'}`}>
          {kicker}
        </h3>
        <div className={`h-[1px] flex-grow max-w-[80px] ${dark ? 'bg-white/20' : 'bg-brand-primary/10'}`} />
      </div>
      <h2 className={`${dark ? 'text-white' : 'text-brand-primary'}`}>
        {title}
      </h2>
    </div>
  );
}
