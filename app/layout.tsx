import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const oldRocket = localFont({
  src: './fonts/GrittyRetro-Regular.ttf',
  variable: '--font-retro',
})

const kaviron = localFont({
  src: './fonts/Kaviron.ttf',
  variable: '--font-display',
})

const grittyItalic = localFont({
  src: './fonts/GrittyRetro-Italic.ttf',
  variable: '--font-accent',
})

export const metadata: Metadata = {
  title: 'Styner - Links',
  description: 'All my links in one place. Follow me on Instagram, TikTok, YouTube, X, and more.',
  authors: [{ name: 'StynerDev', url: 'https://www.styner.dev/' }],
  creator: 'StynerDev',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ height: '100%', minHeight: '-webkit-fill-available' }}>
      <body className={`${dmSerif.variable} ${inter.variable} ${oldRocket.variable} ${kaviron.variable} ${grittyItalic.variable} font-sans antialiased`} style={{ height: '100%', minHeight: '-webkit-fill-available' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
