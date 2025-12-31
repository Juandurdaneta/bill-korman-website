'use client';

import { motion } from 'framer-motion';
import { Check, Users, Video, MessageSquare, FileText, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FunnelCTA from '@/components/funnel/FunnelCTA';
import UrgencyBanner from '@/components/funnel/UrgencyBanner';

const features = [
  { icon: Calendar, title: '90-Day Accelerator Roadmap', desc: 'Your custom game plan, tailored to your business model, bottlenecks, and goals.' },
  { icon: Video, title: 'Weekly Coaching Calls (Live With Bill)', desc: 'Tactical strategy sessions where we rip apart your calendar, revenue systems, and energy flow. Together.' },
  { icon: Users, title: 'Ongoing Community Support', desc: 'Get feedback, ideas, and accountability from others running real businesses.' },
  { icon: MessageSquare, title: 'Peer Accountability & Hot Seats', desc: "Weekly hot seats = YOUR business in focus. You'll get direct coaching on what's keeping you stuck." },
  { icon: Users, title: 'Access to Private Community', desc: 'Connect with an exclusive group of other founders mastering time ownership.' },
  { icon: FileText, title: 'Built For Real Implementation', desc: "The whole point is to get this DONE. No passive consumption. This is a 90-day sprint to rebuild your operating system." },
];

const includes = [
  '8 Core Modules',
  'Weekly Live Coaching Calls With Bill',
  'Private Community Access',
  'Complete Resource Library',
  'Integration Workbook',
  'Quarterly Planning Framework',
];

export default function MasteryUpsellPage() {
  const router = useRouter();

  const handleAccept = (plan: 'full' | 'payments') => {
    // Go to workshop upsell
    router.push('/free-book/workshop');
  };

  const handleDecline = () => {
    // Go to downsell (on-demand course)
    router.push('/free-book/course');
  };

  return (
    <div className="min-h-screen bg-black">
      <UrgencyBanner
        message="ONE-TIME OFFER - Ready to Scale Faster?"
        variant="info"
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
              You've got the playbook. You've got the vision.
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Now It's Time To Execute With{' '}
              <span className="text-primary-400">Expert Coaching</span> And{' '}
              <span className="text-accent-400">Peer Accountability</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-4">Welcome to:</p>

            <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Time Ownership Accelerator
              </h2>
              <p className="text-lg text-neutral-300 mb-4">Group Coaching Program</p>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>Built for entrepreneurs doing $250K–$2M who want systems, speed, and scalability</li>
                <li>Designed around The 168 Game framework, implemented in real time</li>
                <li className="text-accent-400 font-semibold">Limited to only 5 entrepreneurs per cohort</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              "I Just Need a System That Actually Works…"
            </h2>

            <p className="text-neutral-300 mb-4">
              That's what we hear from entrepreneurs every day.
            </p>
            <p className="text-neutral-300 mb-4">
              You've got the talent. You've built momentum.
            </p>
            <p className="text-white font-semibold text-lg mb-6">
              But what you don't have is <span className="text-accent-400">freedom</span>.
            </p>
            <p className="text-neutral-300 mb-4">
              A way to consistently scale without burning out.
            </p>
            <p className="text-neutral-300 mb-8">
              A system for aligning your time with revenue, results, and real life.
            </p>
            <p className="text-white font-semibold text-xl">
              The Time Ownership Accelerator is exactly that.
            </p>
            <p className="text-accent-400 mt-4">
              This is coaching for entrepreneurs who are done doing it all and ready to buy back their time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              What's Included In The Time Ownership Accelerator:
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-neutral-400">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              One Playbook. One Group. 90 Days Roadmap.
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-accent-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">One-Time Payment</h3>
                <div className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  $7,500
                </div>
                <FunnelCTA onClick={() => handleAccept('full')} variant="primary" size="lg" className="w-full">
                  Yes! Add This To My Order
                </FunnelCTA>
              </div>

              <div className="bg-accent-500/10 border border-accent-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">3 Monthly Payments</h3>
                <div className="text-4xl font-bold text-accent-400 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  $2,667
                </div>
                <FunnelCTA onClick={() => handleAccept('payments')} variant="accent" size="lg" className="w-full">
                  Start Today - 3 Payments
                </FunnelCTA>
              </div>
            </div>

            <p className="text-neutral-400 text-sm mb-8">
              You've got 90 days. We'll give you everything. Strategy. Structure. Support.
              If you show up, do the work, and don't see traction? Let us know within 30 days
              and we'll refund you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Urgency */}
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
              Once you leave this page, this price is gone. Forever.
            </p>
            <p className="text-white font-semibold mb-8">
              You'll never see the Time Ownership Mastery Course at this price again.
            </p>

            <p className="text-neutral-400 mb-8">
              Make your choice now:
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <FunnelCTA onClick={() => handleAccept('full')} variant="primary" size="lg">
                Add To My Order - $7,500
              </FunnelCTA>
              <FunnelCTA onClick={() => handleAccept('payments')} variant="accent" size="lg">
                Split Into 3 Payments of $2,667
              </FunnelCTA>
            </div>

            <button
              onClick={handleDecline}
              className="text-neutral-500 hover:text-neutral-400 text-sm underline transition-colors"
            >
              No thanks, I'll pass on this offer
            </button>

            <p className="text-xs text-neutral-600 mt-6">
              30-day money-back guarantee. Lifetime access. This offer expires the moment you leave this page.
            </p>
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
