'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Shield, Star, BookOpen, Loader2, AlertTriangle, Package, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BookPreview from '@/components/funnel/BookPreview';
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
    answer: 'Yes. The Time Ownership Playbook is completely free. No credit card required. Just instant digital access.',
  },
  {
    question: '"Is this a physical workbook or digital?"',
    answer: "It's a digital workbook you can download immediately and use right away. Print it out or work through it digitally—whatever works best for you.",
  },
  {
    question: '"How do I access it?"',
    answer: 'After claiming your copy, you\'ll be redirected to download the workbook instantly. You\'ll also receive an email with the download link.',
  },
  {
    question: '"Will I be charged for anything?"',
    answer: 'No. The workbook is completely free. No hidden fees. No subscriptions. No credit card required.',
  },
  {
    question: '"What if I need help implementing it?"',
    answer: 'The workbook includes step-by-step instructions and templates. If you want personalized guidance, you can book a strategy call with Bill.',
  },
];

// Stock check modal stages
const checkStages = [
  { text: 'Connecting to warehouse...', duration: 800 },
  { text: 'Checking current inventory...', duration: 1200 },
  { text: 'Verifying availability...', duration: 1000 },
  { text: 'Reserving your copy...', duration: 800 },
];

export default function FreeBookPage() {
  const router = useRouter();
  const [stockCount, setStockCount] = useState(47);
  const [showModal, setShowModal] = useState(false);
  const [checkStage, setCheckStage] = useState(0);
  const [checkComplete, setCheckComplete] = useState(false);
  const [justSold, setJustSold] = useState(false);

  // Decrease stock periodically to simulate sales
  useEffect(() => {
    const decreaseStock = () => {
      const randomDelay = Math.random() * 15000 + 10000; // 10-25 seconds

      setTimeout(() => {
        setStockCount(prev => {
          if (prev <= 12) return prev; // Don't go below 12
          const decrease = Math.random() > 0.7 ? 2 : 1;
          return prev - decrease;
        });
        setJustSold(true);
        setTimeout(() => setJustSold(false), 3000);
        decreaseStock();
      }, randomDelay);
    };

    decreaseStock();
  }, []);

  // Handle CTA click - show modal then redirect to workbook
  const handleClaimClick = useCallback(() => {
    setShowModal(true);
    setCheckStage(0);
    setCheckComplete(false);

    // Progress through stages
    let totalDelay = 0;
    checkStages.forEach((stage, index) => {
      totalDelay += stage.duration;
      setTimeout(() => {
        setCheckStage(index + 1);
      }, totalDelay);
    });

    // Complete and redirect to checkout
    setTimeout(() => {
      setCheckComplete(true);
      setTimeout(() => {
        router.push('/free-book/checkout');
      }, 1500);
    }, totalDelay + 500);
  }, [router]);

  // Stock level colors
  const getStockColor = () => {
    if (stockCount <= 20) return 'text-red-400';
    if (stockCount <= 35) return 'text-orange-400';
    return 'text-accent-400';
  };

  const getStockBgColor = () => {
    if (stockCount <= 20) return 'from-red-500';
    if (stockCount <= 35) return 'from-orange-500';
    return 'from-accent-500';
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Stock Check Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 border-2 border-primary-500/50 rounded-2xl p-8 md:p-10 max-w-md mx-4 text-center relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10"
              />

              <div className="relative z-10">
                {!checkComplete ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-16 h-16 mx-auto mb-6"
                    >
                      <Loader2 className="w-16 h-16 text-primary-400" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      CHECKING AVAILABILITY
                    </h3>

                    {/* Progress stages */}
                    <div className="space-y-3 mb-6">
                      {checkStages.map((stage, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: checkStage > index ? 1 : 0.3 }}
                          className="flex items-center gap-3"
                        >
                          {checkStage > index ? (
                            <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-neutral-600 shrink-0" />
                          )}
                          <span className={`text-sm ${checkStage > index ? 'text-white' : 'text-neutral-500'}`}>
                            {stage.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-neutral-400 text-sm">
                      Please wait while we check our inventory...
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-500/20 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-accent-400" />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-accent-400 mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      ACCESS GRANTED!
                    </h3>

                    <p className="text-white text-lg mb-4">
                      Your workbook is ready to download
                    </p>

                    <p className="text-neutral-400">
                      Opening download link...
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Limited Time Alert Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-b border-red-500/50 py-3"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div>
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <span className="text-white font-semibold">LIMITED TIME OFFER:</span>
            <motion.span
              initial={{ scale: 1.3, color: '#ff0000' }}
              animate={{ scale: 1, color: '#f87171' }}
              className="font-bold text-xl text-red-400"
            >
              Free Workbook Download Available Now!
            </motion.span>
            {justSold && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-yellow-400 text-sm font-semibold"
              >
                — Someone just downloaded!
              </motion.span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <GlowingOrb color="#3498db" size={800} className="absolute -top-64 -right-64 opacity-40" blur={150} />
        <GlowingOrb color="#7ED321" size={600} className="absolute top-1/3 -left-64 opacity-30" blur={120} />
        <GlowingOrb color="#f1c40f" size={400} className="absolute bottom-0 right-1/4 opacity-20" blur={100} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(52,152,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,152,219,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-accent-900/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-accent-900/20 pointer-events-none" />
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500/20 to-gold-500/10 border border-gold-500/40 mb-6 shadow-lg shadow-gold-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse shadow-lg shadow-gold-400/50" />
                <span className="text-gold-400 text-sm font-semibold">100% FREE - Instant Download</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span className="text-white">The Proven System </span>
                <span style={{ background: 'linear-gradient(90deg, #7ED321, #98DC4D, #5BA60B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>1000+ Entrepreneurs</span>
                <span className="text-white"> Use To Break Through Revenue Ceilings </span>
                <span style={{ background: 'linear-gradient(90deg, #3498db, #5dade2, #1a6fa3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>While Working Less</span>
              </h1>

              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                Download your <span className="text-accent-400 font-bold">FREE</span> copy of{' '}
                <em className="text-white font-medium">The Time Ownership Playbook</em>
                {' '}and discover the exact framework that took Bill Korman from bankruptcy to building
                multiple 7-figure businesses, without working 80-hour weeks.
              </p>

              {/* Limited time indicator in hero */}
              <div className="bg-accent-500/10 border border-accent-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-accent-400 font-semibold flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Limited Time Offer — Download Now!
                  </span>
                </div>
              </div>

              <button
                onClick={handleClaimClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-xl rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] mb-6"
                style={{
                  background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
                  color: '#000000',
                  boxShadow: '0 4px 20px rgba(126, 211, 33, 0.4)',
                }}
              >
                <span>Download My Free Workbook Now</span>
                <span>→</span>
              </button>

              {/* Trust Signals */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500/20 to-gold-500/10 border border-gold-500/30 text-gold-400 font-medium shadow-lg shadow-gold-500/5">
                    <Star className="w-4 h-4 fill-gold-400" />
                    1000+ entrepreneurs coached
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-accent-500/10 border border-accent-500/30 text-accent-400 font-medium shadow-lg shadow-accent-500/5">
                    <Star className="w-4 h-4 fill-accent-400" />
                    $50M+ client revenue scaled
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Book */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center items-center order-1 md:order-2 py-8 md:py-0"
            >
              <BookPreview />
              <blockquote className="text-neutral-300 italic border-l-4 border-gradient-to-b from-primary-500 to-primary-400 pl-4 bg-gradient-to-r from-primary-500/10 to-transparent py-3 pr-4 rounded-r-lg mt-6 max-w-md">
                "Time ownership—not just management—is a true driver of success."
                <footer className="text-sm text-primary-400 mt-2 not-italic font-semibold">
                  — Patrick Bet-David, Entrepreneur & Founder of Valuetainment
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
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
              <span className="text-white">You're Working 60+ Hour Weeks. </span> <br/>
              <span className="text-red-400">Your Revenue Won't Budge.</span>
              <span className="text-white"> And You're One Breakdown Away From </span> <br />
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
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-neutral-900/80 to-neutral-900/50 border border-neutral-800 text-center">
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
                  { title: 'The 168-Hour Audit Process', desc: 'Track where your time actually goes versus where you think it goes' },
                  { title: 'Energy Mapping Method', desc: 'Identify your peak performance windows and stop wasting them on email' },
                  { title: 'Revenue Forensics Framework', desc: 'Discover which 20% of your activities drive 80% of your income' },
                  { title: 'The Priority Decision Matrix', desc: "Know exactly what deserves your time and what's killing your capacity" },
                  { title: 'Delegation System That Works', desc: 'Stop being the bottleneck. Build teams that execute without you' },
                  { title: 'CEO Time Architecture Blueprint', desc: "Bill's structure for running multiple 7-figure businesses in under 40 hours" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-accent-500/5 border border-accent-500/20 hover:border-accent-500/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-500/30 to-accent-500/10 flex items-center justify-center shrink-0">
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
              <button
                onClick={handleClaimClick}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl rounded-lg font-bold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
                  color: '#000000',
                  boxShadow: '0 4px 20px rgba(126, 211, 33, 0.4)',
                }}
              >
                <span>Yes! Send Me The Workbook (It's FREE)</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not For Everyone Section */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
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
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

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
                    "You know you need a system but don't have time to figure it out",
                    'You value freedom and impact over "looking busy"',
                    "You're ready to take back ownership of your 168 hours",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-300">
                      <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center shrink-0 mt-0.5">
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
              <span className="text-white">About </span>
              <span className="text-primary-400">The Author</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shrink-0 overflow-hidden relative">
                <Image
                  src="/images/bill_korman.jpeg"
                  alt="Bill Korman"
                  fill
                  className="object-cover object-center"
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
                  framework for time ownership.
                </p>
                <p className="text-accent-400 font-semibold text-lg">
                  And now, he's giving you the playbook—for free.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={handleClaimClick}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl rounded-lg font-bold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
                  color: '#000000',
                  boxShadow: '0 4px 20px rgba(126, 211, 33, 0.4)',
                }}
              >
                <span>Download My Free Workbook Now</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-primary-500/10 flex items-center justify-center shrink-0 group-hover:from-primary-500/50 group-hover:to-primary-500/20 transition-colors">
                    <span className="text-primary-400 font-bold">{chapter.number}</span>
                  </div>
                  <p className="text-neutral-300 text-sm">{chapter.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={handleClaimClick}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl rounded-lg font-bold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
                  color: '#000000',
                  boxShadow: '0 4px 20px rgba(126, 211, 33, 0.4)',
                }}
              >
                <span>Send Me The Workbook (It's FREE)</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Deal Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-accent-900/10 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 blur-[150px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-gold-400">Here's The Deal</span>
            </h2>

            <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="text-center">
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Retail Price</p>
                <p className="text-4xl md:text-5xl font-bold text-red-400 line-through opacity-60">$20</p>
              </div>
              <div className="text-4xl text-neutral-600">&rarr;</div>
              <div className="text-center">
                <p className="text-accent-400 text-sm uppercase tracking-wider mb-1">Your Price Today</p>
                <p
                  className="text-5xl md:text-7xl font-bold"
                  style={{ color: '#7ED321' }}
                >
                  FREE
                </p>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Instant digital download — <span className="text-gold-400 font-bold">No shipping required</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent-400" />
              <span className="text-accent-400 text-lg font-bold uppercase tracking-widest">100% Free Access</span>
              <Shield className="w-8 h-8 text-accent-400" />
            </div>
            <p className="text-2xl md:text-3xl text-white font-bold mb-2">
              Instant download. No credit card required.
            </p>
            <p className="text-xl text-accent-400 font-semibold">
              Start implementing today — completely free.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={handleClaimClick}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl rounded-lg font-bold transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
                color: '#000000',
                boxShadow: '0 4px 20px rgba(126, 211, 33, 0.4)',
              }}
            >
              <span>Yes! Send Me The Workbook Now</span>
              <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* DRAMATIC Limited Offer Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-red-950/40 to-black" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div
            className="relative bg-gradient-to-b from-red-950 to-neutral-950 border-2 border-red-500 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
            style={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.3), 0 0 80px rgba(239, 68, 68, 0.1)' }}
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500">
                  <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-red-400" />
                </div>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-400 mb-4"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                LIMITED TIME FREE OFFER!
              </h2>

              <div className="mb-8">
                <p className="text-2xl md:text-3xl text-white mb-4">
                  Download The Time Ownership Playbook
                </p>
                <p className="text-xl text-accent-400 font-bold">
                  100% FREE — Instant Digital Access
                </p>
              </div>

              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-8 max-w-xl mx-auto">
                <p className="text-xl md:text-2xl text-white font-bold">
                  This free offer won&apos;t last forever. Download yours before it&apos;s gone!
                </p>
              </div>

              <button
                onClick={handleClaimClick}
                className="inline-flex items-center justify-center gap-3 px-12 py-6 text-2xl rounded-lg font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
                  color: '#000000',
                  boxShadow: '0 4px 30px rgba(126, 211, 33, 0.5)',
                }}
              >
                <span>DOWNLOAD MY FREE WORKBOOK NOW</span>
                <span className="ml-1">→</span>
              </button>

              <p className="text-neutral-400 text-sm mt-6">
                100% Free • No credit card required • Instant digital access
              </p>
            </div>
          </div>
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 whitespace-nowrap" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-white">Stop Losing Time.</span><br/>
              <span className="text-accent-400">Start Building Leverage.</span>
            </h2>

            <p className="text-xl md:text-2xl text-neutral-300 mb-8">
              Every week you operate without a system is another week of:
            </p>

            <ul className="text-left max-w-xl mx-auto space-y-4 mb-10">
              {[
                'Peak energy hours wasted on low-value work',
                "Revenue left on the table because you don't have capacity",
                "Relationships deteriorating because you're never fully present",
                'Health declining from chronic stress',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-300 text-lg md:text-xl">
                  <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-white font-semibold text-xl md:text-2xl mb-6">
              You can't get this time back. But you can change what happens next.
            </p>

            <p className="text-2xl font-bold mb-8 text-accent-400">
              Limited time offer — Download yours now!
            </p>

            <button
              onClick={handleClaimClick}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] mb-8"
              style={{
                background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
                color: '#000000',
                boxShadow: '0 4px 20px rgba(126, 211, 33, 0.4)',
              }}
            >
              <span>Send Me The Workbook (It's FREE)</span>
              <span>→</span>
            </button>

            <p className="text-sm text-neutral-500">
              <span className="text-neutral-400 font-semibold">Still on the fence?</span> Remember: It's completely free.
              No credit card. No shipping fees. Just instant access to the framework that works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Bill Korman. All rights reserved.</p>
          <p className="mt-2">The 168 Game | Time Ownership Framework</p>
        </div>
      </footer>
    </div>
  );
}
