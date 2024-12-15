'use client'

import { createContext, useContext, useState } from 'react'

interface CommandBarContext {
  isOpen: boolean
  toggleCommandBar: () => void
  openCommandBar: () => void
  closeCommandBar: () => void
}

const CommandBarContext = createContext<CommandBarContext | null>(null)

export const CommandBarProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCommandBar = () => setIsOpen(prev => !prev)
  const openCommandBar = () => setIsOpen(true)
  const closeCommandBar = () => setIsOpen(false)

  return (
    <CommandBarContext.Provider
      value={{
        isOpen,
        toggleCommandBar,
        openCommandBar,
        closeCommandBar,
      }}
    >
      {children}
    </CommandBarContext.Provider>
  )
}

export const useCommandBar = () => {
  const context = useContext(CommandBarContext)

  if (!context) {
    throw new Error('useCommandBar must be used within a CommandBarProvider')
  }

  return context
}
