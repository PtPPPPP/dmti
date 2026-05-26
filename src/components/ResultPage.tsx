import { useState } from 'react'
import { EventResult, AthleteProfile } from '../types'
import ShareCard from './ShareCard'

interface ResultPageProps {
  event: EventResult
  secondaryEvent: EventResult
  matchPercent: number
  athlete: AthleteProfile
  athleteMatchPercent: number
  onRestart: () => void
}

export default function ResultPage({ event, secondaryEvent, matchPercent, athlete, athleteMatchPercent, onRestart }: ResultPageProps) {
  const [copied, setCopied] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const handleShare = async () => {
    const text = `${event.emoji} 我在钻石联赛人格测试中测出了「${event.name}」！\n${event.subtitle}\n\n你的田径人格是什么？来测测👉`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setShowCard(true)
    }
  }

  const getPercentColor = (pct: number) => {
    if (pct >= 95) return 'text-dlt-green'
    if (pct >= 80) return 'text-dlt-cyan'
    if (pct >= 65) return 'text-dlt-gold'
    return 'text-white/60'
  }

  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto">
      {/* Result header */}
      <div className="text-center mb-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dlt-gold/20 bg-dlt-gold/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-dlt-green animate-pulse-gold" />
          <span className="text-[10px] font-mono text-dlt-green tracking-widest uppercase">
            RESULT COMPLETE
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-black text-white mb-2"
            style={{ textShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}>
          你的田径项目人格
        </h1>

        {/* Emoji */}
        <div className="text-5xl md:text-6xl my-4 animate-float">{event.emoji}</div>

        {/* Event name */}
        <div className="font-display text-5xl md:text-7xl font-black my-3"
             style={{
               background: 'linear-gradient(135deg, #D4AF37, #F0D060, #00D4F0)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               textShadow: 'none',
               filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.3))',
             }}>
          {event.name}
        </div>

        <div className="text-xl md:text-2xl text-white/40 font-light tracking-widest mb-4">
          {event.englishName}
        </div>

        {/* Match percent */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-dlt-cyan/20 bg-dlt-cyan/5">
          <span className="text-xs text-white/40 font-mono">MATCH</span>
          <span className={`font-display text-2xl font-bold ${getPercentColor(matchPercent)}`}
                style={matchPercent >= 80 ? { textShadow: '0 0 20px rgba(0, 212, 240, 0.4)' } : {}}>
            {matchPercent}%
          </span>
        </div>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 animate-slide-up">
        {event.keywords.map(kw => (
          <span
            key={kw}
            className="px-3 py-1 rounded-sm bg-dlt-gold/5 border border-dlt-gold/10 text-xs text-dlt-gold/70 font-mono"
          >
            #{kw}
          </span>
        ))}
      </div>

      {/* Subtitle / verdict */}
      <div className="text-center mb-10 animate-slide-up">
        <div className="inline-block relative">
          <div className="absolute -left-3 -right-3 -top-2 -bottom-2 border border-dlt-gold/10 rounded" />
          <p className="relative text-lg md:text-xl text-white/80 font-medium italic px-4">
            「{event.subtitle}」
          </p>
        </div>
      </div>

      {/* Personality details */}
      <div className="space-y-6 mb-10 animate-slide-up">
        {/* Description */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-gold" />
            <h3 className="font-display text-xs text-dlt-gold tracking-wider uppercase">人格画像</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Advantage */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-green" />
            <h3 className="font-display text-xs text-dlt-green tracking-wider uppercase">核心优势</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {event.advantage}
          </p>
        </div>

        {/* Blind spot */}
        <div className="p-5 rounded-sm border border-dlt-orange/20 bg-dlt-orange/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-orange" />
            <h3 className="font-display text-xs text-dlt-orange tracking-wider uppercase">潜在盲点</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {event.blindSpot}
          </p>
        </div>

        {/* Highlight moment */}
        <div className="p-5 rounded-sm border border-dlt-purple/20 bg-dlt-purple/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-purple" />
            <h3 className="font-display text-xs text-dlt-purple tracking-wider uppercase">你的高光时刻</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {event.highlightMoment}
          </p>
        </div>

        {/* Secondary result */}
        <div className="p-5 rounded-sm border border-dlt-cyan/20 bg-dlt-cyan/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-cyan" />
            <h3 className="font-display text-xs text-dlt-cyan tracking-wider uppercase">隐藏副项</h3>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{secondaryEvent.emoji}</span>
            <div>
              <span className="text-white/80 font-bold text-sm">{secondaryEvent.name}</span>
              <span className="text-white/30 font-mono text-xs ml-2">{secondaryEvent.englishName}</span>
            </div>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            你的性格里也藏着{secondaryEvent.name}的特质：{secondaryEvent.subtitle}
          </p>
        </div>

        {/* Athlete match */}
        <div className="p-5 rounded-sm border border-dlt-purple/20 bg-dlt-purple/[0.02]">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-purple" />
            <h3 className="font-display text-xs text-dlt-purple tracking-wider uppercase">竞技气质接近</h3>
            <span className="text-[10px] text-white/15 font-mono ml-auto">
              人格气质匹配 · 非成绩或身体条件
            </span>
          </div>

          {/* Athlete name + info */}
          <div className="mb-4">
            <div className="flex items-end gap-3 flex-wrap">
              <span className="font-display text-2xl md:text-3xl font-bold text-white">
                {athlete.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-dlt-purple/15 bg-dlt-purple/[0.05]">
                <span className="text-xs text-dlt-purple/60 font-mono">
                  气质匹配 {athleteMatchPercent}%
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-white/30 font-mono">{athlete.country}</span>
              <span className="text-white/10">·</span>
              <span className="text-xs text-white/30 font-mono">{athlete.event}</span>
            </div>
            <p className="text-sm text-dlt-purple/60 italic mt-2">「{athlete.title}」— {athlete.summary}</p>
          </div>

          {/* Personality */}
          <div className="mb-4">
            <h4 className="text-[10px] text-white/20 font-mono uppercase tracking-wider mb-2">TA 的竞技人格</h4>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              {athlete.personality}
            </p>
          </div>

          {/* Why similar */}
          <div className="mb-4 p-4 rounded-sm border border-dlt-purple/10 bg-dlt-purple/[0.03]">
            <h4 className="text-[10px] text-dlt-purple/50 font-mono uppercase tracking-wider mb-2">
              为什么你的气质接近 TA
            </h4>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              {athlete.whySimilar}
            </p>
          </div>

          {/* Strengths */}
          <div className="mb-3">
            <h4 className="text-[10px] text-white/20 font-mono uppercase tracking-wider mb-2">TA 的核心特质</h4>
            <div className="flex flex-wrap gap-1.5">
              {athlete.strengths.map(s => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-xs text-white/50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Vibe keywords */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {athlete.vibeKeywords.map(kw => (
              <span
                key={kw}
                className="px-2 py-0.5 rounded-sm bg-dlt-purple/5 border border-dlt-purple/10 text-xs text-dlt-purple/60 font-mono"
              >
                #{kw}
              </span>
            ))}
          </div>

          {/* Share line */}
          <div className="text-center pt-3 border-t border-dlt-purple/10">
            <p className="text-sm text-dlt-purple/40 italic">
              「{athlete.shareLine}」
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-slide-up">
        <button
          onClick={handleShare}
          className="flex-1 py-3 bg-gradient-to-r from-dlt-gold to-dlt-orange hover:from-dlt-goldLight hover:to-dlt-gold text-dlt-darker font-display font-bold text-sm rounded-sm transition-all active:scale-95 flex items-center justify-center gap-2"
          style={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
        >
          {copied ? (
            <>
              <span>✓</span> 已复制分享文案
            </>
          ) : (
            <>
              <span>↗</span> 复制分享文案
            </>
          )}
        </button>

        <button
          onClick={onRestart}
          className="flex-1 py-3 border border-white/10 hover:border-white/30 text-white/60 hover:text-white font-mono text-sm rounded-sm transition-all"
        >
          重新测试 ↻
        </button>
      </div>

      {/* Share card preview */}
      {showCard && (
        <div className="mb-8 animate-slide-up">
          <div className="text-center mb-3">
            <span className="text-xs text-white/30 font-mono">长按或截图保存分享卡片</span>
          </div>
          <ShareCard event={event} matchPercent={matchPercent} />
        </div>
      )}

      {/* Footer */}
      <div className="text-center pt-6 border-t border-white/5">
        <p className="text-xs text-white/15 font-mono">
          Diamond League Type Indicator &middot; 纯属娱乐 &middot; 不代表 Diamond League 官方观点
        </p>
      </div>
    </div>
  )
}
