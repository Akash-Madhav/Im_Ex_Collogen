'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';


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

  const isHome = pathname === '/';
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-[150]",
          scrolled ? "w-[94%] xl:w-[85%]" : "w-[96%] xl:w-[94%]"
        )}
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between relative border px-6 md:px-10",
            scrolled 
              ? "py-2.5 bg-white/80 backdrop-blur-2xl shadow-xl rounded-full border-black/5" 
              : "py-6 bg-transparent border-transparent",
            shouldBeLight && !scrolled ? "text-white" : ""
          )}
        >
          {/* LOGO SECTION */}
          <div className="flex-shrink-0 z-[160]">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-10 h-10 xl:w-12 xl:h-12">
                 <Image 
                   src="/images/logo.svg" 
                   alt="Aroon Blossom Impex" 
                   fill 
                   className={cn("object-contain", shouldBeLight && !scrolled && "brightness-0 invert")}
                   priority
                 />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-black text-sm xl:text-lg tracking-tighter leading-none uppercase italic text-[var(--c-primary)]",
                  shouldBeLight && !scrolled && "text-white"
                )}>
                  Aroon Blossom
                </span>
                <span className={cn(
                  "font-bold text-[9px] xl:text-[11px] tracking-[0.3em] leading-none uppercase opacity-60 text-[var(--c-text-primary)]",
                  shouldBeLight && !scrolled && "text-white"
                )}>
                  Impex · Global
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-16">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[10px] xl:text-[11px] font-black tracking-[0.3em] uppercase relative py-1",
                    shouldBeLight && !scrolled ? "text-white/60 hover:text-white" : "text-[var(--c-text-primary)]/60 hover:text-[var(--c-primary)]",
                    isActive && "opacity-100"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <div className={cn(
                      "absolute -bottom-2 left-0 w-full h-[3px] rounded-full",
                      shouldBeLight && !scrolled ? "bg-white" : "bg-[var(--c-primary)]"
                    )} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Interaction Elements */}
          <div className="flex items-center gap-6 z-[160]">
            <div className="hidden sm:block">
              <Link href="/contact" className={cn(
                "btn-primary py-4 px-10 text-[10px] font-black uppercase tracking-[0.3em] rounded-full",
                shouldBeLight && !scrolled && "bg-white text-[var(--c-primary)] hover:bg-neutral-100"
              )}>
                Request Quote
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden w-14 h-14 flex items-center justify-center rounded-full",
                isOpen ? "bg-black text-white" : (shouldBeLight && !scrolled ? "bg-white text-black" : "bg-black text-white")
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Experience */}
      <div
        className={cn(
          "fixed inset-0 z-[140] lg:hidden bg-white flex flex-col justify-center px-10",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-12">
          <div className="text-[11px] font-black tracking-[0.5em] uppercase text-[var(--c-primary)] mb-4">
            Main Menu
          </div>
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-5xl font-black uppercase tracking-tighter italic",
                  pathname === link.href ? "text-[var(--c-primary)]" : "text-black/20 hover:text-black"
                )}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <div className="mt-12 flex flex-col gap-5">
            <Link href="/contact" className="btn-primary text-center py-6 text-[11px] font-black uppercase tracking-[0.3em] rounded-full">
              Technical Proposal
            </Link>
            <div className="grid grid-cols-2 gap-4">
               <a href="https://wa.me/919444012345" target="_blank" className="btn-whatsapp justify-center py-6 text-[11px] font-black uppercase tracking-[0.2em] rounded-full flex items-center">
                 WhatsApp
               </a>
               <button onClick={() => setIsOpen(false)} className="border-2 border-black/10 py-6 text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white">
                 Collapse
               </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}




