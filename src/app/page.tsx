import Hero from '@/components/sections/Hero';
import CertificationsSection from '@/components/sections/CertificationsSection';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import ProductsSection from '@/components/sections/ProductsSection';
import QualitySpecs from '@/components/sections/QualitySpecs';
import ProcessFlow from '@/components/sections/ProcessFlow';
import ExportCapability from '@/components/sections/ExportCapability';
import FactoryGallery from '@/components/sections/FactoryGallery';
import SustainabilitySection from '@/components/sections/SustainabilitySection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FinalCTA from '@/components/sections/FinalCTA';
import InquiryForm from '@/components/sections/InquiryForm';
import SectionSnapper from '@/components/animations/SectionSnapper';

/**
 * Aroon Blossom Impex - Homepage
 * B2B Export Lead Generation Platform
 */
export default function Home() {
  return (
    <div className="snap-container">
      <SectionSnapper />
      <Hero />
      <CertificationsSection />
      <AboutSnapshot />
      <ProductsSection />
      <QualitySpecs />
      <ProcessFlow />
      <ExportCapability />
      <FactoryGallery />
      <SustainabilitySection />
      <WhyChooseUs />
      <FinalCTA />
      <InquiryForm />
    </div>
  );
}
