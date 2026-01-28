import NavigationItem from '@/components/Navigation/NavigationItem'
import MobileMenu from '@/components/Navigation/MobileMenu'
import type { NavigationLink } from '@/types/link'

interface NavigationBarProps {
  routes: NavigationLink[]
}

export default function NavigationBar({ routes }: NavigationBarProps) {
  return (
    <nav className="flex items-center">
      {/* Desktop */}
      <ul className="hidden md:flex space-x-8">
        {routes.map(route => (
          <NavigationItem key={route.key} route={route} />
        ))}
      </ul>
      {/* Mobile */}
      <MobileMenu routes={routes} />
    </nav>
  )
}
