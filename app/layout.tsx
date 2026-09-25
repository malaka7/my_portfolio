import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono, Amiri } from 'next/font/google'
import './globals.css'

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Malak El-Wafy — Cybersecurity Specialist & Data Analyst',
  description:
    'Portfolio of Malak El-Wafy (ملك الوافي), Cybersecurity Specialist & Data Analyst. RISE Global Finalist bridging proactive security defense, hardware-software logic, and deep data analytics.',
  generator: 'v0.app',
  keywords: [
    'Malak El-Wafy',
    'Cybersecurity',
    'Data Analyst',
    'Python',
    'Digital Forensics',
    'RISE Global Finalist',
  ],
  openGraph: {
    title: 'Malak El-Wafy — Cybersecurity Specialist & Data Analyst',
    description:
      'Bridging proactive cybersecurity defense, hardware-software logic, and deep data analytics.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#120D16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {    
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${jetbrains.variable} ${amiri.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
