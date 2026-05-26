import { UserScores, EventResult, AthleteProfile, Question, Dimension } from '../types'

const DIMENSIONS: Dimension[] = [
  'speed', 'power', 'endurance', 'rhythm', 'technique',
  'courage', 'elegance', 'teamwork', 'focus',
]

export function createEmptyScores(): UserScores {
  return {
    speed: 0,
    power: 0,
    endurance: 0,
    rhythm: 0,
    technique: 0,
    courage: 0,
    elegance: 0,
    teamwork: 0,
    focus: 0,
  }
}

export function calcScores(questions: Question[], answers: Record<number, number>): UserScores {
  const scores = createEmptyScores()

  for (const question of questions) {
    const selectedIdx = answers[question.id]
    if (selectedIdx === undefined) continue

    const option = question.options[selectedIdx]
    if (!option) continue

    for (const [dim, value] of Object.entries(option.scores)) {
      scores[dim as Dimension] += value
    }
  }

  return scores
}

function cosineSimilarity(a: Record<Dimension, number>, b: Record<Dimension, number>): number {
  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (const dim of DIMENSIONS) {
    dotProduct += a[dim] * b[dim]
    normA += a[dim] * a[dim]
    normB += b[dim] * b[dim]
  }

  if (normA === 0 || normB === 0) return 0
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
}

export function normalizeScores(scores: UserScores): UserScores {
  const maxPossible = 12 * 5
  const normalized = { ...scores }

  for (const dim of DIMENSIONS) {
    normalized[dim] = Math.min(scores[dim] / maxPossible * 5, 5)
  }

  return normalized
}

export function findBestMatch(scores: UserScores, events: EventResult[]): {
  event: EventResult
  matchPercent: number
  secondaryEvent: EventResult
  allMatches: Array<{ event: EventResult; score: number; percent: number }>
} {
  const normalizedScores = normalizeScores(scores)
  const similarities = events.map(event => ({
    event,
    score: cosineSimilarity(normalizedScores, event.vector),
    percent: 0,
  }))

  const maxScore = Math.max(...similarities.map(s => s.score), 0.0001)

  similarities.forEach(s => {
    s.percent = Math.round((s.score / maxScore) * 100)
  })

  similarities.sort((a, b) => b.score - a.score)

  const best = similarities[0]
  const secondary = similarities[1]

  return {
    event: best.event,
    matchPercent: best.percent,
    secondaryEvent: secondary.event,
    allMatches: similarities,
  }
}

export function findBestAthlete(scores: UserScores, athletes: AthleteProfile[]): {
  athlete: AthleteProfile
  matchPercent: number
} {
  const normalizedScores = normalizeScores(scores)
  const similarities = athletes.map(athlete => ({
    athlete,
    score: cosineSimilarity(normalizedScores, athlete.dimensionWeights),
  }))

  const maxScore = Math.max(...similarities.map(s => s.score), 0.0001)
  similarities.sort((a, b) => b.score - a.score)

  return {
    athlete: similarities[0].athlete,
    matchPercent: Math.round((similarities[0].score / maxScore) * 100),
  }
}
