'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!Cookies.get('cookie-consent')) {
            setVisible(true)
        }
    }, [])

    const acceptCookies = () => {
        Cookies.set('cookie-consent', 'true', { expires: 365 })
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-sm flex items-center justify-between">
            <span>This site uses cookies to improve your experience.</span>
            <button
                onClick={acceptCookies}
                className="ml-4 px-3 py-1 bg-white text-gray-800 rounded"
            >
                OK
            </button>
        </div>
    )
}
