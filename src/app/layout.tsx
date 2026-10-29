import type { Metadata, Viewport } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { themeInitScript } from '@/lib/theme'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const meteors = [
  { axis: 'x', line: 1, dur: 9, delay: 1 },
  { axis: 'x', line: 4, dur: 12, delay: 5, rev: true },
  { axis: 'x', line: 6, dur: 15, delay: 9 },
  { axis: 'y', line: 3, dur: 11, delay: 3 },
  { axis: 'y', line: 8, dur: 14, delay: 7, rev: true },
  { axis: 'y', line: 13, dur: 10, delay: 0.5 },
] as const

export const metadata: Metadata = {
  title: 'Nexus.Art',
  description:
    'Portfolio Galih Wicaksana, Web & Salesforce Developer. Aplikasi web yang fungsional dan mudah digunakan dengan React, Next.js, dan TypeScript.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#080a11' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <div className="bg-canvas" aria-hidden="true">
          {meteors.map((m, i) => (
            <span
              key={i}
              className={`meteor meteor-${m.axis}${'rev' in m ? ' meteor-rev' : ''}`}
              style={
                {
                  '--line': m.line,
                  '--dur': `${m.dur}s`,
                  '--delay': `${m.delay}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  )
}
