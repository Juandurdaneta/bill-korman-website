'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { articles } from '@/data/media';
import SectionTitle from '../ui/SectionTitle';

// Deduplicate logos by image URL so identical logos don't appear side by side
const uniqueLogos = articles.filter(
  (item, index, self) => self.findIndex((t) => t.logoUrl === item.logoUrl) === index
);

// Double the array for seamless infinite scroll
const scrollItems = [...uniqueLogos, ...uniqueLogos];

export default function LogoCarousel() {
  return (
    <section className="relative py-16 bg-[#0a0a0f] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="As Seen In"
          />
        </motion.div>
      </div>

      {/* Carousel track */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-x">
          {scrollItems.map((item, index) => (
            <a
              key={`${item.source}-${index}`}
              href={item.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-6 sm:mx-10 flex items-center justify-center group"
            >
              <div className="relative w-32 h-16 sm:w-40 sm:h-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={item.logoUrl}
                  alt={item.source}
                  fill
                  className="object-contain"
                  sizes="160px"
                  unoptimized
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
