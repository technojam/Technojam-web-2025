'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// Import all components
const MatrixRain = dynamic(() => import('./components/ui/MatrixRain').then(mod => ({ default: mod.MatrixRain })), {
  ssr: false,
  loading: () => <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20" />
})
import { Navbar } from './components/navigation/Navbar'  
import { Hero } from './components/sections/Hero'
import { AboutUs } from './components/sections/AboutUs'
import { Achievements } from './components/sections/Achievements'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './components/sections/Contact'
import { InteractiveTerminal } from './components/terminal/InteractiveTerminal'

// Main component
export default function Home() {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false)

  const openTerminal = () => setIsTerminalVisible(true)
  const closeTerminal = () => setIsTerminalVisible(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-blue-950/20 to-red-950/20 text-blue-400 font-mono">
      <MatrixRain />
      <Navbar openTerminal={openTerminal} />
      <Hero openTerminal={openTerminal} />
      <AboutUs />
      <Achievements />
      <Gallery />
      <Contact />
      <InteractiveTerminal isVisible={isTerminalVisible} onClose={closeTerminal} />
    </main>
  )
}