'use client';

import { motion } from 'framer-motion';
import { Check, X, Clock, Shield, Star, BookOpen } from 'lucide-react';
import Image from 'next/image';
import BookPreview from '@/components/funnel/BookPreview';
import FunnelCTA from '@/components/funnel/FunnelCTA';
import FunnelFAQ from '@/components/funnel/FunnelFAQ';
import GlowingOrb from '@/components/ui/GlowingOrb';

const chapters = [
  { number: 1, title: 'Discover why productivity hacks fail and what actually creates leverage' },
  { number: 2, title: 'The complete system for designing your week like a portfolio' },
  { number: 3, title: 'Track where your hours actually go and identify your biggest leaks' },
  { number: 4, title: 'Match your best work to your best energy states' },
  { number: 5, title: 'Find the 20% of activities driving 80% of your income' },
  { number: 6, title: 'Know exactly what to say yes to and what to eliminate' },
  { number: 7, title: 'Build teams that execute without you being the bottleneck' },
  { number: 8, title: 'Implementation blueprint you can use immediately' },
  { number: 9, title: 'How to maintain the system as you grow' },
  { number: 10, title: 'Building a business that gives you freedom, not burnout' },
];

const faqItems = [
  {
    question: '"Is this really free?"',
    answer: 'Yes. The book is free. You just cover the $5.95 shipping and handling to get it delivered to your door.',
  },
  {
    question: '"Is this a physical book or digital?"',
    answer: "Physical book shipped to you. You'll also get instant digital access while you wait for shipping.",
  },
  {
    question: '"How long does shipping take?"',
    answer: 'US orders typically arrive within 7-10 business days. International takes 2-3 weeks.',
  },
  {
    question: '"Will I be charged for anything else?"',
    answer: 'No. $5.95 shipping is the only charge. No hidden fees. No subscriptions.',
  },
  {
    question: '"What if I don\'t like it?"',
    answer: 'Send it back within 30 days for a full refund of your shipping cost. Keep the digital version.',
  },
];

