export default function ContactLink({
  href,
  children,
}: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground"
      >
        {children}
      </a>
    </li>
  )
}
