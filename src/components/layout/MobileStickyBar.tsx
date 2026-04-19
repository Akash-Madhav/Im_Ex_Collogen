'use client';

import React from 'react';
import Link from 'next/link';

/**
 * MobileStickyBar - Sticky footer CTAs for mobile.
 */
export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[80] bg-white/95 backdrop-blur-md border-t border-[var(--c-border)] px-4 py-3 flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
      <Link 
        href="/contact" 
        className="btn-primary flex-[1.2] text-center py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] shadow-lg"
      >
        Request Quote
      </Link>
      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        className="btn-whatsapp flex-1 justify-center py-3.5 text-[11px] font-bold uppercase tracking-[0.1em]"
      >
        WhatsApp
      </a>
      
      <style jsx global>{`
        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 84px !important;
          }
          /* Ensure content isn't hidden behind the sticky bar */
          main { 
            padding-bottom: 80px; 
          }
          footer {
            padding-bottom: 90px;
          }
        }
      `}</style>
    </div>
  );
}
