'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Users, DollarSign } from 'lucide-react';
import AnimatedNumber from '../ui/AnimatedNumber';
import SpotlightCard from '../ui/SpotlightCard';

export default function ProvenResults() {
  return (
    <section className="relative py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SpotlightCard className="rounded-3xl" spotlightColor="rgba(52, 152, 219, 0.2)">
            <div className="relative p-8 md:p-10 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7ED321]/10 to-transparent" />

              <div className="grid lg:grid-cols-4 gap-8 items-center">
                {/* Title */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-white">Proven Results</h3>
                  <p className="text-[#888888] text-sm mt-2">Real impact for real entrepreneurs</p>
                </div>

                {/* Stats */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/50">
                    <div className="w-12 h-12 rounded-lg bg-[#3498db]/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#85c1e9]" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">
                        <AnimatedNumber value={1000} suffix="+" />
                      </div>
                      <div className="text-[#888888] text-sm">Entrepreneurs Coached</div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/50">
                    <div className="w-12 h-12 rounded-lg bg-[#7ED321]/20 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-[#58d68d]" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">
                        $<AnimatedNumber value={50} suffix="M+" />
                      </div>
                      <div className="text-[#888888] text-sm">Combined Client Revenue</div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/50">
                    <div className="w-12 h-12 rounded-lg bg-[#3498db]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#85c1e9]" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">
                        <AnimatedNumber value={2000} suffix="+" />
                      </div>
                      <div className="text-[#888888] text-sm">Hours Reclaimed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {['Navy Veteran', 'Serial Entrepreneur', 'Best-Selling Author'].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3498db]/10 text-[#85c1e9] text-xs font-medium"
                    >
                      <Check className="w-3 h-3" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
