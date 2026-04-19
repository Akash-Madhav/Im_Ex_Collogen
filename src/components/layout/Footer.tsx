'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[rgba(255,255,255,0.7)] pt-24 pb-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 xl:gap-24 mb-20">
          {/* Column 1: Brand Architecture */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-14 h-14 brightness-0 invert opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110">
                 <Image 
                   src="/images/logo.svg" 
                   alt="Institutional Logo" 
                   fill 
                   className="object-contain"
                 />
              </div>
              <div className="flex flex-col">
                <span className="text-xl xl:text-2xl font-black text-white tracking-tighter leading-none uppercase italic">
                  Aroon Blossom
                </span>
                <span className="text-[10px] xl:text-[11px] font-black text-[var(--c-primary)] tracking-[0.4em] uppercase mt-1">
                  Impex · Global
                </span>
              </div>
            </Link>
            
            <p className="text-[14px] leading-relaxed font-medium">
              Strategically supplying the global collagen and pet food manufacturing tiers with hand-graded buffalo limed pelts since 2012. Engineered for consistency, certified for trust.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60">
                APEDA Certified
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60">
                CAPEXIL Registry
              </div>
            </div>
          </div>

          {/* Column 2: Strategic Links */}
          <div>
            <h5 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-10 opacity-40">System Map</h5>
            <ul className="space-y-4">
              {[
                { name: 'Global Hub', href: '/' },
                { name: 'Corporate History', href: '/about' },
                { name: 'Technical Indices', href: '/quality' },
                { name: 'Distribution Matrix', href: '/export' },
                { name: 'Strategic Inquiry', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[13px] font-bold uppercase tracking-wider hover:text-[var(--c-primary)] transition-all hover:translate-x-2 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Material Streams */}
          <div>
            <h5 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-10 opacity-40">Output Streams</h5>
            <ul className="space-y-4">
              {[
                { name: 'Collagen Tier Pelts', href: '/products' },
                { name: 'Pet Food Tier Pelts', href: '/products' },
                { name: 'Gelatin Tier Pelts', href: '/products' },
                { name: 'Tannery Tier Pelts', href: '/products' },
                { name: 'Technical Data (PDF)', href: '/certificates/company-profile.pdf' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[13px] font-bold uppercase tracking-wider hover:text-[var(--c-primary)] transition-all hover:translate-x-2 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Registry */}
          <div>
            <h5 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-10 opacity-40">Global Registry</h5>
            <div className="space-y-6 text-[14px]">
              <div className="space-y-2">
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/30">Hq Location</span>
                <p className="font-bold">Chennai, Tamil Nadu, India</p>
              </div>
              
              <div className="space-y-2">
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/30">Direct Line</span>
                <a href="tel:+91XXXXXXXXXX" className="block text-xl font-black italic hover:text-[var(--c-primary)] transition-colors">+91 XXXXXXXXXX</a>
              </div>

              <div className="space-y-2">
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/30">Network Support</span>
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--c-primary)]/10 border border-[var(--c-primary)]/20 text-[var(--c-primary)] font-black text-[10px] uppercase tracking-widest hover:bg-[var(--c-primary)] hover:text-white transition-all"
                >
                  WhatsApp Expert
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/20">
          <p>© {currentYear} Aroon Blossom Impex. Institutional Operations.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Rights</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Operational Terms</Link>
          </div>
          <p className="flex items-center gap-2">
            Engineered In India <span className="text-sm">🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

