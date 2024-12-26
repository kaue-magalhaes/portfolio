'use client'

import ContentContainer from '@/components/ContentContainer'
import me from '../../../public/images/me.gif'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function Work() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <ContentContainer className="py-10">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-transparent">
            Crafting code. Creating impact.
          </span>
        </h1>
        <p className="text-muted-foreground">
          I'm passionate about developing software. Here you can find{' '}
          <span className="text-foreground">some of the projects</span> I've
          worked on.
        </p>
      </div>
      <div className="grid sm:grid-cols-2">
        <motion.Card
          onHoverStart={() => setHovered('project1')}
          onHoverEnd={() => setHovered(null)}
          className="h-full flex flex-col overflow-hidden border-0 relative transition-all ease-in-out"
        >
          {hovered === 'project1' && (
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
          <CardHeader>
            <div className="overflow-hidden">
              <Image
                src={me}
                alt="Kauê de Magalhães"
                className="w-  h-96 object-cover transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="font-semibold text-xl mb-2">
              Kauê de Magalhães
            </CardTitle>
            <CardDescription>I'm testing this card component.</CardDescription>
          </CardContent>
        </motion.Card>
        <motion.Card
          onHoverStart={() => setHovered('project2')}
          onHoverEnd={() => setHovered(null)}
          className="h-full flex flex-col overflow-hidden border-0 relative transition-all ease-in-out"
        >
          {hovered === 'project2' && (
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
          <CardHeader>
            <div className="overflow-hidden">
              <Image
                src={me}
                alt="Kauê de Magalhães"
                className="w-full h-96 object-cover transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="font-semibold text-xl mb-2">
              Kauê de Magalhães
            </CardTitle>
            <CardDescription>I'm testing this card component.</CardDescription>
          </CardContent>
        </motion.Card>
      </div>
    </ContentContainer>
  )
}
