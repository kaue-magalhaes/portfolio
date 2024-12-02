'use client'

import { motion } from 'motion/react'
import WavingHandEmoji from '@/components/WavingHandEmoji'
import CommandBarButton from '@/components/CommandBar/CommandBarButton'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center py-20 min-h-[70vh] px-4"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Hi, I&apos;m Kauê <WavingHandEmoji />
        </h1>

        <div className="space-y-4">
          <p className="text-xl text-gray-400">
            a full-stack developer with a passion for creating solutions
          </p>
          <CommandBarButton />
        </div>
      </div>
    </motion.section>
  )
}
