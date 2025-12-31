'use client';

import { motion } from 'framer-motion';
import Checkbox from '@/components/ui/Checkbox';

interface OrderBumpProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function OrderBump({
  title,
  price,
  originalPrice,
  description,
  features,
  checked,
  onChange,
}: OrderBumpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        relative rounded-xl overflow-hidden
        border-2 transition-all duration-300
        ${checked
          ? 'border-accent-500 bg-accent-500/10'
          : 'border-gold-500 bg-gold-500/5 hover:bg-gold-500/10'
        }
      `}
    >
      {/* Header */}
      <div className="bg-gold-500 text-black px-4 py-2 text-center font-bold text-sm">
        ONE-TIME OFFER - Add This To Your Order
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <Checkbox
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="mt-1"
          />
          <div className="flex-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-bold text-lg text-white">YES!</span>
              <span className="text-neutral-300">{title}</span>
              <span className="text-accent-400 font-bold text-lg">{price}</span>
              {originalPrice && (
                <span className="text-neutral-500 line-through text-sm">{originalPrice}</span>
              )}
            </div>

            <p className="text-neutral-400 text-sm mt-2">{description}</p>

            <ul className="mt-4 space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="text-accent-400 mt-0.5">+</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
