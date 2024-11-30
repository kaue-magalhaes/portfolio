import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-medium">
        Kauê de Magalhães
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-muted-foreground hover:text-foreground">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
