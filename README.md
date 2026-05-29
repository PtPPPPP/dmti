# DLTI — 钻石联赛人格测试

Diamond League Type Indicator：12 道题测出你和哪位田径运动员的竞技气质最接近。

## 功能特性

- **12 道趣味测试题** — 围绕竞技心态、训练风格、比赛气质等维度设计
- **运动员匹配算法** — 根据答案自动匹配最契合的田径运动员类型
- **结果分享卡片** — 一键生成可保存/分享的个性化结果图片

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18 |
| 构建工具 | Vite |
| 语言 | TypeScript |
| 样式 | Tailwind CSS |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开终端输出的地址（默认 `http://localhost:5173`）。

## 构建部署

```bash
# 生产构建，输出到 dist/
npm run build

# 预览生产构建
npm run preview
```

**Vercel 部署：** 将项目推送到 GitHub 仓库后，在 Vercel 中导入即可自动构建部署。框架预设选择 Vite，其余保持默认配置。

## 项目结构

```
src/
├── components/      # 页面与 UI 组件
│   ├── HomePage.tsx     # 首页
│   ├── QuizPage.tsx     # 答题页
│   ├── ResultPage.tsx   # 结果页
│   ├── ShareCard.tsx    # 分享卡片
│   ├── ProgressBar.tsx  # 进度条
│   └── Particles.tsx    # 粒子背景
├── data/            # 静态数据
│   ├── questions.ts     # 题目数据
│   ├── results.ts       # 结果数据
│   └── athletes.ts      # 运动员数据
├── types/           # TypeScript 类型定义
├── utils/           # 工具函数
│   └── scoring.ts       # 匹配打分算法
├── App.tsx          # 应用入口
└── main.tsx         # 挂载入口
```

## 数据说明

运动员数据存放于 `src/data/athletes.ts`，题目与结果数据分别存放于 `src/data/questions.ts` 和 `src/data/results.ts`。如需更新题目或添加新运动员，直接编辑对应文件即可。

## 贡献指南

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/your-feature`）
3. 提交更改（`git commit -m 'feat: add your feature'`）
4. 推送分支（`git push origin feature/your-feature`）
5. 提交 Pull Request

欢迎 Issue 和 PR！

## 许可证

[MIT](LICENSE)
