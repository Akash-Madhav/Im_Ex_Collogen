import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

/**
 * Luxury Design System - Input
 * Minimal, export-grade forms with refined feedback states.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-[10px] font-body font-bold uppercase tracking-[0.2em] text-text-dim">
            {label}
          </label>
        )}
        <div className="relative group">
          <input
            ref={ref}
            className={cn(
              "w-full bg-bg-secondary/50 border-b border-white/10 px-0 py-3 text-text-premium font-body text-sm",
              "transition-all duration-300 outline-none",
              "focus:border-accent-gold focus:bg-white/[0.02]",
              error && "border-warning/50 focus:border-warning",
              className
            )}
            {...props}
          />
          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent-gold transition-all duration-500 group-focus-within:w-full" />
        </div>
        {error && (
          <span className="block text-[10px] font-body font-medium text-warning/80 italic">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
