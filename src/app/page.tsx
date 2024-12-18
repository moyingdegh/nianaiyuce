'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* 标题区域 */}
        <h1 className="text-3xl font-bold mb-4">
          AI Love Match
        </h1>
        <h2 className="text-xl mb-8">
          探索你们的缘分指数
        </h2>

        {/* 输入区域 */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="输入第一个名字"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-pink-500"
          />
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="输入第二个名字"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-pink-500"
          />
          <Link
            href="/assessment"
            className="block w-full py-2 bg-pink-500 text-white text-center rounded hover:bg-pink-600 transition-colors"
          >
            开始分析
          </Link>
        </div>

        {/* 说明文字 */}
        <p className="text-gray-600 mb-12 text-sm leading-relaxed">
          AI Love Match 使用先进的人工智能算法，通过分析名字中蕴含的信息，
          为您提供专业的缘分匹配分析和建议。开始探索您的缘分密码吧！
        </p>

        {/* 特点介绍 */}
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🤖</span>
            <div>
              <h3 className="font-bold mb-1">智能分析</h3>
              <p className="text-sm text-gray-600">采用先进AI算法</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔍</span>
            <div>
              <h3 className="font-bold mb-1">专业解读</h3>
              <p className="text-sm text-gray-600">深度缘分剖析</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💝</span>
            <div>
              <h3 className="font-bold mb-1">贴心建议</h3>
              <p className="text-sm text-gray-600">个性化匹配建议</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
