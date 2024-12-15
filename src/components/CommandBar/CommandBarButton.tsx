'use client'

import CommandKey from '@/components/CommandBar/CommandKey'
import CommandBar from '@/components/CommandBar/CommandBar'
import { useToggleOnKeyCombo } from '@/hooks/useToggleOnKeyCombo'
import { commandActions } from '@/constants/commandActions'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CommandBarButton() {
  const [open, setOpen] = useToggleOnKeyCombo({
    targetKey: 'k',
    modifiers: { ctrl: true },
  })

  return (
    <>
      <Button
        variant="ghost"
        className="group transition-all duration-300 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        <p className="text-sm text-muted-foreground flex items-center space-x-2 group-hover:text-foreground transition-colors duration-300">
          <span>Press</span>
          <CommandKey>Ctrl</CommandKey>
          <CommandKey>K</CommandKey>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </Button>
      <CommandBar open={open} onOpenChange={setOpen} actions={commandActions} />
    </>
  )
}
