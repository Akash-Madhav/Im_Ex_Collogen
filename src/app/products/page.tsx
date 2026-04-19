import PageHero from '@/components/sections/PageHero';
import ProductsSection from '@/components/sections/ProductsSection';
import SpecificationsMatrix from '@/components/sections/SpecificationsMatrix';


export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        label="Industrial Precision"
        title="Engineered Raw Materials for Global Industry"
        subtitle="Specialized buffalo limed pelts optimized for maximum yield in collagen extraction and pet food manufacturing."
        image="/images/grading_process.png"
      />
      <ProductsSection />
      <SpecificationsMatrix />

    </div>
  );
}
