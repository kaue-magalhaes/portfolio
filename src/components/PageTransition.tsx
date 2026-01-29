'use client'

import { motion } from 'motion/react'
import { ANIMATION_DURATION, ANIMATION_OFFSET } from '@/constants/animations'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: ANIMATION_OFFSET.MEDIUM }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATION.SLOW }}
    >
      {children}
    </motion.div>
  )
}
