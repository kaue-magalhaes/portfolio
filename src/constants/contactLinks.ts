import { contacts } from '@/constants/contacts'
import type { ContactLink } from '@/types/link'

export const contactLinks: ContactLink[] = [
  { key: 'contact-github', href: contacts.github, label: 'GitHub' },
  { key: 'contact-linkedin', href: contacts.linkedin, label: 'LinkedIn' },
  { key: 'contact-email', href: contacts.email, label: 'Email' },
]
