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

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [answers, setAnswers] = useState<Record<number, number>>({})
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
  }, [])

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }, [])

  const handleComplete = useCallback(() => {
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
  }, [answers])

  const handleRestart = useCallback(() => {
    setAnswers({})
    setResult(null)
    setPage('quiz')
  }, [])

  const handleBackToHome = useCallback(() => {
    setPage('home')
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
