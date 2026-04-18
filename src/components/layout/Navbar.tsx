'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { cn } from '../../lib/utils';
import { DURATIONS, EASINGS } from '../../lib/motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

/**
 * Luxury Design System - Navbar
 * Refined, high-performance navigation with design token integration.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.to(mobileMenuRef.current, {
        clipPath: 'circle(150% at 100% 0%)',
        opacity: 1,
        duration: DURATIONS.NORMAL,
        ease: EASINGS.PREMIUM,
      });

      tl.from(
        linkRefs.current.filter(Boolean),
        {
          y: 30,
          opacity: 0,
          stagger: 0.08,
          duration: DURATIONS.NORMAL,
          ease: EASINGS.OUT,
        },
        '-=0.25'
      );

      timelineRef.current = tl;
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      tl.play();
    } else {
      document.body.style.overflow = '';
      tl.reverse();
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
      <header
        className={cn(
          'pointer-events-auto flex items-center justify-between transition-all duration-700 ease-premium rounded-full px-8',
          scrolled
            ? 'h-[58px] w-[95%] md:w-[940px] glass-elevated border border-white/10'
            : 'h-[72px] w-[98%] md:w-[1240px] bg-bg-primary/40 border border-white/5 backdrop-blur-md',
          'shadow-premium'
        )}
      >
      {/* LOGO */}
      <Link
        href="/"
        className="magnetic flex items-center gap-2 md:gap-3 group flex-shrink-0"
      >
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <span className="text-bg-primary font-black text-base md:text-lg italic">B</span>
        </div>
        <span className="font-body font-extrabold text-base md:text-lg tracking-tight text-text-premium group-hover:text-accent-gold transition-colors whitespace-nowrap">
          INDOPELTS
        </span>
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'relative font-body text-[11px] uppercase tracking-[0.2em] font-bold transition-colors',
                isActive
                  ? 'text-accent-gold'
                  : 'text-text-muted hover:text-text-premium'
              )}
            >
              {link.name}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-[1px] bg-accent-gold transition-all duration-500',
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          );
        })}
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <Link
          href="/contact"
          className="magnetic hidden md:flex px-6 py-2 rounded-sm border border-accent-gold/40 text-accent-gold font-body font-bold uppercase tracking-[0.15em] text-[10px] transition-all duration-500 hover:bg-accent-gold hover:text-bg-primary whitespace-nowrap"
        >
          RFQ Portal
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center z-[60]"
        >
          <span className={cn('w-6 h-[1.5px] bg-text-premium transition-all', isOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('w-6 h-[1.5px] bg-text-premium transition-all', isOpen && 'opacity-0')} />
          <span className={cn('w-6 h-[1.5px] bg-text-premium transition-all', isOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      </header>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-bg-primary z-[100] opacity-0 flex flex-col pointer-events-auto overflow-hidden shadow-2xl"
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        {/* MOBILE MENU HEADER */}
        <div className="flex items-center justify-between px-8 pt-6 h-[72px] border-b border-white/5">
           <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-accent-gold flex items-center justify-center">
              <span className="text-bg-primary font-black text-base italic">B</span>
            </div>
            <span className="font-body font-extrabold text-base tracking-tight text-text-premium">
              INDOPELTS
            </span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center border-b border-white/5 px-8 pt-10">
          <div className="flex flex-col items-center gap-10 w-full max-w-sm">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                className={cn(
                  "text-text-premium text-[38px] md:text-[42px] font-display font-bold leading-none tracking-tight transition-all duration-500 hover:text-accent-gold",
                  pathname === link.href && "text-accent-gold italic"
                )}
              >
                {link.name}.
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-4 w-full py-5 rounded-sm bg-accent-gold text-bg-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-body text-center shadow-gold transition-transform active:scale-95"
            >
              Request Technical RFQ
            </Link>
          </div>
        </div>

        {/* MOBILE FOOTER INFO */}
        <div className="p-10 pb-16 bg-bg-secondary grid grid-cols-2 gap-8 border-t border-white/5">
          <div className="space-y-3">
            <h5 className="text-[9px] font-bold uppercase tracking-widest text-text-dim">Global Desk</h5>
            <p className="text-[12px] text-text-premium leading-relaxed">Chennai Port Zone,<br />Tamil Nadu, India</p>
          </div>
          <div className="space-y-3">
            <h5 className="text-[9px] font-bold uppercase tracking-widest text-text-dim">Response</h5>
            <p className="text-[12px] text-text-premium leading-relaxed">24hr Turnaround<br />ISO:9001 Protocol</p>
          </div>
          <div className="col-span-2 pt-2 flex gap-6">
            <a href="mailto:export@indopelts.com" className="text-[10px] font-medium text-accent-gold tracking-widest uppercase border-b border-accent-gold/20 pb-1">Email Inquiry</a>
            <a href="tel:+919444012345" className="text-[10px] font-medium text-text-premium tracking-widest uppercase border-b border-white/5 pb-1">Call Procurement</a>
          </div>
        </div>
      </div>
    </div>
  );
}

