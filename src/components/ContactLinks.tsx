import type { Route } from '@/types/Route'
import ContactLink from '@/components/ContactLink'

interface ContactLinksProps {
  links: Route[]
}

export default function ContactLinks({ links }: ContactLinksProps) {
  return (
    <nav>
      <ul className="flex space-x-8 text-sm">
        {links.map(link => (
          <ContactLink key={link.href} href={link.href}>
            {link.label}
          </ContactLink>
        ))}
      </ul>
    </nav>
  )
}
