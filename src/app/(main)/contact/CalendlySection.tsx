'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const BOOKING_URL = 'https://link.builderspro.io/widget/booking/PsfkK0MwvfbnVjz7SbgF';

export default function CalendlySection() {

  return (
    <section id="calendly" className="relative py-24 bg-[#121218] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3498db]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7ED321]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Book a Call"
          title="Schedule Your Free Consultation"
          subtitle="Ready to discuss how The 168 Game can transform your business? Book a free 30-minute strategy call."
        />

        {/* Benefits row */}
        <div className="flex flex-wrap justify-center gap-8 my-12">
          {[
            { icon: Calendar, label: 'Choose Your Time', sublabel: 'Flexible scheduling' },
            { icon: Clock, label: '30 Minutes', sublabel: 'No obligation' },
            { icon: Video, label: 'Video Call', sublabel: 'Face-to-face conversation' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#3498db]/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[#85c1e9]" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">{item.label}</div>
                <div className="text-[#888888] text-sm">{item.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendly Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <iframe
              src={BOOKING_URL}
              title="Book a Call with Bill Korman"
              style={{ width: '100%', height: '700px', border: 'none' }}
              allow="payment"
            />
          </div>
        </motion.div>

        <p className="text-center text-[#888888] text-sm mt-6">
          Can&apos;t find a time that works?{' '}
          <a
            href="mailto:hello@the168game.com"
            className="text-[#5dade2] hover:text-white transition-colors"
          >
            Email me directly
          </a>
        </p>
      </div>
    </section>
  );
}
