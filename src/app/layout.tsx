import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Galih Wicaksana - Portfolio',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyClasses = `${inter.className} bg-background text-foreground`; 

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyClasses}> 
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}