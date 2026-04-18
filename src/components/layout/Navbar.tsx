'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // GSAP Transition for the Floating Pill
  useEffect(() => {
    if (!navRef.current) return;

    if (scrolled) {
      gsap.to(navRef.current, {
        width: 'auto',
        maxWidth: '800px',
        backgroundColor: 'rgba(13, 31, 26, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRadius: '100px',
        padding: '8px 8px 8px 32px',
        y: 12,
        duration: 0.6,
        ease: 'expo.out',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
      });
    } else {
      gsap.to(navRef.current, {
        width: '100%',
        maxWidth: '1280px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0px)',
        borderRadius: '0px',
        padding: '20px 48px',
        y: 0,
        duration: 0.6,
        ease: 'expo.out',
        boxShadow: 'none',
      });
    }
  }, [scrolled]);

  // Mobile Menu Animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      gsap.fromTo(mobileMenuRef.current, 
        { opacity: 0, y: -20, pointerEvents: 'none' },
        { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current, { opacity: 0, y: -20, pointerEvents: 'none', duration: 0.3, ease: 'power3.in' });
    }
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center py-6 px-4 pointer-events-none">
      <nav 
        ref={navRef}
        className="pointer-events-auto flex items-center justify-between transition-none will-change-transform"
      >
        <Link href="/" className="flex items-center gap-3 group shrink-0" onClick={() => setIsOpen(false)}>
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-500",
            scrolled ? "bg-brand-accent scale-90" : "bg-brand-accent"
          )}>
            <span className="text-white font-black text-xl italic leading-none">B</span>
          </div>
          <span className={cn(
            "font-playfair font-black text-2xl tracking-tighter transition-colors duration-500",
            scrolled ? "text-white" : "text-brand-primary md:text-white"
          )}>
            INDOPELTS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] transition-all rounded-full select-none",
                  scrolled 
                    ? (isActive ? "text-brand-accent bg-white/5" : "text-white/60 hover:text-white hover:bg-white/5") 
                    : (isActive ? "text-brand-accent" : "text-brand-primary/80 md:text-white/70 md:hover:text-white")
                )}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link
            href="/contact"
            className={cn(
              "ml-4 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl active:scale-95",
              scrolled 
                ? "bg-brand-accent text-white hover:bg-white hover:text-brand-primary" 
                : "bg-white text-brand-primary hover:bg-brand-accent hover:text-white"
            )}
          >
            RFQ Portal
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden w-12 h-12 flex items-center justify-center rounded-full active:scale-90 transition-all",
            scrolled ? "text-white bg-white/10" : "text-brand-primary md:text-white md:bg-white/10 shadow-sm"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-brand-primary/95 backdrop-blur-3xl z-[90] flex items-center justify-center p-12 opacity-0 pointer-events-none md:hidden"
      >
        <div className="space-y-8 w-full max-w-lg text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-4xl font-playfair font-black tracking-tighter hover:text-brand-accent transition-colors block py-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-brand-accent text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              Start Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
