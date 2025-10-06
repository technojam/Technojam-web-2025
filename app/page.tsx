'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Terminal, 
  Code2, 
  Users, 
  Calendar, 
  Trophy, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  ExternalLink,
  Star,
  Zap,
  Target,
  Rocket,
  Cpu,
  Shield,
  Database,
  Globe,
  Binary,
  Hash,
  Activity,
  Wifi,
  HardDrive,
  Monitor,
  Folder,
  File,
  Power,
  Skull,
  Eye,
  Lock,
  Unlock,
  Bug,
  Scan,
  Server,
  Braces,
  Instagram,
  Award,
  Crown,
  Image,
  Play,
  MessageCircle,
  Send,
  Network,
  Flame,
  Heart
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Matrix Rain Effect
const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{id: number, x: number, chars: string[], color: string}>>([])
  
  useEffect(() => {
    const chars = '01010101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const colors = ['text-red-400', 'text-blue-400', 'text-purple-400', 'text-pink-400', 'text-indigo-400', 'text-cyan-400']
    const newDrops = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)]),
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setDrops(newDrops)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {drops.map((drop) => (
      <div
        key={drop.id}
        className={`absolute ${drop.color} text-sm font-mono`}
        style={{ left: `${drop.x}%`, top: "0" }}
      >
        {drop.chars.map((char, i) => (
        <div key={i}>{char}</div>
        ))}
      </div>
      ))}
    </div>
  )
}

