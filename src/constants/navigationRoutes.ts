import { routes } from '@/constants/routes'
import type { NavigationLink } from '@/types/link'

export const navigationRoutes: NavigationLink[] = [
  { key: 'nav-work', href: routes.work, label: 'Trabalhos' },
  { key: 'nav-about', href: routes.about, label: 'Sobre' },
  { key: 'nav-resume', href: routes.resume, label: 'Currículo' },
]
