import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Warning from '@/components/sections/Warning';
import TheSystem from '@/components/sections/TheSystem';
import Myths from '@/components/sections/Myths';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WhoIsThisFor from '@/components/sections/WhoIsThisFor';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Warning />
      <TheSystem />
      <Myths />
      <AboutPreview />
      <ServicesPreview />
      <WhoIsThisFor />
      <FinalCTA />
    </>
  );
}
