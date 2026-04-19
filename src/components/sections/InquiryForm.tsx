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
    <section id="inquiry-form" ref={containerRef} className="snap-section bg-[var(--c-surface)] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-card border border-[var(--c-border)]">
            <h2 className="text-3xl font-bold text-[var(--c-text-primary)] mb-8">Send Export Inquiry</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-[var(--c-border)] rounded-lg focus:border-[var(--c-primary)] outline-none transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider">Company Name</label>
                <input type="text" placeholder="Global Collagen Ltd" className="w-full px-4 py-3 border border-[var(--c-border)] rounded-lg focus:border-[var(--c-primary)] outline-none transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider">Country</label>
                <select className="w-full px-4 py-3 border border-[var(--c-border)] rounded-lg focus:border-[var(--c-primary)] outline-none bg-white transition-colors" required>
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
                <label className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="procurement@company.com" className="w-full px-4 py-3 border border-[var(--c-border)] rounded-lg focus:border-[var(--c-primary)] outline-none transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider">Monthly Requirement</label>
                <input type="text" placeholder="e.g. 50 Tons" className="w-full px-4 py-3 border border-[var(--c-border)] rounded-lg focus:border-[var(--c-primary)] outline-none transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider">Application</label>
                <select className="w-full px-4 py-3 border border-[var(--c-border)] rounded-lg focus:border-[var(--c-primary)] outline-none bg-white transition-colors" required>
                  <option value="">Select Application</option>
                  <option value="collagen">Collagen Manufacturing</option>
                  <option value="gelatin">Gelatin Production</option>
                  <option value="petfood">Pet Food / Dog Chews</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[11px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider">Specific Requirements</label>
                <textarea placeholder="e.g. Protein %, moisture level, grade..." className="w-full px-4 py-4 border border-[var(--c-border)] rounded-lg focus:border-[var(--c-primary)] outline-none min-h-[120px] transition-colors" />
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="btn-primary w-full py-4 text-base tracking-wide">
                  Send Export Inquiry
                </button>
              </div>

              <p className="md:col-span-2 text-center text-xs text-[var(--c-text-muted)]">
                By submitting, you agree to receive technical specification reports and quotations.
              </p>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:pt-10 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[var(--c-text-primary)] mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <ContactDetail label="WhatsApp (Fastest)" value="+91 94440 12345" isLink={`https://wa.me/919444012345`} isWhatsApp />
                <ContactDetail label="Direct Email" value="export@aroonblossom.com" isLink="mailto:export@aroonblossom.com" />
                <ContactDetail label="Global Desk" value="Chennai Port Zone, Tamil Nadu, India" />
                <ContactDetail label="Response Time" value="Within 24 business hours" />
              </div>
            </div>

            <div className="pt-10 border-t border-[var(--c-border)]">
              <h4 className="text-[12px] font-bold text-[var(--c-text-muted)] uppercase tracking-wider mb-6">Resource Center</h4>
              <div className="space-y-4">
                <DownloadLink label="Product Specification Sheet (PDF)" href="/downloads/product-specs.pdf" />
                <DownloadLink label="Company Compliance Profile" href="/downloads/company-profile.pdf" />
                <DownloadLink label="APEDA Registration Certificate" href="/certificates/apeda.pdf" />
                <DownloadLink label="CAPEXIL Member Certificate" href="/certificates/capexil.pdf" />
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
