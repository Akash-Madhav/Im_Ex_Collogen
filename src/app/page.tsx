import HeroSection from '@/components/home/HeroSection';
import BrandRefinement from '@/components/home/BrandRefinement';
import GlobalReach from '@/components/home/GlobalReach';
import InquiryCTA from '@/components/home/InquiryCTA';

/**
 * IndoPelts - Home Page
 * Standardized to 4-section architecture for luxury focus.
 */
export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: BRAND & QUALITY */}
      <BrandRefinement />

      {/* SECTION 3: SECTORS & GLOBAL REACH */}
      <GlobalReach />

      {/* SECTION 4: CONVERSION */}
      <InquiryCTA />
    </>
  );
}
