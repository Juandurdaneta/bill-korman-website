import { Metadata } from 'next';
import ServicesHero from './ServicesHero';
import ServiceComparison from './ServiceComparison';
import CoachingIntensive from './CoachingIntensive';
import CoachingBasic from './CoachingBasic';
import GroupTraining from './GroupTraining';
import OnDemandCourse from './OnDemandCourse';
import FAQ from './FAQ';
import ServicesCTA from './ServicesCTA';

export const metadata: Metadata = {
  title: 'Services | The 168 Game - Bill Korman',
  description: 'Choose your path to mastering your 168 hours. 1:1 coaching, group training, and on-demand courses available.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceComparison />
      <CoachingIntensive />
      <CoachingBasic />
      <GroupTraining />
      <OnDemandCourse />
      <FAQ />
      <ServicesCTA />
    </>
  );
}
