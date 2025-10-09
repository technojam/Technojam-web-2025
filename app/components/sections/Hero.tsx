'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Code2 } from 'lucide-react'
import { MatrixRain } from '../ui/MatrixRain'
import { TerminalWindow } from '../ui/TerminalWindow'
import { TypeWriter } from '../ui/TypeWriter'
import { SystemStatus } from '../SystemStatus'

interface HeroProps {
  openTerminal: () => void
}

export const Hero = ({ openTerminal }: HeroProps) => {
  const [bootSequence, setBootSequence] = useState(0)
  const [showMain, setShowMain] = useState(false)

  const bootMessages = [
    "BIOS v2.4.1 - Initializing TechnoJam System...",
    "Starting code editors... [OK]", 
    "Initializing learning modules... [OK]",
    "Loading community chat... [OK]",
    "System ready. Welcome to TechnoJam Tech Club!"
  ]

  useEffect(() => {
    // Disable scrolling during boot sequence
    if (!showMain) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showMain])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bootSequence < bootMessages.length - 1) {
        setBootSequence(prev => prev + 1)
      } else {
        setShowMain(true)
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [bootSequence, bootMessages.length])

  if (!showMain) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 max-w-full sm:max-w-4xl mx-auto px-4 sm:px-6">
          <TerminalWindow title="system_boot.sh" className="w-full">
            <div className="space-y-2">
              {bootMessages.slice(0, bootSequence + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-red-400">$</span>
                  <TypeWriter 
                    text={message} 
                    delay={30}
                    onComplete={() => {
                      if (index === bootMessages.length - 1) {
                        setTimeout(() => setShowMain(true), 1000)
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </section>
    )
  }

  return (
  <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center scroll-mt-24 sm:scroll-mt-28">
      <MatrixRain />
      
      <div className="relative z-10 max-w-5xl sm:max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <TerminalWindow title="welcome.sh" className="mb-6 sm:mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">$</span>
                  <TypeWriter text="echo 'Welcome to TechnoJam - Tech Community'" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  <div className="text-cyan-400">
                    Welcome to TechnoJam - Tech Community
                  </div>
                </motion.div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-red-400">$</span>
                  <span className="text-cyan-400">cat about.txt</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                  className="text-gray-300 text-sm sm:text-base leading-relaxed break-words"
                >
                  &quot;Throttle to Learn&quot; - A vibrant coding community where developers, designers, and tech enthusiasts 
                  come together to innovate, collaborate, and build amazing projects. Join our diverse community of learners!
                </motion.div>
              </div>
            </TerminalWindow>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5 }}
            >
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-cyan-400/50 text-cyan-400 px-3 sm:px-4 py-2 sm:py-3 font-bold font-mono text-base sm:text-lg hover:from-gray-700 hover:to-gray-800 hover:border-cyan-300 hover:text-cyan-300 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
                whileHover={{ rotateY: 2, boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="w-7 h-7" />
                <span>./join_community</span>
              </motion.a>

              <motion.button
                onClick={openTerminal}
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-red-400/50 text-red-400 px-3 sm:px-4 py-2 sm:py-3 font-bold font-mono text-base sm:text-lg hover:from-gray-700 hover:to-gray-800 hover:border-red-300 hover:text-red-300 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
                whileHover={{ rotateY: 2, boxShadow: "0 0 15px rgba(239, 68, 68, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>&gt;_</span>
                <span>./open_terminal</span>
              </motion.button>
            </motion.div>

            <SystemStatus />
          </motion.div>

          <motion.div
            className="relative px-2 sm:px-0 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TerminalWindow title="technojam.txt">
              <div className="font-mono text-[0.6rem] sm:text-xs leading-tight">
                <pre className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-[0.6rem] sm:text-[0.7rem] overflow-x-auto">{`
████████╗███████╗ ██████╗██╗  ██╗███╗   ██╗ ██████╗      ██╗ █████╗ ███╗   ███╗
╚══██╔══╝██╔════╝██╔════╝██║  ██║████╗  ██║██╔═══██╗     ██║██╔══██╗████╗ ████║
   ██║   █████╗  ██║     ███████║██╔██╗ ██║██║   ██║     ██║███████║██╔████╔██║
   ██║   ██╔══╝  ██║     ██╔══██║██║╚██╗██║██║   ██║██   ██║██╔══██║██║╚██╔╝██║
   ██║   ███████╗╚██████╗██║  ██║██║ ╚████║╚██████╔╝╚█████╔╝██║  ██║██║ ╚═╝ ██║
   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚═╝     ╚═╝
                                                                            
                `}</pre>
              <div className="text-right mt-4 text-purple-400 text-xs sm:text-sm">
                {'// Throttle to Learn'}
              </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400 font-mono text-sm "
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="pt-2 w-6 h-6 mx-auto" />
        <div>scroll --more</div>
      </motion.div>
    </section>
  )
}