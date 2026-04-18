import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'glass' | 'accent' | 'success';
  className?: string;
  dot?: boolean;
}

/**
 * Luxury Design System - Badge
 * Minimal labels for status and categories.
 */
export function Badge({ 
  children, 
  variant = 'outline', 
  className = '',
  dot = false 
}: BadgeProps) {
  
  const variants = {
    outline: "border border-white/10 text-text-muted",
    glass: "glass-subtle text-text-premium",
    accent: "bg-accent-gold/10 border border-accent-gold/20 text-accent-gold",
    success: "bg-success/5 border border-success/20 text-success"
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[10px] font-body font-bold uppercase tracking-[0.15em]",
      variants[variant],
      className
    )}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
      {children}
    </div>
  );
}
