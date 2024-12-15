import type { Url } from 'next/dist/shared/lib/router/router'
import type { ReactNode } from 'react'

export interface CommandAction {
  key: string
  href: Url
  icon: ReactNode
  label: string
  shortcut: string
  category?: string
}

export interface KeyModifiers {
  ctrl?: boolean
  meta?: boolean
  alt?: boolean
  shift?: boolean
}

export interface ToggleOnKeyComboOptions {
  targetKey: string
  modifiers?: KeyModifiers
  element?: HTMLElement | Window
}
