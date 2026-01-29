'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { useAnimationGroup } from '@/contexts/AnimationGroupContext'
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
  const groupContext = useAnimationGroup()
  const [localHovered, setLocalHovered] = useState<string | null>(null)

  // Use group context if available, otherwise fallback to local state
  const hoveredItem = groupContext?.hoveredItem ?? localHovered
  const setHoveredItem = groupContext?.setHoveredItem ?? setLocalHovered
  const isHovered = hoveredItem === itemKey

  return (
    <motion.div
      onHoverStart={() => setHoveredItem(itemKey)}
      onHoverEnd={() => setHoveredItem(null)}
      className={cn('relative', className)}
    >
      {isHovered && (
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
