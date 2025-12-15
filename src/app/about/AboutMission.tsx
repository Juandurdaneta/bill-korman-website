'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutMission() {
  return (
    <section className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-l from-[#2ecc71]/5 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#2ecc71] font-semibold text-sm uppercase tracking-widest mb-4 block">
              My Mission
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              But here&apos;s why I do this work:
            </h2>

            <div className="space-y-6 text-[#aaaaaa] text-lg leading-relaxed">
              <p>
                <span className="text-white font-semibold">I see entrepreneurs making the same mistakes I made.</span>
              </p>
              <p>
                They&apos;re grinding 80-hour weeks. They&apos;re confusing &ldquo;busy&rdquo; with &ldquo;productive.&rdquo; They&apos;re sacrificing 
                relationships, health, and freedom to build businesses that end up owning them.
              </p>
              <p>
                They have the talent. The work ethic. The ambition. What they&apos;re missing is <span className="text-[#2ecc71] font-semibold">architecture</span>.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                icon: Target,
                title: 'Time Ownership',
                description: 'It\'s not about doing more. It\'s about designing your 168 hours around what actually creates revenue, impact, and the life you started this for.',
              },
              {
                icon: Heart,
                title: 'No More Sacrifice',
                description: 'You shouldn\'t have to choose between success and the life you want to live. With the right architecture, you can have both.',
              },
              {
                icon: Lightbulb,
                title: 'Proven Systems',
                description: 'I learned this the hard way: through bankruptcy, trial and error, and years of research. But you don\'t have to. I\'ve already paid the tuition.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#5dade2]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3498db]/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-[#85c1e9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-[#888888] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-[#1a4d7a]/20 to-[#121218] border border-[#5dade2]/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
            &ldquo;The military taught me systems and discipline. Entrepreneurship taught me leverage and ruthless prioritization. 
            <span className="text-[#2ecc71]"> The 168 Game is both.</span>&rdquo;
          </p>
          <p className="mt-6 text-[#888888]">— Bill Korman</p>
        </motion.div>
      </div>
    </section>
  );
}
