import Link from 'next/link'
import NavigationBar from '@/components/Navigation/NavigationBar'
import { navigationRoutes } from '@/constants/navigationRoutes'
import { routes } from '@/constants/routes'

export default function Header() {
  return (
    <header className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between items-center">
      <Link href={routes.home} className="text-xl font-medium">
        Kauê de Magalhães
      </Link>
      <NavigationBar routes={navigationRoutes} />
    </header>
  )
}
