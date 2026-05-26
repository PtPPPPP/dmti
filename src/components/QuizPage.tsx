import { useState } from 'react'
import { Question } from '../types'
import ProgressBar from './ProgressBar'

interface QuizPageProps {
  questions: Question[]
  answers: Record<number, number>
  onAnswer: (questionId: number, optionIndex: number) => void
  onBack: () => void
  onComplete: () => void
}

export default function QuizPage({ questions, answers, onAnswer, onBack, onComplete }: QuizPageProps) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const question = questions[currentIdx]
  const selectedAnswer = answers[question.id]
  const isAnswered = selectedAnswer !== undefined
  const isFirst = currentIdx === 0
  const isLast = currentIdx === questions.length - 1

  const handleSelect = (optionIndex: number) => {
    onAnswer(question.id, optionIndex)
  }

  const handleNext = () => {
    if (isLast) {
      onComplete()
    } else {
      setCurrentIdx(currentIdx + 1)
    }
  }

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIdx(currentIdx - 1)
    }
  }

  const answeredCount = Object.keys(answers).length

  return (
    <div className="min-h-screen flex flex-col px-4 py-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="text-white/40 hover:text-white/70 font-mono text-sm transition-colors flex items-center gap-1"
          >
            <span>←</span> 回到热身区
          </button>
          <span className="text-white/20 font-mono text-xs">
            已回答 {answeredCount}/{questions.length}
          </span>
        </div>
        <ProgressBar current={currentIdx + 1} total={questions.length} />
      </div>

      {/* Question card */}
      <div className="flex-1 flex flex-col">
        <div className="mb-8 animate-fade-in" key={`q-${question.id}`}>
          {/* Question number */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-dlt-gold text-sm font-bold">
              Q{question.id}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-dlt-gold/30 to-transparent" />
          </div>

          {/* Question text */}
          <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            {question.text}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8" key={`opts-${question.id}`}>
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx
            const optionLetter = String.fromCharCode(65 + idx)

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-4 rounded-sm border transition-all duration-300 group ${
                  isSelected
                    ? 'border-dlt-gold bg-dlt-gold/10 shadow-lg'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
                }`}
                style={isSelected ? { boxShadow: '0 0 15px rgba(212, 175, 55, 0.15)' } : {}}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border font-mono text-xs flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-dlt-gold bg-dlt-gold text-dlt-darker font-bold'
                        : 'border-white/20 text-white/40 group-hover:border-white/40'
                    }`}
                  >
                    {optionLetter}
                  </span>
                  <span className={`text-sm md:text-base leading-relaxed pt-0.5 ${
                    isSelected ? 'text-white' : 'text-white/70'
                  }`}>
                    {option.text}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className={`font-mono text-sm px-4 py-2 rounded-sm transition-all ${
              isFirst
                ? 'text-white/15 cursor-not-allowed'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            ← 上一题
          </button>

          <div className="flex items-center gap-2 text-white/20 font-mono text-xs">
            <span>{currentIdx + 1}</span>
            <span>/</span>
            <span>{questions.length}</span>
          </div>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`font-mono text-sm font-bold px-6 py-2 rounded-sm transition-all ${
              isAnswered
                ? 'bg-dlt-gold text-dlt-darker hover:bg-dlt-goldLight active:scale-95'
                : 'bg-white/5 text-white/20 cursor-not-allowed'
            }`}
            style={isAnswered ? { boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' } : {}}
          >
            {isLast ? '查看结果 →' : '下一题 →'}
          </button>
        </div>
      </div>
    </div>
  )
}
