'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🤖',
    title: '智能分析',
    description: '采用先进AI算法'
  },
  {
    icon: '🔍',
    title: '专业解读',
    description: '深度缘分剖析'
  },
  {
    icon: '💝',
    title: '贴心建议',
    description: '个性化匹配建议'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-6 mb-4 bg-white rounded-lg shadow-sm"
          >
            <div className="text-3xl">{feature.icon}</div>
            <div>
              <h3 className="font-bold text-pink-800 mb-1">{feature.title}</h3>
              <p className="text-pink-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 