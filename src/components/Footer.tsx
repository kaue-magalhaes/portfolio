import ContactLinksBar from '@/components/ContactLinks/ContactLinksBar'
import { contactLinks } from '@/constants/contactLinks'

export default function Footer() {
  return (
    <footer className="max-w-7xl w-full mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-muted-foreground text-sm">Made with ❤️ by Kauê.</p>
      <ContactLinksBar links={contactLinks} />
    </footer>
  )
}
