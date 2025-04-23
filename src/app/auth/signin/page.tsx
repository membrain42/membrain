'use client'

import { signIn } from 'next-auth/react'

export default function SignInPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl mb-4">Sign In</h1>
      <div className="flex flex-col gap-2">
        <button onClick={() => signIn('email')} className="bg-gray-600 text-white px-4 py-2 rounded">Sign in with Email</button>
        <button onClick={() => signIn('google')} className="bg-red-500 text-white px-4 py-2 rounded">Sign in with Google</button>
        <button onClick={() => signIn('facebook')} className="bg-blue-700 text-white px-4 py-2 rounded">Sign in with Facebook</button>
      </div>
    </main>
  )
}
