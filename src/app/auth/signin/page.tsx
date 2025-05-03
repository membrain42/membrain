'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignInPage() {
  const [email, setEmail] = useState('')

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Sign In</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          await signIn('email', { email, callbackUrl: '/' })
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign in with Email
        </button>
      </form>
    </main>
  )
}
