'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white/50 pt-16 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 opacity-90 group-hover:opacity-100 transition-opacity">
                 <Image src="/images/logo.svg" alt="Aroon Blossom" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white uppercase italic leading-none">Aroon Blossom</span>
                <span className="text-[9px] font-black text-[var(--c-primary)] tracking-[0.3em] uppercase mt-1">Impex · Global</span>
              </div>
            </Link>
            
            <p className="text-[13px] leading-relaxed max-w-sm">
              Supplying the global collagen and pet food tiers with hand-graded buffalo limed pelts since 2012. Engineered for industrial consistency.
            </p>
            
            <div className="flex gap-2 pt-2">
              <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white/40">APEDA</div>
              <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white/40">CAPEXIL</div>
            </div>
          </div>

          {/* Column 2: System Nodes */}
          <div>
            <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6 opacity-30">Navigation</h5>
            <ul className="space-y-3">
              {[
                { name: 'Global Hub', href: '/' },
                { name: 'Corporate History', href: '/about' },
                { name: 'Strategic Inquiry', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[12px] font-bold uppercase tracking-wide hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Material Streams */}
          <div>
            <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6 opacity-30">Our Products</h5>
            <ul className="space-y-3">
              {[
                { name: 'Collagen Grade Pelts', href: '/products' },
                { name: 'Pet Food Grade Pelts', href: '/products' },
                { name: 'Industrial Data Sheet', href: '/certificates/company-profile.pdf' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[12px] font-bold uppercase tracking-wide hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Transmission Details */}
          <div className="space-y-6">
            <div>
              <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-4 opacity-30">Global HQ</h5>
              <p className="text-[13px] font-bold text-white/80">Chennai, Tamil Nadu, India</p>
            </div>
            
            <div className="space-y-3">
              <h5 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-1 opacity-30">Direct Link</h5>
              <a href="tel:+91XXXXXXXXXX" className="block text-lg font-black italic text-white hover:text-[var(--c-primary)] transition-colors">+91 XXXXXXXXXX</a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-[var(--c-primary)] hover:underline underline-offset-4">
                WhatsApp Hotline →
              </a>
            </div>
          </div>
        </div>

        {/* Legal Node */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
          <p>© {currentYear} Aroon Blossom Impex.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white/40">Privacy</Link>
            <Link href="/terms" className="hover:text-white/40">Terms</Link>
          </div>
          <p>Engineered in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

