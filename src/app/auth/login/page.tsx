'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'
import { LogIn, User, Lock, AlertCircle, Moon, Sun, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [nik, setNik] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (nik.length !== 16) {
      setError('NIK harus berjumlah 16 digit')
      return
    }

    setIsLoading(true)
    try {
      const success = await login(nik, password)
      if (success) {
        router.push('/layanan/dashboard')
      } else {
        setError('NIK atau Password salah')
      }
    } catch (err) {
      setError('Terjadi kesalahan saat login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-desa-blue-950 px-4 overflow-hidden transition-colors duration-500">
      {/* Top Actions */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-6 md:p-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-full bg-desa-blue-900/5 dark:bg-white/10 px-4 py-2.5 text-[10px] md:text-xs font-black uppercase tracking-widest text-desa-blue-950 dark:text-white backdrop-blur-md transition-all hover:bg-desa-blue-900/10 dark:hover:bg-white/20 active:scale-95 border border-desa-blue-900/10 dark:border-white/10 group"
        >
          <LogIn className="rotate-180 transition-transform group-hover:-translate-x-1" size={14} /> 
          <span className="hidden sm:inline">Beranda</span>
        </Link>

        <button 
          onClick={toggleTheme}
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-desa-blue-900/5 dark:bg-white/10 text-desa-blue-950 dark:text-desa-yellow-500 backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-desa-blue-900/10 dark:border-white/10"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-[0.03] dark:opacity-30 brightness-[0.7] contrast-[1.1] transition-opacity duration-500"
        >
          <source src="/video/thumbnail.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/40 to-white dark:from-desa-blue-950/90 dark:via-desa-blue-950/60 dark:to-desa-blue-950 transition-colors duration-500" />
      </div>

      {/* Decorative Blobs */}
      <div className="hero-float pointer-events-none absolute -right-20 -top-20 z-0 h-80 w-80 rounded-full bg-desa-yellow-500/5 dark:bg-desa-yellow-500/10 blur-[100px]" />
      <div className="hero-float pointer-events-none absolute -bottom-20 -left-20 z-0 h-60 w-60 rounded-full bg-desa-blue-500/5 dark:bg-desa-blue-500/10 blur-[80px]" />

      <div className="animate-in fade-in zoom-in duration-1000 relative z-10 w-full max-w-md rounded-[40px] bg-white dark:bg-desa-blue-900/40 backdrop-blur-xl p-8 shadow-2xl border border-desa-blue-900/5 dark:border-white/10 md:p-10 transition-colors duration-500">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-desa-blue-900 p-3 shadow-lg shadow-desa-blue-900/20 mb-4">
            <img src="/img/image.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <h2 className="font-timeless text-2xl md:text-3xl font-black text-desa-blue-950 dark:text-white leading-tight">Portal Warga</h2>
          <p className="mt-1 text-[10px] font-black text-desa-blue-900/40 dark:text-desa-yellow-500 uppercase tracking-[0.3em]">Layanan Mandiri Digital</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="animate-in slide-in-from-top-2 duration-300 flex items-center gap-3 rounded-2xl bg-rose-50 p-4 text-[10px] font-bold text-rose-600 border border-rose-100">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div className="group space-y-2">
              <label htmlFor="nik" className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">NIK (16 Digit)</label>
              <div className="relative">
                <User size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                <input
                  id="nik"
                  name="nik"
                  type="text"
                  inputMode="numeric"
                  required
                  maxLength={16}
                  value={nik}
                  onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))}
                  className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/20 dark:placeholder:text-white/30 focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-hidden shadow-sm text-xs"
                  placeholder="Masukkan NIK Anda"
                />
              </div>
            </div>

            <div className="group space-y-2">
              <label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Kata Sandi</label>
              <div className="relative">
                <Lock size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-14 text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/20 dark:placeholder:text-white/30 focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-hidden shadow-sm text-xs"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 hover:text-desa-blue-900 dark:hover:text-desa-yellow-500 transition-colors focus:outline-hidden"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-desa-blue-900 focus:ring-desa-blue-900" />
              <label htmlFor="remember-me" className="text-[9px] font-black text-desa-blue-950/60 dark:text-white/60 uppercase tracking-widest cursor-pointer">Ingat Saya</label>
            </div>
            <Link href="#" className="text-[9px] font-black text-desa-blue-900 dark:text-desa-yellow-500 hover:underline uppercase tracking-widest">Lupa Sandi?</Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-2xl bg-desa-blue-900 dark:bg-desa-yellow-500 py-4.5 text-[10px] font-black uppercase tracking-[0.2em] text-white dark:text-desa-blue-950 shadow-xl shadow-desa-blue-900/20 dark:shadow-desa-yellow-500/20 transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-yellow-400 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            {isLoading ? 'Memproses...' : 'Masuk Sekarang'}
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">
          Belum punya akun?{' '}
          <Link href="/auth/register" className="font-black text-desa-blue-900 dark:text-desa-yellow-500 hover:underline">
            Daftar Di Sini
          </Link>
        </p>
      </div>
    </div>
  )
}
