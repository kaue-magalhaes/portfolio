import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from '@/components/ui/command'
import type { Dispatch, SetStateAction } from 'react'

export default function CommandBar({
  open,
  setOpen,
  children,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {children}
      </CommandList>
    </CommandDialog>
  )
}
