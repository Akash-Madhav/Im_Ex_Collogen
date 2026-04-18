'use client';

import { Button } from '../shared/Button';
import { SectionHeading } from '../shared/SectionHeading';

export default function InquiryCTA() {
  return (
    <section className="section-padding text-center relative overflow-hidden bg-bg-primary">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10 py-20 bg-bg-secondary/40 glass-subtle rounded-lg border border-border-subtle">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading 
            align="center"
            kicker="Procurement Portal"
            title={<>Secure your <span className="italic">Industrial Supply Chain.</span></>}
            className="mb-12"
          />
          
          <p className="text-text-muted text-[17px] font-body leading-relaxed mb-12 max-w-xl mx-auto">
            IndoPelts International is ready to fulfill high-volume export requirements for Tier-1 collagen manufacturers. Initiate a dialogue with our logistics desk today.
          </p>
          
          <div className="flex justify-center flex-col sm:flex-row gap-6">
            <Button href="/contact" variant="primary" className="px-16">
              Start RFQ Process
            </Button>
            <Button variant="ghost" href="/products">
              View Technical Specs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
