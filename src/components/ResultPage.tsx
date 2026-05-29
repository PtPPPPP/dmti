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
    const text = `💎 我在钻石联赛人格测试中测出了「${athlete.name}」的气质！\n${athlete.title} — ${athlete.summary}\n\n${athlete.shareLine}\n\n你的竞技气质接近谁？来测测👉`
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
      {/* Result header — Athlete as hero */}
      <div className="text-center mb-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dlt-purple/20 bg-dlt-purple/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-dlt-purple animate-pulse-gold" />
          <span className="text-[10px] font-mono text-dlt-purple tracking-widest uppercase">
            RESULT COMPLETE
          </span>
        </div>

        <h1 className="font-display text-2xl md:text-3xl font-black text-white mb-2"
            style={{ textShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}>
          你的竞技气质接近
        </h1>

        {/* Athlete name */}
        <div className="font-display text-4xl md:text-6xl font-black my-3"
             style={{
               background: 'linear-gradient(135deg, #A855F7, #C084FC, #D4AF37)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.3))',
             }}>
          {athlete.name}
        </div>

        {/* Title + summary */}
        <div className="text-lg md:text-xl text-dlt-purple/60 italic mt-2 mb-4">
          「{athlete.title}」
        </div>
        <p className="text-sm md:text-base text-white/50 max-w-md mx-auto leading-relaxed">
          {athlete.summary}
        </p>

        {/* Badges: country, event */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 font-mono">
            {athlete.country}
          </span>
          <span className="px-3 py-1 rounded-full border border-dlt-purple/20 bg-dlt-purple/5 text-xs text-dlt-purple/60 font-mono">
            {athlete.event}
          </span>
        </div>

        {/* Match percent */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-dlt-purple/20 bg-dlt-purple/5 mt-5">
          <span className="text-xs text-white/40 font-mono">气质匹配</span>
          <span className={`font-display text-2xl font-bold ${getPercentColor(athleteMatchPercent)}`}
                style={athleteMatchPercent >= 80 ? { textShadow: '0 0 20px rgba(168, 85, 247, 0.4)' } : {}}>
            {athleteMatchPercent}%
          </span>
        </div>
      </div>

      {/* Vibe keywords */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 animate-slide-up">
        {athlete.vibeKeywords.map(kw => (
          <span
            key={kw}
            className="px-3 py-1 rounded-sm bg-dlt-purple/5 border border-dlt-purple/10 text-xs text-dlt-purple/70 font-mono"
          >
            #{kw}
          </span>
        ))}
      </div>

      {/* Athlete personality details */}
      <div className="space-y-6 mb-10 animate-slide-up">
        {/* Personality */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-purple" />
            <h3 className="font-display text-xs text-dlt-purple tracking-wider uppercase">TA 的竞技人格</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {athlete.personality}
          </p>
        </div>

        {/* Why similar */}
        <div className="p-5 rounded-sm border border-dlt-purple/20 bg-dlt-purple/[0.03]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-gold" />
            <h3 className="font-display text-xs text-dlt-gold tracking-wider uppercase">为什么是你</h3>
          </div>
          <p className="text-sm md:text-base text-white/75 leading-relaxed">
            {athlete.whySimilar}
          </p>
        </div>

        {/* Strengths */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-green" />
            <h3 className="font-display text-xs text-dlt-green tracking-wider uppercase">核心特质</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {athlete.strengths.map(s => (
              <span
                key={s}
                className="px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-sm text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8 animate-slide-up">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
        <span className="text-[10px] text-white/15 font-mono tracking-widest">你的项目人格</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
      </div>

      {/* Secondary: Event result */}
      <div className="space-y-6 mb-10 animate-slide-up">
        {/* Event header */}
        <div className="text-center">
          <div className="text-4xl mb-2">{event.emoji}</div>
          <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
            {event.name}
          </div>
          <div className="text-sm text-white/30 font-mono mb-2">{event.englishName}</div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dlt-cyan/10 bg-dlt-cyan/5">
            <span className="text-[10px] text-white/30 font-mono">项目匹配</span>
            <span className={`font-display text-lg font-bold ${getPercentColor(matchPercent)}`}>
              {matchPercent}%
            </span>
          </div>
          <p className="text-sm text-white/50 italic mt-3">「{event.subtitle}」</p>
        </div>

        {/* Event keywords */}
        <div className="flex flex-wrap justify-center gap-2">
          {event.keywords.map(kw => (
            <span
              key={kw}
              className="px-2 py-0.5 rounded-sm bg-dlt-gold/5 border border-dlt-gold/10 text-[10px] text-dlt-gold/50 font-mono"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* Event description */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-dlt-gold" />
            <h3 className="font-display text-xs text-dlt-gold tracking-wider uppercase">项目画像</h3>
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

        {/* Secondary event */}
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
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-slide-up">
        <button
          onClick={handleShare}
          className="flex-1 py-3 bg-gradient-to-r from-dlt-purple to-dlt-gold hover:from-dlt-purpleLight hover:to-dlt-goldLight text-white font-display font-bold text-sm rounded-sm transition-all active:scale-95 flex items-center justify-center gap-2"
          style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}
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
          <ShareCard athlete={athlete} event={event} athleteMatchPercent={athleteMatchPercent} matchPercent={matchPercent} />
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
