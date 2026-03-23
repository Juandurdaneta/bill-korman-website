'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mic, Play, Newspaper } from 'lucide-react';
import Image from 'next/image';
import { articles, podcasts } from '@/data/media';
import SectionTitle from '@/components/ui/SectionTitle';
import GlowingOrb from '@/components/ui/GlowingOrb';

const typeIcon = {
  article: Newspaper,
  podcast: Mic,
  video: Play,
};

const typeLabel = {
  article: 'Article',
  podcast: 'Podcast',
  video: 'Video',
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#000000] overflow-hidden">
        <GlowingOrb color="#3498db" size={500} className="-right-40 -top-40" delay={0} />
        <GlowingOrb color="#7ED321" size={400} className="-left-40 bottom-0" delay={2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3498db]/10 text-[#85c1e9] text-sm font-medium mb-6 border border-[#3498db]/20">
              Media & Appearances
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              In The <span className="gradient-text">Spotlight</span>
            </h1>
            <p className="text-xl text-[#aaaaaa] max-w-2xl mx-auto">
              Bill Korman&apos;s insights on time management, financial strategy, and
              entrepreneurship featured across major media outlets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative py-20 bg-[#000000] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Press Coverage"
            title="Featured Articles"
            align="left"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {articles.map((item, index) => (
              <motion.a
                key={item.articleUrl}
                href={item.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#3498db]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                {/* Logo */}
                <div className="flex-shrink-0 w-20 h-14 relative rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                  <Image
                    src={item.logoUrl}
                    alt={item.source}
                    fill
                    className="object-contain p-2"
                    sizes="80px"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[#3498db] text-xs font-semibold uppercase tracking-wider">
                      {item.source}
                    </span>
                    <ExternalLink className="w-3 h-3 text-[#555555] group-hover:text-[#3498db] transition-colors" />
                  </div>
                  <h3 className="text-white text-sm font-medium leading-snug group-hover:text-[#85c1e9] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts & Appearances Section */}
      <section className="relative py-20 bg-[#0a0a0f] overflow-hidden">
        <GlowingOrb color="#7ED321" size={350} className="right-0 top-1/4" delay={1} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Podcasts & Shows"
            title="Appearances & Interviews"
            align="left"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {podcasts.map((item, index) => {
              const Icon = typeIcon[item.type];
              return (
                <motion.a
                  key={item.articleUrl}
                  href={item.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#7ED321]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#7ED321]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#7ED321]" />
                    </div>
                    <span className="text-[#888888] text-xs font-medium uppercase tracking-wider">
                      {typeLabel[item.type]}
                    </span>
                  </div>
                  <h3 className="text-white text-sm font-medium leading-snug mb-2 group-hover:text-[#98DC4D] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[#888888] text-xs">
                    {item.source}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[#7ED321] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Listen Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
