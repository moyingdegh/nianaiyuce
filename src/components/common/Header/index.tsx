'use client';

import React from 'react';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-lg font-bold">
          AI Love Match
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
} 