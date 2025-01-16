'use client'

import { useEffect, useRef } from 'react'

export default function GradientBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let animationFrameId: number

    const render = () => {
      frame++
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsl(${frame % 360}, 100%, 50%)`)
      gradient.addColorStop(0.5, `hsl(${(frame + 45) % 360}, 100%, 50%)`)
      gradient.addColorStop(1, `hsl(${(frame + 90) % 360}, 100%, 50%)`)

      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = frame * 0.02
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(
          centerX + Math.cos(time + i * 2) * 100,
          centerY + Math.sin(time + i * 2) * 100,
          150,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = `hsla(${(frame + i * 120) % 360}, 100%, 50%, 0.5)`
        ctx.fill()
      }
      
      ctx.restore()

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30"
    />
  )
}

