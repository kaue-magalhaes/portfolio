import type { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

export default function NavLink({
  href,
  children,
}: { href: Url; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-foreground">
        {children}
      </Link>
    </li>
  )
}
