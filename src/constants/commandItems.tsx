import { Briefcase, FileText, User } from 'lucide-react'
import { ROUTES } from './routes'

export const commandItems = [
  {
    key: 'work',
    href: ROUTES.WORK,
    icon: <Briefcase />,
    label: 'Work',
    shortcut: 'W',
  },
  {
    key: 'about',
    href: ROUTES.ABOUT,
    icon: <User />,
    label: 'About',
    shortcut: 'A',
  },
  {
    key: 'resume',
    href: ROUTES.RESUME,
    icon: <FileText />,
    label: 'Resume',
    shortcut: 'R',
  },
]
