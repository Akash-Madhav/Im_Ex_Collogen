import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center border border-brand-accent/20">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-white text-xl leading-none">INDOPELTS</span>
              <span className="text-[10px] tracking-[0.2em] text-brand-accent font-medium">INTERNATIONAL</span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading Indian exporter of premium Buffalo Dried Limed Pelts. Serving global collagen 
            and gelatin manufacturers with consistent quality and reliable supply chains since 2014.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all text-gray-400 hover:text-white">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all text-gray-400 hover:text-white">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all text-gray-400 hover:text-white">
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-playfair font-bold text-brand-accent">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Achievements', 'Products', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-gray-400 hover:text-white flex items-center gap-2 group text-sm w-fit"
                >
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-accent" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <h4 className="text-lg font-playfair font-bold text-brand-accent">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex gap-4 items-start text-gray-400 text-sm">
              <MapPin className="text-brand-accent shrink-0 mt-1" size={18} />
              <p>Export Office: Chennai Port Industrial Area, Tamil Nadu, India</p>
            </div>
            <div className="flex gap-4 items-center text-gray-400 text-sm">
              <Phone className="text-brand-accent shrink-0" size={18} />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex gap-4 items-center text-gray-400 text-sm">
              <Mail className="text-brand-accent shrink-0" size={18} />
              <p>export@indopelts.com</p>
            </div>
            <div className="pt-2">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-colors border border-[#25D366]/20"
              >
                <Phone size={16} />
                WhatsApp Message
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} IndoPelts International. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <p className="flex items-center gap-2">Made in India <span className="text-lg">🇮🇳</span></p>
      </div>
    </footer>
  );
}
