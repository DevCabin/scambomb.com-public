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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for session token in localStorage
    const checkAuth = () => {
      if (typeof window === 'undefined') {
        setIsLoading(false)
        return
      }

      const token = localStorage.getItem('scambomb_session_token')
      const userEmail = localStorage.getItem('scambomb_user_email')
      
      setIsLoggedIn(!!token)
      setEmail(userEmail)
      setIsLoading(false)
    }

    checkAuth()

    // Listen for auth changes from other tabs/windows
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'scambomb_session_token') {
        checkAuth()
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
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