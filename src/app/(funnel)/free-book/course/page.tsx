'use client';

import { motion } from 'framer-motion';
import { Check, Play, FileText, Calculator, Calendar, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FunnelCTA from '@/components/funnel/FunnelCTA';
import UrgencyBanner from '@/components/funnel/UrgencyBanner';

const features = [
  { icon: Play, title: 'The Full 168 Game Framework', desc: 'Delivered in short, actionable video modules—walk through each pillar of time ownership with Bill as your guide.' },
  { icon: FileText, title: 'Step-by-Step Implementation Tools', desc: 'Downloadable templates, worksheets, and tracking systems to install The 168 Game inside your business, calendar, and life.' },
  { icon: Calendar, title: 'The Time Audit Tracker', desc: 'Know exactly where every hour goes.' },
  { icon: Calculator, title: 'Energy Mapping Exercise', desc: 'Identify your peak performance windows.' },
  { icon: Calculator, title: 'Revenue Forensics Calculator', desc: 'Discover which activities actually make you money.' },
  { icon: Calendar, title: 'The 168 Game Week Planner', desc: 'Design your ideal week.' },
  { icon: FileText, title: 'Priority Matrix & Task Filters', desc: 'Know what to say yes to and what to eliminate.' },
  { icon: Users, title: 'Expert Coaching Access (Live Monthly Q&A)', desc: 'Join our private coaching call every month where you can get direct answers to your questions.' },
];

export default function CourseDownsellPage() {
  const router = useRouter();

  const handleAccept = () => {
    // Go to workshop upsell
    router.push('/free-book/workshop');
  };

  const handleDecline = () => {
    // Skip to workshop upsell anyway
    router.push('/free-book/workshop');
  };

  return (
    <div className="min-h-screen bg-black">
      <UrgencyBanner
        message="Hold Up! This Might Be a Better Fit for You"
        variant="info"
        icon="alert"
      />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Get The Complete System. <span className="text-accent-400 whitespace-nowrap">On Your Terms.</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-4">
              You don't need 1:1 coaching. You don't need a group mastermind.
            </p>
            <p className="text-xl text-white font-semibold mb-8">
              You just need the <span className="text-accent-400">exact blueprint</span> to learn on your own terms.
            </p>

            <p className="text-neutral-400 mb-8">Here's EXACTLY what you need.</p>

            <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-2xl p-8 mb-8">
              <p className="text-accent-400 font-semibold text-sm mb-2">EXCLUSIVE EARLY ACCESS</p>
              <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                On-Demand Time Ownership Mastery Course
              </h2>
              <p className="text-neutral-400">
                Your step-by-step, self-guided implementation of The 168 Game framework
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              You've Got the Book. Now Get the Full System That Makes It Work.
            </h2>

            <p className="text-neutral-300 mb-4">
              The book gives you the framework.
            </p>
            <p className="text-neutral-300 mb-4">
              But let's be honest… reading alone doesn't create results.
            </p>
            <p className="text-white font-semibold text-xl mb-8">
              <span className="text-accent-400">Implementation does.</span>
            </p>

            <p className="text-neutral-400">
              Get the exact step-by-step system that's helped 10,000+ entrepreneurs reclaim their time,
              10x their clarity, and scale without sacrificing everything else.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Here's What You'll Get Before Anyone Else Does:
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-neutral-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bonus */}
            <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-6 text-center mb-8">
              <p className="text-gold-400 font-bold mb-2">BONUS: CEO Architecture Blueprint</p>
              <p className="text-neutral-300 text-sm">
                The exact weekly structure Bill uses to run multiple 7-figure businesses in under 40 hours/week.
                Yours free when you enroll today.
              </p>
            </div>
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

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "You're self-motivated and ready to implement on your schedule",
                "You already know the problem. You just want the solution",
                "You've invested in books, but you're ready to build infrastructure",
                "You want to reclaim 20+ hours this week",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-neutral-300">
                  <Check className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="text-center">
              <p className="text-neutral-400 mb-2">Only</p>
              <div className="text-5xl font-bold text-accent-400 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                $497
              </div>

              <FunnelCTA onClick={handleAccept} size="xl" className="w-full max-w-md mx-auto mb-6">
                Yes! Add This To My Order For Only $497
              </FunnelCTA>

              <button
                onClick={handleDecline}
                className="text-neutral-500 hover:text-neutral-400 text-sm underline transition-colors"
              >
                No thanks, I'll figure it out alone
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Push */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              This Is The Most Affordable Way To Implement The 168 Game.
            </h2>

            <p className="text-neutral-300 mb-4">
              You've taken the first step.
            </p>
            <p className="text-neutral-300 mb-8">
              Now get the blueprint that makes it real—without breaking the bank.
            </p>

            <p className="text-white font-semibold text-xl mb-8">
              <span className="text-accent-400">$497</span> gets you everything.
            </p>

            <FunnelCTA onClick={handleAccept} size="xl" className="w-full max-w-md mx-auto mb-6">
              Add To My Order For $497
            </FunnelCTA>

            <button
              onClick={handleDecline}
              className="text-neutral-500 hover:text-neutral-400 text-sm underline transition-colors"
            >
              I'll figure it out alone
            </button>
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
