interface HomePageProps {
  onStart: () => void
}

export default function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dlt-gold/30 bg-dlt-gold/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-dlt-gold animate-pulse-gold" />
          <span className="text-xs font-mono text-dlt-gold tracking-widest uppercase">
            DIAMOND LEAGUE TYPE INDICATOR
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 animate-slide-up"
          style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.3)' }}
        >
          <span className="text-white">测测你是哪一项</span>
          <br />
          <span className="bg-gradient-to-r from-dlt-gold via-dlt-goldLight to-dlt-cyan bg-clip-text text-transparent">
            田径项目人格
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 font-light mb-3 animate-fade-in">
          不是测你跑得快不快
        </p>
        <p className="text-base md:text-lg text-white/40 font-light mb-3 animate-fade-in">
          是测你的性格最像钻石联赛里的哪个田径项目。
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in">
          {['速度', '爆发', '耐力', '节奏', '技巧', '胆量', '优雅', '配合'].map(kw => (
            <span
              key={kw}
              className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/40 bg-white/[0.02]"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-dlt-gold to-dlt-orange hover:from-dlt-goldLight hover:to-dlt-gold text-dlt-darker font-display font-bold text-lg rounded-sm transition-all duration-300 animate-slide-up hover:scale-105 active:scale-95"
          style={{ boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
        >
          <span>开始测试</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Meta info */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/30 font-mono animate-fade-in">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-dlt-gold" />
            12 道题
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-dlt-cyan" />
            12 个项目
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-dlt-green" />
            ≈ 2 分钟
          </span>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 p-4 border border-white/5 rounded bg-white/[0.02] max-w-lg mx-auto">
          <p className="text-xs text-white/20 leading-relaxed">
            本测试纯属娱乐，不代表真实心理测评，也不代表 Diamond League 官方观点。
            所有田径术语已尽量简化，没看过田径比赛也能测。
            测试结果存储在本地浏览器，不会上传任何数据。
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dlt-gold/20 to-transparent" />
    </div>
  )
}
