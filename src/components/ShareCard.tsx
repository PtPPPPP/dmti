import React from 'react'
import { EventResult, AthleteProfile } from '../types'

interface ShareCardProps {
  athlete: AthleteProfile
  event: EventResult
  athleteMatchPercent: number
  matchPercent: number
}

const ShareCard = React.memo(function ShareCard({ athlete, event, athleteMatchPercent, matchPercent }: ShareCardProps) {
  return (
    <div className="w-full max-w-md mx-auto" id="share-card">
      <div
        className="relative overflow-hidden rounded-lg border border-dlt-purple/20 p-6"
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #120826 50%, #0A1628 100%)',
        }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]">
          <span className="text-8xl">{event.emoji}</span>
        </div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-dlt-purple/5 blur-xl" />
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-dlt-gold/5 blur-xl" />

        {/* Diamond pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(168,85,247,0.5) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(168,85,247,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dlt-purple/20 bg-dlt-purple/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-dlt-purple animate-pulse-gold" />
              <span className="text-[10px] font-mono text-dlt-purple/60 tracking-wider uppercase">
                DIAMOND LEAGUE TYPE INDICATOR
              </span>
            </div>
            <h2 className="font-display text-lg font-bold text-white/40">
              你的竞技气质接近谁？
            </h2>
          </div>

          {/* Result — Athlete */}
          <div className="text-center mb-4">
            <div className="font-display text-2xl md:text-3xl font-black text-white mb-1"
                 style={{ textShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}>
              {athlete.name}
            </div>
            <div className="text-sm text-dlt-purple/60 italic mb-1">
              「{athlete.title}」
            </div>
            <div className="text-[10px] text-white/30 font-mono mb-2">
              {athlete.country} · {athlete.event}
            </div>
            <div className="inline-block px-3 py-1 rounded bg-dlt-purple/10 border border-dlt-purple/20">
              <span className="text-xs font-mono text-dlt-purple">
                气质匹配 {athleteMatchPercent}%
              </span>
            </div>
          </div>

          {/* Vibe keywords */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-3">
            {athlete.vibeKeywords.map(kw => (
              <span
                key={kw}
                className="px-2 py-0.5 rounded-sm bg-dlt-purple/5 border border-dlt-purple/10 text-[10px] text-dlt-purple/50 font-mono"
              >
                #{kw}
              </span>
            ))}
          </div>

          {/* Event secondary */}
          <div className="text-center mb-3 pt-3 border-t border-white/5">
            <span className="text-[10px] text-white/15 font-mono">项目人格</span>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-lg">{event.emoji}</span>
              <span className="text-sm text-white/50 font-bold">{event.name}</span>
              <span className="text-[10px] text-white/20 font-mono">{matchPercent}%</span>
            </div>
          </div>

          {/* Share line */}
          <p className="text-center text-xs text-white/50 italic mb-3 px-2">
            「{athlete.shareLine}」
          </p>

          {/* Share CTA */}
          <div className="text-center pt-3 border-t border-white/5">
            <p className="text-[10px] text-white/20 font-mono">
              来测测你的竞技气质 →
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default ShareCard
