'use client';

import React from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useRef } from 'react';

export default function InquiryForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapReveal(containerRef, {
    from: { y: 30, opacity: 0 },
    stagger: 0.1
  });

  return (
    <section id="inquiry-form" ref={containerRef} className="snap-section h-screen bg-[var(--c-surface)] flex flex-col justify-center overflow-auto lg:overflow-hidden py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-24 items-center">
          
          {/* Left Column: Form */}
          <div className="bg-white p-10 xl:p-14 rounded-[48px] shadow-2xl border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-primary)]/5 rounded-bl-full" />
            <h2 className="text-3xl xl:text-4xl font-black text-[var(--c-text-primary)] mb-10 tracking-tighter uppercase">Send Export <br /><span className="text-[var(--c-primary)]">Inquiry</span></h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-[var(--c-surface)]/50 border border-black/5 rounded-2xl focus:border-[var(--c-primary)] outline-none transition-all font-medium text-sm" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-widest">Company Name</label>
                <input type="text" placeholder="Global Collagen Ltd" className="w-full px-5 py-4 bg-[var(--c-surface)]/50 border border-black/5 rounded-2xl focus:border-[var(--c-primary)] outline-none transition-all font-medium text-sm" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-widest">Country</label>
                <select className="w-full px-5 py-4 bg-[var(--c-surface)]/50 border border-black/5 rounded-2xl focus:border-[var(--c-primary)] outline-none transition-all font-medium text-sm appearance-none" required>
                  <option value="">Select Country</option>
                  <option value="ID">Indonesia</option>
                  <option value="VN">Vietnam</option>
                  <option value="CN">China</option>
                  <option value="DE">Germany</option>
                  <option value="US">USA</option>
                  <option value="OTHER">Others</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="procurement@company.com" className="w-full px-5 py-4 bg-[var(--c-surface)]/50 border border-black/5 rounded-2xl focus:border-[var(--c-primary)] outline-none transition-all font-medium text-sm" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-widest">Requirement</label>
                <input type="text" placeholder="e.g. 50 Tons" className="w-full px-5 py-4 bg-[var(--c-surface)]/50 border border-black/5 rounded-2xl focus:border-[var(--c-primary)] outline-none transition-all font-medium text-sm" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-widest">Application</label>
                <select className="w-full px-5 py-4 bg-[var(--c-surface)]/50 border border-black/5 rounded-2xl focus:border-[var(--c-primary)] outline-none transition-all font-medium text-sm appearance-none" required>
                  <option value="">Select Application</option>
                  <option value="collagen">Collagen Manufacturing</option>
                  <option value="gelatin">Gelatin Production</option>
                  <option value="petfood">Pet Food / Dog Chews</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-black text-[var(--c-text-muted)] uppercase tracking-widest">Requirements Detail</label>
                <textarea placeholder="e.g. Grade, Protein %, Ash content limits..." className="w-full px-5 py-5 bg-[var(--c-surface)]/50 border border-black/5 rounded-3xl focus:border-[var(--c-primary)] outline-none min-h-[140px] transition-all font-medium text-sm resize-none" />
              </div>

              <div className="md:col-span-2 pt-6">
                <button type="submit" className="btn-primary w-full py-5 text-[11px] font-black uppercase tracking-[0.3em] rounded-full shadow-xl">
                  Initialize Export Request
                </button>
              </div>


              <p className="md:col-span-2 text-center text-[10px] font-bold text-[var(--c-text-muted)] uppercase tracking-widest opacity-60">
                Official B2B Inquiry Channel — Secured SSL Link
              </p>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-12 xl:pl-10">
            <div>
               <div className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--c-primary)] mb-6">
                Direct Channels
              </div>
              <h3 className="text-4xl xl:text-5xl font-black text-[var(--c-text-primary)] mb-10 tracking-tighter">Global <br /> <span className="text-[var(--c-primary)]">Export Desk</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                <ContactDetail label="WhatsApp (Recommended)" value="+91 94440 12345" isLink={`https://wa.me/919444012345`} isWhatsApp />
                <ContactDetail label="Registry Email" value="export@aroonblossom.com" isLink="mailto:export@aroonblossom.com" />
                <ContactDetail label="Global HQ" value="Chennai Port Zone, India" />
                <ContactDetail label="SLA Response" value="Within 24 Business Hours" />
              </div>
            </div>

            <div className="pt-12 border-t border-black/5">
              <h4 className="text-[11px] font-black text-[var(--c-text-muted)] uppercase tracking-[0.3em] mb-8">Verification Resources</h4>
              <div className="grid grid-cols-1 gap-4">
                <DownloadLink label="Technical Specification Matrix" href="/downloads/product-specs.pdf" />
                <DownloadLink label="Institution Compliance Profile" href="/downloads/company-profile.pdf" />
                <DownloadLink label="Government Export Licenses" href="/certificates/apeda.pdf" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function ContactDetail({ label, value, isLink, isWhatsApp }: { label: string, value: string, isLink?: string, isWhatsApp?: boolean }) {
  const content = (
    <div className="group cursor-pointer">
      <div className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider mb-1 group-hover:text-[var(--c-primary)] transition-colors">{label}</div>
      <div className={`text-lg font-bold ${isWhatsApp ? 'text-[#25D366]' : 'text-[var(--c-text-primary)]'} group-hover:underline`}>{value}</div>
    </div>
  );

  return isLink ? <a href={isLink} target={isWhatsApp ? "_blank" : "_self"}>{content}</a> : content;
}

function DownloadLink({ label, href }: { label: string, href: string }) {
  return (
    <a href={href} download className="flex items-center justify-between group py-3 border-b border-[var(--c-border)] last:border-0 hover:border-[var(--c-primary)] transition-all">
      <span className="text-sm font-semibold text-[var(--c-text-secondary)] group-hover:text-[var(--c-primary)] group-hover:pl-2 transition-all">{label}</span>
      <span className="text-[var(--c-primary)] opacity-0 group-hover:opacity-100 transition-opacity">↓</span>
    </a>
  );
}
