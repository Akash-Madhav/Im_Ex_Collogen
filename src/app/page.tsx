import HeroSection from '@/components/home/HeroSection';
import AboutSnapshot from '@/components/home/AboutSnapshot';
import ApplicationsGrid from '@/components/home/ApplicationsGrid';
import QualityPillars from '@/components/home/QualityPillars';
import ExportMarkets from '@/components/home/ExportMarkets';
import InquiryCTA from '@/components/home/InquiryCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <ApplicationsGrid />
      <QualityPillars />
      <ExportMarkets />
      <InquiryCTA />
    </>
  );
}
