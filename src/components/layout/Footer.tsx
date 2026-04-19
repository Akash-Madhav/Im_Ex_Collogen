'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[rgba(255,255,255,0.75)] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 grayscale brightness-200">
                 <Image 
                   src="/images/logo.svg" 
                   alt="Aroon Blossom Impex Logo" 
                   fill 
                   className="object-contain"
                 />
              </div>
              <span className="text-xl font-extrabold text-white tracking-[0.1em] leading-[0.85] uppercase">
                AROON <br /> BLOSSOM <br /> IMPEX
              </span>
            </Link>
            <p className="text-[10px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.2em] font-bold">
              Premium Hides & Pelts Exporter
            </p>
            <p className="text-sm leading-relaxed">
              Supplying global collagen and pet food manufacturers with consistent quality and reliable bulk supply since 2012.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[rgba(31,93,58,0.3)] text-white/80 border border-[rgba(31,93,58,0.5)]">
                APEDA Certified
              </span>
              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[rgba(31,93,58,0.3)] text-white/80 border border-[rgba(31,93,58,0.5)]">
                CAPEXIL Registered
              </span>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h5 className="text-xs font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Quality & Specs', href: '/quality' },
                { name: 'Export Capability', href: '/export' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-white transition-all hover:pl-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Links */}
          <div>
            <h5 className="text-xs font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-widest mb-6">Products</h5>
            <ul className="space-y-3">
              {[
                { name: 'Collagen Grade Pelts', href: '/products/collagen-grade' },
                { name: 'Pet Food Grade Pelts', href: '/products/pet-food-grade' },
                { name: 'Technical Spec Sheet', href: '/downloads/product-specs.pdf' },
                { name: 'Company Profile', href: '/downloads/company-profile.pdf' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-white transition-all hover:pl-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h5 className="text-xs font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-widest mb-6">Contact</h5>
            <div className="space-y-4 text-sm">
              <p>Chennai, Tamil Nadu, India</p>
              <a href="tel:+91XXXXXXXXXX" className="block hover:text-white">+91 XXXXXXXXXX</a>
              <a href="mailto:export@aroonblossom.com" className="block hover:text-white">export@aroonblossom.com</a>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank" 
                className="block font-bold text-[#25D366] hover:brightness-110"
              >
                WhatsApp Message
              </a>
              <div className="pt-4 border-t border-white/10 mt-4 space-y-1 text-[11px] text-[rgba(255,255,255,0.4)]">
                <div>APEDA Reg: RCMC/APEDA/27578/2025-2026</div>
                <div>Valid Till: 16 March 2031</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-4 text-xs text-[rgba(255,255,255,0.4)]">
          <p>© {currentYear} Aroon Blossom Impex. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
          <p>Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
