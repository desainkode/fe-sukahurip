'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  nik: string
  name: string
  address: string
  phone: string
  status: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (nik: string, password: string) => Promise<boolean>
  register: (userData: any) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem('desa_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (nik: string, password: string) => {
    // Mock login
    if (nik.length === 16) {
      const mockUser: User = {
        nik,
        name: 'Anggi Abdul Rohim',
        address: 'Jl. Raya Cipatujah No. 123',
        phone: '081234567890',
        status: 'Terverifikasi'
      }
      setUser(mockUser)
      localStorage.setItem('desa_user', JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const register = async (userData: any) => {
    // Mock register
    const mockUser: User = {
      nik: userData.nik,
      name: userData.name,
      address: userData.address,
      phone: userData.phone,
      status: 'Terverifikasi'
    }
    setUser(mockUser)
    localStorage.setItem('desa_user', JSON.stringify(mockUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('desa_user')
    router.push('/')
  }

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem('desa_user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
