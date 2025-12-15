'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What if I\'m not sure I can commit the time to implement this?',
    answer: 'That\'s exactly why you need this. You\'re stuck because you don\'t have a system for MAKING time. Once you implement the framework, you\'ll have 10-20 hours per week you didn\'t have before. Implementation happens faster than you think when you\'re working on the right things.',
  },
  {
    question: 'Can I switch from the course to 1:1 coaching later?',
    answer: 'Yes. Many course students upgrade to 1:1 after experiencing initial results and wanting personalized acceleration. Course tuition can be credited toward 1:1 investment if you upgrade within 90 days.',
  },
  {
    question: 'How is this different from other productivity programs?',
    answer: 'Most programs teach tactics (time-blocking, morning routines, apps). The 168 Game teaches architecture: how to design your entire week around what actually creates revenue, impact, and freedom. Tactics are useless without strategy. This gives you both.',
  },
  {
    question: 'What if my business/industry is different?',
    answer: 'The framework applies to any entrepreneur, executive, or organization dealing with time constraints. I\'ve worked with founders, agency owners, consultants, professional athletes, military Tier 1 special forces, financial advisors, and more. The principles are universal; the application is customized.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most clients report reclaiming 10+ hours in their first week just from the initial audit. The full 20+ hour transformation typically happens within the first month as you implement the complete system.',
  },
  {
    question: 'Is there a guarantee?',
    answer: 'Yes. For the coaching programs, if you show up, do the work, and don\'t see meaningful progress in the first 30 days, we\'ll work together until you do or refund your investment. I\'m committed to your results.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#ff8c1a] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-[#1e1e26] border border-white/5 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#8686a0] flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-[#ababbe] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
