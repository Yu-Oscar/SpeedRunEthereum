import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Speedrun Ethereum',
  description: 'Master Ethereum development through epic quests and challenges',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-teal-900">
        {children}
      </body>
    </html>
  )
}
