'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { magneticButton } from '@/lib/interactions';

export default function ContactPage() {
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (submitBtnRef.current) {
      const cleanup = magneticButton(submitBtnRef.current);
      return cleanup;
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-bg flex flex-col lg:flex-row">
      
      {/* Left: Contact Info (50%) */}
      <div className="lg:w-1/2 px-6 md:px-20 py-20 bg-surface border-r border-border">
        <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-6">
          Procurement Gateway
        </h5>
        <h1 className="text-[clamp(40px,5vw,64px)] font-display font-medium text-text-primary leading-[1.1] mb-12">
          Initiate your <br />
          <span className="italic">Supply Cycle.</span>
        </h1>
        
        <div className="space-y-16 mt-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-4">Export Headquarters</p>
            <p className="text-xl text-text-secondary leading-relaxed">
              Chennai Port Industrial Zone,<br />
              Tamil Nadu 600001, India
            </p>
          </div>
          
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-4">Direct Lines</p>
            <p className="text-xl text-text-secondary font-bold">procure@indopelts.com</p>
            <p className="text-xl text-text-secondary mt-1">+91 94440 12345</p>
          </div>

          <div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-4">Typical Lead Time</p>
             <div className="flex items-center gap-4">
               <span className="text-[32px] font-mono font-bold text-accent">15</span>
               <span className="text-sm text-text-tertiary font-bold uppercase tracking-widest leading-none">Working Days <br/> to Dispatch</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right: Form (50%) */}
      <div className="lg:w-1/2 px-6 md:px-20 py-20 flex flex-col justify-center">
        <form className="max-w-md w-full space-y-12">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-border py-4 text-text-primary focus:border-accent outline-none transition-colors duration-300"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Corporate Email</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-border py-4 text-text-primary focus:border-accent outline-none transition-colors duration-300"
              placeholder="name@company.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Required Volume (MT)</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-border py-4 text-text-primary focus:border-accent outline-none transition-colors duration-300"
              placeholder="e.g. 52 MT (2 Containers)"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Specific Requirements</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-border py-4 text-text-primary focus:border-accent outline-none transition-colors duration-300 resize-none"
              placeholder="Additional specs or destination port..."
            />
          </div>

          <button 
            ref={submitBtnRef}
            type="submit"
            className="w-full py-5 bg-accent text-bg font-bold uppercase tracking-widest text-[13px] rounded hover:bg-[#E8B84A] shadow-[0_10px_30px_rgba(200,146,42,0.2)]"
          >
            Submit RFQ Request
          </button>
        </form>
      </div>

    </div>
  );
}
