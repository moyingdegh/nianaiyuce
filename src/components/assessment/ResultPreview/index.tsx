'use client';

import { useAssessment } from '@/app/assessment/context';

export default function ResultPreview() {
  const { state } = useAssessment();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">测评结果</h2>
      
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">总体评分</h3>
        <div className="w-full h-4 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-green-500 rounded-full"
            style={{ width: '75%' }}
          />
        </div>
        <p className="mt-2 text-center">75分</p>
      </div>

      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">详细分析</h3>
        <p className="text-gray-600">
          基于您的测评结果,我们发现您是一个...
          {/* 这里可以根据answers生成详细的分析报告 */}
        </p>
      </div>

      <div className="flex justify-center">
        <button 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          重新测评
        </button>
      </div>
    </div>
  );
} 