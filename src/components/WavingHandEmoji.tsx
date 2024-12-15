'use client'

import { motion } from 'motion/react'
import { wavingHandAnimation } from '@/constants/animations'

export default function WavingHandEmoji() {
  return (
    <motion.span
      animate={wavingHandAnimation}
      style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
    >
      👋
    </motion.span>
  )
}
