import { Briefcase, FileText, User } from 'lucide-react'

export const commandItems = [
  {
    key: 'work',
    icon: <Briefcase />,
    label: 'Work',
    shortcut: 'W',
  },
  {
    key: 'about',
    icon: <User />,
    label: 'About',
    shortcut: 'A',
  },
  {
    key: 'resume',
    icon: <FileText />,
    label: 'Resume',
    shortcut: 'R',
  },
]
