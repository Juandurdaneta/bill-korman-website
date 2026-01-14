'use client';

import { motion } from 'framer-motion';
import { Check, Calendar, MapPin, Users, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FunnelCTA from '@/components/funnel/FunnelCTA';
import UrgencyBanner from '@/components/funnel/UrgencyBanner';
import TicketCard from '@/components/funnel/TicketCard';

const regularFeatures = [
  'Full 3-Day Convention Access (March 26-28, 2026)',
  'The 168 Game Manual',
  'Time Capsule Gift Package ($10,000 value)',
  'Autographed Copy of The 168 Game Book',
  'Networking Access with Elite Entrepreneurs',
  'Recording Access to All Main Sessions',
  '90-Day Post-Event Support',
  'Standard Seating',
];

const vipFeatures = [
  'Everything in Regular Ticket PLUS:',
  'VIP Time Capsule ($50,000 value)',
  'Front-Row Seating',
  'VIP Access for all 3 days',
  'VIP Lunch with Speakers and Celebrity Guests',
  'Radio Interview ($800 value)',
  'Social Media Exposure',
  'Rebroadcast Rights Included ($300 value)',
  'Golden Ticket ($500 VIP Credit for 2027)',
  'VIP Networking Sessions',
];

const day1 = [
  'Deep-dive time audit workshop (find your 15-20 hidden hours)',
  'Energy mapping live session (identify your peak performance windows)',
  "Revenue forensics breakdown (what actually makes you money vs. what's killing capacity)",
];

const day2 = [
  'Building your personalized 168-hour framework',
  'Priority decision-making workshop (what stays, what goes, what gets delegated)',
  "Calendar restructuring in real-time with Bill's guidance",
  'The delegation system that actually works',
];

const day3 = [
  'Your first 168 Game week blueprint (walk out ready to implement Monday)',
  'Advanced leverage strategies (how to maintain this as you grow)',
  'Mastermind breakout sessions (peer problem-solving in small groups)',
  'Hot seat coaching with Bill (bring your toughest challenges)',
];

export default function ConventionUpsellPage() {
  const router = useRouter();

  const handleAccept = (tier: 'regular' | 'vip') => {
    // Mock purchase - go to next upsell
    router.push('/free-book/mastery');
  };

  const handleDecline = () => {
    // Go to downsell (payment plan)
    router.push('/free-book/convention-plan');
  };

  return (
    <div className="min-h-screen bg-black">
      <UrgencyBanner
        message="ONE-TIME OFFER - This page will only appear once"
        variant="warning"
      />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-accent-400 font-semibold mb-4">
              You Just Got The Framework. Now Come Master It With 150 Elite Entrepreneurs in 3 Days.
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-gradient-x bg-clip-text text-transparent bg-[length:200%_auto]"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                backgroundImage: 'linear-gradient(90deg, #7ED321, #3498db, #7ED321)',
              }}
            >
              THE 168 GAME CONVENTION
            </h1>

            <div className="flex items-center justify-center gap-6 text-neutral-400 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-400" />
                March 26-28, 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-400" />
                Linthicum Heights, MD
              </span>
            </div>

            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Join the most high-caliber time ownership event in the world. Surround yourself with
              300 other entrepreneurs and executives ready to take their business and life to the
              next level of freedom.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <FunnelCTA onClick={() => handleAccept('regular')} variant="primary" size="lg">
                Regular Ticket - $997
              </FunnelCTA>
              <FunnelCTA onClick={() => handleAccept('vip')} variant="accent" size="lg">
                VIP Ticket - $1,497
              </FunnelCTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-neutral-300 text-center mb-8">
              Spend three days in the same room of elite entrepreneurs and executives running
              $500K-$5M+ businesses, solving the same problems, building systems together.
            </p>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6 text-center">
              <p className="text-lg text-neutral-300">
                <span className="text-white font-semibold">The 168 Game Convention isn't about content. It's about context.</span>
                {' '}The conversations between sessions that spark million-dollar ideas. The partnership
                formed over lunch that changes your trajectory. The peer who's two steps ahead sharing
                exactly how they broke through the ceiling you're hitting right now.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Happens Over 3 Days */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              What Happens Over 3 Days:
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Day 1 */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                  <span className="text-primary-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">DAY 1: COMPLETE VISIBILITY</h3>
                <ul className="space-y-3">
                  {day1.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-400">
                      <Check className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day 2 */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                  <span className="text-primary-400 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">DAY 2: STRATEGIC ARCHITECTURE</h3>
                <ul className="space-y-3">
                  {day2.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-400">
                      <Check className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day 3 */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                  <span className="text-primary-400 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">DAY 3: IMPLEMENTATION & SCALE</h3>
                <ul className="space-y-3">
                  {day3.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-400">
                      <Check className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-neutral-300 mt-8">
              <span className="text-white font-semibold">Plus:</span> High-caliber networking with
              300 decision-makers. Make partnerships happen, and open doors you can't open alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ticket Options */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Choose Your Experience
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <TicketCard
                title="STANDARD TICKET"
                price="$997"
                originalValue="$13,500+"
                features={regularFeatures}
                ctaText="Secure Your Ticket"
                onSelect={() => handleAccept('regular')}
              />

              <TicketCard
                title="VIP TICKET"
                price="$1,497"
                originalValue="$65,000+"
                features={vipFeatures}
                highlighted
                ctaText="Upgrade to VIP"
                onSelect={() => handleAccept('vip')}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who's In The Room */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Who's In The Room
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                'Founders and CEOs running $500K-$5M+ businesses',
                'Executives leading teams of 10-500+ people',
                "Entrepreneurs who've already \"made it\" but hit a new ceiling",
                'Decision-makers with $500M+ combined buying power',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-lg">
                  <Users className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-accent-500/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              My Guarantee
            </h2>
            <p className="text-xl text-accent-400 font-semibold mb-6">
              Attend Day 1. If You're Not Blown Away, Get A Full Refund.
            </p>
            <p className="text-neutral-300 mb-6">
              Show up on Day 1. Experience the workshops. Meet the attendees. See the value for yourself.
              If by the end of Day 1 you don't think this is the best investment you've made in your
              business this year, tell us and we'll refund you in full.
            </p>
            <p className="text-white font-semibold mb-8">
              No questions asked. No hassle. You're not risking anything. I am.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <FunnelCTA onClick={() => handleAccept('regular')} variant="primary" size="lg">
                Secure My Regular Ticket - $997
              </FunnelCTA>
              <FunnelCTA onClick={() => handleAccept('vip')} variant="accent" size="lg">
                Upgrade to VIP - $1,497
              </FunnelCTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scarcity */}
      <section className="py-16 bg-red-500/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Only 150 Tickets Left
              </h2>
            </div>

            <p className="text-neutral-300 mb-4">
              We intentionally keep The 168 Game Convention small.{' '}
              <span className="text-white font-semibold">500 attendees.</span> Why? Because intimacy matters.
              At 500 people, you can actually connect with attendees. Have real conversations.
              Build relationships that last.
            </p>

            <p className="text-neutral-400 mb-6">
              Regular tickets are selling fast. VIP tickets sell out first (only 50 VIP spots available).
            </p>

            <p className="text-white font-semibold mb-8">
              This page only appears once. If you leave without securing your spot,
              you'll pay full price later—if tickets are even still available.
            </p>

            <p className="text-sm text-neutral-500 mb-8">
              Attend Day 1. If you're not blown away, get a full refund. You risk nothing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <FunnelCTA onClick={() => handleAccept('regular')} variant="primary" size="xl">
              Secure My Regular Ticket - $997
            </FunnelCTA>
            <FunnelCTA onClick={() => handleAccept('vip')} variant="accent" size="xl">
              Upgrade to VIP - $1,497
            </FunnelCTA>
          </div>

          <button
            onClick={handleDecline}
            className="text-neutral-500 hover:text-neutral-400 text-sm underline transition-colors"
          >
            No thanks, I'll pass on the convention
          </button>
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
