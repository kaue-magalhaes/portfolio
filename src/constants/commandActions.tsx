import { Briefcase, FileText, User } from 'lucide-react'
import { routes } from './routes'
import type { CommandAction } from '@/types/command'

export const commandActions: CommandAction[] = [
  {
    key: 'nav-work',
    href: routes.work,
    icon: <Briefcase />,
    label: 'Work',
    shortcut: 'W',
  },
  {
    key: 'nav-about',
    href: routes.about,
    icon: <User />,
    label: 'About',
    shortcut: 'A',
  },
  {
    key: 'nav-resume',
    href: routes.resume,
    icon: <FileText />,
    label: 'Resume',
    shortcut: 'R',
  },
]
