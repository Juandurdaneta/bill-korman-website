import { Metadata } from 'next';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutMission from './AboutMission';
import AboutCTA from './AboutCTA';

export const metadata: Metadata = {
  title: 'About Bill Korman | The 168 Game',
  description: 'From bankruptcy to building a time ownership empire. Learn the story of Bill Korman, Navy Veteran, serial entrepreneur, and author of The 168 Game.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutCTA />
    </>
  );
}
