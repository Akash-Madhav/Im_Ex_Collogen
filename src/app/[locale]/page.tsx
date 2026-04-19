import HomeHero from '@/components/sections/HomeHero';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import HomeProductsPreview from '@/components/sections/HomeProductsPreview';



/**
 * Aroon Blossom Impex - Homepage
 * B2B Export Lead Generation Platform
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <AboutSnapshot />
      <HomeProductsPreview />

    </div>
  );
}

