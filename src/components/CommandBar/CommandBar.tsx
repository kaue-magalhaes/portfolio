'use client'

import { useRouter } from 'next/navigation'
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command'
import { useToggleOnKeyCombo } from '@/hooks/useToggleOnKeyCombo'
import type { CommandAction } from '@/types/command'

interface CommandBarProps {
  actions: CommandAction[]
}

export default function CommandBar({ actions }: CommandBarProps) {
  const router = useRouter()
  const [open, toggleCommandBar, closeCommandBar] = useToggleOnKeyCombo({
    targetKey: 'k',
    modifiers: { ctrl: true },
  })

  const handleSelect = (action: CommandAction) => {
    closeCommandBar()
    router.push(action.href as string)
  }

  return (
    <CommandDialog open={open} onOpenChange={toggleCommandBar}>
      <CommandInput placeholder="Digite um comando ou busque..." />
      <CommandList label="Sugestões">
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
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
