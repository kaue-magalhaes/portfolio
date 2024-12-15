  'use client'

import { useCallback, useEffect } from 'react'
import type { ToggleOnKeyComboOptions } from '@/types/command'
import { useCommandBar } from '@/contexts/CommandBarContext'

export function useToggleOnKeyCombo({
  targetKey,
  modifiers = {},
  element,
}: ToggleOnKeyComboOptions) {
  const { isOpen, toggleCommandBar, closeCommandBar } = useCommandBar()

  const areModifiersPressed = useCallback(
    (event: KeyboardEvent) => {
      return (
        (!modifiers.ctrl || event.ctrlKey) &&
        (!modifiers.meta || event.metaKey) &&
        (!modifiers.alt || event.altKey) &&
        (!modifiers.shift || event.shiftKey)
      )
    },
    [modifiers]
  )

  useEffect(() => {
    if (typeof window === 'undefined') return

    const targetElement = element || window
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === targetKey.toLowerCase() &&
        areModifiersPressed(e)
      ) {
        e.preventDefault()
        toggleCommandBar()
      }
    }

    targetElement.addEventListener('keydown', handleKeyDown as EventListener)

    return () => {
      targetElement.removeEventListener(
        'keydown',
        handleKeyDown as EventListener
      )
    }
  }, [targetKey, areModifiersPressed, element, toggleCommandBar])

  return [isOpen, toggleCommandBar, closeCommandBar] as const
}
