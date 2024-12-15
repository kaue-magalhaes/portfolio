import type { ToggleOnKeyComboOptions } from '@/types/command'
import { useCallback, useEffect, useState } from 'react'

export function useToggleOnKeyCombo({
  targetKey,
  modifiers = {},
  element,
}: ToggleOnKeyComboOptions) {
  const [isActive, setIsActive] = useState(false)

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
        setIsActive(prev => !prev)
      }
    }

    targetElement.addEventListener('keydown', handleKeyDown as EventListener)

    return () => {
      targetElement.removeEventListener(
        'keydown',
        handleKeyDown as EventListener
      )
    }
  }, [targetKey, areModifiersPressed, element])

  return [isActive, setIsActive] as const
}
