'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const myths = [
  {
    lie: 'I just need better time management skills.',
    truth: 'Time management is about doing more faster. Time ownership is about doing what matters. You don\'t need efficiency, you need clarity.',
  },
  {
    lie: 'Success requires sacrifice. I have to grind 80-hour weeks to scale.',
    truth: 'Hustle culture is a trap. The most successful entrepreneurs don\'t work the most hours — they work the right hours with ruthless intention.',
  },
  {
    lie: 'Once I hit [revenue goal], THEN I\'ll have more time.',
    truth: 'More success = more opportunities = more chaos UNLESS you architect your time first. The ceiling doesn\'t disappear, it just gets higher.',
  },
  {
    lie: 'My business requires me to be available 24/7.',
    truth: 'Reactivity is a choice disguised as necessity. Boundaries don\'t lose you clients — they earn you respect and better results.',
  },
  {
    lie: 'I can figure this out on my own. I just need to try harder.',
    truth: 'High performers have systems. Average performers have willpower. Willpower runs out. Systems scale.',
  },
];

export default function Myths() {
  return (
    <section className="relative py-24 bg-[#121218] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Break Free"
          title="The 5 Lies Keeping You Trapped"
          subtitle="And the truth that sets you free"
        />

        <div className="mt-16 space-y-6">
          {myths.map((myth, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-0 p-6 md:p-0 rounded-2xl bg-[#141414]/50 md:bg-transparent">
                {/* The Lie */}
                <div className="md:p-6 md:border-r border-white/5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-2 block">
                        Lie #{index + 1}
                      </span>
                      <p className="text-[#d0d0dd] text-lg font-medium italic">
                        &ldquo;{myth.lie}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* The Truth */}
                <div className="md:p-6 md:bg-[#141414]/30 md:group-hover:bg-[#3498db]/10 transition-colors rounded-r-2xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7ED321]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#7ED321]" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#7ED321] font-semibold mb-2 block">
                        Truth
                      </span>
                      <p className="text-[#aaaaaa] leading-relaxed">
                        {myth.truth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
