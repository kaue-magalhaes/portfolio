'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import type { Work } from '@/types/work'
import WorkItem from './WorkItem'

interface WorksContainerProps {
  works: Work[]
}

export default function WorksContainer({ works }: WorksContainerProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="grid sm:grid-cols-2">
      {works.map(work => (
        <motion.div
          key={work.key}
          onHoverStart={() => setHovered(work.key)}
          onHoverEnd={() => setHovered(null)}
          className="rounded-lg text-card-foreground shadow h-full flex flex-col overflow-hidden border-0 relative transition-all ease-in-out"
        >
          {hovered === work.key && (
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
          <WorkItem work={work} />
        </motion.div>
      ))}
    </div>
  )
}
