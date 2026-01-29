import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CommandBar from '@/components/CommandBar/CommandBar'
import { commandActions } from '@/constants/commandActions'
import { CommandBarProvider } from '@/contexts/CommandBarContext'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kauem.dev'),
  title: {
    default: 'Kauê de Magalhães - Full Stack Developer',
    template: '%s | Kauê de Magalhães',
  },
  description:
    'Full Stack Developer especializado em Laravel, React e Next.js. Portfólio com projetos profissionais, experiência e artigos técnicos.',
  keywords: [
    'Full Stack Developer',
    'Laravel',
    'React',
    'Next.js',
    'TypeScript',
    'PHP',
    'Web Developer',
    'Software Engineer',
  ],
  authors: [{ name: 'Kauê de Magalhães' }],
  creator: 'Kauê de Magalhães',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kauem.dev',
    siteName: 'Kauê de Magalhães',
    title: 'Kauê de Magalhães - Full Stack Developer',
    description:
      'Full Stack Developer especializado em Laravel, React e Next.js. Portfólio com projetos profissionais e artigos técnicos.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kauê de Magalhães - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kauê de Magalhães - Full Stack Developer',
    description:
      'Full Stack Developer especializado em Laravel, React e Next.js.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CommandBarProvider>
          <Header />
          <main className="max-w-7xl w-full grow mx-auto px-4 py-6">
            {children}
            <CommandBar actions={commandActions} />
          </main>
          <Footer />
        </CommandBarProvider>
      </body>
    </html>
  )
}
