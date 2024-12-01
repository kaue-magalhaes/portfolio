import type { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

export default function NavLink({
  url,
  children,
}: { url: Url; children: React.ReactNode }) {
  return (
    <li>
      <Link href={url} className="text-muted-foreground hover:text-foreground">
        {children}
      </Link>
    </li>
  )
}
