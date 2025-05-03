import './globals.css'
import { ReactNode } from 'react'
import AuthProvider from '@/components/AuthProvider'
import Header from '@/components/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Header />
          <main className="flex-grow max-w-4xl mx-auto w-full p-4">
            {children}
          </main>
          <footer className="bg-gray-100 text-sm text-gray-600 text-center p-4">
            © {new Date().getFullYear()} Your Name – <a href="/legal/privacy" className="underline">Privacy</a>
          </footer>
        </AuthProvider>
      </body>
    </html>
  )
}
