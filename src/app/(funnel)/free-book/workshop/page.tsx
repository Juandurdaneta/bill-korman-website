'use client';

import { motion } from 'framer-motion';
import { Check, Calendar, Users, Video, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FunnelCTA from '@/components/funnel/FunnelCTA';
import UrgencyBanner from '@/components/funnel/UrgencyBanner';

const benefits = [
  { icon: Target, text: 'Map out your entire 2026 goals using the 168 Game framework' },
  { icon: Calendar, text: 'Identify your biggest time leaks heading into the new year' },
  { icon: Target, text: 'Build and sustain your time architecture for the entire year' },
  { icon: Target, text: 'Set your revenue targets and reverse-engineer the hours required' },
  { icon: Users, text: 'Get real-time answers to your specific challenges' },
  { icon: Users, text: 'Network with a community of like-minded entrepreneurs' },
];

export default function WorkshopUpsellPage() {
  const router = useRouter();

  const handleAccept = () => {
    // Go to thank you page
    router.push('/free-book/thank-you');
  };

  const handleDecline = () => {
    // Go to thank you page
    router.push('/free-book/thank-you');
  };

  return (
    <div className="min-h-screen bg-black">
      <UrgencyBanner
        message="FINAL OFFER - One Last Opportunity"
        variant="warning"
        icon="clock"
      />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-accent-400 font-semibold mb-4">
              You made a powerful decision to take the first step to control your time.
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Here's One Final Opportunity To Lock In{' '}
              <span className="text-accent-400">Your New Year Goals</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-8">
              If you're serious about taking your business to the next level,
              the best time to start is <span className="text-white font-semibold">now</span>.
            </p>

            {/* Offer Box */}
            <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/10 border-2 border-gold-500 rounded-2xl p-8 mb-8">
              <p className="text-gold-400 font-bold text-sm mb-2">NEW YEAR TIME AUDIT WORKSHOP</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-neutral-400 text-lg">Just</span>
                <span className="text-5xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>$97</span>
              </div>
              <p className="text-neutral-300">
                Mastering your time is the best decision you will make in 2026.
              </p>
            </div>

            <p className="text-lg text-neutral-300 mb-8">
              Plan your entire 2026 within a live New Year session, joined by entrepreneurs
              ready to dominate their year without any distractions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Video className="w-8 h-8 text-primary-400" />
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Join Bill Live for a 2-Hour Interactive Planning Session
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-neutral-900/50 rounded-lg"
                >
                  <benefit.icon className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-accent-400 font-semibold mb-8">
                Plus you get lifetime recording access to rewatch anytime.
              </p>

              <div className="inline-flex items-center gap-4 text-sm text-neutral-500 mb-8">
                <span>TOTAL VALUE: <span className="line-through">$497</span></span>
                <span className="text-white font-bold">YOUR INVESTMENT TODAY: <span className="text-accent-400">$97</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Most People Start The New Year With Good Intentions.{' '}
              <span className="text-accent-400">You're Going To Start With A System.</span>
            </h2>

            <div className="text-left bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 mb-8">
              <p className="text-neutral-300 mb-4">
                Here's what happens every New Year: You set ambitious goals. Revenue targets.
                Growth plans. Big vision.
              </p>
              <p className="text-red-400 font-semibold mb-4">
                Then you lose momentum.
              </p>
              <p className="text-neutral-400 mb-4">
                No plan for where the hours will come from. No system for protecting focus.
                No framework for saying no to distractions.
              </p>
              <p className="text-neutral-400 mb-4">
                By February, you're back in reactive mode. By March, the goals are forgotten.
              </p>
              <p className="text-white font-semibold text-lg">
                Not this time.
              </p>
            </div>

            <p className="text-neutral-300 mb-8">
              The New Year Time Audit Workshop gives you the exact roadmap to design your entire 2026
              while keeping momentum to ensure you stay committed to your resolutions.
            </p>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-white mb-4">You'll know exactly:</h3>
              <ul className="space-y-2 text-left">
                {[
                  'Where your time is going',
                  "What you're saying yes to (and what you're eliminating)",
                  'How to hit your revenue targets without adding hours',
                  'What your ideal week looks like—and how to protect it',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-accent-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-white font-semibold text-lg mb-8">
              This is how you make 2026 the year everything changes.
            </p>

            <FunnelCTA onClick={handleAccept} size="xl" className="mb-4">
              Yes, I Want To Start 2026 With A Plan - $97
            </FunnelCTA>
          </motion.div>
        </div>
      </section>

      {/* This Is For You */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-center text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              This Is For You If:
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "You're tired of starting every year with goals you never hit",
                "You want a structured plan for 2026 instead of winging it",
                "You want direct guidance on building your time architecture",
                "You're serious about making 2026 your breakthrough year",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-neutral-300">
                  <Check className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-neutral-300 mb-8">
              For <span className="text-accent-400 font-bold">$97</span>, you get the tools + the plan + live guidance.
              <br />
              That's less than what most people waste on productivity apps they never use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red-500/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-red-400 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              This Page Will Not Appear Again
            </h2>

            <p className="text-neutral-300 mb-4">
              Once you leave this page, this offer is gone.
            </p>
            <p className="text-white font-semibold mb-8">
              You'll never see the New Year Time Audit Workshop at $97 again.
            </p>

            <p className="text-neutral-400 mb-8">
              Make your choice now:
            </p>

            <FunnelCTA onClick={handleAccept} size="xl" className="mb-6">
              Add To My Order - $97
            </FunnelCTA>

            <div>
              <button
                onClick={handleDecline}
                className="text-neutral-500 hover:text-neutral-400 text-sm underline transition-colors"
              >
                No thanks, I'll continue to my order summary
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Bill Korman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
