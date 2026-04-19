import PageHero from '@/components/sections/PageHero';
import QualitySpecs from '@/components/sections/QualitySpecs';
import MasterParameterTable from '@/components/sections/MasterParameterTable';
import LabVerificationProcess from '@/components/sections/LabVerificationProcess';

export default function QualityPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        label="Industrial Standards"
        title="Technical Specifications & Quality Assurance"
        subtitle="We understand that industrial raw materials require precision. Our pelts are processed to meet the rigorous chemical requirements of global collagen extraction plants."
        image="/images/grading_process.png"
      />
      <QualitySpecs />
      <MasterParameterTable />
      <LabVerificationProcess />
    </div>
  );
}
