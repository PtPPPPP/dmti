# DLTI — 钻石联赛人格测试

> **Diamond League Type Indicator** · 12 道题，测出你和哪位田径运动员的竞技气质最接近。

一个基于 React + Vite 的趣味人格测试 Web 应用。通过回答围绕竞技心态、训练风格、比赛气质等维度设计的趣味问题，匹配出与你最契合的田径运动员类型，并一键生成可保存、可分享的个性化结果卡片。

## ✨ 功能特性

- **12 道趣味测试题** — 围绕竞技心态、训练风格、比赛气质等维度精心设计
- **运动员匹配算法** — 根据作答自动计算并匹配最契合的田径运动员类型
- **结果分享卡片** — 一键生成个性化结果图片，支持保存与社交分享
- **沉浸式视觉体验** — 粒子背景、进度条等动效，让答题过程更具仪式感
- **移动端适配** — 响应式布局，手机、平板、桌面端均流畅可用
- **单测覆盖** — 核心打分逻辑配有单元测试，结果可靠可复现

## 🛠 技术栈

| 类别     | 技术              |
| -------- | ----------------- |
| 框架     | React 18          |
| 构建工具 | Vite              |
| 语言     | TypeScript        |
| 样式     | Tailwind CSS      |
| 测试     | Vitest + jsdom    |

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

启动后用浏览器打开终端输出的地址（默认 `http://localhost:5173`）。

## 🧪 测试

```bash
# 运行一次单元测试
npm test

# 进入监听模式（开发时推荐）
npm run test:watch
```

核心匹配打分逻辑位于 `src/utils/scoring.ts`，对应测试见 `src/test/scoring.test.ts`。

## 📦 构建与部署

```bash
# 生产构建，产物输出到 dist/
npm run build

# 本地预览生产构建
npm run preview
```

**Vercel 部署：** 将项目推送到 GitHub 仓库后，在 Vercel 中导入即可自动构建部署。框架预设选择 **Vite**，其余保持默认配置即可。

## 📁 项目结构

```
src/
├── components/      # 页面与 UI 组件
│   ├── HomePage.tsx     # 首页
│   ├── QuizPage.tsx     # 答题页
│   ├── ResultPage.tsx   # 结果页
│   ├── ShareCard.tsx    # 结果分享卡片
│   ├── ProgressBar.tsx  # 答题进度条
│   └── Particles.tsx    # 粒子背景动效
├── data/            # 静态数据
│   ├── questions.ts     # 题目数据
│   ├── results.ts       # 结果数据
│   └── athletes.ts      # 运动员数据
├── types/           # TypeScript 类型定义
├── utils/           # 工具函数
│   └── scoring.ts       # 匹配打分算法
├── test/            # 单元测试
│   ├── scoring.test.ts  # 打分逻辑测试
│   └── setup.ts         # 测试环境配置
├── App.tsx          # 应用根组件
├── main.tsx         # 应用挂载入口
└── index.css        # 全局样式
```

## 📊 数据说明

- 运动员数据：`src/data/athletes.ts`
- 题目数据：`src/data/questions.ts`
- 结果数据：`src/data/results.ts`

如需更新题目、调整匹配规则或添加新运动员，直接编辑上述对应文件即可，无需改动其他逻辑。

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/your-feature`）
3. 提交更改（`git commit -m 'feat: add your feature'`）
4. 推送分支（`git push origin feature/your-feature`）
5. 提交 Pull Request

欢迎通过 Issue 和 PR 参与共建！

## 📄 许可证

[MIT](LICENSE)
