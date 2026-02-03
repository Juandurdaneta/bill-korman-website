'use client';

import { motion } from 'framer-motion';
import { Check, Mail, Truck, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FunnelCTA from '@/components/funnel/FunnelCTA';
import BookPreview from '@/components/funnel/BookPreview';

const nextSteps = [
  { icon: BookOpen, title: 'Download Your Workbook', desc: "Access your Time Ownership Playbook immediately and start implementing the framework today." },
  { icon: Mail, title: 'Check Your Email', desc: "You'll receive a confirmation email with the workbook link and additional resources." },
  { icon: Calendar, title: 'Start Implementing', desc: "Use the templates and worksheets to audit your 168 hours and reclaim 20+ hours this week." },
];

const strategyCallBenefits = [
  'Pinpoint your biggest time leaks + energy drains',
  'Identify the #1 bottleneck holding your business back',
  'Outline a custom roadmap using the 168 framework',
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Success Header */}
      <div className="bg-accent-500 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-black font-bold">
            <Check className="w-6 h-6" />
            <span>Order Confirmed!</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-accent-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Your Workbook Is Ready!
            </h1>

            <p className="text-xl text-accent-400 font-semibold mb-4">
              Your Time Ownership Journey Has Officially Begun.
            </p>

            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              You now have access to the exact framework that's helped 10,000+ entrepreneurs
              reclaim thousands of hours and scale with clarity, not chaos.
            </p>

            {/* Book Preview */}
            <div className="mb-12">
              <BookPreview className="scale-75" />
            </div>

            <p className="text-white font-semibold text-lg mb-4">
              You've already done what most business owners never do:
            </p>
            <p className="text-accent-400 font-semibold text-xl">
              Taking real action to take back your time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Here's What Happens Next:
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Call CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-500/30 rounded-2xl p-8 text-center">
              <p className="text-neutral-400 mb-4">Now, let's make sure you use it wisely.</p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Reading the book is powerful.{' '}
                <span className="text-accent-400">But real transformation starts with implementation.</span>
              </h2>

              <p className="text-neutral-300 mb-8">
                If you're serious about reclaiming 20+ hours per week, breaking through your next revenue ceiling,
                and designing a business that actually supports your life...
              </p>

              <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Access Your Time Ownership Playbook
                </h3>

                <p className="text-neutral-400 mb-4">Inside your workbook, you'll find:</p>

                <ul className="space-y-3 text-left max-w-md mx-auto mb-6">
                  {strategyCallBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-neutral-400">
                    <span className="text-white font-semibold">Start implementing today.</span>{' '}
                    This workbook contains the exact templates and frameworks Bill uses with his clients to reclaim 20+ hours per week.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span>Instant access - Download and start using it right now</span>
                </div>

                <FunnelCTA
                  href="https://drive.google.com/file/d/1zDGMujgltYZzmibjtvHOLYROKualy11c/view?usp=sharing"
                  size="xl"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Your Free Workbook Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FunnelCTA>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Order Summary */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-center text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              What You're Getting
            </h2>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary-400" />
                    <span className="text-white">The Time Ownership Playbook (Digital)</span>
                  </div>
                  <span className="text-accent-400 font-semibold">FREE</span>
                </div>

                <div className="flex items-center justify-between text-neutral-400">
                  <span>Value</span>
                  <span className="text-gold-400 font-semibold">$497</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-lg">
                  <span className="text-white font-bold">Your Investment</span>
                  <span className="text-accent-400 font-bold">$0.00</span>
                </div>
              </div>

              <p className="text-sm text-neutral-500 mt-6 text-center">
                Instant digital access - no shipping required
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Community */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              You're Now Part of The 168 Game Community
            </h2>

            <p className="text-neutral-300 mb-8">
              Join thousands of entrepreneurs who are mastering time ownership and building businesses
              that give them freedom, not burnout.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-400" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>10,000+</div>
                <div className="text-sm text-neutral-500">Books Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>1,000+</div>
                <div className="text-sm text-neutral-500">Entrepreneurs Coached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>$50M+</div>
                <div className="text-sm text-neutral-500">Client Revenue Scaled</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-accent-500/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-neutral-300 mb-4">
              To your time, your mission, and your next level,
            </p>
            <p className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              - Bill Korman
            </p>
            <p className="text-neutral-500">
              Creator of The 168 Game<br />
              CEO, Built For Life Financial Agency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-neutral-600 mb-4">
            &copy; {new Date().getFullYear()} Bill Korman. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700">
            The 168 Game | Time Ownership Framework
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-neutral-600">
            <Link href="/" className="hover:text-neutral-400 transition-colors">
              Main Website
            </Link>
            <span>|</span>
            <Link href="/about" className="hover:text-neutral-400 transition-colors">
              About Bill
            </Link>
            <span>|</span>
            <Link href="/services" className="hover:text-neutral-400 transition-colors">
              Coaching Services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
