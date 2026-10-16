'use client'

import { ArrowRight } from 'lucide-react'
import CommandKey from '@/components/CommandBar/CommandKey'
import { Button } from '@/components/ui/button'
import { useCommandBar } from '@/contexts/CommandBarContext'

export default function CommandBarButton() {
  const { toggleCommandBar } = useCommandBar()

  return (
    <Button
      variant="ghost"
      className="group transition-all duration-300 ease-in-out"
      onClick={toggleCommandBar}
    >
      <p className="text-sm text-muted-foreground flex items-center space-x-2 group-hover:text-foreground transition-colors duration-300">
        <span>Aperte</span>
        <CommandKey>Ctrl</CommandKey>
        <CommandKey>K</CommandKey>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </p>
    </Button>
  )
}
