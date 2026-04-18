'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { DURATIONS, EASINGS } from '../../lib/motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Luxury Design System - Modal
 * Glass-based overlay with GSAP-powered premium entrance/exit.
 */
export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: DURATIONS.NORMAL,
        ease: EASINGS.PREMIUM,
      });
      tl.fromTo(modalRef.current, 
        { y: 30, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: DURATIONS.NORMAL, ease: EASINGS.PREMIUM },
        "-=0.4"
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose
    });
    tl.to(modalRef.current, {
      y: 20,
      opacity: 0,
      scale: 0.98,
      duration: DURATIONS.FAST,
      ease: EASINGS.OUT,
    });
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: DURATIONS.FAST,
      ease: EASINGS.PREMIUM,
    }, "-=0.2");
  };

  if (!isOpen) return null;

  return createPortal(
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-bg-primary/80 backdrop-blur-md opacity-0"
      onClick={handleClose}
    >
      <div 
        ref={modalRef}
        className={cn(
          "glass-elevated w-full max-w-2xl p-8 md:p-12 rounded-sm relative",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 text-text-muted hover:text-accent-gold transition-colors"
        >
          <X size={24} />
        </button>

        {title && (
          <h3 className="text-2xl font-display font-bold mb-8 text-text-premium">
            {title}
          </h3>
        )}

        <div className="text-text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
