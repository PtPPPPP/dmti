import { EventResult } from '../types'

interface ShareCardProps {
  event: EventResult
  matchPercent: number
}

export default function ShareCard({ event, matchPercent }: ShareCardProps) {
  return (
    <div className="w-full max-w-md mx-auto" id="share-card">
      <div
        className="relative overflow-hidden rounded-lg border border-dlt-gold/20 p-6"
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0D1F3C 50%, #0A1628 100%)',
        }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]">
          <span className="text-8xl">{event.emoji}</span>
        </div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-dlt-gold/5 blur-xl" />
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-dlt-cyan/5 blur-xl" />

        {/* Diamond pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(212,175,55,0.5) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(212,175,55,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dlt-gold/20 bg-dlt-gold/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-dlt-gold animate-pulse-gold" />
              <span className="text-[10px] font-mono text-dlt-gold/60 tracking-wider uppercase">
                DIAMOND LEAGUE TYPE INDICATOR
              </span>
            </div>
            <h2 className="font-display text-lg font-bold text-white/40">
              你是哪项田径项目人格？
            </h2>
          </div>

          {/* Result */}
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">{event.emoji}</div>
            <div className="font-display text-3xl md:text-4xl font-black text-white mb-1"
                 style={{ textShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}>
              {event.name}
            </div>
            <div className="text-base text-dlt-gold/70 font-mono mb-2">
              {event.englishName}
            </div>
            <div className="inline-block px-3 py-1 rounded bg-dlt-gold/10 border border-dlt-gold/20">
              <span className="text-xs font-mono text-dlt-cyan">
                匹配度 {matchPercent}%
              </span>
            </div>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {event.keywords.map(kw => (
              <span
                key={kw}
                className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[10px] text-white/50 font-mono"
              >
                #{kw}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-center text-sm text-white/60 italic mb-4 px-2">
            「{event.subtitle}」
          </p>

          {/* Share CTA */}
          <div className="text-center pt-3 border-t border-white/5">
            <p className="text-[10px] text-white/20 font-mono">
              来测测你的田径人格 →
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
