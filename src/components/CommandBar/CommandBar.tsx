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

interface CommandBarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  actions: CommandAction[]
}

export default function CommandBar({
  open,
  onOpenChange,
  actions,
}: CommandBarProps) {
  const handleSelect = (action: CommandAction) => {
    onOpenChange(false)
    redirect(action.href as string)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
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
