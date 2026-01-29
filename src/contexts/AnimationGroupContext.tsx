'use client'

import { createContext, useContext, useState } from 'react'

interface AnimationGroupContextValue {
  hoveredItem: string | null
  setHoveredItem: (key: string | null) => void
}

const AnimationGroupContext = createContext<AnimationGroupContextValue | null>(
  null
)

interface AnimationGroupProps {
  children: React.ReactNode
}

export function AnimationGroup({ children }: AnimationGroupProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <AnimationGroupContext.Provider value={{ hoveredItem, setHoveredItem }}>
      {children}
    </AnimationGroupContext.Provider>
  )
}

export function useAnimationGroup() {
  return useContext(AnimationGroupContext)
}
