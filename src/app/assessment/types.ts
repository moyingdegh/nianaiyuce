export type AssessmentType = 'personality' | 'values' | 'lifestyle' | 'emotion';

export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    score: number;
  }[];
}

export interface Answer {
  questionId: string;
  optionId: string;
}

export interface AssessmentState {
  currentType: AssessmentType | null;
  currentStep: number;
  answers: Answer[];
  isCompleted: boolean;
} 