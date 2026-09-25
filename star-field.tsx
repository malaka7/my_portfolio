'use client'

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  a: number
  ta: number
  tw: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let stars: Star[] = []
    let raf = 0
    const colors = ['#E5C396', '#E07A9A', '#FDFBF7', '#D1C5D8']

    const seed = () => {
      const count = Math.min(180, Math.floor((width * height) / 9000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        vy: Math.random() * 0.12 + 0.02,
        vx: (Math.random() - 0.5) * 0.05,
        a: Math.random() * 0.6 + 0.1,
        ta: Math.random() * 0.7 + 0.2,
        tw: Math.random() * 0.008 + 0.002,
      }))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        s.a += (s.ta - s.a) * s.tw
        if (Math.abs(s.a - s.ta) < 0.02) s.ta = Math.random() * 0.7 + 0.15
        if (!reduced) {
          s.y += s.vy
          s.x += s.vx
          if (s.y > height + 2) {
            s.y = -2
            s.x = Math.random() * width
          }
          if (s.x < -2) s.x = width + 2
          if (s.x > width + 2) s.x = -2
        }
        ctx.globalAlpha = s.a
        ctx.fillStyle = colors[i % colors.length]
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      {/* base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 80% 0%, rgba(224,122,154,0.10) 0%, transparent 45%), radial-gradient(100% 80% at 10% 100%, rgba(229,195,150,0.08) 0%, transparent 50%), #120D16',
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
