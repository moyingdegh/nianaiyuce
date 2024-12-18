export function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">AI Love Match</h3>
            <p className="text-foreground/60 text-sm">
              用科技找寻真爱
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">功能</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>AI匹配</li>
              <li>性格测评</li>
              <li>缘分分析</li>
              <li>专业建议</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">关于</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>关于我们</li>
              <li>使用条款</li>
              <li>隐私政策</li>
              <li>联系我们</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">关注我们</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>微信公众号</li>
              <li>微博</li>
              <li>知乎</li>
              <li>抖音</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/60">
          <p>© 2024 AI Love Match. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 