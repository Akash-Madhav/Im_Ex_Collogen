import HeroSection from '@/components/home/HeroSection';
import BrandRefinement from '@/components/home/BrandRefinement';
import GlobalReach from '@/components/home/GlobalReach';
import InquiryCTA from '@/components/home/InquiryCTA';
import { ScrollSection } from '@/components/shared/ScrollSection';

/**
 * IndoPelts - Home Page
 * Standardized to 4-section architecture for luxury focus.
 */
export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <ScrollSection delay={0.2}>
        <HeroSection />
      </ScrollSection>

      {/* SECTION 2: BRAND & QUALITY */}
      <ScrollSection>
        <BrandRefinement />
      </ScrollSection>

      {/* SECTION 3: SECTORS & GLOBAL REACH */}
      <ScrollSection>
        <GlobalReach />
      </ScrollSection>

      {/* SECTION 4: CONVERSION */}
      <ScrollSection>
        <InquiryCTA />
      </ScrollSection>
    </>
  );
}
