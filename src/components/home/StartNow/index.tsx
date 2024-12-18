"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function StartNow() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(name1 && name2) {
      router.push(`/assessment?name1=${name1}&name2=${name2}`);
    }
  };

  return (
    <section id="start" className="py-24 bg-gradient-to-b from-pink-100 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-800">开始你们的缘分探索</h2>
          <p className="text-pink-600 max-w-2xl mx-auto">
            输入两个名字，让AI为你解析你们的缘分指数
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  placeholder="输入第一个名字"
                  className="w-full px-6 py-4 bg-white border border-pink-200 rounded-2xl 
                    focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400
                    transition-all duration-300 text-pink-800 placeholder-pink-300"
                  required
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-pink-500/20 blur-xl opacity-0 transition-opacity peer-focus:opacity-100" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  placeholder="输入第二个名字"
                  className="w-full px-6 py-4 bg-white border border-pink-200 rounded-2xl
                    focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400
                    transition-all duration-300 text-pink-800 placeholder-pink-300"
                  required
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-pink-500/20 blur-xl opacity-0 transition-opacity peer-focus:opacity-100" />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-2xl
                font-medium text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              开始分析
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
