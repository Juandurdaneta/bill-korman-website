'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, GraduationCap, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const services = [
  {
    icon: Sparkles,
    title: '1:1 Coaching: The Complete Rebuild',
    subtitle: '90-Day Intensive',
    price: '$25,000',
    description: 'Personalized transformation. Custom frameworks built for your specific business. Real-time support. This is the fastest path to results.',
    bestFor: 'Entrepreneurs doing $500K-$5M+ in revenue',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Group Training',
    subtitle: '6-Month Program',
    price: '$7,500',
    description: 'Scale time ownership across your entire team. Custom company-wide implementation. Measurable improvements in productivity.',
    bestFor: 'Teams up to 5 people ready to scale',
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: 'Time Ownership Mastery Course',
    subtitle: 'On Demand',
    price: 'Starting at $497',
    description: 'Self-guided implementation with expert oversight. Complete framework, tools, and templates. Monthly live coaching calls.',
    bestFor: 'Self-directed entrepreneurs',
    highlight: false,
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#3498db]/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Work With Bill"
          title="Master Your 168 Hours"
          subtitle="Choose the path that fits you — from self-paced learning to intensive 1:1 transformation."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                service.highlight
                  ? 'bg-gradient-to-br from-[#1a4d7a]/30 to-[#121218] border-[#5dade2]/30 hover:border-[#5dade2]/50'
                  : 'bg-[#121218] border-white/5 hover:border-white/10'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#7ED321] to-[#27ae60] rounded-full text-xs font-bold text-[#000000]">
                  MOST POPULAR
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-[#3498db]/20 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#85c1e9]" />
              </div>

              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-[#7ED321]">{service.subtitle}</span>
                <h3 className="text-xl font-bold text-white mt-1">{service.title}</h3>
              </div>

              <p className="text-[#888888] leading-relaxed mb-4">{service.description}</p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-white">{service.price}</span>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-sm text-[#555555]">
                  <span className="text-[#aaaaaa]">Best for:</span> {service.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button href="/services" variant="primary" size="lg" showArrow>
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
