'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircle, Terminal } from 'lucide-react'
import { TerminalWindow } from '../ui/TerminalWindow'
import { TypeWriter } from '../ui/TypeWriter'

export const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/technojam",
      color: "white",
      description: "Check out our code repositories",
      followers: "100+",
      gradient: "from-gray-700 to-black",
      displayUrl: "@technojam"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/technojam/",
      color: "blue",
      description: "Professional networking & updates",
      followers: "1K+",
      gradient: "from-gray-700 to-black",
      displayUrl: "TechnoJam"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/technojam_gu",
      color: "sky",
      description: "Daily tech updates & news",
      followers: "300+",
      gradient: "from-gray-700 to-black",
      displayUrl: "@technojam_gu"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/teamtechnojam/",
      color: "pink",
      description: "Behind the scenes moments",
      followers: "2.5K+",
      gradient: "from-gray-700 to-black",
      displayUrl: "@teamtechnojam"
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "technojam@galgotiasuniversity.edu.in",
      url: "mailto:technojam@galgotiasuniversity.edu.in",
      description: "Get in touch for collaborations",
      color: "red",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Discord Community",
      value: "TechnoJam Server",
      url: "https://discord.com/invite/6ksUUABBkY",
      description: "Join 500+ active members",
      color: "purple",
      action: "Join Discord"
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
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
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
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
                    <a
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-6 rounded-xl bg-gradient-to-br from-${method.color}-900/20 to-black/50 border border-${method.color}-500/30 hover:border-${method.color}-400/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${method.color}-500/20`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-${method.color}-500/20 border border-${method.color}-500/40`}>
                          <method.icon className={`w-6 h-6 text-${method.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-${method.color}-400 font-mono font-bold mb-2`}>
                            {method.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            {method.description}
                          </p>
                          <p className={`text-${method.color}-300 font-mono text-sm`}>
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Section - Seamless Integration */}
            <div className="space-y-8">
              {/* Social section header */}
              <motion.div
                className="relative p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <div className="text-center space-y-4">
                  {/* Terminal command style header */}
                  {/* <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-green-400 font-mono">$</span>
                    <TypeWriter text="git clone https://github.com/technojam/quantum-hyperdrive-network.git" delay={60} />
                  </div> */}

                  <motion.h3
                    className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-xl md:text-2xl font-mono font-bold"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Connect With Us
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                  >
                    <span className="text-cyan-400">social_connect()</span> - Stay synchronized with our distributed community across multiple platforms.
                    Real-time updates, project announcements, and direct communication channels.
                  </motion.p>

                  {/* Network status indicator */}
                  {/* <motion.div 
                    className="flex items-center justify-center gap-2 text-xs font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-green-400">Network Status: CONNECTED</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-blue-400">4 platforms active</span>
                  </motion.div> */}
                </div>
              </motion.div>

              {/* Social Media Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      z: 50,
                      transition: { duration: 0.3, type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className={`p-3 bg-gradient-to-br ${social.gradient} border border-${social.color}-500/30 hover:border-${social.color}-400/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${social.color}-500/20`}>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-${social.color}-500/20 border border-${social.color}-500/40`}>
                          <social.icon className={`w-6 h-6 text-${social.color}-400`} />
                        </div>
                        <div>
                          <h3 className={`text-${social.color}-400 font-mono font-bold text-sm`}>
                            {social.name}
                          </h3>
                          <p className="text-gray-400 text-xs mt-1">
                            {social.followers} followers
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Call to Action Terminal */}
            <motion.div
              className="mt-16 relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3, duration: 1, type: "spring", stiffness: 80 }}
            >
              {/* Terminal-style CTA with 3D effects */}
              <div className="relative bg-gradient-to-br from-black/90 via-blue-950/40 to-gray-950/40 p-4 rounded-3xl border-2 border-cyan-500/40 backdrop-blur-md overflow-hidden">
                {/* Animated circuit pattern background */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-10" viewBox="0 0 400 200">
                    <motion.path
                      d="M50,50 L150,50 L150,100 L250,100 L250,150 L350,150"
                      stroke="url(#circuit-gradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 3, delay: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.path
                      d="M100,25 L200,25 L200,75 L300,75 L300,125 L380,125"
                      stroke="url(#circuit-gradient-2)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2.5, delay: 4.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <defs>
                      <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                      </linearGradient>
                      <linearGradient id="circuit-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Terminal header */}
                <motion.div
                  className="flex items-center justify-between mb-6  border-b border-cyan-400/20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.5, duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 pb-1">
                    <motion.div
                      className="flex gap-2"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </motion.div>
                    <span className="text-cyan-400 font-mono text-sm ">technojam@community:~/join$</span>
                  </div>
                  <motion.div
                    className="text-green-400 text-xs font-mono"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    300+ members active
                  </motion.div>
                </motion.div>

                {/* Main content with enhanced styling */}
                <div className="relative z-10 text-center">
                  {/* Animated title */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4, duration: 0.8 }}
                  >
                    <div className="flex items-center justify-center gap-4 mb-4">

                      <Terminal className="w-10 h-10 text-cyan-400" />


                      <motion.h2
                        className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-2xl md:text-3xl font-mono font-bold"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        style={{ backgroundSize: "200% 200%" }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <TypeWriter text="Initialize Your Journey" delay={100} />
                      </motion.h2>
                    </div>

                    {/* Terminal command simulation */}
                    <motion.div
                      className="bg-black/50 p-4 rounded-lg border border-green-500/30 mb-6 text-left max-w-2xl mx-auto"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 4.5, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400">$</span>
                        <TypeWriter text="./init_developer_journey --community=technojam --skill=unlimited" delay={80} />
                      </div>
                      <motion.div
                        className="text-yellow-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 7, duration: 0.5 }}
                      >
                        [INFO] Connecting to TechnoJam network...<br />
                        [SUCCESS] Welcome to the future of learning! 🚀
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Description with glitch effect */}
                  <motion.p
                    className="text-gray-300 text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 8, duration: 0.8 }}
                  >
                    <span className="text-cyan-400 font-mono">throttle_to_learn()</span> with our passionate community of
                    <span className="text-blue-400 font-semibold"> developers</span>,
                    <span className="text-purple-400 font-semibold"> designers</span>, and
                    <span className="text-pink-400 font-semibold"> tech enthusiasts</span>.
                    Build amazing projects, share knowledge, and level up together!
                  </motion.p>

                  {/* Enhanced action buttons with futuristic design */}
                  <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8">
                    {/* Primary CTA Button - Join Now */}
                    <motion.a
                      href="#contact"
                      className="group relative bg-gradient-to-r from-gray-800 to-gray-900 border border-cyan-400/50 text-cyan-400 px-6 py-4 font-bold font-mono text-lg hover:from-gray-700 hover:to-gray-800 hover:border-cyan-300 hover:text-cyan-300 transition-all flex items-center gap-3 overflow-hidden"
                      initial={{ opacity: 0, y: 50, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: 8.5, duration: 0.8, type: "spring" }}
                      whileHover={{ rotateY: 2, boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)" }}
                      whileTap={{ scale: 0.92 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Subtle hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100"
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Gentle border glow */}
                      <motion.div
                        className="absolute inset-0 border border-blue-400/30 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />

                      <span className="relative z-10 flex items-center gap-4">
                        <Terminal className="w-7 h-7" />
                        sudo join --now
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        >
                          |
                        </motion.span>
                      </span>

                      {/* Subtle scanning effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      />

                      {/* Refined corner accents */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-blue-400/50 opacity-0 group-hover:opacity-80 transition-all duration-300" />
                      <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-purple-400/50 opacity-0 group-hover:opacity-80 transition-all duration-300" />
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-purple-400/50 opacity-0 group-hover:opacity-80 transition-all duration-300" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-blue-400/50 opacity-0 group-hover:opacity-80 transition-all duration-300" />
                    </motion.a>
                  </div>
                </div>

                {/* Bottom terminal line */}
                <motion.div
                  className="mt-8 pt-4 border-t border-cyan-400/20 flex items-center justify-between text-xs font-mono text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 10, duration: 0.8 }}
                >
                  <span>technojam v2.0.24 - Community Edition</span>
                  
                </motion.div>
              </div>
            </motion.div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}