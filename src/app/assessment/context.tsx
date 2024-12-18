'use client';

import React, { createContext, useContext, useReducer } from 'react';
import { AssessmentState, AssessmentType, Answer } from './types';

interface AssessmentContextType {
  state: AssessmentState;
  selectType: (type: AssessmentType) => void;
  submitAnswer: (answer: Answer) => void;
  nextStep: () => void;
  prevStep: () => void;
  complete: () => void;
}

const initialState: AssessmentState = {
  currentType: null,
  currentStep: 0,
  answers: [],
  isCompleted: false,
};

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  const selectType = (type: AssessmentType) => {
    dispatch({ type: 'SELECT_TYPE', payload: type });
  };

  const submitAnswer = (answer: Answer) => {
    dispatch({ type: 'SUBMIT_ANSWER', payload: answer });
  };

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const complete = () => {
    dispatch({ type: 'COMPLETE' });
  };

  return (
    <AssessmentContext.Provider value={{ 
      state, 
      selectType, 
      submitAnswer, 
      nextStep, 
      prevStep, 
      complete 
    }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within AssessmentProvider');
  }
  return context;
};

function assessmentReducer(state: AssessmentState, action: any): AssessmentState {
  switch (action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        currentType: action.payload,
        currentStep: 1,
      };
    case 'SUBMIT_ANSWER':
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(0, state.currentStep - 1),
      };
    case 'COMPLETE':
      return {
        ...state,
        isCompleted: true,
      };
    default:
      return state;
  }
} 