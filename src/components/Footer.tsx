export default function Footer() {
  return (
    <footer className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between items-center">
      <p className="text-muted-foreground text-sm">Made with ❤️ by Kauê.</p>
      <nav>
        <ul className="flex space-x-8 text-sm">
          <li>
            <a
              href="https://github.com/kaue-magalhaes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kaue-de-magalhaes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:kauedemagalhaes27@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              Email
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
