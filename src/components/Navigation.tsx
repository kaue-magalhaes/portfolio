import NavLink from '@/components/NavLink'
import type { Route } from '@/types/Route'

interface NavigationProps {
  routes: Route[]
}

export default function Navigation({ routes }: NavigationProps) {
  return (
    <nav>
      <ul className="flex space-x-8">
        {routes.map(route => (
          <NavLink key={route.href} href={route.href}>
            {route.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
