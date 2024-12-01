import ContactLink from '@/components/ContactLink'

export default function Footer() {
  return (
    <footer className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between items-center">
      <p className="text-muted-foreground text-sm">Made with ❤️ by Kauê.</p>
      <nav>
        <ul className="flex space-x-8 text-sm">
          <ContactLink href="https://github.com/kaue-magalhaes">
            GitHub
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/kaue-de-magalhaes/">
            LinkedIn
          </ContactLink>
          <ContactLink href="mailto:kauedemagalhaes27@gmail.com">
            Email
          </ContactLink>
        </ul>
      </nav>
    </footer>
  )
}
