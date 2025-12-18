'use client';

import { motion } from 'framer-motion';
import { Users, Heart, DollarSign, Compass } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import SpotlightCard from '../ui/SpotlightCard';

const pillars = [
  {
    icon: Users,
    number: '01',
    title: 'Family Focus',
    subtitle: 'Pillar 1',
    description: 'You can\'t lead your family (or your life) if you\'re constantly distracted, unavailable, or unaware of where your time actually goes. We track every hour so you can align your calendar with what matters most — like presence at home, dinner with your kids, or simply being off without guilt.',
    color: '#85c1e9',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Foundational Faith',
    subtitle: 'Pillar 2',
    description: 'Your highest energy is your most sacred resource, and how you use it reflects your values. We map your peak performance windows and align them with your mission-critical work. So you\'re not giving your best self to your inbox and your leftovers to your purpose.',
    color: '#7ED321',
  },
  {
    icon: DollarSign,
    number: '03',
    title: 'Financial Forensics',
    subtitle: 'Pillar 3',
    description: 'We don\'t just track time. We track return on time. We dissect your week to find what activities actually generate revenue, and cut everything else. You\'ll discover exactly where income is created (and where it\'s leaking).',
    color: '#85c1e9',
  },
  {
    icon: Compass,
    number: '04',
    title: 'Vitality Framework',
    subtitle: 'Pillar 4',
    description: 'You wouldn\'t go to the gym without a plan. Why build a business without one for your time? We design your entire 168-hour week like a training regimen — optimized for performance, recovery, and sustainability.',
    color: '#7ED321',
  },
];

export default function TheSystem() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle architectural grid background */}
      <div className="absolute inset-0">
        {/* Base gradient - warm undertone */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Soft accent glow - top left (warm amber) */}
        <div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(217,167,103,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Soft accent glow - bottom right (warm terracotta) */}
        <div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(183,121,96,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
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
            I created The 168 Game after 20 years as a Navy Chief Officer and building multiple 7-figure businesses.
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
            This is the system I use daily. It&apos;s what I&apos;ve taught to <span className="text-[#7ED321] font-semibold">10,000+ entrepreneurs</span> who&apos;ve
            reclaimed thousands of hours and scaled past ceilings they thought were permanent.
          </p>
          <p className="text-[#888888] text-base">
            The Time Ownership Playbook gives you the complete foundation. Everything you need to start implementing this week.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
