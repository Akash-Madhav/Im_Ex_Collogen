'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Activity, BarChart3, Clock, LineChart, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

const metrics = [
  {
    title: 'Monthly Capacity',
    value: '1,500 MT',
    subtitle: 'Container loads per month',
    icon: BarChart3,
    trend: '+15% YoY'
  },
  {
    title: 'Average Moisture',
    value: '14-18%',
    subtitle: 'Strictly controlled indexing',
    icon: Activity,
    trend: 'Optimized'
  },
  {
    title: 'Hair Removal',
    value: '99.9%',
    subtitle: 'Machine-assisted dehairing',
    icon: ShieldCheck,
    trend: 'A-Grade'
  },
  {
    title: 'Processing Time',
    value: '22 Days',
    subtitle: 'From raw to export-ready',
    icon: Clock,
    trend: 'Efficient'
  }
];

export default function MetricsDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.metric-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    });
  }, []);

  return (
    <section className="bg-brand-background section-padding border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        <div className="mb-16">
          <SectionHeading 
            kicker="Performance Data"
            title="Operational Metrics"
            className="mb-6"
          />
          <p className="text-brand-body/80 max-w-2xl font-inter">
            Our facilities operate on strict tolerances ensuring that every shipment meets industrial standard requirements for collagen and gelatin conversion.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="metric-card bg-white p-6 shadow-sm border border-brand-primary/10 rounded-xl hover:shadow-md hover:border-brand-accent/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-background flex items-center justify-center text-brand-primary group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                  <metric.icon size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent bg-brand-accent/5 px-2 py-1 rounded">
                  {metric.trend}
                </span>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-brand-body/60 font-bold">{metric.title}</p>
                <div className="text-3xl font-black font-playfair text-brand-primary tracking-tight">
                  {metric.value}
                </div>
                <p className="text-sm text-brand-body/80 pt-2">{metric.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Live Chart Placeholder */}
        <div className="metric-card mt-6 bg-brand-primary p-8 md:p-12 rounded-xl border border-brand-primary/20 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <LineChart size={120} strokeWidth={1} />
           </div>
           <div className="relative z-10 max-w-lg space-y-4">
              <h4 className="text-2xl font-playfair font-bold">Consistent Supply Chain</h4>
              <p className="text-white/70 font-inter leading-relaxed">
                We maintain buffer stocks of raw materials to buffer against seasonal livestock fluctuations, ensuring that your production line never stops. Our network spans 50+ collection centers across India.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
