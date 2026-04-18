'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Menu Animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.to(mobileMenuRef.current, { 
        clipPath: 'circle(150% at 100% 0%)',
        opacity: 1, 
        duration: 0.6, 
        ease: 'power3.inOut' 
      });
      tl.from('.mobile-link', {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.2');
    } else {
      document.body.style.overflow = '';
      gsap.to(mobileMenuRef.current, { 
        clipPath: 'circle(0% at 100% 0%)',
        opacity: 0, 
        duration: 0.5, 
        ease: 'power3.inOut' 
      });
    }
  }, [isOpen]);

  return (
    <header 
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between",
        scrolled ? "h-[60px] bg-[#0A0C0B]/88 border-b border-accent/30" : "h-[68px] bg-[#0A0C0B]/65 border-b border-accent/10",
        "px-[20px] md:px-[48px] backdrop-blur-[20px] saturate-[180%]"
      )}
    >
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <span className="text-[#0A0C0B] font-black text-lg italic">B</span>
        </div>
        <span className="font-body font-extrabold text-lg tracking-tight text-white group-hover:text-accent transition-colors">
          INDOPELTS
        </span>
      </Link>

      {/* Center: Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative font-body font-medium text-[14px] transition-colors duration-200",
                isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300",
                  isActive ? "w-full" : "w-0 hover-trigger"
                )} 
              />
            </Link>
          );
        })}
      </nav>

      {/* Right: RFQ Button / Mobile Toggle */}
      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden md:flex px-6 py-[10px] rounded-full border border-accent text-accent font-body font-semibold text-[14px] transition-all duration-300 hover:bg-accent hover:text-bg"
        >
          RFQ Portal
        </Link>

        <button 
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={cn("w-6 h-[2px] bg-white transition-all duration-300", isOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-6 h-[2px] bg-white transition-all duration-300", isOpen && "opacity-0")} />
          <span className={cn("w-6 h-[2px] bg-white transition-all duration-300", isOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-bg/98 z-50 opacity-0 flex flex-col items-center justify-center transition-all duration-500"
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link text-white text-[32px] font-display font-bold hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mobile-link mt-8 px-10 py-4 rounded-full bg-accent text-bg font-bold uppercase tracking-widest"
          >
            Start Inquiry
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hover-trigger {
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        a:hover .hover-trigger {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
