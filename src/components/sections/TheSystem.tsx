'use client';

import { motion } from 'framer-motion';
import { Users, Heart, DollarSign, Compass } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import SpotlightCard from '../ui/SpotlightCard';
import GlowingOrb from '../ui/GlowingOrb';
import FloatingParticles from '../ui/FloatingParticles';

const pillars = [
  {
    icon: Users,
    number: '01',
    title: 'Complete Visibility',
    subtitle: 'Family',
    description: 'You can\'t fix what you can\'t see. We track every hour to find where time actually goes versus where you think it goes. The gap is usually shocking.',
    color: '#85c1e9',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Energy Mapping',
    subtitle: 'Faith',
    description: 'Not all hours are equal. We identify when you\'re at peak performance and when you\'re running on fumes, then design your week accordingly.',
    color: '#2ecc71',
  },
  {
    icon: DollarSign,
    number: '03',
    title: 'Revenue Forensics',
    subtitle: 'Finance',
    description: 'We analyze which activities directly generate income and which ones just feel important. Then we eliminate the waste ruthlessly.',
    color: '#85c1e9',
  },
  {
    icon: Compass,
    number: '04',
    title: 'Strategic Architecture',
    subtitle: 'Fitness',
    description: 'We rebuild your entire 168-hour week around what actually creates revenue, impact, and the freedom you started this for.',
    color: '#2ecc71',
  },
];

export default function TheSystem() {
  return (
    <section className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <FloatingParticles count={30} speed={0.2} />
        <GlowingOrb color="#3498db" size={500} className="top-1/4 left-0" delay={0} />
        <GlowingOrb color="#2ecc71" size={400} className="bottom-1/4 right-0" delay={1.5} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The Framework"
          title="The System That Changes Everything"
          subtitle="This isn't time management. It's time ownership. Built on four pillars that transform how you operate."
          animateTitle
        />

        {/* Introduction */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#aaaaaa] text-lg leading-relaxed">
            Bill created The 168 Game after 20 years as a Navy Chief Officer and building multiple 7-figure businesses. 
            When you&apos;re running an agency, co-founding multiple ventures, leading teams, and still trying to have a life, 
            you figure out real fast: <span className="text-white font-semibold">Time isn&apos;t the problem. Architecture is.</span>
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <SpotlightCard
                className="h-full"
                spotlightColor={`${pillar.color}20`}
                borderColor="rgba(255, 255, 255, 0.05)"
              >
                <div className="relative p-8 overflow-hidden">
                  {/* Number Background */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-white/[0.03] select-none">
                    {pillar.number}
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${pillar.color}20` }}
                      >
                        <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider" style={{ color: pillar.color }}>
                          {pillar.subtitle}
                        </span>
                        <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                      </div>
                    </div>

                    <p className="text-[#888888] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-[#aaaaaa] text-lg mb-6">
            This is the system Bill uses daily. It&apos;s what he&apos;s taught to <span className="text-[#2ecc71] font-semibold">10,000+ entrepreneurs</span> who&apos;ve 
            reclaimed thousands of hours and scaled past ceilings they thought were permanent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
