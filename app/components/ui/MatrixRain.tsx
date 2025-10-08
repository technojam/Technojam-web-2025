'use client'

import { useState, useEffect } from 'react'

export const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{id: number, x: number, y: number, chars: string[], color: string}>>([])
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
    
    const chars = 'THROTTLE TO LEARN'
    const colors = ['text-red-400', 'text-blue-400', 'text-purple-400', 'text-pink-400', 'text-indigo-400', 'text-cyan-400', 'text-green-400', 'text-yellow-400']
    
    const createDrops = () => {
      const dropCount = 50 // Fixed number for consistency
      return Array.from({ length: dropCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        chars: Array.from({ length: Math.floor(Math.random() * 15) + 8 }, () => chars[Math.floor(Math.random() * chars.length)]),
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
    }
    
    setDrops(createDrops())
  }, [])

  // Don't render anything on the server
  if (!isClient) {
    return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20" />
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={`absolute ${drop.color} text-sm font-mono leading-tight`}
          style={{ 
            left: `${drop.x}%`,
            top: `${drop.y}%`
          }}
        >
          {drop.chars.map((char, i) => (
            <div 
              key={i}
              className="block h-4"
              style={{
                opacity: Math.max(0.1, 1 - (i * 0.15))
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}