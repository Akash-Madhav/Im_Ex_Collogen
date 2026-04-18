'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

/**
 * Premium Luxury Navbar - Unified Motion Architecture
 * Refactored using Framer Motion to match editorial brand standards.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Transition styling after 80px for better visibility
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-4 md:top-6 left-4 right-4 md:left-8 md:right-8 mx-auto z-[100] max-w-[1400px] transition-all duration-700 rounded-full border",
          scrolled
            ? "py-2 md:py-3 bg-white/40 backdrop-blur-md md:backdrop-blur-xl border-black/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
            : "py-3 md:py-5 bg-white/[0.03] backdrop-blur-sm md:backdrop-blur-md border-white/10 shadow-none"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="w-full px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link 
              href="/" 
              className="relative z-[110] flex items-center gap-3 transition-transform duration-500 hover:scale-[1.02]"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-accent-gold/20">
                <span className="text-bg-primary font-black text-base md:text-lg italic">B</span>
              </div>
              <span className={cn(
                "font-body font-extrabold text-base md:text-lg tracking-tight transition-colors duration-700",
                scrolled ? "text-[#2B2B2B]" : "text-[#FAF9F6]"
              )}>
                INDOPELTS
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
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
                        "text-[11px] uppercase tracking-[0.25em] font-body font-bold transition-all duration-700",
                        isActive
                          ? (scrolled ? 'text-[#2B2B2B]' : 'text-accent-gold')
                          : (scrolled ? 'text-[#2B2B2B]/40 hover:text-[#2B2B2B]' : 'text-[#FAF9F6]/50 hover:text-[#FAF9F6]')
                      )}
                    >
                      {link.name}
                    </span>
                    <motion.div
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[1px] origin-left transition-colors duration-700",
                        scrolled ? "bg-[#2B2B2B]" : "bg-accent-gold"
                      )}
                      initial={{ scaleX: isActive ? 1 : 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  "hidden lg:inline-flex items-center px-10 py-3 rounded-full border transition-all duration-700 group relative overflow-hidden",
                  scrolled 
                    ? "border-black/10 hover:border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#FAF9F6]" 
                    : "border-white/10 hover:border-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#2B2B2B]"
                )}
              >
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-body font-bold relative z-10 transition-colors duration-700",
                  scrolled 
                    ? "text-[#2B2B2B] group-hover:text-[#FAF9F6]" 
                    : "text-[#FAF9F6] group-hover:text-[#2B2B2B]"
                )}>
                  Request a Quote
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "lg:hidden relative z-[110] p-2 transition-colors duration-700 outline-none",
                  scrolled ? "text-[#2B2B2B]" : "text-[#FAF9F6]"
                )}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[90] lg:hidden bg-white/70 backdrop-blur-xl md:backdrop-blur-2xl flex flex-col pt-32"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-5xl md:text-6xl font-display font-medium transition-all duration-700 italic block mb-2",
                      pathname === link.href
                        ? "text-[#2B2B2B]"
                        : "text-[#2B2B2B]/20 hover:text-[#2B2B2B]"
                    )}
                  >
                    {link.name}.
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="w-full max-w-xs mt-10"
              >
                <Link
                  href="/contact"
                  className="block w-full py-5 rounded-full bg-[#2B2B2B] text-[#FAF9F6] font-body font-bold uppercase tracking-[0.25em] text-[11px] shadow-2xl"
                >
                  Start Inquiry
                </Link>
              </motion.div>
            </div>

            {/* COLLAPSIBLE PROCUREMENT DETAILS */}
            <div className="mt-auto border-t border-black/5 bg-[#F5F5F7]/30">
              <button 
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="w-full flex items-center justify-between p-8 group transition-colors hover:bg-black/[0.02]"
              >
                <span className="text-[10px] font-bold uppercase tracking-[.25em] text-[#2B2B2B]/60 group-hover:text-[#2B2B2B]">
                  Procurement Desk
                </span>
                <ChevronDown className={cn("text-[#2B2B2B]/40 transition-transform duration-500", isDetailsOpen && "rotate-180")} size={16} />
              </button>
              
              <motion.div 
                initial={false}
                animate={{ height: isDetailsOpen ? 'auto' : 0, opacity: isDetailsOpen ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 pb-12 grid grid-cols-2 gap-8 border-t border-black/5">
                    <div className="space-y-2">
                        <h5 className="text-[9px] font-bold uppercase tracking-widest text-black/40">Global Desk</h5>
                        <p className="text-[12px] text-[#2B2B2B] leading-relaxed">Chennai Port Zone,<br />Tamil Nadu, India</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-[9px] font-bold uppercase tracking-widest text-black/40">Efficiency</h5>
                        <p className="text-[12px] text-[#2B2B2B] leading-relaxed">24hr Turnaround<br />ISO:9001 Protocol</p>
                    </div>
                    <div className="col-span-2 pt-4 flex gap-8">
                        <a href="mailto:export@indopelts.com" className="text-[11px] font-bold text-[#2B2B2B] tracking-widest uppercase border-b border-black/10 pb-1">Email</a>
                        <a href="tel:+919444012345" className="text-[11px] font-bold text-[#2B2B2B] tracking-widest uppercase border-b border-black/10 pb-1">Direct Line</a>
                    </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
