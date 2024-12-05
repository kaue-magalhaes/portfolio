import { CONTACTS } from '@/constants/contacts'
import type { Route } from '@/types/Route'

export const contactLinks: Route[] = [
  { href: CONTACTS.GITHUB, label: 'GitHub' },
  { href: CONTACTS.LINKEDIN, label: 'LinkedIn' },
  { href: CONTACTS.EMAIL, label: 'Email' },
]
