# 项目设计文档

## 项目概述
这是一个使用 Next.js 创建的现代 Web 应用程序模板，采用 App Router 架构。

## 目录结构 
.
├── src/
│ ├── app/ # Next.js App Router 页面
│ │ ├── layout.tsx # 根布局组件
│ │ ├── page.tsx # 首页组件
│ │ └── globals.css # 全局样式
│ ├── components/ # 共享组件（待创建）
│ ├── lib/ # 工具函数（待创建）
│ └── types/ # TypeScript 类型定义（待创建）
├── public/ # 静态资源
├── next.config.ts # Next.js 配置
├── tailwind.config.ts # Tailwind CSS 配置
├── tsconfig.json # TypeScript 配置
└── package.json # 项目依赖

## 技术栈
- **框架**: Next.js 15.1
- **语言**: TypeScript 5.x
- **UI**: React 19
- **样式**: Tailwind CSS 3.4
- **字体**: Geist (Sans + Mono)
- **代码规范**: ESLint
- **包管理**: npm/yarn/pnpm

## 关键配置

### TypeScript
- 启用严格模式
- 使用 ES2017 目标
- 配置模块解析和路径别名
- JSX 保留模式

### Tailwind CSS
- 自定义颜色变量支持
- 深色模式配置
- 组件目录内容扫描

### ESLint
- 继承 Next.js 核心规则
- TypeScript 支持
- Web Vitals 优化建议

## 开发规范

### 目录组织
- 页面组件放在 `src/app` 目录
- 共享组件放在 `src/components`
- 工具函数放在 `src/lib`
- 类型定义放在 `src/types`

### 样式管理
- 使用 Tailwind CSS 工具类
- 全局样式在 globals.css
- 支持暗色模式
- 使用 CSS 变量管理主题

### 类型系统
- 所有组件使用 TypeScript
- 严格的类型检查
- 组件 Props 显式类型声明

### 开发工具
- VSCode 推荐配置
- ESLint 代码检查
- TypeScript 类型检查
- 热更新开发服务器

## 启动开发
