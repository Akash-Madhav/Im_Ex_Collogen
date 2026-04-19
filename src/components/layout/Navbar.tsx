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
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
            "max-w-7xl mx-auto flex items-center justify-between relative transition-all duration-500 border border-white/20 px-4 md:px-8",
            scrolled 
              ? "py-2.5 bg-white/75 backdrop-blur-xl shadow-[0_12px_40px_rgba(31,93,58,0.15)] rounded-full" 
              : "py-4 bg-white/40 backdrop-blur-md shadow-none rounded-2xl"
          )}
        >
          {/* LOGO - Left aligned */}
          <div className="flex-shrink-0 z-20">
            <MagneticButton className="w-auto h-auto">
              <Link href="/" className="flex items-center gap-2 md:gap-4 group">
                <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110">
                   <Image 
                     src="/images/logo.svg" 
                     alt="Logo" 
                     fill 
                     className="object-contain"
                     priority
                   />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] tracking-tight text-[var(--c-primary)] leading-[0.85] uppercase whitespace-nowrap">
                    Aroon Blossom
                  </span>
                  <span className="font-heading font-extrabold text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] tracking-tight text-[var(--c-primary)] leading-[0.85] uppercase whitespace-nowrap">
                    Impex
                  </span>
                </div>
              </Link>
            </MagneticButton>
          </div>

          {/* Desktop Nav Links - Centered space with auto-layout */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-8 mx-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[9px] xl:text-[11px] font-bold tracking-[0.2em] uppercase transition-colors relative py-1 hover:text-[var(--c-primary)] whitespace-nowrap",
                    isActive ? "text-[var(--c-primary)]" : "text-[var(--c-text-primary)]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--c-primary)] shadow-[0_0_10px_rgba(31,93,58,0.5)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3 z-20">
            <div className="hidden sm:block">
              <MagneticButton className="w-auto h-auto">
                <Link href="/contact" className="btn-primary py-2.5 px-6 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full whitespace-nowrap">
                  Contact
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button - Visible on all small screens */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-[var(--c-primary)] text-white rounded-full hover:bg-[var(--c-primary-dark)] transition-colors"
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
          {navLinks.map((link, index) => (
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
              Request Quote
            </Link>
            <Link href="https://wa.me/91XXXXXXXXXX" className="btn-whatsapp justify-center py-4 text-xs font-bold uppercase tracking-widest">
              WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
