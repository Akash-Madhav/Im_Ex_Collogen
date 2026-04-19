import PageHero from '@/components/sections/PageHero';
import HeritageNarrative from '@/components/sections/HeritageNarrative';
import InfrastructureShowcase from '@/components/sections/InfrastructureShowcase';
import SustainabilitySection from '@/components/sections/SustainabilitySection';
import CertificationsSection from '@/components/sections/CertificationsSection';

export default function AboutClient() {
  return (
    <div className="flex flex-col">
      <PageHero 
        label="Our Heritage"
        title="Industrial Precision. Global Reliability."
        subtitle="Establishing the global benchmark for buffalo limed pelts through decades of expertise and sustainable processing."
        image="/images/drying_yard.png"
      />
      <HeritageNarrative />
      <InfrastructureShowcase />
      <SustainabilitySection />
      <CertificationsSection />
    </div>
  );
}
