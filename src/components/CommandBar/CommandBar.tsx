import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command'
import type { Url } from 'next/dist/shared/lib/router/router'
import { redirect } from 'next/navigation'
import type { Dispatch, SetStateAction } from 'react'

interface CommandItemProps {
  key: string
  href: Url
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
          <CommandItem
            key={item.key}
            onSelect={() => redirect(item.href as string)}
          >
            {item.icon}
            {item.label}
            <CommandShortcut>{item.shortcut}</CommandShortcut>
          </CommandItem>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
