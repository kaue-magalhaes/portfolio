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
  title: 'Kauê de Magalhães 🖖',
  description: 'This is my personal website',
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
