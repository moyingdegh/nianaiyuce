import React, { useState } from 'react';

export const StartNow = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('提交名字:', name);
  };

  return (
    <div className="relative min-h-[50vh] flex items-center justify-center w-full">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* 分隔装饰 */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-36 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-16 relative">
        <div className="max-w-md mx-auto backdrop-blur-sm">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4 relative inline-block">
              开启你的匹配之旅
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </h2>
            <p className="text-foreground/60 max-w-sm mx-auto">
              只需输入你的名字，AI 将为你找到最合适的伴侣
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-foreground/80 mb-2 text-center"
              >
                输入你的名字
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-foreground/10 
                  bg-foreground/5 backdrop-blur-sm
                  focus:ring-2 focus:ring-primary/50 focus:border-primary
                  transition-all duration-300
                  text-foreground placeholder:text-foreground/40
                  text-center
                  hover:border-primary/30"
                placeholder="请输入名字..."
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            
            <button
              type="submit"
              className="w-full relative group overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 group-hover:animate-gradient-x" />
              <span className="relative block bg-primary group-hover:bg-transparent px-6 py-3 text-white font-medium text-lg
                transition-all duration-300 group-hover:tracking-wider">
                开始匹配
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}; 