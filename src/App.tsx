import { useState, useCallback } from 'react'
import { Page, AthleteProfile } from './types'
import { questions } from './data/questions'
import { events } from './data/results'
import { athletes } from './data/athletes'
import { calcScores, findBestMatch, findBestAthlete } from './utils/scoring'
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
import Particles from './components/Particles'

const STORAGE_KEY = 'dmti_quiz_state'

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch (err) {
    console.error('localStorage.getItem failed:', err)
    return null
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch (err) {
    console.error('localStorage.setItem failed:', err)
  }
}

function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (err) {
    console.error('localStorage.removeItem failed:', err)
  }
}

interface QuizState {
  page: Page
  answers: Record<number, number>
}

function loadInitialState(): { page: Page; answers: Record<number, number> } {
  const raw = safeGetItem(STORAGE_KEY)
  if (!raw) return { page: 'home', answers: {} }
  try {
    const parsed = JSON.parse(raw) as QuizState
    if (
      parsed &&
      typeof parsed === 'object' &&
      ['home', 'quiz', 'result'].includes(parsed.page) &&
      typeof parsed.answers === 'object'
    ) {
      return { page: parsed.page, answers: parsed.answers }
    }
  } catch {
    // Invalid JSON — ignore
  }
  return { page: 'home', answers: {} }
}

export default function App() {
  const initial = loadInitialState()
  const [page, setPage] = useState<Page>(initial.page === 'result' ? 'home' : initial.page)
  const [answers, setAnswers] = useState<Record<number, number>>(initial.answers)
  const [result, setResult] = useState<{
    event: typeof events[0]
    secondaryEvent: typeof events[0]
    matchPercent: number
    athlete: AthleteProfile
    athleteMatchPercent: number
  } | null>(null)

  const handleStart = useCallback(() => {
    setAnswers({})
    setResult(null)
    setPage('quiz')
    safeSetItem(STORAGE_KEY, JSON.stringify({ page: 'quiz', answers: {} }))
  }, [])

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    setAnswers(prev => {
      const next = { ...prev, [questionId]: optionIndex }
      safeSetItem(STORAGE_KEY, JSON.stringify({ page: 'quiz', answers: next }))
      return next
    })
  }, [])

  const handleComplete = useCallback(() => {
    try {
      const scores = calcScores(questions, answers)
      const match = findBestMatch(scores, events)
      const athleteMatch = findBestAthlete(scores, athletes)
      setResult({
        event: match.event,
        secondaryEvent: match.secondaryEvent,
        matchPercent: match.matchPercent,
        athlete: athleteMatch.athlete,
        athleteMatchPercent: athleteMatch.matchPercent,
      })
      setPage('result')
      safeRemoveItem(STORAGE_KEY)
    } catch (err) {
      console.error('Failed to calculate result:', err)
      // Reset to home on failure
      setAnswers({})
      setPage('home')
      safeRemoveItem(STORAGE_KEY)
    }
  }, [answers])

  const handleRestart = useCallback(() => {
    setAnswers({})
    setResult(null)
    setPage('quiz')
    safeSetItem(STORAGE_KEY, JSON.stringify({ page: 'quiz', answers: {} }))
  }, [])

  const handleBackToHome = useCallback(() => {
    setPage('home')
    safeRemoveItem(STORAGE_KEY)
  }, [])

  return (
    <div className="relative min-h-screen bg-dlt-darker text-white overflow-hidden">
      {/* Background effects */}
      <Particles />

      {/* Top scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-repeat-y opacity-[0.015]"
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 4px)',
             }} />
      </div>

      {/* Pages */}
      <div className="relative z-10">
        {page === 'home' && <HomePage onStart={handleStart} />}

        {page === 'quiz' && (
          <QuizPage
            questions={questions}
            answers={answers}
            onAnswer={handleAnswer}
            onBack={handleBackToHome}
            onComplete={handleComplete}
          />
        )}

        {page === 'result' && result && (
          <ResultPage
            event={result.event}
            secondaryEvent={result.secondaryEvent}
            matchPercent={result.matchPercent}
            athlete={result.athlete}
            athleteMatchPercent={result.athleteMatchPercent}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  )
}
