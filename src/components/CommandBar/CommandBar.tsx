import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command'
import type { Dispatch, SetStateAction } from 'react'

interface CommandItemProps {
  key: string
  icon: React.ReactNode
  label: string
  shortcut: string
}

export default function CommandBar({
  open,
  setOpen,
  commandItems,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  commandItems: CommandItemProps[]
}) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {commandItems.map(item => (
          <CommandItem key={item.key}>
            {item.icon}
            {item.label}
            <CommandShortcut>{item.shortcut}</CommandShortcut>
          </CommandItem>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
