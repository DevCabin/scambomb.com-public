'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type AuthContextType = {
  isLoggedIn: boolean
  email: string | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  email: null,
  isLoading: true,
})

// Helper to get cookie value by name
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for auth cookie set by app.scambomb.com
    // Cookie is set with Domain=.scambomb.com so it's shared across subdomains
    const checkAuth = () => {
      if (typeof document === 'undefined') {
        setIsLoading(false)
        return
      }

      const authCookie = getCookie('scambomb_auth')
      const userEmail = getCookie('scambomb_user_email')
      
      // Debug logging
      console.log('[AuthProvider] Checking auth...', {
        authCookie: authCookie ? 'present' : 'missing',
        userEmail: userEmail ? 'present' : 'missing',
        allCookies: document.cookie.split(';').map(c => c.trim().split('=')[0])
      })
      
      setIsLoggedIn(!!authCookie)
      setEmail(userEmail)
      setIsLoading(false)
    }

    checkAuth()

    // Check periodically in case user logs in/out in another tab
    const interval = setInterval(checkAuth, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}