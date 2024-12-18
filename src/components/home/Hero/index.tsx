"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-200 via-pink-100 to-pink-50">
      {/* 背景爱心装饰 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-800 mb-2">
              AI Love Match
            </h1>
            <p className="text-xl sm:text-2xl text-pink-700">
              探索你们的缘分指数
            </p>
          </div>

          <motion.a
            href="#start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            立即开始测试
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
