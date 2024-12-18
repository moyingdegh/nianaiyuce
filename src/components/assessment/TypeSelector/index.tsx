'use client';

import { AssessmentType } from '@/app/assessment/types';
import { useAssessment } from '@/app/assessment/context';

const types = [
  { id: 'personality', name: '人格测评', desc: '了解你的性格特征' },
  { id: 'values', name: '价值观测评', desc: '探索你的核心价值观' },
  { id: 'lifestyle', name: '生活方式测评', desc: '分析你的生活习惯' },
  { id: 'emotion', name: '情感测评', desc: '评估你的情感能力' },
];

export default function TypeSelector() {
  const { selectType } = useAssessment();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {types.map((type) => (
        <button
          key={type.id}
          onClick={() => selectType(type.id as AssessmentType)}
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-bold mb-2">{type.name}</h3>
          <p className="text-gray-600">{type.desc}</p>
        </button>
      ))}
    </div>
  );
} 