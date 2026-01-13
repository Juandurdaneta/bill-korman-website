'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function ContactInfo() {
  return (
    <section className="relative py-24 bg-[#121218]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5dade2]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Card */}
          <motion.a
            href="mailto:hello@the168game.com"
            className="p-8 rounded-2xl bg-[#000000]/50 border border-white/5 hover:border-[#3498db]/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 rounded-xl bg-[#3498db]/20 flex items-center justify-center mb-4 group-hover:bg-[#3498db]/30 transition-colors">
              <Mail className="w-7 h-7 text-[#85c1e9]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
            <p className="text-[#5dade2]">hello@the168game.com</p>
            <p className="text-[#888888] text-sm mt-2">Response within 24-48 hours</p>
          </motion.a>

          {/* Schedule Card */}
          <motion.a
            href="#calendly"
            className="p-8 rounded-2xl bg-[#000000]/50 border border-white/5 hover:border-[#7ED321]/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 rounded-xl bg-[#7ED321]/20 flex items-center justify-center mb-4 group-hover:bg-[#7ED321]/30 transition-colors">
              <Phone className="w-7 h-7 text-[#7ED321]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Schedule a Call</h3>
            <p className="text-[#7ED321]">Free 30-minute consultation</p>
            <p className="text-[#888888] text-sm mt-2">Book directly on calendar</p>
          </motion.a>

          {/* Social Card */}
          <motion.div
            className="p-8 rounded-2xl bg-[#000000]/50 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Follow Along</h3>
            <p className="text-[#aaaaaa] text-sm mb-6">
              Get free tips on time ownership and behind-the-scenes content.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#141414] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#5dade2]/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
