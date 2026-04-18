'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is your Minimum Order Quantity (MOQ)?',
    answer: 'Our standard MOQ is 1 Full Container Load (FCL), which translates to approximately 26 Metric Tons depending on the container size (20ft vs 40ft) and bale density.'
  },
  {
    question: 'Do you provide lab certificates with shipments?',
    answer: 'Yes. Every batch is tested and accompanied by a Certificate of Analysis (CoA) referencing CLRI standards for moisture, protein, and residual lime.'
  },
  {
    question: 'How long is the typical lead time to port?',
    answer: 'From the confirmation of the Purchase Order, we typically stuff and move containers to Chennai Port or Cochin Port within 10-14 days.'
  },
  {
    question: 'Can I request custom trimming or sizes?',
    answer: 'Yes. While our standard sorting offers 3mm, 5mm, and 8mm batches, we can adjust trimming and baling requirements for long-term contract orders.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-8 px-4 md:px-0">Frequently Asked Questions</h3>
      
      <div className="border-t border-brand-primary/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-brand-primary/10 last:border-b-0">
              <button
                className="w-full flex items-center justify-between py-6 px-4 md:px-6 hover:bg-brand-background/50 transition-colors text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={`font-bold font-playfair text-lg pr-4 transition-colors ${isOpen ? 'text-brand-accent' : 'text-brand-primary'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'border-brand-accent bg-brand-accent text-white' : 'border-brand-primary/20 text-brand-primary/60'}`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}
              >
                <p className="p-4 md:px-6 pb-6 text-brand-body/80 font-inter text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
