'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const name1 = searchParams.get('name1') || '';
  const name2 = searchParams.get('name2') || '';

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-1 container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            {name1} 和 {name2} 的缘分分析
          </h1>
          
          {/* 分析结果卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">匹配度分析</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>整体契合度</span>
                  <span className="text-primary">88%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: '88%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>性格相容性</span>
                  <span className="text-primary">92%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>缘分指数</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 分析详情 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">详细解读</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                根据AI分析，{name1}和{name2}的匹配度相当理想。你们的名字蕴含着相似的能量场，
                这预示着在性格和价值观方面有着良好的契合度。
              </p>
              <p>
                在性格方面，你们都展现出开放和包容的特质，这将有助于建立稳定和谐的关系。
                共同的理解和互补的个性特征，让你们能够更好地携手面对生活的挑战。
              </p>
              <p>
                缘分指数显示，你们之间存在着特殊的情感连结。这种连结不仅体现在名字的和谐度上，
                更��映在潜在的精神契合上。建议你们保持真诚的交流，让这份难得的缘分开花结果。
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 