'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TerminalWindow } from '../ui/TerminalWindow'

interface InteractiveTerminalProps {
  isVisible: boolean
  onClose: () => void
}

export const InteractiveTerminal = ({ isVisible, onClose }: InteractiveTerminalProps) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([
    'technojam@dev:~# Initializing secure connection...',
    'Welcome to TechnoJam Interactive Terminal v2.4.1',
    '',
    '🚀 Navigate: Use "goto <section>" to explore (gallery, achievements, contact)',
    '💬 Connect: Use "sudo join" to join our community',
    '❓ Help: Type "help" for all available commands',
    ''
  ])
  const [isProcessing, setIsProcessing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Enhanced color rendering function
  const renderColoredLine = (line: string, index: number) => {
    // Command prompt lines
    if (line.includes('technojam@dev:~$')) {
      return <span className="text-emerald-400 font-bold">{line}</span>
    }
    // System initialization
    if (line.includes('technojam@dev:~#')) {
      return <span className="text-cyan-300 font-semibold">{line}</span>
    }
    // Success messages
    if (line.includes('[SUCCESS]')) {
      return <span className="text-green-400 font-semibold animate-pulse">{line}</span>
    }
    // Info messages
    if (line.includes('[INFO]')) {
      return <span className="text-blue-400">{line}</span>
    }
    // Error messages  
    if (line.includes('[ERROR]')) {
      return <span className="text-red-400 font-semibold">{line}</span>
    }
    // Sudo/authentication
    if (line.includes('[SUDO]')) {
      return <span className="text-yellow-400 font-semibold">{line}</span>
    }
    // Command not found
    if (line.includes('bash:')) {
      return <span className="text-red-300">{line}</span>
    }
    // Help section headers
    if (line.includes('📧 Communication:') || line.includes('🧭 Navigation:') || line.includes('🔧 System:') || line.includes('🎮 Fun Commands:')) {
      return <span className="text-purple-400 font-bold">{line}</span>
    }
    // Commands in help
    if (line.trim().startsWith('sudo ') || line.trim().startsWith('goto ') || line.trim().startsWith('help') || line.trim().startsWith('clear') || line.trim().startsWith('exit') || line.trim().startsWith('ls ') || line.trim().startsWith('whoami') || line.trim().startsWith('date ')) {
      return <span className="text-cyan-300">{line}</span>
    }
    // Fun command responses
    if (line.includes('🤖 Identity verified!') || line.includes('📁 Directory scan') || line.includes('⏰ System time') || line.includes('👋 Greetings acknowledged!')) {
      return <span className="text-emerald-400 font-semibold animate-pulse">{line}</span>
    }
    // Welcome and intro messages
    if (line.includes('Welcome to TechnoJam') || line.includes('Terminal -')) {
      return <span className="text-pink-400 font-semibold">{line}</span>
    }
    // Emoji lines (navigation hints)
    if (line.includes('🚀') || line.includes('💬') || line.includes('❓')) {
      return <span className="text-indigo-300">{line}</span>
    }
    // Default
    return <span className="text-gray-300">{line}</span>
  }

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase()
    setHistory(prev => [...prev, `technojam@dev:~$ ${command}`])
    
    if (cmd === 'sudo join' || cmd === 'sudo join --now') {
      setIsProcessing(true)
      setHistory(prev => [...prev, '[SUDO] Password for technojam: ****'])
      
      setTimeout(() => {
        setHistory(prev => [...prev, 
          '[SUCCESS] Authenticated successfully! 🚀',
          '[INFO] Redirecting to communication hub...',
          '[INFO] Initializing community connection...',
          ''
        ])
        
        setTimeout(() => {
          const contactSection = document.getElementById('contact')
          contactSection?.scrollIntoView({ behavior: 'smooth' })
          setIsProcessing(false)
          onClose() // Close terminal after successful join
        }, 1500)
      }, 2000)
    } else if (cmd === 'help') {
      setHistory(prev => [...prev, 
        'TechnoJam Terminal - Available Commands:',
        '',
        '📧 Communication:',
        '  sudo join       - Join TechnoJam community', 
        '  sudo join --now - Fast track community access',
        '',
        '🧭 Navigation:',
        '  goto gallery    - View community gallery',
        '  goto achievements - See member achievements', 
        '  goto contact    - Contact information',
        '  goto home       - Back to top',
        '',
        '🔧 System:',
        '  help           - Show this help message',
        '  clear / cls    - Clear terminal',
        '  exit           - Close terminal',
        '',
        '🎮 Fun Commands:',
        '  ls / dir       - List available sections',
        '  whoami         - Display user info',
        '  date / time    - Show current time',
        '  hello / hi     - Friendly greeting',
        ''
      ])
    } else if (cmd === 'clear' || cmd === 'cls') {
      setHistory([
        'technojam@dev:~# 🔄 Terminal cleared - Fresh start!',
        'Welcome to TechnoJam Interactive Terminal v2.4.1',
        '',
        ' Navigate: Use "goto <section>" to explore (gallery, achievements, contact)',
        ' Connect: Use "sudo join" to join our community',  
        ' Help: Type "help" for all available commands',
        ''
      ])
    } else if (cmd === 'exit') {
      setHistory(prev => [...prev, '[INFO] Closing terminal session...', 'Goodbye! 👋'])
      setTimeout(() => {
        onClose()
      }, 1000)
    } else if (cmd === 'goto gallery') {
      setIsProcessing(true)
      setHistory(prev => [...prev, '[INFO] 🔍 Scanning gallery database...'])
      setTimeout(() => {
        setHistory(prev => [...prev, '[INFO] 📂 Loading image assets...'])
        setTimeout(() => {
          const gallerySection = document.getElementById('gallery')
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' })
            setHistory(prev => [...prev, '[SUCCESS] ✨ Gallery section loaded! 📸 Enjoy browsing!', ''])
            setTimeout(() => onClose(), 1500) // Auto-close after success
          } else {
            setHistory(prev => [...prev, '[ERROR] ❌ Gallery section not found!', ''])
          }
          setIsProcessing(false)
        }, 800)
      }, 600)
    } else if (cmd === 'goto achievements') {
      setIsProcessing(true)
      setHistory(prev => [...prev, '[INFO] 🚀 Connecting to achievements API...'])
      setTimeout(() => {
        setHistory(prev => [...prev, '[INFO] 📊 Fetching member statistics...'])
        setTimeout(() => {
          const achievementsSection = document.getElementById('achievements')
          if (achievementsSection) {
            achievementsSection.scrollIntoView({ behavior: 'smooth' })
            setHistory(prev => [...prev, '[SUCCESS] 🏆 Achievements dashboard loaded! Check out our wins!', ''])
            setTimeout(() => onClose(), 1500) // Auto-close after success
          } else {
            setHistory(prev => [...prev, '[ERROR] ❌ Achievements section not found!', ''])
          }
          setIsProcessing(false)
        }, 800)
      }, 600)
    } else if (cmd === 'goto contact') {
      setIsProcessing(true)
      setHistory(prev => [...prev, '[INFO] 📡 Establishing communication channels...'])
      setTimeout(() => {
        setHistory(prev => [...prev, '[INFO] 🔗 Verifying contact methods...'])
        setTimeout(() => {
          const contactSection = document.getElementById('contact')
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
            setHistory(prev => [...prev, '[SUCCESS] 📞 Communication hub active! Ready to connect!', ''])
            setTimeout(() => onClose(), 1500) // Auto-close after success
          } else {
            setHistory(prev => [...prev, '[ERROR] ❌ Contact section not found!', ''])
          }
          setIsProcessing(false)
        }, 800)
      }, 600)
    } else if (cmd === 'goto home') {
      setIsProcessing(true)
      setHistory(prev => [...prev, '[INFO] 🏠 Navigating to homepage...'])
      setTimeout(() => {
        setHistory(prev => [...prev, '[INFO] ⬆️ Scrolling to top...'])
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setHistory(prev => [...prev, '[SUCCESS] 🎉 Welcome back to TechnoJam homepage!', ''])
          setTimeout(() => onClose(), 1500) // Auto-close after success
          setIsProcessing(false)
        }, 800)
      }, 600)
    } else if (cmd === 'ls' || cmd === 'dir') {
      setHistory(prev => [...prev, 
        '[SUCCESS] 📁 Directory scan complete:',
        '  🏠 home/         - Homepage section',
        '  🏆 achievements/ - Member achievements', 
        '  📸 gallery/      - Community gallery',
        '  📞 contact/      - Communication hub',
        '',
        '[INFO] 💡 Use "goto <section>" to navigate!',
        ''
      ])
    } else if (cmd === 'whoami') {
      setHistory(prev => [...prev, 
        '[SUCCESS] Identity verified!',
        '[INFO] User: TechnoJam Explorer',
        '[INFO] Mission: Discover, Learn, Build',
        '[INFO] Access Level: Community Member',
        '[INFO] Status: Ready to innovate!',
        ''
      ])
    } else if (cmd === 'date' || cmd === 'time') {
      const now = new Date()
      setHistory(prev => [...prev, 
        '[SUCCESS] System time synchronized!',
        `[INFO] Current time: ${now.toLocaleString()}`,
        '[INFO] Location: TechnoJam Universe',
        '[INFO] Timeline: Innovation Era',
        ''
      ])
    } else if (cmd.includes('hello') || cmd.includes('hi')) {
      setHistory(prev => [...prev, 
        '[SUCCESS] 👋 Greetings acknowledged!',
        '[INFO] Welcome to the TechnoJam community!',
        '[INFO] Type "help" to unlock your potential!',
        '[INFO] Ready to start your coding journey?',
        ''
      ])
    } else if (cmd !== '') {
      setHistory(prev => [...prev, 
        `[ERROR] ❌ bash: ${command}: command not found`, 
        '[INFO] 💡 Try "help" for available commands',
        '[INFO] 🔍 Or try: ls, whoami, date, hello',
        ''
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isProcessing) {
      handleCommand(input)
      setInput('')
    }
  }

  if (!isVisible) return null

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="w-full max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          
          <TerminalWindow title="technojam@dev:~$ [SECURE CONNECTION ESTABLISHED]">
            <div 
              ref={terminalRef}
              className="h-80 overflow-y-auto font-mono text-sm scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800/50"
              style={{
                scrollBehavior: 'smooth'
              }}
            >
              {history.map((line, index) => (
                <div key={index} className="mb-1 leading-relaxed">
                  {renderColoredLine(line, index)}
                </div>
              ))}
              
              {/* Active command line */}
              <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className="text-emerald-400 mr-2 font-bold">
                  technojam@dev:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isProcessing}
                  className="bg-transparent outline-none text-white flex-1 font-mono caret-green-400 placeholder-gray-500"
                  placeholder={isProcessing ? "Processing..." : "Type your command..."}
                  autoComplete="off"
                  autoFocus
                />
                {isProcessing && (
                  <div className="flex items-center ml-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-1"></div>
                    <span className="text-yellow-400 animate-pulse text-xs">Processing</span>
                  </div>
                )}
              </form>
            </div>
          </TerminalWindow>
          
          <motion.div 
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-sm font-mono">
              💡 Try: <code className="text-cyan-400">help</code> | <code className="text-green-400">goto gallery</code> | <code className="text-yellow-400">whoami</code> | <code className="text-purple-400">sudo join</code> | <code className="text-red-400">exit</code>
            </p>
            <p className="text-gray-500 text-xs font-mono mt-1">
              ✨ Terminal auto-closes after successful navigation
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}