import type { ContactLink } from '@/types/link'

interface ContactLinkItemProps {
  link: ContactLink
}

export default function ContactLinkItem({ link }: ContactLinkItemProps) {
  return (
    <li>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground"
      >
        {link.label}
      </a>
    </li>
  )
}
