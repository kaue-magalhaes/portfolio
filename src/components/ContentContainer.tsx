'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface ContentContainerProps {
  className?: string
  children: React.ReactNode
}

export default function ContentContainer({
  className,
  children,
}: ContentContainerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('flex flex-col justify-center px-4', className)}
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">{children}</div>
    </motion.section>
  )
}
