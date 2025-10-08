'use client'

import { useState, useEffect } from 'react'

export const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{id: number, x: number, chars: string[], color: string}>>([])
  
  useEffect(() => {
    // Use "throttle to learn" as complete phrase
    const phrase = 'throttle to learn'
    const colors = ['text-red-400', 'text-blue-400', 'text-purple-400', 'text-pink-400', 'text-indigo-400', 'text-cyan-400', 'text-green-400', 'text-yellow-400']
    
    const createDrops = () => {
      const dropCount = 50 // Fixed number for consistency
      return Array.from({ length: dropCount }, (_, i) => ({
        id: i,
        x: (i * 2) % 100, // Distribute evenly across width
        chars: phrase.split(''), // Use complete phrase as vertical text
        color: colors[i % colors.length] // Cycle through colors
      }))
    }
    
    setDrops(createDrops())
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={`absolute ${drop.color} text-sm font-mono leading-tight`}
          style={{ 
            left: `${drop.x}%`,
            top: `${(drop.id * 10) % 90}%` // Static positioning based on id
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