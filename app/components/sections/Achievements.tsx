'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Code2, Terminal, Rocket, Phone, Heart, Monitor } from 'lucide-react'
import { TerminalWindow } from '../ui/TerminalWindow'
import { TypeWriter } from '../ui/TypeWriter'

export const Achievements = () => {
  const [activeAchievementFilter, setActiveAchievementFilter] = useState('All')
  const [isClient, setIsClient] = useState(false)
  const [animatedCode, setAnimatedCode] = useState<string[]>([])

  useEffect(() => {
    setIsClient(true)
    // Generate animated code strings on client side only
    setAnimatedCode(
      Array(5).fill(0).map(() => 
        Array(10).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')
      )
    )
  }, [])

  const achievementFilters = [
    { name: 'All', icon: Star, color: 'cyan' },
    { name: 'Frontend', icon: Code2, color: 'blue' },
    { name: 'Backend', icon: Terminal, color: 'green' },
    { name: 'AI/ML', icon: Rocket, color: 'purple' },
    { name: 'Mobile', icon: Phone, color: 'pink' },
    { name: 'Design', icon: Heart, color: 'yellow' },
    { name: 'DevOps', icon: Monitor, color: 'orange' }
  ]

  const memberAchievements = [
    { 
      name: "Arjun Kumar", 
      role: "Full Stack Developer", 
      achievement: "Won National Hackathon 2024", 
      projects: "15+", 
      skills: ["React", "Node.js", "Python"],
      avatar: "👨‍💻",
      color: "blue",
      badge: "🏆",
      category: "Frontend"
    },
    { 
      name: "Rahul Singh", 
      role: "Frontend Specialist", 
      achievement: "React Community Contributor", 
      projects: "22+", 
      skills: ["React", "Vue.js", "TypeScript"],
      avatar: "👨‍💻",
      color: "blue",
      badge: "⚛️",
      category: "Frontend"
    },
    { 
      name: "Priya Sharma", 
      role: "AI/ML Engineer", 
      achievement: "Published Research Paper", 
      projects: "12+", 
      skills: ["TensorFlow", "PyTorch", "Python"],
      avatar: "👩‍🔬",
      color: "purple",
      badge: "🧠",
      category: "AI/ML"
    },
    { 
      name: "Vikash Jha", 
      role: "ML Research Scientist", 
      achievement: "Google AI Research Internship", 
      projects: "8+", 
      skills: ["Python", "Keras", "Scikit-learn"],
      avatar: "👨‍🔬",
      color: "purple",
      badge: "🤖",
      category: "AI/ML"
    },
    { 
      name: "Dev Patel", 
      role: "Mobile App Developer", 
      achievement: "App Store Featured App", 
      projects: "20+", 
      skills: ["React Native", "Flutter", "Swift"],
      avatar: "👨‍💼",
      color: "green",
      badge: "📱",
      category: "Mobile"
    },
    { 
      name: "Kavya Reddy", 
      role: "iOS Developer", 
      achievement: "Apple WWDC Scholar", 
      projects: "14+", 
      skills: ["Swift", "SwiftUI", "Xcode"],
      avatar: "👩‍💻",
      color: "green",
      badge: "🍎",
      category: "Mobile"
    },
    { 
      name: "Ananya Singh", 
      role: "UI/UX Designer", 
      achievement: "Design Award Winner", 
      projects: "25+", 
      skills: ["Figma", "Adobe XD", "Framer"],
      avatar: "👩‍🎨",
      color: "pink",
      badge: "🎨",
      category: "Design"
    },
    { 
      name: "Ravi Kumar", 
      role: "Product Designer", 
      achievement: "Dribbble Top Shot", 
      projects: "18+", 
      skills: ["Sketch", "Principle", "After Effects"],
      avatar: "👨‍🎨",
      color: "pink",
      badge: "🏀",
      category: "Design"
    }

  ]

  const filteredAchievements = activeAchievementFilter === 'All' 
    ? memberAchievements 
    : memberAchievements.filter(member => member.category === activeAchievementFilter)

  return (
    <section id="achievements" className="min-h-screen flex items-start sm:items-center justify-center px-4 sm:px-8 py-16 sm:py-20 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto w-full">
        <TerminalWindow title="/var/log/member-achievements/">
          <div className="space-y-6">
            <div className="text-center">
              <TypeWriter text="[SHOWCASE] Outstanding Community Members" delay={50} />
            </div>

            {/* Achievement Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {achievementFilters.map((filter, index) => {
                const IconComponent = filter.icon
                return (
                  <motion.button
                    key={filter.name}
                    onClick={() => setActiveAchievementFilter(filter.name)}
                    className={`relative px-4 py-2 rounded-md font-mono text-sm font-bold transition-all duration-300 border ${
                      activeAchievementFilter === filter.name
                        ? `bg-${filter.color}-400/20 border-${filter.color}-400 text-${filter.color}-400 shadow-lg`
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: activeAchievementFilter === filter.name 
                        ? `0 0 15px rgba(0, 255, 255, 0.3)`
                        : '0 0 8px rgba(255,255,255,0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <IconComponent className="inline w-4 h-4 mr-2" />
                    {filter.name}
                    {activeAchievementFilter === filter.name && (
                      <motion.div
                        className="absolute inset-0 bg-cyan-400/10 rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </motion.div>

            {/* Scrollable Achievement Cards Container */}
            <div className="h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800/50">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredAchievements.map((member, index) => (
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
                    {/* Seamless Background Integration */}
                    <motion.div
                      className="relative p-6 overflow-hidden min-h-[340px] transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Simple Avatar */}
                      <div className="text-center mb-4">
                        <motion.div 
                          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-3 relative"
                          animate={{ 
                            y: [0, -10, 0],
                            rotateY: [0, 8, 0, -8, 0],
                            boxShadow: [`0 0 0px ${member.color === 'blue' ? '#3b82f6' : 
                              member.color === 'purple' ? '#8b5cf6' : 
                              member.color === 'green' ? '#10b981' : 
                              member.color === 'pink' ? '#ec4899' : 
                              member.color === 'orange' ? '#f97316' : '#fbbf24'}`, 
                            `0 0 25px ${member.color === 'blue' ? '#3b82f650' : 
                              member.color === 'purple' ? '#8b5cf650' : 
                              member.color === 'green' ? '#10b98150' : 
                              member.color === 'pink' ? '#ec489950' : 
                              member.color === 'orange' ? '#f9731650' : '#fbbf2450'}`]
                          }}
                          transition={{ 
                            duration: 4.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-3xl filter drop-shadow-lg">{member.avatar}</span>
                          
                          {/* Badge floating beside avatar */}
                          <motion.div 
                            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs shadow-lg"
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

                        <h3 className={`text-${member.color}-300 font-mono font-bold text-lg mb-1.5 tracking-wide`}>
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3 font-medium">{member.role}</p>
                      </div>

                      {/* Achievement */}
                      <div className="mb-4">
                        <div className="text-cyan-300 text-sm font-mono mb-2 font-semibold">Latest Achievement:</div>
                        <div className="text-white text-sm leading-relaxed font-medium">{member.achievement}</div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-center">
                          <div className={`text-lg font-mono font-bold text-${member.color}-400`}>
                            {member.projects}
                          </div>
                          <div className="text-gray-500 text-xs">Projects</div>
                        </div>
                        <div className="text-center">
                          <motion.div 
                            className={`text-lg font-mono font-bold text-${member.color}-400`}
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
                        <div className="text-gray-400 text-xs mb-1 font-mono">Tech Stack:</div>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className={`px-1.5 py-0.5 bg-${member.color}-800/30 text-${member.color}-300 text-xs rounded border border-${member.color}-600/30 font-mono`}
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
                      {isClient && (
                        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                          {animatedCode.map((codeString, i) => (
                            <motion.div
                              key={i}
                              className="text-green-400 font-mono text-xs"
                              style={{ 
                                transform: `translateY(${i * 20}px) translateX(${i * 15}px)` 
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
                              {codeString}
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}