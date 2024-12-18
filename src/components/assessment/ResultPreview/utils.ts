import { Question } from '../Questionnaire/questions';

interface DimensionScore {
  dimension: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface AssessmentResult {
  totalScore: number;
  maxTotalScore: number;
  totalPercentage: number;
  dimensions: DimensionScore[];
  interpretation: string;
  suggestions: string[];
}

// 维度定义
const dimensions = {
  personality: [
    { name: '外向性', questions: ['p1'] },
    { name: '决策方式', questions: ['p2'] },
    // 可以添加更多维度...
  ],
  values: [
    { name: '感情观', questions: ['v1'] },
    // 更多维度...
  ],
  lifestyle: [
    { name: '生活习惯', questions: ['l1'] },
    // 更多维度...
  ],
};

// 计算结果
export function calculateResult(
  type: string,
  answers: Record<string, string>,
  questions: Question[]
): AssessmentResult {
  // 计算总分
  let totalScore = 0;
  let maxTotalScore = 0;

  // 计算每个维度的分数
  const dimensionScores: DimensionScore[] = dimensions[type as keyof typeof dimensions].map(
    (dimension) => {
      let score = 0;
      let maxScore = 0;

      dimension.questions.forEach((questionId) => {
        const question = questions.find((q) => q.id === questionId);
        if (question && answers[questionId]) {
          const answer = question.options.find((opt) => opt.id === answers[questionId]);
          if (answer) {
            score += answer.value;
            maxScore += 4; // 假设每个选项最高分为4
          }
        }
      });

      totalScore += score;
      maxTotalScore += maxScore;

      return {
        dimension: dimension.name,
        score,
        maxScore,
        percentage: (score / maxScore) * 100,
      };
    }
  );

  // 生成解读文案
  const totalPercentage = (totalScore / maxTotalScore) * 100;
  const interpretation = generateInterpretation(totalPercentage, dimensionScores);
  const suggestions = generateSuggestions(dimensionScores);

  return {
    totalScore,
    maxTotalScore,
    totalPercentage,
    dimensions: dimensionScores,
    interpretation,
    suggestions,
  };
}

// 生成解读文案
function generateInterpretation(
  totalPercentage: number,
  dimensions: DimensionScore[]
): string {
  let interpretation = '';

  if (totalPercentage >= 80) {
    interpretation = '你展现出了非常积极和理想的特质。';
  } else if (totalPercentage >= 60) {
    interpretation = '你的整体表现较为平衡。';
  } else {
    interpretation = '你可能需要在某些方面进行调整和改善。';
  }

  // 添加维度具体分析
  dimensions.forEach((dim) => {
    interpretation += `\n在${dim.dimension}方面，`;
    if (dim.percentage >= 80) {
      interpretation += '表现非常出色。';
    } else if (dim.percentage >= 60) {
      interpretation += '表现良好。';
    } else {
      interpretation += '还有提升空间。';
    }
  });

  return interpretation;
}

// 生成建议
function generateSuggestions(dimensions: DimensionScore[]): string[] {
  const suggestions: string[] = [];

  dimensions.forEach((dim) => {
    if (dim.percentage < 60) {
      switch (dim.dimension) {
        case '外向性':
          suggestions.push('可以尝试参加更多社交活动，培养与人交往的能力。');
          break;
        case '决策方式':
          suggestions.push('建议在做决定时多考虑不同的观点和方案。');
          break;
        // 可以添加更多维度的建议...
      }
    }
  });

  return suggestions.length > 0 ? suggestions : ['继续保持目前的良好状态。'];
} 