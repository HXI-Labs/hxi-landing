import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HXI Labs',
  description:
    'HXI Labs is a research lab studying the space between people and machines. We build intelligence that gives people more of each other.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink font-serif">{children}</body>
    </html>
  )
}
