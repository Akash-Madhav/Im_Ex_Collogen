import AchievementsHero from '@/components/achievements/AchievementsHero';
import MetricsDashboard from '@/components/achievements/MetricsDashboard';
import ProcessFlow from '@/components/achievements/ProcessFlow';
import QualityParameters from '@/components/achievements/QualityParameters';
import InfrastructureCapability from '@/components/achievements/InfrastructureCapability';
import SustainabilitySignal from '@/components/achievements/SustainabilitySignal';

export const metadata = {
  title: 'Achievements & Capabilities | IndoPelts',
  description: 'Industrial metrics, production capacity, and quality parameters of our buffalo dried limed pelts export operation.',
};

export default function AchievementsPage() {
  return (
    <>
      <AchievementsHero />
      <MetricsDashboard />
      <ProcessFlow />
      <QualityParameters />
      <InfrastructureCapability />
      <SustainabilitySignal />
    </>
  );
}
