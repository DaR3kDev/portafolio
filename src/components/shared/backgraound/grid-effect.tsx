'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function BackgroundGrid() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const opacity = resolvedTheme === 'dark' ? 10 : 1
  const color = resolvedTheme === 'dark' ? '255,255,255' : '0,0,0'

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      {/* Grilla original con máscara radial */}
      <div
        className={cn('absolute inset-0 transition-all duration-500')}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(${color}, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(${color}, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: opacity,
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 50% 50%, black 90%, transparent 100%)',
          animation: 'bg-move 60s linear infinite',
        }}
      />

      {/* Overlay de iluminación que sigue el mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, rgba(${color},0.25), transparent 70%)`,
          mixBlendMode: 'screen',
          transition: 'background 0.05s',
        }}
      />

      <style jsx>{`
        @keyframes bg-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 400px 400px;
          }
        }

        @media (max-width: 768px) {
          div {
            background-size: 20px 20px !important;
          }
        }
      `}</style>
    </div>
  )
}
