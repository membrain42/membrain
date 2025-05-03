'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
    const { data: session } = useSession()

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="max-w-4xl mx-auto flex gap-6 justify-between">
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/support">Support</Link>
                </div>
                <div className="flex items-center gap-4">
                    {session?.user ? (
                        <>
                            <Link href="/profile" className="underline">
                                Hi, {session.user.name ?? session.user.email}
                            </Link>

                            <button onClick={() => signOut()} className="underline">Logout</button>
                        </>
                    ) : (
                        <button onClick={() => signIn()} className="underline">Login</button>
                    )}
                </div>

            </nav>
        </header>
    )
}
