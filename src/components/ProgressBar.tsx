interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2 font-mono text-xs">
        <span className="text-white/40">
          Q{current} / {total}
        </span>
        <span className="text-dlt-cyan">{percent}%</span>
      </div>

      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-dlt-gold via-dlt-orange to-dlt-cyan transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />

        {/* Diamond markers at 25/50/75 */}
        <div className="absolute inset-y-0 left-0 w-full flex justify-between px-1">
          {[25, 50, 75].map(mark => (
            <div
              key={mark}
              className="relative h-full"
              style={{ left: `${mark}%` }}
            >
              <div className={`absolute top-0 bottom-0 w-px ${percent >= mark ? 'bg-white/30' : 'bg-white/10'}`} />
            </div>
          ))}
        </div>

        {percent > 0 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dlt-gold shadow-lg transition-all duration-500 ease-out"
            style={{
              left: `calc(${percent}% - 4px)`,
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.6), 0 0 20px rgba(212, 175, 55, 0.3)',
            }}
          />
        )}
      </div>

      {/* Segment indicators */}
      <div className="flex justify-between mt-1.5 px-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-12 h-0.5 rounded-full transition-colors duration-300 ${
              i < Math.ceil((current / total) * 4) ? 'bg-dlt-gold/60' : 'bg-white/5'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
