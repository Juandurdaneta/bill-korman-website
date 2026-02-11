'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const notFor = [
  'You\'re still in the "grind harder" phase and think 80-hour weeks are a badge of honor',
  'You haven\'t hit 6 figures in revenue yet',
  'You want quick fixes instead of real systems',
  'You\'re not willing to make hard decisions about where your time goes',
  'You\'re looking for motivation instead of frameworks',
];

const isFor = [
  'You\'ve already built something real but hit a ceiling you can\'t break through',
  'You know you\'re capable of more but don\'t have the capacity',
  'You\'re willing to look at data and make changes based on what it reveals',
  'You value freedom and impact over "looking busy"',
  'You\'re ready to invest in a proven system that works',
];

export default function WhoIsThisFor() {
  return (
    <section className="relative py-24 bg-[#121218] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Is This Right For You?"
          title="This Playbook Isn't For Everyone"
          subtitle="Be honest with yourself. Here's who gets results and who doesn't."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* NOT For */}
          <motion.div
            className="p-8 rounded-2xl bg-[#000000] border border-red-500/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">This is NOT for you if:</h3>
            </div>

            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* IS For */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-[#1a4d7a]/20 to-[#000000] border border-[#5dade2]/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#7ED321]/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#7ED321]" />
              </div>
              <h3 className="text-xl font-bold text-white">This IS for you if:</h3>
            </div>

            <ul className="space-y-4">
              {isFor.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="w-5 h-5 text-[#7ED321] flex-shrink-0 mt-0.5" />
                  <span className="text-[#d0d0dd]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#aaaaaa] text-lg mb-6">
            If the right column describes you, download the playbook and let&apos;s get started.
          </p>
          <Button href="/get-playbook" variant="accent" size="lg" showArrow>
            Yes, I&apos;m Ready — Get The Playbook
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
