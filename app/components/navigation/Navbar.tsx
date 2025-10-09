'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'
import { TypeWriter } from '../ui/TypeWriter'

interface NavbarProps {
  openTerminal: () => void
}

export const Navbar = ({ openTerminal }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const items: { name: string; id: string; cmd: string }[] = [
    { name: './home', id: 'home', cmd: 'cd ~' },
    { name: './about', id: 'about', cmd: 'cat about_us.md' },
    { name: './achievements', id: 'achievements', cmd: 'cat achievements.log' },
    { name: './gallery', id: 'gallery', cmd: 'ls projects/' },
    { name: './contact', id: 'contact', cmd: 'ping contact.dev' }
  ]

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-black/95 via-blue-950/30 to-red-950/30 backdrop-blur border-b border-purple-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          <motion.div 
            className="flex items-center space-x-3 font-mono"
            whileHover={{ rotateY: 2, boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)" }}
          >
            <motion.img 
              src="/tj.webp" 
              alt="TechnoJam Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-cyan-400/50"
              whileHover={{ rotate: 360, borderColor: "#00ffff" }}
              transition={{ duration: 0.6 }}
            />
            <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
            <span className="text-cyan-400 text-sm sm:text-xl font-bold truncate max-w-[160px]">
              <TypeWriter text="technojam@dev:~$" delay={100} />
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-mono">
            {items.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                className="text-blue-400 hover:text-red-400 transition-colors duration-200 group relative"
                whileHover={{ rotateX: 1, boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)" }}
                title={item.cmd}
              >
                {item.name}
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-400 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            <motion.button 
              className="bg-gradient-to-r from-gray-800 to-gray-900 border border-cyan-400/50 text-cyan-400 px-4 py-2 font-bold font-mono hover:from-gray-700 hover:to-gray-800 hover:border-cyan-300 hover:text-cyan-300 transition-all"
              whileHover={{ rotateY: 2, boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={openTerminal}
            >
              &gt;_ dev console 
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((s) => !s)}
              className="p-2 rounded-md text-cyan-300 bg-black/20 hover:bg-black/30"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-black/95 border-t border-purple-700/20"
        >
          <div className="px-4 py-4 space-y-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                className="block text-left text-blue-300 hover:text-cyan-300 px-2 py-2 rounded-md"
              >
                {item.name.replace('./', '')}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => { openTerminal(); setIsOpen(false) }}
                className="w-full text-left bg-gradient-to-r from-gray-800 to-gray-900 border border-cyan-400/30 text-cyan-300 px-3 py-2 rounded-md"
              >
                Open Dev Console
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
