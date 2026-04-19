import PageHero from '@/components/sections/PageHero';
import ExportCapability from '@/components/sections/ExportCapability';
import LogisticsLoadDetails from '@/components/sections/LogisticsLoadDetails';
import GlobalMarketDocumentation from '@/components/sections/GlobalMarketDocumentation';

export default function ExportPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        label="Logistics & Supply Chain"
        title="Global Export & Logistics Capability"
        subtitle="Serving the global collagen and pet food industries with efficient logistics, reliable container supply, and 100% documentation compliance."
        image="/images/drying_yard.png"
      />
      <ExportCapability />
      <LogisticsLoadDetails />
      <GlobalMarketDocumentation />
    </div>
  );
}
