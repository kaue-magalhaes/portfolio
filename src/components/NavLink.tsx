'use client'

import type { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({
  href,
  children,
}: { href: Url; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? 'text-foreground' : 'text-muted-foreground'
        } hover:text-foreground`}
      >
        {children}
      </Link>
    </li>
  )
}
