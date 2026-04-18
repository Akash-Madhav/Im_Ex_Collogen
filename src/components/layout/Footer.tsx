'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Luxury Design System - Footer
 * Structured, trust-heavy layout with design token synchronization.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle pt-24 pb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Logo & Vision area */}
          <div className="md:col-span-6 space-y-10">
            <Link href="/" className="magnetic flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-full bg-accent-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-bg-primary font-black text-xl italic translate-x-[-1px]">B</span>
              </div>
              <span className="font-display font-black text-2xl text-text-premium tracking-tight uppercase">
                INDOPELTS
              </span>
            </Link>
            <p className="text-[14px] text-text-muted max-w-[450px] leading-relaxed font-body">
              Strategically advancing the global supply chain for high-spec industrial buffalo pelts. We bridge Indian heritage with high-compliance international standards for collagen extraction and global pharmaceutical industries.
            </p>
            <div className="flex gap-5">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="magnetic w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center text-text-dim hover:border-accent-gold hover:text-accent-gold transition-all duration-300 hover:bg-accent-gold/5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[11px] font-bold text-text-premium uppercase tracking-[0.25em] font-body">Operational</h4>
            <ul className="space-y-4">
              {['Home', 'Achievements', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-text-dim hover:text-accent-gold flex items-center gap-2 group transition-all duration-300 text-[13px] font-body"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform opacity-30 group-hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[11px] font-bold text-text-premium uppercase tracking-[0.25em] font-body">Global Desk</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-sm bg-bg-primary border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-accent-gold transition-colors">
                  <MapPin size={18} className="text-accent-gold" />
                </div>
                <p className="text-[13px] text-text-dim leading-relaxed font-body pt-1">Chennai Port Industrial Zone,<br />Tamil Nadu, India</p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-sm bg-bg-primary border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-accent-gold transition-colors">
                  <Phone size={18} className="text-accent-gold" />
                </div>
                <p className="text-[13px] text-text-dim font-mono">+91 94440 12345</p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-sm bg-bg-primary border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-accent-gold transition-colors">
                  <Mail size={18} className="text-accent-gold" />
                </div>
                <p className="text-[13px] text-text-dim font-mono">export@indopelts.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] font-body">
            © {currentYear} IndoPelts International. Global Logistics Authority.
          </p>
          <div className="flex gap-10">
            {['Privacy', 'Terms'].map(policy => (
              <Link key={policy} href="#" className="text-[10px] font-bold text-text-dim hover:text-accent-gold uppercase tracking-[0.2em] transition-colors font-body">
                {policy} Policy
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] font-body">
            Crafted in India <span className="text-sm grayscale opacity-30">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
