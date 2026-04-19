'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { MagneticButton } from '../animations/MagneticButton';
import { gsap } from '@/lib/gsap-config';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Quality', href: '/quality' },
  { name: 'Export', href: '/export' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/';
  // Internal pages have dark heroes, so we want light text initially
  const shouldBeLight = !scrolled && !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // GSAP Mobile Menu Animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        const tl = gsap.timeline();
        tl.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "expo.out"
        });
        tl.from(".mobile-nav-item", {
          y: 20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        document.body.style.overflow = 'auto';
        gsap.to(mobileMenuRef.current, {
          x: '100%',
          opacity: 0,
          duration: 0.4,
          ease: "expo.in"
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-premium",
          scrolled ? "w-[92%] xl:w-[85%]" : "w-[95%] xl:w-[94%]"
        )}
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between relative transition-all duration-500 border px-4 md:px-8",
            scrolled 
              ? "py-2 bg-white/80 backdrop-blur-xl shadow-card rounded-full border-white/20" 
              : "py-5 bg-white/5 backdrop-blur-sm rounded-2xl border-white/10",
            shouldBeLight && !scrolled ? "bg-black/10 border-white/10" : ""
          )}
        >
          {/* LOGO */}
          <div className="flex-shrink-0 z-20">
            <MagneticButton className="w-auto h-auto">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                   <Image 
                     src="/images/logo.svg" 
                     alt="Logo" 
                     fill 
                     className={cn("object-contain transition-all", shouldBeLight && "brightness-0 invert")}
                     priority
                   />
                </div>
                <div className="flex flex-col">
                  <span className={cn(
                    "font-heading font-black text-sm tracking-tight leading-[0.9] uppercase whitespace-nowrap transition-colors",
                    shouldBeLight ? "text-white" : "text-[var(--c-primary)]"
                  )}>
                    Aroon Blossom
                  </span>
                  <span className={cn(
                    "font-heading font-medium text-[10px] tracking-[0.2em] leading-none uppercase whitespace-nowrap opacity-70 transition-colors",
                    shouldBeLight ? "text-white/80" : "text-[var(--c-text-primary)]"
                  )}>
                    Impex · Global
                  </span>
                </div>
              </Link>
            </MagneticButton>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-10 mx-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[12px] xl:text-[13px] font-bold tracking-[0.15em] uppercase transition-all relative py-1 whitespace-nowrap hover:opacity-100",
                    shouldBeLight ? "text-white/80 hover:text-white" : "text-[var(--c-text-primary)] hover:text-[var(--c-primary)]",
                    isActive && !shouldBeLight && "text-[var(--c-primary)]",
                    isActive && shouldBeLight && "text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <div className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full",
                      shouldBeLight ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-[var(--c-primary)]"
                    )} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-4 z-20">
            <div className="hidden sm:block">
              <MagneticButton className="w-auto h-auto">
                <Link href="/contact" className={cn(
                  "btn-primary py-2.5 px-6 text-[11px] font-bold uppercase tracking-[0.15em] rounded-full whitespace-nowrap",
                  shouldBeLight && "bg-white text-[var(--c-primary)] hover:bg-white/90"
                )}>
                  Request Quote
                </Link>
              </MagneticButton>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all",
                shouldBeLight ? "bg-white text-[var(--c-primary)]" : "bg-[var(--c-primary)] text-white"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-[110] lg:hidden bg-white flex flex-col pt-32 translate-x-full opacity-0"
      >
        <div className="flex flex-col items-center gap-8 px-6 text-center">
          {navLinks.map((link) => (
            <div key={link.href} className="mobile-nav-item">
              <Link
                href={link.href}
                className={cn(
                  "text-3xl font-heading font-bold uppercase tracking-tight",
                  pathname === link.href ? "text-[var(--c-primary)]" : "text-[var(--c-text-primary)]"
                )}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <div className="mt-8 flex flex-col gap-4 w-full max-w-[280px] mobile-nav-item">
            <Link href="/contact" className="btn-primary text-center py-4 text-xs font-bold uppercase tracking-widest">
              Contact Us
            </Link>
            <Link href="https://wa.me/91XXXXXXXXXX" className="btn-whatsapp justify-center py-4 text-xs font-bold uppercase tracking-widest">
              WhatsApp Desk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

