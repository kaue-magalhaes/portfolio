import { Briefcase, FileText, House, User } from 'lucide-react'
import type { CommandAction } from '@/types/command'
import { routes } from './routes'

export const commandActions: CommandAction[] = [
  {
    key: 'nav-home',
    href: routes.home,
    icon: <House />,
    label: 'Início',
    shortcut: 'I',
  },
  {
    key: 'nav-work',
    href: routes.work,
    icon: <Briefcase />,
    label: 'Trabalhos',
    shortcut: 'T',
  },
  {
    key: 'nav-about',
    href: routes.about,
    icon: <User />,
    label: 'Sobre',
    shortcut: 'S',
  },
  {
    key: 'nav-resume',
    href: routes.resume,
    icon: <FileText />,
    label: 'Currículo',
    shortcut: 'C',
  },
]
