import NavigationItem from '@/components/Navigation/NavigationItem'
import type { NavigationLink } from '@/types/link'

interface NavigationBarProps {
  routes: NavigationLink[]
}

export default function NavigationBar({ routes }: NavigationBarProps) {
  return (
    <nav>
      <ul className="flex space-x-8">
        {routes.map(route => (
          <NavigationItem key={route.key} route={route} />
        ))}
      </ul>
    </nav>
  )
}
