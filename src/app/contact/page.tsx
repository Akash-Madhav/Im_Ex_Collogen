'use client';

import { useState, useRef } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SplitHeading } from '@/components/animations/SplitHeading';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { CardTilt } from '@/components/animations/CardTilt';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useGsapReveal(formRef, {
    from: { y: 40, opacity: 0 },
    duration: 0.8,
    start: 'top 85%'
  });

  useGsapReveal(infoRef, {
    from: { x: 40, opacity: 0 },
    duration: 0.7,
    start: 'top 85%'
  });

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        event.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-bg-primary pt-24">
      
      {/* SECTION 1: HERO */}
      <section className="border-b border-white/5 py-20">
        <div className="container-custom">
          <SplitHeading 
            tag="h1" 
            text="Initiate your Global Supply Cycle." 
            animateOnScroll={true} 
            className="text-[clamp(40px,7vw,72px)] font-display font-bold leading-tight text-text-premium"
          />
        </div>
      </section>

      {/* SECTION 2: ACCESS GRID */}
      <section className="section-padding bg-bg-secondary border-b border-white/5 overflow-hidden">
        <div className="container-custom">
          <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: 'Headquarters', content: 'Chennai Port Zone, Tamil Nadu, India' },
              { icon: Mail, title: 'Inquiries', content: 'export@indopelts.com procure@indopelts.com' },
              { icon: Phone, title: 'Direct Line', content: '+91 94440 12345 +91 9888 123456' },
              { icon: Clock, title: 'Response Cycle', content: '24 Business Hours Standard Lead Time' },
            ].map((item, i) => (
              <div key={i} data-reveal-item className="space-y-4">
                <div className="w-10 h-10 bg-accent-gold/10 flex items-center justify-center rounded-sm">
                  <item.icon className="text-accent-gold" size={20} />
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dim">{item.title}</h4>
                <p className="text-sm text-text-premium leading-relaxed whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INQUIRY FORM */}
      <section ref={formRef} className="section-padding border-b border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-12 mb-12">
               <Badge variant="accent" className="mb-6">Industrial RFQ Portal</Badge>
               <h3 className="text-4xl font-display font-bold text-text-premium max-w-xl">Technical Requirement Submission.</h3>
            </div>
            
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                <div className="reveal-field"><Input name="name" label="Full Name" placeholder="John Doe" required /></div>
                <div className="reveal-field"><Input name="email" label="Corporate Email" placeholder="name@company.com" type="email" required /></div>
                <div className="reveal-field"><Input name="volume" label="Required Volume (MT)" placeholder="e.g. 52 MT" required /></div>
                <div className="reveal-field"><Input name="port" label="Destination Port" placeholder="e.g. Rotterdam" required /></div>
                <div className="md:col-span-2 reveal-field">
                  <Input name="message" label="Technical Requirements" placeholder="Fiber density, moisture levels, etc." required />
                </div>
                <div className="md:col-span-2 pt-6">
                  <MagneticButton className="w-full sm:w-auto">
                    <Button 
                      type="submit" 
                      className="w-full sm:px-16"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing RFQ...' : 'Submit RFQ Request'}
                    </Button>
                  </MagneticButton>
                  
                  {submitStatus === 'success' && (
                      <p className="mt-4 text-accent-gold text-sm font-body animate-fade-in">
                        Thank you. Your industrial inquiry has been successfully dispatched to our procurement desk.
                      </p>
                  )}
                  {submitStatus === 'error' && (
                      <p className="mt-4 text-red-400 text-sm font-body">
                        Communication error. Please contact export@indopelts.com directly.
                      </p>
                  )}
                </div>
              </form>
            </div>

            <div className="lg:col-span-5">
               <CardTilt>
                  <Card variant="glass" padding="lg" className="border-accent-gold/20">
                    <h4 className="text-xl font-display font-bold text-accent-gold mb-6 italic">Procurement Notice</h4>
                    <p className="text-text-muted text-sm leading-relaxed mb-8 font-body">
                      All industrial grades are laboratory-verified. Tier-1 pharmaceutical clients are prioritized for express technical documentation and sample dispatch.
                    </p>
                    <div className="pt-8 border-t border-white/5 space-y-4">
                       <div className="flex items-center gap-3 text-xs text-text-dim">
                          <div className="w-1 h-1 rounded-full bg-accent-gold" />
                          <span>Standard Escrow Protocols</span>
                       </div>
                       <div className="flex items-center gap-3 text-xs text-text-dim">
                          <div className="w-1 h-1 rounded-full bg-accent-gold" />
                          <span>LC Payment Facilities Available</span>
                       </div>
                    </div>
                  </Card>
               </CardTilt>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
