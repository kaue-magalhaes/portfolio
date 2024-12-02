import { useCallback, useEffect, useState } from 'react'

type KeyModifiers = {
  ctrl?: boolean
  meta?: boolean
  alt?: boolean
  shift?: boolean
}

type UseKeyComboOptions = {
  targetKey: string
  modifiers?: KeyModifiers
  element?: HTMLElement | Window
}

export function useToggleOnKeyCombo({
  targetKey,
  modifiers = {},
  element = window,
}: UseKeyComboOptions) {
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
    if (!element) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === targetKey.toLowerCase() && areModifiersPressed(e)) {
        e.preventDefault()
        setIsActive(prev => !prev)
      }
    }

    element.addEventListener('keydown', handleKeyDown as EventListener)

    return () => {
      element.removeEventListener('keydown', handleKeyDown as EventListener)
    }
  }, [targetKey, areModifiersPressed, element])

  return [isActive, setIsActive] as const
}
