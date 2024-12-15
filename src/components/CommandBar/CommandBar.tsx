'use client'

import { redirect } from 'next/navigation'
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command'
import type { CommandAction } from '@/types/command'
import { useToggleOnKeyCombo } from '@/hooks/useToggleOnKeyCombo'

interface CommandBarProps {
  actions: CommandAction[]
}

export default function CommandBar({ actions }: CommandBarProps) {
  const [open, toggleCommandBar, closeCommandBar] = useToggleOnKeyCombo({
    targetKey: 'k',
    modifiers: { ctrl: true },
  })

  const handleSelect = (action: CommandAction) => {
    closeCommandBar()
    redirect(action.href as string)
  }

  return (
    <CommandDialog open={open} onOpenChange={toggleCommandBar}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {actions.map(action => (
          <CommandItem key={action.key} onSelect={() => handleSelect(action)}>
            {action.icon}
            {action.label}
            <CommandShortcut>{action.shortcut}</CommandShortcut>
          </CommandItem>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
