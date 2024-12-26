'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimationContainerProps {
  key: string
  className?: string
  children: React.ReactNode
}

export default function AnimationContainer({
  key,
  className,
  children,
}: AnimationContainerProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div
      key={key}
      onHoverStart={() => setHovered(key)}
      onHoverEnd={() => setHovered(null)}
      className={cn('relative transition-all ease-in-out', className)}
    >
      {hovered === key && (
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
      {children}
    </motion.div>
  )
}
