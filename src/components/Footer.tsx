import ContactLinks from '@/components/ContactLinks'
import { contactLinks } from '@/constants/contactLinks'

export default function Footer() {
  return (
    <footer className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between items-center">
      <p className="text-muted-foreground text-sm">Made with ❤️ by Kauê.</p>
      <ContactLinks links={contactLinks} />
    </footer>
  )
}
