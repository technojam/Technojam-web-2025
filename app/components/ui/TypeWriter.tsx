'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypeWriterProps {
  text: string
  delay?: number
  onComplete?: () => void
}

export const TypeWriter = ({ text, delay = 50, onComplete }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, delay, onComplete])

  return (
    <span className="font-mono text-cyan-400">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-cyan-400"
      >
        _
      </motion.span>
    </span>
  )
}