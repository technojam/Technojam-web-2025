'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypeWriter } from './TypeWriter'

interface TerminalWindowProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const TerminalWindow = ({ title, children, className = "" }: TerminalWindowProps) => (
  <motion.div 
    className={`bg-gradient-to-br from-black via-blue-950/30 to-red-950/30 border border-purple-500 rounded-lg overflow-hidden shadow-lg shadow-purple-500/20 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-gradient-to-r from-blue-700 to-red-700 text-white px-4 py-2 font-mono text-sm flex items-center justify-between">
      <TypeWriter text={`technojam@dev:~# ${title}`} delay={100} />
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
    <div className="p-6 font-mono text-blue-400 text-sm">
      {children}
    </div>
  </motion.div>
)