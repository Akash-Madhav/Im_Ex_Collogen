'use client';

import { Phone } from 'lucide-react';

export default function WhatsAppWidget() {
  const message = encodeURIComponent(
    "Hi, I am interested in sourcing buffalo dried limed pelts. My monthly requirement is [...]"
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:hidden"></div>
      <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-white transform hover:scale-110 transition-transform duration-300">
        <Phone size={32} />
        <div className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-sm font-bold">Chat on WhatsApp</p>
        </div>
      </div>
    </a>
  );
}
