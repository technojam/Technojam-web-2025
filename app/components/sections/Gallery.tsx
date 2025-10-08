'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Trophy, Monitor, Users, Code2, Heart, ExternalLink, Calendar, Users2 } from 'lucide-react'
import { TerminalWindow } from '../ui/TerminalWindow'
import { TypeWriter } from '../ui/TypeWriter'

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const galleryFilters = [
    { name: 'All', icon: Star, color: 'cyan', },
    { name: 'Hackathons', icon: Trophy, color: 'yellow',  },
    { name: 'Workshops', icon: Monitor, color: 'green',  },
    { name: 'Meetups', icon: Users, color: 'purple' },
    { name: 'Projects', icon: Code2, color: 'blue' },
    { name: 'Events', icon: Heart, color: 'pink',  }
  ]

  const communityItems = [
    { 
      name: "National Hackathon 2024", 
      type: "Team Photo", 
      date: "Dec 2024", 
      status: "RECENT",
      icon: Trophy,
      color: "yellow",
      description: "Our amazing team after winning the national hackathon!",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=face",
      teamSize: "12 members",
      category: "Hackathons"
    },
    { 
      name: "Smart City Hackathon", 
      type: "Competition", 
      date: "Nov 2024", 
      status: "WINNER",
      icon: Trophy,
      color: "yellow",
      description: "1st place in Smart City solutions challenge",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      teamSize: "8 members",
      category: "Hackathons"
    },
    { 
      name: "React Workshop Series", 
      type: "Workshop", 
      date: "Oct 2024", 
      status: "POPULAR",
      icon: Monitor,
      color: "green",
      description: "Comprehensive React.js training for beginners",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      teamSize: "50+ participants",
      category: "Workshops"
    },
    { 
      name: "AI/ML Bootcamp", 
      type: "Workshop", 
      date: "Sep 2024", 
      status: "INTENSIVE",
      icon: Monitor,
      color: "green",
      description: "5-day intensive machine learning workshop",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
      teamSize: "30 participants",
      category: "Workshops"
    },
    { 
      name: "Monthly Tech Meetup", 
      type: "Group Photo", 
      date: "Aug 2024", 
      status: "REGULAR",
      icon: Users,
      color: "purple",
      description: "Monthly community gathering with pizza and coding",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      teamSize: "40+ members",
      category: "Meetups"
    },
    { 
      name: "Open Source Meetup", 
      type: "Community Event", 
      date: "Jul 2024", 
      status: "COLLABORATIVE",
      icon: Users,
      color: "purple",
      description: "Contributing to open source projects together",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      teamSize: "25 contributors",
      category: "Meetups"
    },
    {
      name: "E-Commerce Platform",
      type: "Project Demo",
      date: "Jun 2024",
      status: "DEPLOYED",
      icon: Code2,
      color: "blue",
      description: "Full-stack e-commerce solution with React & Node.js",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      teamSize: "6 developers",
      category: "Projects"
    },
    {
      name: "Mobile Banking App",
      type: "Project Showcase", 
      date: "May 2024",
      status: "INNOVATIVE",
      icon: Code2,
      color: "blue",
      description: "Secure mobile banking app with biometric authentication",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      teamSize: "4 developers",
      category: "Projects"
    },
    {
      name: "Tech Fest 2024",
      type: "Annual Event", 
      date: "Apr 2024",
      status: "GRAND",
      icon: Star,
      color: "cyan",
      description: "Annual technology festival with competitions & exhibitions",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      teamSize: "200+ attendees",
      category: "Events"
    },
    {
      name: "Coding Competition",
      type: "Contest", 
      date: "Mar 2024",
      status: "COMPETITIVE",
      icon: Trophy,
      color: "yellow",
      description: "Internal coding competition with algorithmic challenges",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      teamSize: "60 participants",
      category: "Events"
    }
  ]

  const filteredItems = activeFilter === 'All' 
    ? communityItems 
    : communityItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto w-full">
        <TerminalWindow title="/media/community/gallery/">
          <div className="space-y-5">
            <div className="text-center space-y-4">
              <TypeWriter text="$ showcase --community-gallery --interactive" delay={50} />
              <motion.p 
                className="text-gray-400 text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Explore our journey through hackathons, workshops, and community events
              </motion.p>
            </div>

            {/* Enhanced Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-5">
              {galleryFilters.map((filter, index) => (
                <motion.button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`group relative px-6 py-3 rounded-xl font-mono text-sm border-2 transition-all duration-300 flex items-center gap-3 min-w-[120px] justify-center ${
                    activeFilter === filter.name 
                      ? `bg-gradient-to-r from-${filter.color}-500/20 to-${filter.color}-400/10 border-${filter.color}-400 text-${filter.color}-300 shadow-lg shadow-${filter.color}-500/25` 
                      : `bg-gray-800/30 border-gray-600/30 text-gray-400 hover:border-${filter.color}-500/50 hover:text-${filter.color}-400 hover:bg-${filter.color}-500/5`
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateX: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <filter.icon className="w-5 h-5" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">{filter.name}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeFilter === filter.name && (
                    <motion.div
                      className={`absolute -inset-1 rounded-xl border-2 border-${filter.color}-400/30 -z-10`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    />
                  )}

                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                    style={{
                      background: `linear-gradient(135deg, ${
                        filter.color === 'yellow' ? 'rgba(251, 191, 36, 0.1)' : 
                        filter.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' : 
                        filter.color === 'green' ? 'rgba(16, 185, 129, 0.1)' : 
                        filter.color === 'purple' ? 'rgba(139, 92, 246, 0.1)' : 
                        filter.color === 'pink' ? 'rgba(236, 72, 153, 0.1)' : 
                        'rgba(6, 182, 212, 0.1)'
                      }, transparent)`,
                      filter: "blur(20px)"
                    }}
                  />
                </motion.button>
              ))}
            </div>
            
            {/* Enhanced Gallery Grid */}
            <div className="relative py-3">
              {/* Gallery Container with smooth scrolling */}
              <div className="max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gradient scrollbar-track-transparent">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeFilter}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filteredItems.map((item, index) => (
                      <motion.div 
                        key={`${activeFilter}-${index}`}
                        className="group relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/50 rounded-2xl border border-gray-600/30 overflow-hidden cursor-pointer backdrop-blur-[2px]"
                        initial={{ opacity: 0, y: 60, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          y: -10,
                          transition: { duration: 0.2 }
                        }}
                        onHoverStart={() => setHoveredItem(index)}
                        onHoverEnd={() => setHoveredItem(null)}
                      >
                        {/* Dynamic glow effect */}
                        <motion.div
                          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `conic-gradient(from 0deg, 
                              ${item.color === 'yellow' ? '#fbbf24' : 
                                item.color === 'blue' ? '#3b82f6' : 
                                item.color === 'green' ? '#10b981' : 
                                item.color === 'purple' ? '#8b5cf6' : 
                                item.color === 'pink' ? '#ec4899' : 
                                '#06b6d4'}40, 
                              transparent, 
                              ${item.color === 'yellow' ? '#fbbf24' : 
                                item.color === 'blue' ? '#3b82f6' : 
                                item.color === 'green' ? '#10b981' : 
                                item.color === 'purple' ? '#8b5cf6' : 
                                item.color === 'pink' ? '#ec4899' : 
                                '#06b6d4'}40)`,
                            filter: "blur(20px)"
                          }}
                        />
                        
                        {/* Image Section */}
                        <div className="relative">
                          <div className="relative h-48 overflow-hidden">
                            <motion.img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            
                            {/* Category icon */}
                            <motion.div 
                              className={`absolute top-4 right-4 p-3 rounded-full bg-${item.color}-500/20 border border-${item.color}-400/50 backdrop-blur-[3px]`}
                              whileHover={{ 
                                rotate: 360, 
                                scale: 1.1,
                                transition: { duration: 0.6 }
                              }}
                            >
                              <item.icon className={`w-5 h-5 text-${item.color}-300`} />
                            </motion.div>

                            {/* Status badge */}
                            <motion.div 
                              className={`absolute top-4 left-4 px-3 py-1 bg-${item.color}-900/40 border border-${item.color}-500/50 rounded-full backdrop-blur-[3px]`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                            >
                              <span className={`text-${item.color}-300 text-xs font-mono font-semibold`}>
                                {item.status}
                              </span>
                            </motion.div>

                            {/* Play button overlay on hover */}
                            <AnimatePresence>
                              {hoveredItem === index && (
                                <motion.div
                                  className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[1px]"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  <motion.div
                                    className={`p-4 rounded-full bg-${item.color}-500/30 border-2 border-${item.color}-400`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <ExternalLink className={`w-6 h-6 text-${item.color}-300`} />
                                  </motion.div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 z-10">
                          <div className="space-y-4">
                            {/* Title and Type */}
                            <div className="space-y-2">
                              <h3 className={`text-${item.color}-400 font-mono font-bold text-lg leading-tight`}>
                                {item.name}
                              </h3>
                              <div className={`text-${item.color}-300/80 text-sm font-mono bg-${item.color}-900/20 px-2 py-1 rounded w-fit`}>
                                {item.type}
                              </div>
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                            
                            {/* Meta Information */}
                            <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                              <div className="flex items-center gap-4 text-gray-400 text-xs">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span className="font-mono">{item.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users2 className="w-3 h-3" />
                                  <span className="text-cyan-400 font-mono">{item.teamSize}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Floating particles */}
                          <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(2)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`absolute w-1 h-1 bg-${item.color}-400 rounded-full`}
                                style={{
                                  left: `${30 + i * 40}%`,
                                  top: `${20 + i * 30}%`
                                }}
                                animate={{
                                  y: [-15, 15, -15],
                                  x: [-8, 8, -8],
                                  opacity: [0.2, 0.8, 0.2],
                                  scale: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 4 + i,
                                  repeat: Infinity,
                                  delay: i * 0.7
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}