export default function FreeBookPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <GlowingOrb color="#3498db" size={800} className="absolute -top-64 -right-64 opacity-40" blur={150} />
        <GlowingOrb color="#7ED321" size={600} className="absolute top-1/3 -left-64 opacity-30" blur={120} />
        <GlowingOrb color="#f1c40f" size={400} className="absolute bottom-0 right-1/4 opacity-20" blur={100} />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(52,152,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,152,219,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 min-h-[90vh] flex items-center">
        {/* Gradient overlays for hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-accent-900/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-accent-900/20 pointer-events-none" />

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-500/20 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-accent-500/10 border border-accent-500/40 mb-6 shadow-lg shadow-accent-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse shadow-lg shadow-accent-400/50" />
                <span className="text-accent-400 text-sm font-semibold">FREE + $5.95 Shipping</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span className="text-white">The Proven System </span>
                <span style={{ background: 'linear-gradient(90deg, #7ED321, #98DC4D, #5BA60B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>1000+ Entrepreneurs</span>
                <span className="text-white"> Use To Break Through Revenue Ceilings </span>
                <span style={{ background: 'linear-gradient(90deg, #3498db, #5dade2, #1a6fa3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>While Working Less</span>
              </h1>

              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Get your <span className="text-accent-400 font-bold">FREE</span> copy of{' '}
                <em className="text-white font-medium">The 168 Game: Time Ownership vs. Time Management</em> (just cover $5.95 shipping)
                and discover the exact framework that took Bill Korman from bankruptcy to building
                multiple 7-figure businesses, without working 80-hour weeks.
              </p>

              <FunnelCTA href="/free-book/checkout" size="xl" className="mb-8">
                Yes! Send Me The Book (Just Pay Shipping)
              </FunnelCTA>

              {/* Trust Signals */}
              <div className="space-y-4">
                <blockquote className="text-neutral-300 italic border-l-4 border-gradient-to-b from-primary-500 to-primary-400 pl-4 bg-gradient-to-r from-primary-500/10 to-transparent py-3 pr-4 rounded-r-lg">
                  "Time ownership—not just management—is a true driver of success."
                  <footer className="text-sm text-primary-400 mt-2 not-italic font-semibold">
                    — Patrick Bet-David, Entrepreneur & Founder of Valuetainment
                  </footer>
                </blockquote>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500/20 to-gold-500/10 border border-gold-500/30 text-gold-400 font-medium shadow-lg shadow-gold-500/5">
                    <Star className="w-4 h-4 fill-gold-400" />
                    1000+ entrepreneurs coached
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-accent-500/10 border border-accent-500/30 text-accent-400 font-medium shadow-lg shadow-accent-500/5">
                    <Star className="w-4 h-4 fill-accent-400" />
                    $50M+ client revenue scaled
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-500/10 border border-primary-500/30 text-primary-400 font-medium shadow-lg shadow-primary-500/5">
                    <Star className="w-4 h-4 fill-primary-400" />
                    2,000+ hours reclaimed
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Book */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center order-1 md:order-2 py-8 md:py-0"
            >
              <BookPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute -right-32 top-1/3 w-64 h-64 bg-red-500/10 blur-3xl rounded-full" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-white">You're Working 60+ Hour Weeks. </span>
              <span className="text-red-400">Your Revenue Won't Budge.</span>
              <span className="text-white"> And You're One Breakdown Away From </span>
              <span className="text-red-400">Losing Everything That Matters.</span>
            </h2>

            <p className="text-xl text-neutral-300 text-center mb-12">
              You didn't escape the 9-to-5 just to work around the clock for yourself.
            </p>

            <div className="text-lg text-neutral-400 space-y-4">
              <p className="text-neutral-300">But here you are:</p>
              <ul className="space-y-4">
                {[
                  'Your calendar is hijacked before 9 AM. Back-to-back meetings eat 70% of your day.',
                  'That strategic project that could 3x your business? Still sitting in your notes from six months ago.',
                  "You're making money, but you're exhausted. Your partner is tired of being second priority.",
                  'Your health is declining. Your kids are growing up while you\'re "building."',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-neutral-900/80 to-neutral-900/50 border border-neutral-800">
                <p className="text-white font-semibold text-xl mb-3">
                  You know you're capable of more. But you don't have a system.
                </p>
                <p className="text-neutral-300 mb-4">
                  And without a system, you're just guessing. Reacting. Spinning.
                </p>
                <p className="text-xl font-bold" style={{ color: '#7ED321' }}>
                  The breakthrough isn't working more hours. It's architecting the 168 you already have.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        <div className="absolute -right-48 top-1/4 w-96 h-96 bg-accent-500/10 blur-3xl rounded-full" />
        <div className="absolute -left-48 bottom-1/4 w-96 h-96 bg-primary-500/10 blur-3xl rounded-full" />

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-white">What If You Had The Exact Framework To Design Your </span>
              <span style={{ color: '#7ED321' }}>168 Hours</span>
              <span className="text-white"> Like a </span>
              <span style={{ color: '#3498db' }}>7-Figure CEO?</span>
            </h2>

            <p className="text-xl text-neutral-300 text-center mb-4">
              <em className="text-white">The 168 Game</em> isn't another productivity book full of morning routines and motivational fluff.
            </p>
            <p className="text-2xl text-white font-semibold text-center mb-12">
              It's a <span style={{ color: '#7ED321' }}>complete operating system</span> for time ownership.
            </p>

            <div className="bg-gradient-to-br from-neutral-900/80 via-neutral-900/50 to-neutral-900/80 border border-neutral-700/50 rounded-2xl p-8 mb-12 shadow-2xl shadow-accent-500/5">
              <p className="text-neutral-300 mb-6">
                Written by Bill Korman, a retired Navy Chief Petty Officer, serial entrepreneur, and the guy who
                went from bankruptcy to running multiple businesses simultaneously. This book reveals the exact
                framework he uses to operate at peak performance without burning out.
              </p>

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent-400" />
                Inside, you'll discover:
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'The 168-Hour Audit Process', desc: 'Track where your time actually goes versus where you think it goes (most entrepreneurs waste 15-20 hours per week without realizing it)' },
                  { title: 'Energy Mapping Method', desc: 'Identify your peak performance windows and stop wasting them on email and admin work' },
                  { title: 'Revenue Forensics Framework', desc: 'Discover which 20% of your activities drive 80% of your income' },
                  { title: 'The Priority Decision Matrix', desc: "Know exactly what deserves your time and what's killing your capacity to scale" },
                  { title: 'Delegation System That Actually Works', desc: 'Stop being the bottleneck. Build teams that execute without you micromanaging' },
                  { title: 'The CEO Time Architecture Blueprint', desc: "Bill's personal structure for running multiple 7-figure businesses in under 40 hours per week" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-accent-500/5 border border-accent-500/20 hover:border-accent-500/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-500/30 to-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-400" />
                    </div>
                    <div>
                      <span className="text-accent-400 font-semibold">{item.title}</span>
                      <span className="text-neutral-400 text-sm block mt-1">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-xl text-center text-white font-semibold mb-8">
              This is the system that saved Bill's business and his life. <span className="text-accent-400">And it can do the same for you.</span>
            </p>

            <div className="text-center">
              <FunnelCTA href="/free-book/checkout" size="xl">
                Yes! Send Me The Book (Just Pay $5.95 Shipping)
              </FunnelCTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not For Everyone Section */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/30 via-transparent to-accent-500/30" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/10 blur-3xl rounded-full" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-white">This Book </span>
              <span className="text-red-400">Isn't For Everyone</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* NOT for you */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-500/15 to-red-500/5 border border-red-500/30 rounded-xl p-6 shadow-xl shadow-red-500/5"
              >
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  This is NOT for you if:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You're still in love with the grind and think 80-hour weeks are a badge of honor",
                    "You want quick hacks instead of real systems",
                    "You're not willing to make hard decisions about where your time goes",
                    "You're looking for motivation instead of frameworks",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-300">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* IS for you */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent-500/15 to-accent-500/5 border border-accent-500/30 rounded-xl p-6 shadow-xl shadow-accent-500/5"
              >
                <h3 className="text-xl font-bold text-accent-400 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  This IS for you if:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You've already built something real but hit a ceiling you can't break through",
                    "You're working harder than ever with less to show for it",
                    "You know you need a system but don't have time to figure it out through trial and error",
                    'You value freedom and impact over "looking busy"',
                    "You're ready to take back ownership of your 168 hours before you lose what matters most",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-300">
                      <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent-400" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              About The Author
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo placeholder */}
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex-shrink-0 overflow-hidden">
                <Image
                  src="https://assets.cdn.filesafe.space/Q5OlsJVagIkFLNDXxRcC/media/67523d929a46ab16c312b679.png"
                  alt="Bill Korman"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-neutral-300 space-y-4">
                <p>
                  <span className="text-white font-semibold">Bill Korman</span> is a retired US Navy Chief Petty Officer
                  with 20 years of service, serial entrepreneur, and founder of The 168 Game Framework.
                </p>
                <p className="text-white font-semibold text-lg">He's been where you are.</p>
                <p>
                  After leaving the military, Bill faced bankruptcy. He was working 80-hour weeks, drowning in
                  reactivity, and had nothing to show for it except exhaustion and debt.
                </p>
                <p className="text-white font-semibold text-lg">Then he figured out the system.</p>
                <p>
                  By applying military discipline to entrepreneurial chaos, Bill created The 168 Game—a complete
                  framework for time ownership that took him from rock bottom to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Top performer at Patrick Bet-David's PHP Agency",
                    "Managing one of the company's most prominent offices (760+ agents)",
                    "Founder/CEO of multiple 7-figure businesses running simultaneously",
                    "Author and creator of The 168 Game",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white font-semibold pt-4">
                  Bill doesn't teach theory. He teaches what works when you're actually building something real.
                </p>
                <p className="text-accent-400 font-semibold text-lg">
                  And now, he's giving you the playbook—for free.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <FunnelCTA href="/free-book/checkout" size="xl">
                Claim My Free Copy Now (Just Pay Shipping)
              </FunnelCTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <div className="absolute -left-48 top-1/3 w-96 h-96 bg-primary-500/10 blur-3xl rounded-full" />
        <div className="absolute -right-48 bottom-1/3 w-96 h-96 bg-accent-500/10 blur-3xl rounded-full" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-white">Here's Exactly </span>
              <span style={{ color: '#7ED321' }}>What You're Getting:</span>
            </h2>
            <p className="text-center text-neutral-400 mb-12">
              <span className="text-primary-400 font-semibold">10 chapters</span> of actionable frameworks
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {chapters.map((chapter) => (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: chapter.number * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-neutral-900/80 to-neutral-900/40 rounded-lg border border-neutral-800 hover:border-primary-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary-500/50 group-hover:to-primary-500/20 transition-colors">
                    <span className="text-primary-400 font-bold">{chapter.number}</span>
                  </div>
                  <p className="text-neutral-300 text-sm">{chapter.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <FunnelCTA href="/free-book/checkout" size="xl">
                Send Me The Book (Just Cover $5.95 Shipping)
              </FunnelCTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Deal Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        <div className="absolute -right-48 top-1/4 w-96 h-96 bg-gold-500/10 blur-3xl rounded-full" />
        <div className="absolute -left-48 bottom-1/4 w-96 h-96 bg-accent-500/10 blur-3xl rounded-full" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#f1c40f' }}>
              Here's The Deal:
            </h2>

            <p className="text-xl text-neutral-300 mb-4">
              Normally, this book sells for <span className="line-through text-neutral-500">$20</span>.
            </p>
            <p className="text-3xl text-white font-bold mb-6">
              But today, you're getting it <span style={{ color: '#7ED321' }}>FREE.</span>
            </p>
            <p className="text-lg text-neutral-300 mb-8">
              Just cover the <span className="text-gold-400 font-semibold">$5.95</span> shipping and handling, and I'll rush you a physical copy of{' '}
              <em className="text-white">The 168 Game</em>.
            </p>

            <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-700/50 rounded-xl p-6 mb-8 text-left shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Why am I doing this?</h3>
              <p className="text-neutral-300 mb-4">
                Because I know once you read this book and implement the framework, you'll see results.
              </p>
              <p className="text-white font-semibold">
                This isn't a gimmick. It's the real system I use every day.
              </p>
              <p className="text-accent-400 mt-2 font-semibold">And I want you to have it.</p>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-br from-accent-500/20 to-accent-500/5 border border-accent-500/40 rounded-xl p-6 mb-8 shadow-xl shadow-accent-500/5">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#7ED321' }}>GUARANTEE</h3>
              </div>
              <p className="text-neutral-300">
                <span className="text-white font-semibold">If you don't love the book, send it back within 30 days
                for a full refund of your shipping cost.</span> No questions asked.
              </p>
              <p className="text-accent-400 font-bold mt-4 text-lg">You literally risk nothing.</p>
            </div>

            <FunnelCTA href="/free-book/checkout" size="xl">
              Yes! Send Me The Book Now
            </FunnelCTA>
          </motion.div>
        </div>
      </section>

      {/* Limited Offer Warning */}
      <section className="relative py-16 bg-red-500/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Fair Warning: We're Limiting This Offer
              </h2>
            </div>

            <p className="text-lg text-neutral-300 mb-4">
              We're only offering the free+shipping deal for the{' '}
              <span className="text-white font-bold">first 300 copies</span>.
            </p>
            <p className="text-neutral-400 mb-4">
              After that, the book goes back to full retail price ($20).
            </p>

            <p className="text-sm text-neutral-500 mb-6">
              <strong className="text-neutral-300">Why the limit?</strong> Because shipping physical books at
              this price is expensive. We're taking a loss on every copy to get this framework into the hands
              of entrepreneurs who need it most.
            </p>

            <p className="text-white font-semibold mb-6">
              Once we hit 300, the offer disappears.
            </p>
            <p className="text-accent-400 font-bold text-lg mb-6">
              Don't wait. Claim your copy now.
            </p>

            <FunnelCTA href="/free-book/checkout" size="xl">
              Lock In My Free Copy Before They're Gone
            </FunnelCTA>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Frequently Asked Questions
            </h2>

            <FunnelFAQ items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-red-400">Stop Losing Time.</span>{' '}
              <span className="text-accent-400">Start Building Leverage.</span>
            </h2>

            <p className="text-lg text-neutral-300 mb-6">
              Every week you operate without a system is another week of:
            </p>

            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              {[
                'Peak energy hours wasted on low-value work',
                "Revenue left on the table because you don't have capacity",
                "Relationships deteriorating because you're never fully present",
                'Health declining from chronic stress',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-400">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-white font-semibold text-lg mb-4">
              You can't get this time back. But you can change what happens next.
            </p>

            <p className="text-neutral-300 mb-8">
              Claim your free copy of <em>The 168 Game</em> right now.<br />
              Just cover $5.95 shipping and it's yours.
            </p>

            <FunnelCTA href="/free-book/checkout" size="xl" className="mb-8">
              Send Me The Book (Just Pay Shipping)
            </FunnelCTA>

            {/* Footer reminder */}
            <p className="text-sm text-neutral-500">
              <span className="text-neutral-400 font-semibold">Still on the fence?</span> Remember: You risk nothing.
              If you don't love the book, send it back within 30 days for a full refund. You cannot lose.
            </p>

            <div className="mt-8">
              <FunnelCTA href="/free-book/checkout" variant="primary" size="lg">
                Yes, Send Me The Book Now
              </FunnelCTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Bill Korman. All rights reserved.</p>
          <p className="mt-2">The 168 Game | Time Ownership Framework</p>
        </div>
      </footer>
    </div>
  );
}
