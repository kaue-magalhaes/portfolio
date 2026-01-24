'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimationContainerProps {
  itemKey: string
  animationId: string
  className?: string
  children: React.ReactNode
}

export default function AnimationContainer({
  itemKey,
  animationId,
  className,
  children,
}: AnimationContainerProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div
      onHoverStart={() => setHovered(itemKey)}
      onHoverEnd={() => setHovered(null)}
      className={cn('relative', className)}
    >
      {hovered === itemKey && (
        <motion.div
          layoutId={animationId}
          className="absolute inset-0 bg-muted rounded-lg -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      {children}
    </motion.div>
  )
}
