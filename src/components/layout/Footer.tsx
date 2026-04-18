'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Logo & Vision area */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-bg font-black text-xl italic translate-x-[-1px]">B</span>
              </div>
              <span className="font-display font-black text-2xl text-text-primary tracking-tight uppercase">
                INDOPELTS
              </span>
            </Link>
            <p className="text-[15px] text-text-tertiary max-w-[400px] leading-relaxed">
              Advancing the global supply chain for industrial buffalo pelts. We combine rigorous Indian processing heritage with high-spec international delivery standards for the pharmaceutical and pet food sectors.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-tertiary hover:border-accent hover:text-accent transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[13px] font-bold text-text-primary uppercase tracking-[0.2em]">Operational Desk</h4>
            <ul className="space-y-4">
              {['Home', 'Achievements', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-text-tertiary hover:text-accent flex items-center gap-2 group transition-all duration-300 text-sm"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform opacity-40 group-hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[13px] font-bold text-text-primary uppercase tracking-[0.2em]">Global Presence</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-8 h-8 rounded bg-bg border border-border flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <MapPin size={16} className="text-accent" />
                </div>
                <p className="text-sm text-text-tertiary leading-relaxed">Chennai Port Industrial Zone,<br />Tamil Nadu, India</p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded bg-bg border border-border flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <Phone size={16} className="text-accent" />
                </div>
                <p className="text-sm text-text-tertiary font-mono">+91 94440 12345</p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded bg-bg border border-border flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                </div>
                <p className="text-sm text-text-tertiary font-mono">export@indopelts.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-medium text-text-tertiary uppercase tracking-widest">
            © {currentYear} IndoPelts International. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms'].map(policy => (
              <Link key={policy} href="#" className="text-[11px] font-bold text-text-tertiary hover:text-accent uppercase tracking-widest transition-colors">
                {policy} Policy
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-text-tertiary uppercase tracking-widest">
            Made in India <span className="text-sm grayscale opacity-50">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
