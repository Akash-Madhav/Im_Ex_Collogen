'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  company: z.string().min(2, 'Company name is required'),
  country: z.string().min(2, 'Country is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(5, 'Phone/WhatsApp number is required'),
  product: z.string().min(1, 'Please select a product grade'),
  quantity: z.string().min(1, 'Quantity is required'),
  application: z.string().min(1, 'Please select an application'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
       console.error(error);
       alert('Failed to send inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-2">
          <h2 className="text-brand-primary">Inquiry Sent!</h2>
          <p className="text-brand-body italic">
            Thank you for reaching out. Our export department will review your requirements 
            and contact you shortly.
          </p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Company Name</label>
          <input 
            {...register('company')} 
            className={`w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none ${errors.company ? 'ring-2 ring-red-500' : ''}`}
            placeholder="Indo Corp"
          />
          {errors.company && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.company.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Country</label>
          <input 
            {...register('country')} 
            className={`w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none ${errors.country ? 'ring-2 ring-red-500' : ''}`}
            placeholder="Indonesia"
          />
          {errors.country && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.country.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Email Address</label>
          <input 
            {...register('email')} 
            className={`w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none ${errors.email ? 'ring-2 ring-red-500' : ''}`}
            placeholder="procurement@company.com"
          />
          {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Phone / WhatsApp</label>
          <input 
            {...register('phone')} 
            className={`w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
            placeholder="+1 234 567 890"
          />
          {errors.phone && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2 flex flex-col justify-end">
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Grade Needed</label>
          <select 
            {...register('product')}
            className="w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none"
          >
            <option value="Grade A Premium">Grade A Premium</option>
            <option value="Grade B Industrial">Grade B Industrial</option>
            <option value="Custom Spec">Custom Spec</option>
          </select>
        </div>
        <div className="space-y-2 flex flex-col justify-end">
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Qty (MT)</label>
          <input 
            {...register('quantity')}
            className="w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none"
            placeholder="e.g. 20 MT"
          />
        </div>
        <div className="space-y-2 flex flex-col justify-end">
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Application</label>
          <select 
            {...register('application')}
            className="w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none"
          >
            <option value="Collagen">Collagen</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Gelatin">Gelatin</option>
            <option value="Food">Food (Krecek)</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60">Your Inquiry</label>
        <textarea 
          {...register('message')}
          rows={4}
          className={`w-full bg-brand-background border-none rounded-none px-4 py-3 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all outline-none resize-none ${errors.message ? 'ring-2 ring-red-500' : ''}`}
          placeholder="Detailed requirements regarding extraction target, preferred packing, etc..."
        />
        {errors.message && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.message.message}</p>}
      </div>

      <div className="pt-4">
        <button 
          type="submit"
          disabled={isSubmitting}
          className="relative inline-flex items-center justify-center gap-3 bg-brand-primary text-white font-inter font-bold px-8 py-4 overflow-hidden group w-full disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin relative z-10" size={24} />
          ) : (
            <>
              <span className="relative z-10 uppercase tracking-widest text-xs">Submit Specifications</span>
              <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
          <span className="absolute inset-0 bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]" />
        </button>
      </div>
    </form>
  );
}
