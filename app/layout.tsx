import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'ScamBomb - Stop scams in one click',
  description: 'Paste any text, email, or SMS. ScamBomb checks red flags, explains the risk in plain English, and tells you exactly what to do next.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <GoogleAnalytics measurementId="G-T61B4NX3J8" />
        {children}
      </body>
    </html>
  )
}
