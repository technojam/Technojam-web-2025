'use client'

import { motion } from 'framer-motion'

export const SystemStatus = () => {
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