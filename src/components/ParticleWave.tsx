'use client'

import React, { useEffect, useRef } from 'react'

interface ParticleWaveProps {
  className?: string
}

interface Particle {
  baseX: number
  baseY: number
  x: number
  y: number
  color: string
  radius: number
  phaseOffset: number
  speedOffset: number
}

export default function ParticleWave({ className = '' }: ParticleWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600)

    // Palette of delicate micro-dot colors with high aesthetic restraint
    const colors = [
      'rgba(59, 130, 246, 0.65)',  // electric blue
      'rgba(139, 92, 246, 0.65)',  // violet
      'rgba(236, 72, 153, 0.55)',  // soft magenta
      'rgba(16, 185, 129, 0.60)',  // emerald
      'rgba(245, 158, 11, 0.55)',  // amber
      'rgba(99, 102, 241, 0.65)',  // indigo
    ]

    let particles: Particle[] = []

    const initParticles = () => {
      particles = []
      const rows = 28
      const cols = 36
      const spacingX = width / (cols * 0.95)
      const spacingY = height / (rows * 0.9)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacingX + 40
          const baseY = r * spacingY + 30
          const colorIndex = (r * 3 + c * 2) % colors.length
          const radius = Math.random() * 1.1 + 1.2

          particles.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            color: colors[colorIndex],
            radius,
            phaseOffset: (c * 0.18) + (r * 0.14),
            speedOffset: Math.random() * 0.005 + 0.015,
          })
        }
      }
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
      initParticles()
    }

    window.addEventListener('resize', handleResize)
    initParticles()

    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    let time = 0

    const render = () => {
      time += 0.02
      ctx.clearRect(0, 0, width, height)

      // Gradient background blend to pure white on the left and edges
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Double harmonic sine wave to simulate smooth flowing silk/wave
        const wave1 = Math.sin(time + p.phaseOffset) * 16
        const wave2 = Math.cos(time * 0.7 + p.phaseOffset * 1.2) * 10
        const wave3 = Math.sin(time * 1.4 + (p.baseX * 0.01)) * 6

        let targetX = p.baseX + wave2 * 0.6
        let targetY = p.baseY + wave1 + wave3

        // Mouse proximity interaction (subtle repulsion/uplift)
        const dx = mouseX - targetX
        const dy = mouseY - targetY
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 120

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 22
          targetX -= (dx / dist) * force
          targetY -= (dy / dist) * force
        }

        p.x += (targetX - p.x) * 0.1
        p.y += (targetY - p.y) * 0.1

        // Fade out dots as they approach the left edge to cleanly disappear into white hero space
        const leftFadeRatio = Math.max(0, Math.min(1, (p.x - 30) / (width * 0.35)))
        const rightFadeRatio = Math.max(0, Math.min(1, (width - p.x) / (width * 0.15)))
        const topFadeRatio = Math.max(0, Math.min(1, (p.y - 20) / (height * 0.15)))
        const bottomFadeRatio = Math.max(0, Math.min(1, (height - p.y) / (height * 0.15)))
        const alphaMultiplier = leftFadeRatio * rightFadeRatio * topFadeRatio * bottomFadeRatio

        if (alphaMultiplier > 0.01) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = alphaMultiplier
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative w-full h-full pointer-events-auto overflow-hidden ${className}`}>
      {/* Delicate left gradient overlay to guarantee seamless fade into white space */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: 'none' }}
      />
    </div>
  )
}
