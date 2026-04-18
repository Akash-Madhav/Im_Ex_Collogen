'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { ScrollSection } from '@/components/shared/ScrollSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

/**
 * IndoPelts - Contact Page
 * Standardized 4-section architecture for streamlined procurement inquiries.
 */
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(event.target);
    // Replace with your actual Web3Forms Access Key
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
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
      <ScrollSection>
        <section className="border-b border-white/5 py-20">
          <div className="container-custom">
            <SectionHeading 
              kicker="Procurement Gateway"
              title={<>Initiate your <br /><span className="italic text-accent-gold">Global Supply Cycle.</span></>}
            />
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 2: LOCATION & ACCESS */}
      <ScrollSection>
        <section className="section-padding bg-bg-secondary border-b border-white/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-accent-gold/10 flex items-center justify-center rounded-sm">
                  <MapPin className="text-accent-gold" size={20} />
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dim">Headquarters</h4>
                <p className="text-sm text-text-premium leading-relaxed">Chennai Port Zone,<br />Tamil Nadu, India</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-accent-gold/10 flex items-center justify-center rounded-sm">
                  <Mail className="text-accent-gold" size={20} />
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dim">Inquiries</h4>
                <p className="text-sm text-text-premium leading-relaxed">export@indopelts.com<br />procure@indopelts.com</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-accent-gold/10 flex items-center justify-center rounded-sm">
                  <Phone className="text-accent-gold" size={20} />
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dim">Direct Line</h4>
                <p className="text-sm text-text-premium leading-relaxed">+91 94440 12345<br />+91 9888 123456</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-accent-gold/10 flex items-center justify-center rounded-sm">
                  <Clock className="text-accent-gold" size={20} />
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dim">Lead Time</h4>
                <p className="text-sm text-text-premium leading-relaxed">15-20 Business Days<br />Standard Dispatch</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 3: INQUIRY FORM */}
      <ScrollSection>
        <section className="section-padding border-b border-white/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5">
                <Badge variant="accent" className="mb-6">RFQ Portal</Badge>
                <h3 className="text-3xl font-display font-bold text-text-premium mb-8">Ready to Scale?</h3>
                <p className="text-text-muted font-body leading-relaxed max-w-sm mb-12">
                  Submit your technical requirements and target volumes. Our procurement desk will respond with a comprehensive COA and price matrix within 24 hours.
                </p>
                <div className="p-6 glass-subtle border-l-2 border-accent-gold">
                  <p className="text-xs text-text-dim italic leading-relaxed">
                    "Tier-1 pharmaceutical clients are prioritized for express technical documentation."
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  <Input name="name" label="Full Name" placeholder="John Doe" required />
                  <Input name="email" label="Corporate Email" placeholder="name@company.com" type="email" required />
                  <Input name="volume" label="Required Volume (MT)" placeholder="e.g. 52 MT" required />
                  <Input name="port" label="Destination Port" placeholder="e.g. Rotterdam" required />
                  <div className="md:col-span-2">
                    <Input name="message" label="Specific Requirements" placeholder="Fiber density, moisture levels, etc." required />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto px-16"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing RFQ...' : 'Submit RFQ Request'}
                    </Button>
                    
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
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* SECTION 4: COMMITMENT */}
      <ScrollSection>
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom text-center max-w-4xl">
            <SectionHeading align="center" kicker="Global Promise" title="Partnership Protocol" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Card variant="glass" padding="sm">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-3">Response Promise</h5>
                <p className="text-[12px] text-text-dim leading-relaxed">All commercial and technical inquiries are addressed within 24 business hours.</p>
              </Card>
              <Card variant="glass" padding="sm">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-3">Technical Support</h5>
                <p className="text-[12px] text-text-dim leading-relaxed">Direct access to our Chennai-based chemistry desk for sample verification.</p>
              </Card>
              <Card variant="glass" padding="sm">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-3">Escrow Ready</h5>
                <p className="text-[12px] text-text-dim leading-relaxed">Standardized LC and Escrow payment protocols available for first-time buyers.</p>
              </Card>
            </div>
          </div>
        </section>
      </ScrollSection>


    </div>
  );
}
