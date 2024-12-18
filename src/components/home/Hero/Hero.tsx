import React from 'react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[60vh] flex items-center justify-center w-full">
      {/* 增强的背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-pink-500/5" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* 动态装饰元素 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* 浮动装饰 */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-pink-500/20 rounded-full animate-float-delay" />
      
      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 relative">
        <div className="text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
              AI Love Match
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50 -z-10" />
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm">
            让AI为你找到最适合的另一半
            <span className="block mt-2 text-lg text-foreground/60">
              科技赋能，缘分不再随机
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}; 