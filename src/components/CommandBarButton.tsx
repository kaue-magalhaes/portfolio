import { ArrowRight, Briefcase, FileText, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import CommandKey from './CommandKey'
import CommandBar from './CommandBar'
import { CommandItem, CommandShortcut } from './ui/command'

export default function CommandBarButton() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

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
      <CommandBar open={open} setOpen={setOpen}>
        <CommandItem>
          <Briefcase />
          <span>Work</span>
          <CommandShortcut>W</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <User />
          <span>About</span>
          <CommandShortcut>A</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <FileText />
          <span>Resume</span>
          <CommandShortcut>R</CommandShortcut>
        </CommandItem>
      </CommandBar>
    </>
  )
}
