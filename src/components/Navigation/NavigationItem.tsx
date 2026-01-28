'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavigationLink } from '@/types/link'

interface NavigationItemProps {
  route: NavigationLink
}

export default function NavigationItem({ route }: NavigationItemProps) {
  const pathname = usePathname()
  const isActive = pathname === route.href

  return (
    <li>
      <Link
        href={route.href}
        className={`
          min-h-[44px] flex items-center
          ${isActive ? 'text-foreground' : 'text-muted-foreground'}
          hover:text-foreground
        `}
      >
        {route.label}
      </Link>
    </li>
  )
}
