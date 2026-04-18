'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const message = encodeURIComponent(
    "Hi, I am interested in sourcing buffalo dried limed pelts. My monthly requirement is [...]"
  );
  const whatsappUrl = `https://wa.me/919444012345?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group"
    >
      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20 transition-all group-hover:scale-150"></div>
      <div className="relative w-14 h-14 bg-bg border border-accent/40 rounded-full flex items-center justify-center shadow-glow text-accent transform hover:scale-110 transition-transform duration-300 backdrop-blur-md">
        <MessageCircle size={24} />
        
        <div className="absolute right-full mr-6 bg-surface border border-border text-text-primary px-4 py-2 rounded shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none">
          <p className="text-[10px] font-bold uppercase tracking-widest">Procurement Desk</p>
        </div>
      </div>
    </a>
  );
}
