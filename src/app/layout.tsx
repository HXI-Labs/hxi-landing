import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HXI Labs - Human Experience Interaction',
  description: 'Building thoughtful technology for human moments. We design technology that amplifies rather than replaces human experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}