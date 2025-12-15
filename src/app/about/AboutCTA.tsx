'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function AboutCTA() {
  return (
    <section className="relative py-24 bg-[#121218] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a7ab8]/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#ff8c1a] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Ready To Take Back Your Time?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            If you&apos;re ready to stop operating with the same architecture high performers use...
          </h2>

          <p className="text-[#ababbe] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether through 1:1 coaching, my Time Ownership Mastery course, or group coaching, my mission is simple: 
            teach entrepreneurs how to take back control of their time before they lose everything trying to &ldquo;figure it out&rdquo; alone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#playbook" variant="accent" size="lg" showArrow>
              Get Your Free Playbook
            </Button>
            <Button href="/services" variant="primary" size="lg">
              Explore Coaching Options
            </Button>
          </div>

          <p className="mt-8 text-[#8686a0]">
            Because I&apos;ve been there. And I know the way out.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
