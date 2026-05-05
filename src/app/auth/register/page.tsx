'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'
import { UserPlus, User, Lock, Phone, MapPin, Calendar, AlertCircle, LogIn, Moon, Sun, Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nik: '',
    name: '',
    birthDate: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.nik.length !== 16) {
      setError('NIK harus berjumlah 16 digit')
      return
    }

    if (formData.password.length < 6) {
      setError('Kata sandi minimal harus 6 karakter')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Konfirmasi kata sandi tidak cocok')
      return
    }

    setIsLoading(true)
    try {
      const success = await register(formData)
      if (success) {
        router.push('/layanan/dashboard')
      } else {
        setError('Pendaftaran gagal. NIK mungkin sudah terdaftar.')
      }
    } catch (err) {
      setError('Terjadi kesalahan saat pendaftaran')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-desa-blue-950 px-4 py-24 md:py-20 transition-colors duration-500 overflow-y-auto">
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

      <div className="animate-in fade-in zoom-in duration-1000 relative z-10 w-full max-w-3xl rounded-[40px] bg-white dark:bg-desa-blue-900/40 backdrop-blur-xl p-6 md:p-10 shadow-2xl border border-desa-blue-900/5 dark:border-white/10 transition-colors duration-500">
        <div className="text-center mb-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-desa-blue-900 p-2.5 shadow-lg shadow-desa-blue-900/20 mb-4">
            <img src="/img/image.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <h2 className="font-timeless text-2xl md:text-3xl font-black text-desa-blue-950 dark:text-white leading-tight">Daftar Akun Portal</h2>
          <p className="mt-1 text-[9px] font-black text-desa-blue-900/40 dark:text-desa-yellow-500 uppercase tracking-[0.3em]">Portal Warga Desa Sukahurip</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="animate-in slide-in-from-top-2 duration-300 flex items-center gap-3 rounded-2xl bg-rose-50 p-3.5 text-[10px] font-bold text-rose-600 border border-rose-100">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {/* Left Column */}
            <div className="space-y-5">
              <div className="group space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Data Identitas</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                  <input name="nik" maxLength={16} inputMode="numeric" required className="block w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 py-3.5 pl-12 pr-4 text-xs text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/40 dark:placeholder:text-white/30 outline-hidden focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all border-0 shadow-sm" placeholder="NIK (16 Digit)" value={formData.nik} onChange={handleChange} />
                </div>
              </div>

              <div className="group space-y-2">
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                  <input name="name" required className="block w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 py-3.5 pl-12 pr-4 text-xs text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/40 dark:placeholder:text-white/30 outline-hidden focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all border-0 shadow-sm" placeholder="Nama Lengkap" value={formData.name} onChange={handleChange} />
                </div>
              </div>

              <div className="group space-y-2">
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/40 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                  <input name="birthDate" type="date" required className="block w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 py-3.5 pl-12 pr-4 text-xs text-desa-blue-950 dark:text-white dark:[color-scheme:dark] font-bold placeholder:text-desa-blue-950/40 dark:placeholder:text-white/30 outline-hidden focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all border-0 shadow-sm" value={formData.birthDate} onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <div className="group space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Kontak & Keamanan</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                  <input name="phone" inputMode="tel" required className="block w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 py-3.5 pl-12 pr-4 text-xs text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/40 dark:placeholder:text-white/30 outline-hidden focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all border-0 shadow-sm" placeholder="Nomor Telepon/WA" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="group space-y-2">
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                  <input name="password" type={showPassword ? 'text' : 'password'} required className="block w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 py-3.5 pl-12 pr-12 text-xs text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/40 dark:placeholder:text-white/30 outline-hidden focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all border-0 shadow-sm" placeholder="Kata Sandi" value={formData.password} onChange={handleChange} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 hover:text-desa-blue-900 dark:hover:text-desa-yellow-500 transition-colors focus:outline-hidden"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="group space-y-2">
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
                  <input name="confirmPassword" type={showPassword ? 'text' : 'password'} required className="block w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 py-3.5 pl-12 pr-12 text-xs text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/40 dark:placeholder:text-white/30 outline-hidden focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all border-0 shadow-sm" placeholder="Ulangi Kata Sandi" value={formData.confirmPassword} onChange={handleChange} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 hover:text-desa-blue-900 dark:hover:text-desa-yellow-500 transition-colors focus:outline-hidden"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="group space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Alamat Lengkap</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-4 top-4 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-white transition-colors" />
              <textarea name="address" required rows={1} className="block w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 py-3.5 pl-12 pr-4 text-xs text-desa-blue-950 dark:text-white font-bold placeholder:text-desa-blue-950/40 dark:placeholder:text-white/30 outline-hidden focus:bg-white dark:focus:bg-white/15 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all border-0 shadow-sm resize-none" placeholder="Alamat Domisili Sesuai KTP" value={formData.address} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-desa-blue-900 dark:bg-desa-yellow-500 py-4.5 text-[10px] font-black uppercase tracking-[0.3em] text-white dark:text-desa-blue-950 shadow-xl shadow-desa-blue-900/20 dark:shadow-desa-yellow-500/20 transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-yellow-400 active:scale-95 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              {isLoading ? 'Mendaftarkan...' : (
                <>Daftar Akun Portal <UserPlus size={18} /></>
              )}
            </button>
            <p className="text-center text-[9px] font-bold text-desa-blue-950/30 dark:text-white/40 uppercase tracking-widest">
              Sudah memiliki akun?{' '}
              <Link href="/auth/login" className="text-desa-blue-900 dark:text-desa-yellow-500 font-black hover:underline">
                Masuk Sekarang
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
