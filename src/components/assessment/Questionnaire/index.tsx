'use client';

import { useAssessment } from '@/app/assessment/context';
import { Question } from '@/app/assessment/types';
import { questions } from '@/app/assessment/questions';

export default function Questionnaire() {
  const { state, submitAnswer, nextStep, prevStep, complete } = useAssessment();
  
  const currentQuestions = questions[state.currentType!] || [];
  const currentQuestion = currentQuestions[state.currentStep - 1];

  if (!currentQuestion) {
    return null;
  }

  const handleSelect = (optionId: string) => {
    submitAnswer({
      questionId: currentQuestion.id,
      optionId: optionId,
    });

    if (state.currentStep >= currentQuestions.length) {
      complete();
    } else {
      nextStep();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>
      <div className="space-y-3">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
          >
            {option.text}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={state.currentStep === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          上一题
        </button>
        <div className="text-sm text-gray-500">
          {state.currentStep} / {currentQuestions.length}
        </div>
      </div>
    </div>
  );
} 