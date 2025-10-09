'use client'

import { motion } from 'framer-motion'
import { Users, Rocket, Target, Heart, Zap } from 'lucide-react'
import { TerminalWindow } from '../ui/TerminalWindow'
import { TypeWriter } from '../ui/TypeWriter'

export const AboutUs = () => {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to create tomorrow's solutions today.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our strength lies in collaboration, knowledge sharing, and growing together as a tech family.",
      color: "green"
    },
    {
      icon: Target,
      title: "Excellence Focused",
      description: "We strive for quality in every project, ensuring our work makes a meaningful impact.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Passion Powered",
      description: "Driven by genuine love for technology and the desire to solve real-world problems.",
      color: "pink"
    }
  ]

  return (
    <section id="about" className="min-h-screen flex items-start sm:items-center justify-center px-4 sm:px-8 py-16 sm:py-20 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto w-full">
        <TerminalWindow title="/about/technojam/">
          <div className="space-y-12">
            {/* Header Section */}
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TypeWriter text="$ cat about_us.md" delay={50} />
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                  About TechnoJam
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  We are a vibrant community of <span className="text-cyan-400">developers</span>, 
                  <span className="text-blue-400"> designers</span>, and 
                  <span className="text-purple-400"> tech enthusiasts</span> at Galgotias University, 
                  dedicated to fostering innovation and building the future through technology.
                </p>
              </motion.div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-black/50 via-blue-950/30 to-black/50 p-8 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
                <motion.div
                  className="flex items-center justify-center gap-3 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
                >
                  <Zap className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-cyan-400">Our Mission</h3>
                  <Zap className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                >
                  To create an inclusive environment where students can explore, learn, and master 
                  cutting-edge technologies while building real-world solutions that make a difference. 
                  We believe in <span className="text-cyan-400 font-semibold">learning by doing</span>, 
                  <span className="text-blue-400 font-semibold"> sharing knowledge</span>, and 
                  <span className="text-purple-400 font-semibold"> growing together</span> as a community.
                </motion.p>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-center text-cyan-400">
                <TypeWriter text="// Our Core Values" delay={80} />
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-${value.color}-500/30 hover:border-${value.color}-400/60 transition-all duration-300`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3.2 + index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`p-3 rounded-lg bg-${value.color}-500/20 border border-${value.color}-500/40 flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className={`w-6 h-6 text-${value.color}-400`} />
                      </motion.div>
                      <div>
                        <h4 className={`text-lg font-bold text-${value.color}-400 mb-2`}>
                          {value.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>

                    {/* Subtle glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                      style={{
                        background: `linear-gradient(135deg, ${
                          value.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' :
                          value.color === 'green' ? 'rgba(16, 185, 129, 0.1)' :
                          value.color === 'purple' ? 'rgba(139, 92, 246, 0.1)' :
                          'rgba(236, 72, 153, 0.1)'
                        }, transparent)`,
                        filter: "blur(20px)"
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-lg hover:border-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-cyan-400 font-mono">
                  Ready to join our journey?
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Rocket className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}