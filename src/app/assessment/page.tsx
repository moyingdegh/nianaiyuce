'use client';

import { useState } from 'react';
import { AssessmentProvider } from './context';
import { useAssessment } from './context';

// 步骤组件
function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, title: '基础信息' },
    { number: 2, title: '个性特征' },
    { number: 3, title: '伴侣期望' },
    { number: 4, title: '查看结果' },
  ];

  return (
    <div className="flex justify-between items-center mb-12 px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm mb-2
            ${currentStep === step.number 
              ? 'bg-pink-500 text-white' 
              : 'bg-pink-100 text-gray-500'}
          `}>
            {step.number}
          </div>
          <div className={`text-sm ${currentStep === step.number ? 'text-pink-500' : 'text-gray-500'}`}>
            {step.title}
          </div>
          {index < steps.length - 1 && (
            <div className="absolute w-[calc(100%-2rem)] h-[2px] bg-pink-100 -z-10"
                 style={{ left: 'calc(50% + 1rem)', top: '1rem', transform: 'translateX(-50%)' }} />
          )}
        </div>
      ))}
    </div>
  );
}

// 基础信息表单
function BasicInfoForm() {
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [age, setAge] = useState('18');
  const { nextStep } = useAssessment();

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">基础信息</h2>
      
      {/* 性别选择 */}
      <div className="mb-8">
        <label className="block text-gray-700 mb-4">性别</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setGender('male')}
            className={`
              p-6 rounded-xl border-2 transition-all
              ${gender === 'male' 
                ? 'border-pink-500 bg-pink-50' 
                : 'border-gray-200 hover:border-pink-200'}
            `}
          >
            <div className="text-4xl mb-2">👨</div>
            <div className="font-medium">男</div>
          </button>
          <button
            onClick={() => setGender('female')}
            className={`
              p-6 rounded-xl border-2 transition-all
              ${gender === 'female' 
                ? 'border-pink-500 bg-pink-50' 
                : 'border-gray-200 hover:border-pink-200'}
            `}
          >
            <div className="text-4xl mb-2">👩</div>
            <div className="font-medium">女</div>
          </button>
        </div>
      </div>

      {/* 年龄选择 */}
      <div className="mb-8">
        <label className="block text-gray-700 mb-2">年龄</label>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
        >
          {Array.from({ length: 83 }, (_, i) => i + 18).map(age => (
            <option key={age} value={age}>
              {age} 岁
            </option>
          ))}
        </select>
      </div>

      {/* 下一步按钮 */}
      <button
        onClick={nextStep}
        disabled={!gender}
        className="w-full py-3 px-6 bg-pink-500 text-white rounded-full font-medium
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-pink-600 transition-colors"
      >
        下一步
      </button>
    </div>
  );
}

function AssessmentContent() {
  const { state } = useAssessment();
  
  return (
    <div className="max-w-4xl mx-auto py-8">
      <StepIndicator currentStep={state.currentStep} />
      {state.currentStep === 0 && <BasicInfoForm />}
      {/* 其他步骤的组件... */}
    </div>
  );
}

export default function AssessmentPage() {
  return (
    <AssessmentProvider>
      <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
        <AssessmentContent />
      </main>
    </AssessmentProvider>
  );
} 