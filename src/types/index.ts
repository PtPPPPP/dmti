export type Dimension =
  | 'speed'       // 速度 / 冲刺型
  | 'power'       // 力量 / 爆发型
  | 'endurance'   // 耐力 / 长线型
  | 'rhythm'      // 节奏 / 稳定型
  | 'technique'   // 技术 / 精密型
  | 'courage'     // 胆量 / 进攻型
  | 'elegance'    // 优雅 / 表现型
  | 'teamwork'    // 团队 / 配合型
  | 'focus'       // 专注 / 抗压型

export interface Option {
  text: string
  scores: Partial<Record<Dimension, number>>
}

export interface Question {
  id: number
  text: string
  options: Option[]
}

export interface EventResult {
  id: string
  name: string
  englishName: string
  emoji: string
  subtitle: string
  keywords: string[]
  description: string
  advantage: string
  blindSpot: string
  highlightMoment: string
  shareText: string
  /** Dimension vector for scoring, values 1-5 */
  vector: Record<Dimension, number>
}

export interface UserScores extends Record<Dimension, number> {}

export interface AthleteProfile {
  id: string
  name: string
  country: string
  event: string
  title: string
  summary: string
  personality: string
  whySimilar: string
  strengths: string[]
  vibeKeywords: string[]
  dimensionWeights: Record<Dimension, number>
  relatedResultIds?: string[]
  shareLine: string
}

export type Page = 'home' | 'quiz' | 'result'
