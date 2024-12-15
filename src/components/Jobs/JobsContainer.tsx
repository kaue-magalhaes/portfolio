'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import type { Job } from '@/types/job'
import JobItem from '@/components/Jobs/JobItem'

interface JobsContainerProps {
  jobs: Job[]
}

export default function JobsContainer({ jobs }: JobsContainerProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div>
      {jobs.map(job => (
        <motion.div
          key={job.key}
          onHoverStart={() => setHovered(job.key)}
          onHoverEnd={() => setHovered(null)}
          className="p-4 relative rounded-lg transition-all ease-in-out"
        >
          {hovered === job.key && (
            <motion.div
              layoutId="hoverBackground"
              className="absolute inset-0 bg-muted rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{ zIndex: -1 }}
            />
          )}
          <JobItem job={job} />
        </motion.div>
      ))}
    </div>
  )
}
