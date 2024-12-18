// 问题类型定义
export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple';
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}

// 测评类型对应的问题集
export const questionSets: Record<string, Question[]> = {
  personality: [
    {
      id: 'p1',
      text: '在社交场合中,你通常会:',
      type: 'single',
      options: [
        { id: 'p1_1', text: '主动与他人交谈,享受社交', value: 1 },
        { id: 'p1_2', text: '等待他人来与你交谈', value: 2 },
        { id: 'p1_3', text: '倾向于与熟悉的人交谈', value: 3 },
        { id: 'p1_4', text: '更喜欢独处或避免社交', value: 4 },
      ],
    },
    {
      id: 'p2',
      text: '在做决定时,你更倾向于:',
      type: 'single',
      options: [
        { id: 'p2_1', text: '依靠直觉和感受', value: 1 },
        { id: 'p2_2', text: '分析利弊后决定', value: 2 },
        { id: 'p2_3', text: '参考他人意见', value: 3 },
        { id: 'p2_4', text: '遵循过往经验', value: 4 },
      ],
    },
    // 更多问题...
  ],
  
  values: [
    {
      id: 'v1',
      text: '你认为一段理想的感情关系最重要的是:',
      type: 'multiple',
      options: [
        { id: 'v1_1', text: '相互理解与支持', value: 1 },
        { id: 'v1_2', text: '共同的生活目标', value: 2 },
        { id: 'v1_3', text: '激情与浪漫', value: 3 },
        { id: 'v1_4', text: '稳定与安全感', value: 4 },
      ],
    },
    // 更多问题...
  ],
  
  lifestyle: [
    {
      id: 'l1',
      text: '你平时的作息时间是:',
      type: 'single',
      options: [
        { id: 'l1_1', text: '早睡早起', value: 1 },
        { id: 'l1_2', text: '晚睡晚起', value: 2 },
        { id: 'l1_3', text: '不规律', value: 3 },
        { id: 'l1_4', text: '随心所欲', value: 4 },
      ],
    },
    // 更多问题...
  ],
}; 