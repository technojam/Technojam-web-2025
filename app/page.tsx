'use client'

import { useState } from 'react'

// Import all components
import { MatrixRain } from './components/ui/MatrixRain'
import { Navbar } from './components/navigation/Navbar'  
import { Hero } from './components/sections/Hero'
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
      <Achievements />
      <Gallery />
      <Contact />
      <InteractiveTerminal isVisible={isTerminalVisible} onClose={closeTerminal} />
    </main>
  )
}