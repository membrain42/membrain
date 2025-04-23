import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          <nav className="max-w-4xl mx-auto flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/support">Support</Link>
          </nav>
        </header>

        <main className="flex-grow max-w-4xl mx-auto w-full p-4">{children}</main>

        <footer className="bg-gray-100 text-sm text-gray-600 text-center p-4">
          © {new Date().getFullYear()} Your Name – <Link href="/legal/privacy" className="underline">Privacy</Link>
        </footer>
      </body>
    </html>
  )
}
