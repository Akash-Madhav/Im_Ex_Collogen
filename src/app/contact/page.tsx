import InquiryForm from '@/components/contact/InquiryForm';
import FAQAccordion from '@/components/contact/FAQAccordion';
import { Mail, MapPin, Phone, MessageCircle, Download } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-background">
      
      {/* Editorial Header */}
      <section className="section-padding border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 py-12 md:py-24">
          <SectionHeading 
            kicker="Procurement"
            title="Start Your Industrial Supply Inquiry"
            className="max-w-3xl"
          />
          <p className="text-brand-body/80 md:max-w-sm text-sm border-l-2 border-brand-accent pl-4 py-1 font-inter">
             Inquire about bulk pricing, specify your extraction needs, or arrange a facility audit. Our operations desk responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Area */}
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-0 border-x border-brand-primary/10 bg-white">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 lg:border-r border-brand-primary/10 relative">
             <div className="absolute top-0 right-0 p-8 text-brand-primary/5 font-playfair font-black text-6xl leading-none pointer-events-none">RFQ</div>
             <InquiryForm />
          </div>

          {/* Right: Operations Desk Details */}
          <div className="lg:col-span-5 bg-brand-primary text-white border-t lg:border-t-0 border-brand-primary/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            <div className="p-8 md:p-12 space-y-12 relative z-10">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <span className="font-mono text-brand-accent text-sm tracking-widest font-bold">OPERATIONS DESK</span>
                <h3 className="text-2xl font-playfair">Direct Communication</h3>
                <p className="text-white/60 text-sm mt-2">Hours: 9:00 AM - 6:00 PM (IST)<br/>Response Time: Under 24 hrs</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                   <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-300">
                     <Phone size={18} />
                   </div>
                   <div>
                     <p className="text-white/40 text-xs font-mono mb-1 tracking-wider uppercase">Direct Line</p>
                     <p className="text-xl font-bold font-playfair tracking-tight">+91 98765 43210</p>
                   </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                   <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-300">
                     <Mail size={18} />
                   </div>
                   <div>
                     <p className="text-white/40 text-xs font-mono mb-1 tracking-wider uppercase">Global Sales Inbox</p>
                     <p className="text-xl font-bold font-playfair tracking-tight">export@indopelts.com</p>
                   </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                   <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-300">
                     <MapPin size={18} />
                   </div>
                   <div>
                     <p className="text-white/40 text-xs font-mono mb-1 tracking-wider uppercase">Export Facility</p>
                     <p className="text-base leading-relaxed tracking-tight max-w-[200px]">Plot 12, Leather Industrial Estate, Chennai, Tamil Nadu, India</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 relative z-10 w-full">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-white py-8 px-12 flex items-center justify-between font-bold transition-all duration-300 group"
              >
                <span>Initiate Priority Chat</span>
                <MessageCircle size={24} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-brand-background border-y border-brand-primary/10">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* Resource Strip */}
      <section className="bg-brand-primary py-8 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
           <h4 className="font-playfair font-bold text-xl">Official Documentation</h4>
           <div className="flex gap-6">
             <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-brand-accent transition-colors">
               <Download size={16} /> Company Profile
             </button>
             <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-brand-accent transition-colors">
               <Download size={16} /> Product Specs
             </button>
           </div>
        </div>
      </section>

    </div>
  );
}
