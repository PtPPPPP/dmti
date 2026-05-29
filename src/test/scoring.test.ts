import { describe, it, expect } from 'vitest'
import { calcScores, createEmptyScores, normalizeScores } from '../utils/scoring'
import { questions } from '../data/questions'

describe('Scoring Utils', () => {
  it('createEmptyScores returns all zeros', () => {
    const scores = createEmptyScores()
    expect(scores.speed).toBe(0)
    expect(scores.power).toBe(0)
    expect(scores.endurance).toBe(0)
    expect(scores.rhythm).toBe(0)
    expect(scores.technique).toBe(0)
    expect(scores.courage).toBe(0)
    expect(scores.elegance).toBe(0)
    expect(scores.teamwork).toBe(0)
    expect(scores.focus).toBe(0)
  })

  it('calcScores returns empty scores when no answers', () => {
    const scores = calcScores(questions, {})
    expect(scores).toEqual(createEmptyScores())
  })

  it('calcScores correctly sums scores from answers', () => {
    const answers = { 1: 0, 2: 0 } // First option for questions 1 and 2
    const scores = calcScores(questions, answers)
    
    // Question 1, option 0: speed: 4, power: 3, courage: 4
    // Question 2, option 0: speed: 4, power: 4, courage: 3
    expect(scores.speed).toBe(8)
    expect(scores.power).toBe(7)
    expect(scores.courage).toBe(7)
    expect(scores.endurance).toBe(0)
  })

  it('normalizeScores scales correctly', () => {
    const scores = createEmptyScores()
    scores.speed = 10
    const normalized = normalizeScores(scores)
    expect(normalized.speed).toBeLessThanOrEqual(5)
    expect(normalized.speed).toBeGreaterThan(0)
  })
})
