import HomeHero from '@/components/sections/HomeHero';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import HomeProductsPreview from '@/components/sections/HomeProductsPreview';
import HomeExportSnapshot from '@/components/sections/HomeExportSnapshot';
import SectionSnapper from '@/components/animations/SectionSnapper';

/**
 * Aroon Blossom Impex - Homepage
 * B2B Export Lead Generation Platform
 */
export default function Home() {
  return (
    <div className="snap-container">
      <SectionSnapper />
      <HomeHero />
      <AboutSnapshot />
      <HomeProductsPreview />
      <HomeExportSnapshot />
    </div>
  );
}
