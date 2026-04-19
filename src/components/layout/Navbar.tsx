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
  const shouldBeLight = !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
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
          "fixed top-3 md:top-6 left-3 right-3 md:left-8 md:right-8 mx-auto z-[150] max-w-[1400px] transition-all duration-700 rounded-[20px] border",
          scrolled
            ? 'py-2.5 md:py-2.5 bg-white/40 backdrop-blur-md md:backdrop-blur-xl border-black/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]'
            : 'py-4 md:py-4 bg-black/5 backdrop-blur-sm md:backdrop-blur-md border-white/10 shadow-none'
        )}
      >
        <div className="w-full px-5 md:px-10">
          <div className="flex items-center justify-between relative">


          {/* LOGO SECTION */}
          <div className={cn("flex-shrink-0 z-[160] transition-opacity duration-300", isOpen && "opacity-0 invisible")}>
            <Link href="/" className="flex items-center gap-4 group scale-[1.1] md:scale-[1.2] origin-left transition-transform duration-500">
              <div className="relative w-6 h-6 md:w-10 md:h-10">
                 <Image 
                   src="/images/logo.svg" 
                   alt="Aroon Blossom Impex" 
                   fill 
                   className="object-contain"
                   priority
                 />
              </div>
              <div className="flex flex-col">
                  <span className={cn(
                    "font-black tracking-tighter leading-none uppercase italic transition-colors duration-700",
                    scrolled ? "text-[10px] md:text-base text-[#2B2B2B]" : "text-[11px] md:text-lg text-[#FAF9F6]"
                  )}>
                    Aroon Blossom
                  </span>
                  <span className={cn(
                    "font-bold tracking-[0.2em] md:tracking-[0.3em] leading-none uppercase opacity-60 transition-colors duration-700",
                    scrolled ? "text-[6px] md:text-[9px] text-[#2B2B2B]" : "text-[7px] md:text-[11px] text-[#FAF9F6]"
                  )}>
                    Impex · Global
                  </span>
              </div>
            </Link>
          </div>



          {/* Desktop Navigation */}
          <div className={cn(
            "hidden lg:flex items-center gap-10 xl:gap-12 transition-opacity duration-300",
            isOpen && "opacity-0 invisible"
          )}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-1"
                >
                  <span
                    className={cn(
                      "text-[10px] xl:text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-700",
                      isActive
                        ? (scrolled ? 'text-[#2B2B2B]' : 'text-[#FAF9F6]')
                        : (scrolled ? 'text-[#2B2B2B]/40 hover:text-[#2B2B2B]' : 'text-[#FAF9F6]/50 hover:text-[#FAF9F6]')
                    )}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <div className={cn(
                      "absolute -bottom-1 left-0 w-full h-[1px] transition-colors duration-700",
                      scrolled ? 'bg-[#2B2B2B]' : 'bg-[#FAF9F6]'
                    )} />
                  )}
                </Link>
              );
            })}
          </div>


          {/* Interaction Elements */}
          <div className="flex items-center gap-6 z-[160]">
            <div className={cn("hidden sm:block transition-opacity duration-300", isOpen && "opacity-0 invisible")}>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center px-8 md:px-10 py-2.5 rounded-full border transition-all duration-700 group relative overflow-hidden",
                  scrolled 
                    ? 'border-black/10 hover:border-[#2B2B2B] hover:bg-[#2B2B2B]' 
                    : 'border-white/10 hover:border-[#FAF9F6] hover:bg-[#FAF9F6]'
                )}
              >
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-black relative z-10 transition-colors duration-700",
                  scrolled 
                    ? 'text-[#2B2B2B] group-hover:text-white' 
                    : 'text-[#FAF9F6] group-hover:text-[#2B2B2B]'
                )}>
                  Request Quote
                </span>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden flex items-center justify-center rounded-full transition-all duration-700",
                scrolled ? "text-[#2B2B2B]" : "text-[#FAF9F6]"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>
    </nav>



      {/* Mobile Experience */}
      <div
        className={cn(
          "fixed inset-0 z-[140] lg:hidden bg-[var(--c-dark)] transition-all duration-700 ease-in-out px-8 pt-24 pb-10 flex flex-col justify-between",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 relative bg-white rounded-xl p-1.5 shadow-xl">
               <Image src="/images/logo.svg" alt="Aroon Blossom" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg leading-none uppercase italic">Aroon Blossom</span>
              <span className="text-[var(--c-primary)] text-[9px] font-black tracking-[0.3em] uppercase underline decoration-[var(--c-primary)] underline-offset-4">Impex · Global</span>
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  className={cn(
                    "block text-2xl font-black uppercase tracking-tighter italic transition-all duration-300",
                    pathname === link.href ? "text-[var(--c-primary)]" : "text-white/30"
                  )}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>


        <div className="space-y-3">
          <Link 
            href="/contact" 
            className="block w-full text-center py-4 bg-white text-[var(--c-primary)] text-[9px] font-black uppercase tracking-[0.3em] rounded-full"
          >
            Technical Proposal
          </Link>
          <div className="grid grid-cols-2 gap-3">
             <a 
               href="https://wa.me/919444012345" 
               target="_blank" 
               className="bg-[#25D366] text-white text-center py-3.5 text-[8px] font-black uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2"
             >
               WhatsApp
             </a>
             <button 
               onClick={() => setIsOpen(false)} 
               className="border border-white/10 text-white/40 py-3.5 text-[8px] font-black uppercase tracking-[0.2em] rounded-full"
             >
               Return
             </button>
          </div>
          
          <div className="pt-5 border-t border-white/5 flex justify-between items-center text-[7px] font-bold text-white/20 uppercase tracking-widest">
            <span>© 2026 AB Impex</span>
            <span>Chennai · India</span>
          </div>
        </div>

      </div>



    </>
  );
}




