import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)

    if (!session) redirect('/auth/signin')

    return (
        <main className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl mb-4">Your Profile</h1>
            <ul className="space-y-2">
                <li><strong>Name:</strong> {session.user?.name ?? '—'}</li>
                <li><strong>Email:</strong> {session.user?.email}</li>
            </ul>
        </main>
    )
}
