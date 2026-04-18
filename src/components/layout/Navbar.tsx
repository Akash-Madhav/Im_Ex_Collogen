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
        className="magnetic flex items-center gap-3 group flex-shrink-0"
      >
        <div className="w-8 h-8 rounded-full bg-accent-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <span className="text-bg-primary font-black text-lg italic">B</span>
        </div>
        <span className="font-body font-extrabold text-lg tracking-tight text-text-premium group-hover:text-accent-gold transition-colors whitespace-nowrap">
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
        className="fixed inset-0 bg-bg-primary/98 z-50 opacity-0 flex flex-col items-center justify-center pointer-events-auto"
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              className="text-text-premium text-[32px] font-display font-bold hover:text-accent-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-8 px-12 py-5 rounded-sm bg-accent-gold text-bg-primary font-bold uppercase tracking-[0.2em] text-[11px] font-body"
          >
            Start Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}

