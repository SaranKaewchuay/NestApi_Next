import './globals.css'
import type { Metadata } from 'next'
import Nav from '../../component/navbar'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '../../redux/provide'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
