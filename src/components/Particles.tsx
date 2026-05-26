import { useEffect, useState } from 'react'

interface Particle {
  id: number
  delay: number
  duration: number
  top: number
  left: number
  size: number
  opacity: number
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const items: Particle[] = []
    for (let i = 0; i < 20; i++) {
      items.push({
        id: i,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2,
        opacity: 0.05 + Math.random() * 0.15,
      })
    }
    setParticles(items)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Diamond sparkles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-dlt-gold"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `sparkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: '0 0 4px rgba(212, 175, 55, 0.5)',
          }}
        />
      ))}

      {/* Track lane lines */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <div
          key={`lane-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${15 + i * 14}%`,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 80%, transparent 100%)',
            transform: `skewY(-1deg)`,
          }}
        />
      ))}

      {/* Speed streaks */}
      {[0, 1, 2, 3, 4].map(i => (
        <div
          key={`streak-${i}`}
          className="absolute h-px"
          style={{
            top: `${20 + i * 16}%`,
            left: '-100%',
            width: '60%',
            opacity: 0.06,
            background: 'linear-gradient(90deg, transparent, rgba(0, 212, 240, 0.5), transparent)',
            animation: `speedLine ${2 + i * 1.5}s linear ${i * 1.2}s infinite`,
          }}
        />
      ))}

      {/* Large ambient glow orbs */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-[0.03]"
        style={{
          top: '10%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(0,212,240,1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full opacity-[0.04]"
        style={{
          bottom: '5%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(212,175,55,1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full opacity-[0.03]"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(123,47,190,1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}
