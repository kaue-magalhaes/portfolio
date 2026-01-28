'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import type { NavigationLink } from '@/types/link'

interface MobileMenuProps {
  routes: NavigationLink[]
}

export default function MobileMenu({ routes }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px]">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <nav className="mt-8">
          <ul className="flex flex-col space-y-2">
            {routes.map(route => {
              const isActive = pathname === route.href
              return (
                <li key={route.key}>
                  <Link
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={`
                      min-h-[44px] flex items-center px-2 rounded-md
                      ${isActive ? 'text-foreground bg-muted' : 'text-muted-foreground'}
                      hover:text-foreground hover:bg-muted
                    `}
                  >
                    {route.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
