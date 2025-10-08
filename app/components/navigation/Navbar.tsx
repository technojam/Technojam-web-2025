'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { TypeWriter } from '../ui/TypeWriter'

interface NavbarProps {
  openTerminal: () => void
}

export const Navbar = ({ openTerminal }: NavbarProps) => {
  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-black/95 via-blue-950/30 to-red-950/30 backdrop-blur border-b border-purple-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-3 font-mono"
            whileHover={{ rotateY: 2, boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)" }}
          >
            <motion.img 
              src="/tj.webp" 
              alt="TechnoJam Logo" 
              className="h-10 w-10 rounded-full border-2 border-cyan-400/50"
              whileHover={{ rotate: 360, borderColor: "#00ffff" }}
              transition={{ duration: 0.6 }}
            />
            <Terminal className="h-8 w-8 text-cyan-400" />
            <span className="text-cyan-400 text-xl font-bold">
              <TypeWriter text="technojam@dev:~$" delay={100} />
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-mono">
            {[
              { name: './home', cmd: 'cd ~' },
              { name: './achievements', cmd: 'cat achievements.log' },
              { name: './gallery', cmd: 'ls projects/' },
              { name: './contact', cmd: 'ping contact.dev' }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.name.replace('./', '')}`}
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
        </div>
      </div>
    </motion.nav>
  )
}