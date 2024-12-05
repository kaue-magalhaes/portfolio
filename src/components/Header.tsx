import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { navigationRoutes } from '@/constants/navigationRoutes'
import { ROUTES } from '@/constants/routes'

export default function Header() {
  return (
    <header className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between items-center">
      <Link href={ROUTES.HOME} className="text-xl font-medium">
        Kauê de Magalhães
      </Link>
      <Navigation routes={navigationRoutes} />
    </header>
  )
}
