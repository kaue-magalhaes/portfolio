import { motion } from 'motion/react'

export default function WavingHandEmoji() {
  const waveAnimation = {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'loop' as const,
      ease: 'linear',
    },
  }

  return (
    <motion.span
      animate={waveAnimation}
      style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
    >
      👋
    </motion.span>
  )
}
