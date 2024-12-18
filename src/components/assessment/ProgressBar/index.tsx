'use client';

import { useAssessment } from '@/app/assessment/context';

export default function ProgressBar() {
  const { state } = useAssessment();
  const progress = (state.currentStep / 10) * 100; // 假设总共10个步骤

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
} 