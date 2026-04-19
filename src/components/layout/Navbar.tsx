'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const isHome = pathname === `/${currentLocale}`;
  const shouldBeLight = !scrolled;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    router.push(newPath);
  };

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
          isOpen 
            ? 'py-4 md:py-4 bg-transparent border-transparent shadow-none backdrop-blur-none'
            : scrolled
              ? 'py-2.5 md:py-2.5 bg-white/40 backdrop-blur-md md:backdrop-blur-xl border-black/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]'
              : 'py-4 md:py-4 bg-black/5 backdrop-blur-sm md:backdrop-blur-md border-white/10 shadow-none'
        )}
      >
        <div className="w-full px-5 md:px-10">
          <div className="flex items-center justify-between relative">


          {/* LOGO SECTION */}
          <div className={cn("flex-shrink-0 z-[160] transition-opacity duration-300", isOpen && "opacity-0 invisible")}>
            <Link href={`/${currentLocale}`} className="flex items-center gap-3 lg:gap-4 group origin-left transition-transform duration-500 hover:opacity-80">
              <div className="relative w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg p-1 md:p-1.5 shadow-sm">
                 <Image 
                   src="/images/logo.svg" 
                   alt="Aroon Blossom Impex" 
                   fill 
                   className="object-contain p-[2px]"
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
                    scrolled ? "text-[6px] md:text-[9px] text-[var(--c-dark)]" : "text-[7px] md:text-[11px] text-[#FAF9F6]"
                  )}>
                    Impex · Global
                  </span>
              </div>
            </Link>
          </div>



          {/* Desktop Navigation */}
          <div className={cn(
            "hidden lg:flex items-center gap-6 xl:gap-10 transition-opacity duration-300",
            isOpen && "opacity-0 invisible"
          )}>
            {navLinks.map((link) => {
              const localizedHref = `/${currentLocale}${link.href === '/' ? '' : link.href}`;
              const isActive = pathname === localizedHref;
              return (
                <Link
                  key={link.href}
                  href={localizedHref}
                  className="relative group py-1"
                >
                  <span
                    className={cn(
                      "text-[10px] xl:text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-700",
                      isActive
                        ? (scrolled ? 'text-[var(--c-dark)]' : 'text-[#FAF9F6]')
                        : (scrolled ? 'text-[var(--c-dark)]/40 hover:text-[var(--c-dark)]' : 'text-[#FAF9F6]/50 hover:text-[#FAF9F6]')
                    )}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <div className={cn(
                      "absolute -bottom-1 left-0 w-full h-[1px] transition-colors duration-700",
                      scrolled ? 'bg-[var(--c-dark)]' : 'bg-[#FAF9F6]'
                    )} />
                  )}
                </Link>
              );
            })}
          </div>


          {/* Interaction Elements */}
          <div className="flex items-center gap-3 md:gap-5 z-[160] flex-shrink-0">
            
            {/* Language Switcher */}
            <div className={cn(
              "relative flex items-center bg-black/5 hover:bg-black/10 transition-colors duration-300 rounded-full px-2 py-1 md:py-1.5 md:px-3 text-[10px] md:text-xs font-semibold overflow-hidden border",
              scrolled ? "border-black/5 text-[var(--c-dark)]" : "border-white/10 text-[#FAF9F6] bg-white/5 hover:bg-white/10"
            )}>
              <Globe size={12} className="opacity-70 mr-1 flex-shrink-0" />
              <select 
                value={currentLocale} 
                onChange={handleLanguageChange}
                className="appearance-none bg-transparent outline-none cursor-pointer pl-1 pr-2 z-10 uppercase w-auto min-w-[28px]"
              >
                <option value="en" className="text-black">EN</option>
                <option value="ja" className="text-black">JA</option>
                <option value="ko" className="text-black">KO</option>
                <option value="de" className="text-black">DE</option>
                <option value="zh" className="text-black">ZH</option>
              </select>
            </div>

            <div className={cn("hidden sm:flex transition-opacity duration-300 flex-shrink-0", isOpen && "opacity-0 invisible")}>
              <Link
                href={`/${currentLocale}/contact`}
                className={cn(
                  "inline-flex items-center px-6 lg:px-8 xl:px-10 py-2 md:py-2.5 rounded-full border transition-all duration-700 group relative overflow-hidden",
                  scrolled 
                    ? 'border-black/10 hover:border-[var(--c-dark)] hover:bg-[var(--c-dark)]' 
                    : 'border-white/10 hover:border-[#FAF9F6] hover:bg-[#FAF9F6]'
                )}
              >
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-black relative z-10 transition-colors duration-700",
                  scrolled 
                    ? 'text-[var(--c-dark)] group-hover:text-white' 
                    : 'text-[#FAF9F6] group-hover:text-[var(--c-dark)]'
                )}>
                  Request Quote
                </span>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden flex items-center justify-center rounded-full transition-all duration-700",
                isOpen ? "text-[#FAF9F6]" : (scrolled ? "text-[var(--c-dark)]" : "text-[#FAF9F6]")
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
            {navLinks.map((link) => {
               const localizedHref = `/${currentLocale}${link.href === '/' ? '' : link.href}`;
               return (
                <div key={link.href} className="overflow-hidden">
                  <Link
                    href={localizedHref}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-2xl font-black uppercase tracking-tighter italic transition-all duration-300",
                      pathname === localizedHref ? "text-[var(--c-primary)]" : "text-white/30"
                    )}
                  >
                    {link.name}
                  </Link>
                </div>
               );
            })}
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




