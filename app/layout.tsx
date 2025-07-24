import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import HeaderComponent from './_components/HeaderComponent'
import FooterComponent from './_components/FooterComponent'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CinemaRepo',
  description: 'Teste para vaga',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-shade2/90 text-shade5 `}
      >
        <HeaderComponent />
        <main className="py-24">{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
}
