import type { ContactLink } from '@/types/link'
import ContactLinkItem from '@/components/ContactLinks/ContactLinkItem'

interface ContactLinksBarProps {
  links: ContactLink[]
}

export default function ContactLinksBar({ links }: ContactLinksBarProps) {
  return (
    <nav>
      <ul className="flex space-x-8 text-sm">
        {links.map(link => (
          <ContactLinkItem key={link.key} link={link} />
        ))}
      </ul>
    </nav>
  )
}
