import Link from 'next/link'
import NavLink from '@/components/NavLink'

export default function Header() {
  return (
    <header className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-medium">
        Kauê de Magalhães
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <NavLink href="/">Work</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/resume">Resume</NavLink>
        </ul>
      </nav>
    </header>
  )
}
