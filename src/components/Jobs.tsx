import { motion } from 'motion/react'
import { useState } from 'react'
import JobItem from '@/components/JobItem'

export interface JobProps {
  key: string
  role: string
  company?: string
  companyUrl?: string
  location?: string
  startDate: string
  endDate: string
  duration?: string
}

export default function Jobs({
  jobs,
}: {
  jobs: JobProps[]
}) {
  const [hovered, setHovered] = useState<string | null>(null)

  return jobs.map(job => (
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
  ))
}
