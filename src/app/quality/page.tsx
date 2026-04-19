import React from 'react';
import QualitySpecs from '@/components/sections/QualitySpecs';
import FinalCTA from '@/components/sections/FinalCTA';
import PageHeader from '@/components/layout/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Buffalo Pelt Specifications — Protein, Ash, Moisture | Aroon Blossom Impex",
  description: "Detailed technical parameters for buffalo limed pelts. We maintain strict control over protein (80%+), ash (<4%), and moisture levels for optimal industrial processing.",
};

const fullSpecs = [
  { param: 'Moisture Content', range: '10% – 20%', preferred: '12% – 16%', impact: 'Prevents bacterial growth, shelf-life' },
  { param: 'Protein Content', range: '65% – 80%', preferred: '70% – 78%', impact: 'Collagen yield, gelatin Bloom strength' },
  { param: 'Ash Content', range: '3% – 8%', preferred: '3% – 6%', impact: 'Critical for extraction purity' },
  { param: 'Dehairing', range: 'Complete', preferred: '99%+ clean', impact: 'Reduces filtration time' },
  { param: 'Thickness', range: 'Graded', preferred: 'Uniform per batch', impact: 'Swelling consistency in pretreatment' },
  { param: 'Liming Chemical', range: 'Industrial lime', preferred: 'Controlled pH', impact: 'Safe alkaline hydrolysis' },
  { param: 'Preservation', range: 'Sun-dried', preferred: 'Solar — no chemicals', impact: 'Natural, no preservative residue' },
];

export default function QualityPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <PageHeader 
        label="Industrial Standards"
        title="Technical Specifications"
        description="We understand that industrial raw materials require precision. Our pelts are processed to meet the rigorous chemical requirements of global collagen extraction plants."
      />

      <QualitySpecs />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Master Parameter Table</h2>
            <p className="text-[var(--c-text-secondary)]">Standard reference values for our buffalo limed pelts export cargo.</p>
          </div>

          <div className="overflow-x-auto border border-[var(--c-border)] rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[var(--c-surface)]">
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border-[var(--c-border)]">Parameter</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border(--c-border)]">Acceptable Range</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border-[var(--c-border)]">Preferred Range</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-[var(--c-text-primary)] border-b border-[var(--c-border)]">Industrial Impact</th>
                </tr>
              </thead>
              <tbody>
                {fullSpecs.map((spec, i) => (
                  <tr key={i} className="hover:bg-[var(--c-surface)]/50 transition-colors">
                    <td className="p-6 text-sm font-bold border-b border-[var(--c-border)] text-[var(--c-text-primary)]">{spec.param}</td>
                    <td className="p-6 text-sm border-b border-[var(--c-border)] font-mono">{spec.range}</td>
                    <td className="p-6 text-sm border-b border-[var(--c-border)] font-mono font-bold text-[var(--c-primary)]">{spec.preferred}</td>
                    <td className="p-6 text-sm border-b border-[var(--c-border)] text-[var(--c-text-secondary)]">{spec.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--c-surface)]">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Lab Verification & Sampling</h2>
                <div className="space-y-6 text-lg text-[var(--c-text-secondary)]">
                   <p>
                      Aroon Blossom Impex provides batch-wise lab analysis reports on request. We work with accredited third-party laboratories to verify all critical chemical parameters before cargo loading.
                   </p>
                   <ul className="space-y-4">
                      {[
                        'Representative samples sent for pre-approval',
                        'Third-party health certificate per consignment',
                        'Moisture and pH certificates',
                        'Consistent grade segregation'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-[var(--c-text-primary)]">
                           <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-[var(--c-border)]">
                 <h4 className="text-xl font-bold mb-6">Request Technical Specs</h4>
                 <p className="text-sm text-[var(--c-text-secondary)] mb-8">Download our detailed PDF specification sheet for your technical procurement team.</p>
                 <a href="/downloads/product-specs.pdf" download className="btn-primary w-full text-center">
                    Download Full Spec Sheet (PDF)
                 </a>
              </div>
           </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