// Terminal Window Component
const TerminalWindow = ({ title, children, className = "" }: { 
  title: string
  children: React.ReactNode
  className?: string 
}) => (
  <motion.div 
    className={`bg-gradient-to-br from-black via-blue-950/30 to-red-950/30 border border-purple-500 rounded-lg overflow-hidden shadow-lg shadow-purple-500/20 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 font-mono text-sm flex items-center justify-between">
      <span>technojam@dev:~# {title}</span>
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

// Typewriter Effect
const TypeWriter = ({ text, delay = 50, onComplete }: { 
  text: string
  delay?: number
  onComplete?: () => void 
}) => {
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

// System Status Component
const SystemStatus = () => {
  const stats = [
    { label: "Members", metric: "Active Users", value: "300+", status: "ONLINE" },
    { label: "Projects", metric: "Repository", value: "200+", status: "BUILDING" },
    { label: "Events", metric: "This Month", value: "12", status: "SCHEDULED" },
    { label: "Uptime", metric: "Community", value: "99.9%", status: "STABLE" }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-black/50 p-3 rounded border border-purple-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-cyan-400 mb-1">{stat.metric}</div>
          <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
          <div className="text-xs text-yellow-400">{stat.status}</div>
        </motion.div>
      ))}
    </div>
  )
}

// Navigation Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            whileHover={{ scale: 1.05 }}
          >
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
                whileHover={{ scale: 1.05 }}
                title={item.cmd}
              >
                {item.name}
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-400 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 font-bold font-mono hover:from-blue-600 hover:to-red-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              sudo join
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

// Hero Component
const Hero = () => {
  const [bootSequence, setBootSequence] = useState(0)
  const [showMain, setShowMain] = useState(false)

  const bootMessages = [
    "BIOS v2.4.1 - Initializing TechnoJam System...",
    "Loading development environment... [OK]",
    "Starting code editors... [OK]", 
    "Connecting to GitHub repositories... [OK]",
    "Initializing learning modules... [OK]",
    "Loading community chat... [OK]",
    "Starting project workspace... [OK]",
    "System ready. Welcome to TechnoJam Tech Club!"
  ]

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
        <div className="relative z-10 max-w-4xl mx-auto px-6">
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
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      <MatrixRain />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <TerminalWindow title="welcome.sh" className="mb-8">
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
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  "Throttle to Learn" - A vibrant coding community where developers, designers, and tech enthusiasts 
                  come together to innovate, collaborate, and build amazing projects. Join our diverse community of learners!
                </motion.div>
              </div>
            </TerminalWindow>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-8 py-4 font-mono font-bold hover:from-blue-600 hover:to-red-600 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="w-5 h-5" />
                <span>./join_community</span>
              </motion.button>
              
              <motion.button 
                className="border border-purple-400 text-purple-400 px-8 py-4 font-mono font-bold hover:bg-purple-400 hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                learn --more
              </motion.button>
            </motion.div>

            <SystemStatus />
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TerminalWindow title="ascii_art.txt">
              <div className="font-mono text-xs leading-tight text-cyan-400">
                <pre>{`
████████╗███████╗ ██████╗██╗  ██╗███╗   ██╗ ██████╗ 
╚══██╔══╝██╔════╝██╔════╝██║  ██║████╗  ██║██╔═══██╗
   ██║   █████╗  ██║     ███████║██╔██╗ ██║██║   ██║
   ██║   ██╔══╝  ██║     ██╔══██║██║╚██╗██║██║   ██║
   ██║   ███████╗╚██████╗██║  ██║██║ ╚████║╚██████╔╝
   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ 

      ██╗ █████╗ ███╗   ███╗
      ██║██╔══██╗████╗ ████║  
      ██║███████║██╔████╔██║  
 ██   ██║██╔══██║██║╚██╔╝██║  
 ╚█████╔╝██║  ██║██║ ╚═╝ ██║  
  ╚════╝ ╚═╝  ╚═╝╚═╝     ╚═╝  
                `}</pre>
                <div className="text-right mt-4 text-purple-400">
                  // Throttle to Learn
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 font-mono text-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 mx-auto" />
        <div>scroll --more</div>
      </motion.div>
    </section>
  )
}

// Achievements Component
const Achievements = () => {
  const memberAchievements = [
    { 
      name: "Arjun Kumar", 
      role: "Full Stack Developer", 
      achievement: "Won National Hackathon 2024", 
      projects: "15+", 
      skills: ["React", "Node.js", "Python"],
      avatar: "👨‍💻",
      color: "blue",
      badge: "🏆"
    },
    { 
      name: "Priya Sharma", 
      role: "AI/ML Engineer", 
      achievement: "Published Research Paper", 
      projects: "12+", 
      skills: ["TensorFlow", "PyTorch", "Python"],
      avatar: "👩‍🔬",
      color: "purple",
      badge: "🧠"
    },
    { 
      name: "Dev Patel", 
      role: "Mobile App Developer", 
      achievement: "App Store Featured App", 
      projects: "20+", 
      skills: ["React Native", "Flutter", "Swift"],
      avatar: "👨‍💼",
      color: "green",
      badge: "📱"
    },
    { 
      name: "Ananya Singh", 
      role: "UI/UX Designer", 
      achievement: "Design Award Winner", 
      projects: "25+", 
      skills: ["Figma", "Adobe XD", "Framer"],
      avatar: "👩‍🎨",
      color: "pink",
      badge: "🎨"
    },
    { 
      name: "Rohit Mehta", 
      role: "DevOps Engineer", 
      achievement: "Kubernetes Certified", 
      projects: "18+", 
      skills: ["Docker", "K8s", "AWS"],
      avatar: "👨‍🔧",
      color: "orange",
      badge: "⚙️"
    },
    { 
      name: "Sneha Gupta", 
      role: "Blockchain Developer", 
      achievement: "DeFi Protocol Launch", 
      projects: "10+", 
      skills: ["Solidity", "Web3", "Ethereum"],
      avatar: "👩‍💻",
      color: "yellow",
      badge: "🔗"
    }
  ]

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto w-full">
        <TerminalWindow title="/var/log/member-achievements/">
          <div className="space-y-6">
            <div className="text-center">
              <TypeWriter text="[SHOWCASE] Outstanding Community Members" delay={50} />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {memberAchievements.map((member, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 100, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 50
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1200px"
                  }}
                >
                  {/* Card Container with 3D Effect */}
                  <motion.div
                    className={`relative bg-gradient-to-br from-${member.color}-900/10 via-black/50 to-${member.color}-800/20 p-6 rounded-2xl border border-${member.color}-500/30 overflow-hidden`}
                    whileHover={{ 
                      rotateY: 12,
                      rotateX: 8,
                      scale: 1.05,
                      z: 100
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Holographic Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20"
                      style={{
                        background: `conic-gradient(from 0deg, 
                          ${member.color === 'blue' ? '#3b82f6' : 
                            member.color === 'purple' ? '#8b5cf6' : 
                            member.color === 'green' ? '#10b981' : 
                            member.color === 'pink' ? '#ec4899' : 
                            member.color === 'orange' ? '#f97316' : '#fbbf24'}, 
                          transparent, 
                          ${member.color === 'blue' ? '#3b82f6' : 
                            member.color === 'purple' ? '#8b5cf6' : 
                            member.color === 'green' ? '#10b981' : 
                            member.color === 'pink' ? '#ec4899' : 
                            member.color === 'orange' ? '#f97316' : '#fbbf24'})`,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Avatar with floating animation */}
                    <div className="text-center mb-4">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-${member.color}-500/20 to-${member.color}-600/40 border-2 border-${member.color}-400/50 mb-3 relative`}
                        animate={{ 
                          y: [0, -8, 0],
                          rotateY: [0, 5, 0, -5, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-3xl">{member.avatar}</span>
                        
                        {/* Badge floating beside avatar */}
                        <motion.div 
                          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-sm shadow-lg"
                          animate={{ 
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        >
                          {member.badge}
                        </motion.div>
                      </motion.div>

                      <h3 className={`text-${member.color}-400 font-mono font-bold text-lg mb-1`}>
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                    </div>

                    {/* Achievement */}
                    <div className={`bg-${member.color}-900/20 p-4 rounded-lg border border-${member.color}-500/30 mb-4`}>
                      <div className="text-cyan-400 text-sm font-mono mb-2">Latest Achievement:</div>
                      <div className="text-white text-sm">{member.achievement}</div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className={`text-2xl font-mono font-bold text-${member.color}-400`}>
                          {member.projects}
                        </div>
                        <div className="text-gray-500 text-xs">Projects</div>
                      </div>
                      <div className="text-center">
                        <motion.div 
                          className={`text-2xl font-mono font-bold text-${member.color}-400`}
                          animate={{ 
                            textShadow: [`0 0 0px ${member.color === 'blue' ? '#3b82f6' : 
                              member.color === 'purple' ? '#8b5cf6' : 
                              member.color === 'green' ? '#10b981' : 
                              member.color === 'pink' ? '#ec4899' : 
                              member.color === 'orange' ? '#f97316' : '#fbbf24'}`, 
                            `0 0 20px ${member.color === 'blue' ? '#3b82f6' : 
                              member.color === 'purple' ? '#8b5cf6' : 
                              member.color === 'green' ? '#10b981' : 
                              member.color === 'pink' ? '#ec4899' : 
                              member.color === 'orange' ? '#f97316' : '#fbbf24'}80`] 
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                          ★★★
                        </motion.div>
                        <div className="text-gray-500 text-xs">Rating</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <div className="text-gray-400 text-xs mb-2 font-mono">Tech Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className={`px-2 py-1 bg-${member.color}-800/30 text-${member.color}-300 text-xs rounded border border-${member.color}-600/30 font-mono`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: (index * 0.1) + (skillIndex * 0.1) + 1,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: `${member.color === 'blue' ? '#3b82f6' : 
                                member.color === 'purple' ? '#8b5cf6' : 
                                member.color === 'green' ? '#10b981' : 
                                member.color === 'pink' ? '#ec4899' : 
                                member.color === 'orange' ? '#f97316' : '#fbbf24'}40`
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Animated code lines in background */}
                    <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="text-green-400 font-mono text-xs"
                          style={{ 
                            transform: `translateY(${i * 20}px) translateX(${Math.random() * 100}px)` 
                          }}
                          animate={{
                            x: [-100, 100, -100],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                        >
                          {`${Array(10).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}`}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}

// Gallery Component
const Gallery = () => {
  const communityItems = [
    { 
      name: "Hackathon 2024 Winners", 
      type: "Team Photo", 
      date: "Dec 2024", 
      status: "RECENT",
      icon: Trophy,
      color: "yellow",
      description: "Our amazing team after winning the national hackathon!",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=face",
      teamSize: "12 members"
    },
    { 
      name: "Weekly Coding Sessions", 
      type: "Community Event", 
      date: "Nov 2024", 
      status: "ONGOING",
      icon: Code2,
      color: "blue",
      description: "Regular coding sessions and knowledge sharing",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      teamSize: "25+ attendees"
    },
    { 
      name: "Tech Talk Series", 
      type: "Workshop", 
      date: "Oct 2024", 
      status: "POPULAR",
      icon: Monitor,
      color: "green",
      description: "Industry experts sharing their experiences",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      teamSize: "50+ participants"
    },
    { 
      name: "Team Building Retreat", 
      type: "Team Photo", 
      date: "Sep 2024", 
      status: "FEATURED",
      icon: Users,
      color: "purple",
      description: "Annual team retreat with fun activities and bonding",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
      teamSize: "30 members"
    },
    { 
      name: "Community Meetup", 
      type: "Group Photo", 
      date: "Aug 2024", 
      status: "LOVED",
      icon: Heart,
      color: "pink",
      description: "Monthly community gathering with pizza and coding",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      teamSize: "40+ members"
    },
    { 
      name: "Innovation Showcase", 
      type: "Demo Day", 
      date: "Jul 2024", 
      status: "EPIC",
      icon: Rocket,
      color: "orange",
      description: "Members presenting their innovative projects",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      teamSize: "15 presenters"
    },
    {
      name: "New Member Orientation",
      type: "Welcome Event",
      date: "Jun 2024",
      status: "FRESH",
      icon: Star,
      color: "cyan",
      description: "Welcoming new members to our growing family",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      teamSize: "20+ newcomers"
    },
    {
      name: "Gaming Tournament",
      type: "Fun Event", 
      date: "May 2024",
      status: "EXCITING",
      icon: Play,
      color: "indigo",
      description: "Epic gaming night with prizes and friendly competition",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      teamSize: "35 gamers"
    }
  ]

  return (
    <section id="gallery" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto w-full">
        <TerminalWindow title="/media/community/gallery/">
          <div className="space-y-6">
            <div className="text-center">
              <TypeWriter text="$ view --community-memories" delay={50} />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {communityItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-gradient-to-br from-black/50 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, 
                        ${item.color === 'yellow' ? '#fbbf24' : 
                          item.color === 'blue' ? '#3b82f6' : 
                          item.color === 'green' ? '#10b981' : 
                          item.color === 'purple' ? '#8b5cf6' : 
                          item.color === 'pink' ? '#ec4899' : '#f97316'}20, 
                        transparent, 
                        ${item.color === 'yellow' ? '#fbbf24' : 
                          item.color === 'blue' ? '#3b82f6' : 
                          item.color === 'green' ? '#10b981' : 
                          item.color === 'purple' ? '#8b5cf6' : 
                          item.color === 'pink' ? '#ec4899' : '#f97316'}20)`,
                      filter: "blur(20px)"
                    }}
                  />
                  
                  {/* Photo Display */}
                  <div className="relative z-10">
                    {/* Team Photo */}
                    <div className="relative mb-4 rounded-lg overflow-hidden group">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      {/* Photo overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Icon badge on photo */}
                      <motion.div 
                        className={`absolute top-2 right-2 p-2 rounded-full bg-${item.color}-500/30 border border-${item.color}-500/50 backdrop-blur-sm`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className={`w-4 h-4 text-${item.color}-300`} />
                      </motion.div>

                      {/* Team size indicator */}
                      <div className="absolute bottom-2 left-2">
                        <span className="text-white text-xs font-mono bg-black/50 px-2 py-1 rounded">
                          {item.teamSize}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-cyan-400 font-mono text-sm font-bold">{item.name}</h3>
                        <p className="text-gray-400 text-xs">{item.type}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs font-mono">{item.date}</span>
                      <motion.span 
                        className={`px-2 py-1 rounded text-xs font-mono bg-${item.color}-900/30 text-${item.color}-400 border border-${item.color}-500/30`}
                        animate={{ 
                          boxShadow: [`0 0 0px ${item.color === 'yellow' ? '#fbbf24' : 
                            item.color === 'blue' ? '#3b82f6' : 
                            item.color === 'green' ? '#10b981' : 
                            item.color === 'purple' ? '#8b5cf6' : 
                            item.color === 'pink' ? '#ec4899' : '#f97316'}`, 
                          `0 0 20px ${item.color === 'yellow' ? '#fbbf24' : 
                            item.color === 'blue' ? '#3b82f6' : 
                            item.color === 'green' ? '#10b981' : 
                            item.color === 'purple' ? '#8b5cf6' : 
                            item.color === 'pink' ? '#ec4899' : '#f97316'}40`, 
                          `0 0 0px ${item.color === 'yellow' ? '#fbbf24' : 
                            item.color === 'blue' ? '#3b82f6' : 
                            item.color === 'green' ? '#10b981' : 
                            item.color === 'purple' ? '#8b5cf6' : 
                            item.color === 'pink' ? '#ec4899' : '#f97316'}`] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.status}
                      </motion.span>
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${item.color}-400 rounded-full opacity-0 group-hover:opacity-60`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}

// Contact Component
const Contact = () => {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/technojam", 
      color: "white",
      description: "Check out our code repositories",
      followers: "2.5K",
      gradient: "from-gray-700 to-black"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/company/technojam", 
      color: "blue",
      description: "Professional networking & updates",
      followers: "1.8K",
      gradient: "from-blue-600 to-blue-800"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://twitter.com/technojam", 
      color: "sky",
      description: "Daily tech updates & news",
      followers: "3.2K",
      gradient: "from-sky-400 to-blue-600"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/technojam", 
      color: "pink",
      description: "Behind the scenes moments",
      followers: "4.1K",
      gradient: "from-pink-500 to-purple-600"
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@technojam.club",
      description: "Get in touch for collaborations",
      color: "red",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Discord Community",
      value: "TechnoJam Server",
      description: "Join 500+ active members",
      color: "purple",
      action: "Join Discord"
    },
    {
      icon: Phone,
      title: "WhatsApp Group",
      value: "+91 98765 43210",
      description: "Quick updates & announcements",
      color: "green",
      action: "Join Group"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Innovation Hub, Tech City",
      description: "Drop by for events & meetups",
      color: "orange",
      action: "Get Directions"
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <TerminalWindow title="/var/connect/communication-hub/">
          <div className="space-y-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TypeWriter text="[NETWORK] Let's Connect & Build Together" delay={50} />
              <motion.p 
                className="text-gray-400 mt-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                Ready to join our community? Multiple ways to get in touch!
              </motion.p>
            </motion.div>
            
            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring" 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 8,
                    z: 50
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`relative p-6 bg-gradient-to-br from-${method.color}-900/20 via-black/50 to-${method.color}-800/30 rounded-2xl border border-${method.color}-500/30 overflow-hidden cursor-pointer h-48`}>
                    {/* Animated Background Glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${
                          method.color === 'red' ? '#dc2626' : 
                          method.color === 'purple' ? '#8b5cf6' : 
                          method.color === 'green' ? '#10b981' : '#f97316'
                        }40, transparent 70%)`
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Icon with floating animation */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${method.color}-500/30 to-${method.color}-600/50 border-2 border-${method.color}-400/40 mb-4`}
                      animate={{ 
                        y: [0, -10, 0],
                        rotateY: [0, 10, 0, -10, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <method.icon className={`w-8 h-8 text-${method.color}-400`} />
                    </motion.div>
                    
                    <h3 className={`text-${method.color}-400 font-mono font-bold mb-2`}>
                      {method.title}
                    </h3>
                    
                    <p className="text-cyan-300 text-sm font-mono mb-2">
                      {method.value}
                    </p>
                    
                    <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    
                    <motion.button
                      className={`w-full py-2 px-4 bg-${method.color}-600/20 hover:bg-${method.color}-500/30 border border-${method.color}-500/50 rounded-lg text-${method.color}-300 text-xs font-mono transition-all`}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 0 20px ${
                          method.color === 'red' ? '#dc262650' : 
                          method.color === 'purple' ? '#8b5cf650' : 
                          method.color === 'green' ? '#10b98150' : '#f9731650'
                        }`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {method.action}
                    </motion.button>
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-${method.color}-400 rounded-full opacity-0 group-hover:opacity-60`}
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [-5, -25, -5],
                            x: [-5, 5, -5],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>


            {/* Social Media Section - Clean Design */}
            <div className="space-y-8">
              <motion.div 
                className="text-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <h3 className="text-cyan-400 font-mono text-xl font-bold">Follow Our Journey</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                  Stay connected and never miss updates from our tech community
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.8 + (index * 0.1),
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="relative p-4 bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/40 hover:border-gray-600/60 transition-all duration-300 h-28 backdrop-blur-sm">
                      {/* Platform accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${social.gradient} rounded-t-xl`} />
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex items-center gap-4">
                        {/* Icon */}
                        <motion.div 
                          className={`p-2.5 rounded-lg bg-${social.color}-500/15 border border-${social.color}-500/25`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <social.icon className={`w-6 h-6 text-${social.color}-400`} />
                        </motion.div>
                        
                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-${social.color}-300 font-mono font-semibold text-sm mb-1 truncate`}>
                            {social.name}
                          </h4>
                          <p className="text-gray-500 text-xs mb-1 leading-tight">
                            {social.followers} followers
                          </p>
                          <motion.div 
                            className={`inline-flex items-center gap-1 px-2 py-0.5 bg-${social.color}-600/20 border border-${social.color}-500/30 rounded text-${social.color}-300 text-xs font-mono transition-all group-hover:bg-${social.color}-500/25`}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Follow
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Subtle glow effect on hover */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-br ${social.gradient}`}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Code2 className="w-8 h-8 text-blue-400" />
                  <span className="text-blue-400 font-mono text-xl">Ready to Code Together?</span>
                </div>
                <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
                  Join our passionate community of developers, designers, and tech enthusiasts. 
                  Let's build amazing projects and learn together!
                </p>
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-mono font-bold transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.6)",
                      "0 0 0px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Join TechnoJam Today!
                </motion.button>
              </div>
            </motion.div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}

// Main Component
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-blue-950/20 to-red-950/20 text-blue-400 font-mono">
      <MatrixRain />
      <Navbar />
      <Hero />
      <Achievements />
      <Gallery />
      <Contact />
    </main>
  )
}