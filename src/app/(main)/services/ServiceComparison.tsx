'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    name: '1:1 90-Day Intensive',
    bestFor: 'Entrepreneurs doing $500K-$5M+ who want the fastest results',
    timeline: '90 day intensive',
    interaction: '1:1 calls with Bill + unlimited access',
    customization: 'Fully personalized to your business',
    investment: '$25,000',
    availability: '3 spots per quarter',
    highlighted: true,
  },
  {
    name: '1:1 Coaching 6-Month',
    bestFor: 'Entrepreneurs who thrive with structured learning',
    timeline: '1:1 calls for 6 months',
    interaction: '1:1 calls with Bill',
    customization: 'Framework-based with implementation tools',
    investment: '$15,000',
    availability: 'Open enrollment',
    highlighted: false,
  },
  {
    name: 'Group Training',
    bestFor: 'Individuals looking for group support from others ready to scale',
    timeline: '6 months',
    interaction: 'Monthly group coaching + community',
    customization: 'Custom group-wide system',
    investment: '$7,500',
    availability: 'By application',
    highlighted: false,
  },
];

export default function ServiceComparison() {
  return (
    <section className="relative py-24 bg-[#121218] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#7ED321] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Quick Comparison
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Which Path Is Right For You?
          </h2>
        </motion.div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <motion.table
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-left text-[#888888] font-medium"></th>
                {services.map((service, index) => (
                  <th
                    key={index}
                    className={`py-4 px-6 text-center ${
                      service.highlighted ? 'bg-[#1a4d7a]/20 rounded-t-2xl' : ''
                    }`}
                  >
                    {service.highlighted && (
                      <span className="text-[#7ED321] text-xs font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mt-2">{service.name}</h3>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-4 px-6 text-[#888888]">Best For</td>
                {services.map((service, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 text-center text-[#d0d0dd] ${
                      service.highlighted ? 'bg-[#1a4d7a]/10' : ''
                    }`}
                  >
                    {service.bestFor}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-6 text-[#888888]">Timeline</td>
                {services.map((service, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 text-center text-white font-medium ${
                      service.highlighted ? 'bg-[#1a4d7a]/10' : ''
                    }`}
                  >
                    {service.timeline}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-6 text-[#888888]">Interaction</td>
                {services.map((service, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 text-center text-[#d0d0dd] ${
                      service.highlighted ? 'bg-[#1a4d7a]/10' : ''
                    }`}
                  >
                    {service.interaction}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-6 text-[#888888]">Customization</td>
                {services.map((service, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 text-center text-[#d0d0dd] ${
                      service.highlighted ? 'bg-[#1a4d7a]/10' : ''
                    }`}
                  >
                    {service.customization}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-6 text-[#888888]">Investment</td>
                {services.map((service, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 text-center ${
                      service.highlighted ? 'bg-[#1a4d7a]/10' : ''
                    }`}
                  >
                    <span className="text-2xl font-bold text-[#7ED321]">{service.investment}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 text-[#888888]">Availability</td>
                {services.map((service, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 text-center text-[#d0d0dd] ${
                      service.highlighted ? 'bg-[#1a4d7a]/10 rounded-b-2xl' : ''
                    }`}
                  >
                    {service.availability}
                  </td>
                ))}
              </tr>
            </tbody>
          </motion.table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl border ${
                service.highlighted
                  ? 'bg-gradient-to-br from-[#1a4d7a]/30 to-[#121218] border-[#5dade2]/30'
                  : 'bg-[#000000] border-white/5'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {service.highlighted && (
                <span className="text-[#7ED321] text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white mt-2 mb-4">{service.name}</h3>
              <div className="text-3xl font-bold text-[#7ED321] mb-4">{service.investment}</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#888888]">Best For</span>
                  <span className="text-[#d0d0dd] text-right max-w-[60%]">{service.bestFor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888888]">Timeline</span>
                  <span className="text-white font-medium">{service.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888888]">Availability</span>
                  <span className="text-[#d0d0dd]">{service.availability}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
