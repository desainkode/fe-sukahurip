'use client'

import { FileText, Clock, History, Bell, ArrowRight, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function DashboardPage() {
  const { user, logout } = useAuth()

  const stats = [
    { 
      label: 'Surat Selesai', 
      value: '12', 
      color: 'text-emerald-600 dark:text-emerald-400', 
      bg: 'bg-emerald-50 dark:bg-emerald-500/10', 
      border: 'border-emerald-100 dark:border-emerald-500/20',
      glow: 'group-hover:shadow-emerald-500/10'
    },
    { 
      label: 'Dalam Proses', 
      value: '2', 
      color: 'text-amber-600 dark:text-amber-400', 
      bg: 'bg-amber-50 dark:bg-amber-500/10', 
      border: 'border-amber-100 dark:border-amber-500/20',
      glow: 'group-hover:shadow-amber-500/10'
    },
    { 
      label: 'Total Pengajuan', 
      value: '14', 
      color: 'text-desa-blue-900 dark:text-desa-yellow-500', 
      bg: 'bg-desa-blue-50 dark:bg-desa-yellow-500/10', 
      border: 'border-desa-blue-900/10 dark:border-desa-yellow-500/20',
      glow: 'group-hover:shadow-desa-yellow-500/10'
    },
  ]



  return (
    <div className="space-y-8 animate-in fade-in duration-1000 pb-10 md:pb-20">
      {/* Welcome Section */}
      <section className="hero-reveal space-y-4 px-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1 md:space-y-2">
            <h2 className="font-timeless text-2xl md:text-5xl font-black text-desa-blue-950 dark:text-white tracking-tight">
              Selamat datang, <span className="text-desa-blue-900 dark:text-desa-yellow-500">{user?.name}!</span>
            </h2>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/50">
              <span className="flex items-center gap-2">NIK: {user?.nik}</span>
              <span className="flex items-center gap-2">Alamat: {user?.address}</span>
            </div>
          </div>

        </div>
        <p className="text-xs md:text-sm font-medium text-desa-blue-950/40 dark:text-white/50 max-w-3xl leading-relaxed">
          Pilih jenis layanan yang Anda butuhkan di bawah ini atau monitor status pengajuan Anda melalui menu Riwayat.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-6 md:p-10 shadow-xl shadow-desa-blue-900/5 border ${stat.border} transition-all hover:-translate-y-2 ${stat.glow}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="relative z-10 flex items-center gap-6">
              <div className={`flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[24px] ${stat.bg} transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner`}>
                <Clock size={28} className={`md:w-8 md:h-8 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-black text-desa-blue-950 dark:text-white leading-none mb-1.5 md:mb-2">{stat.value}</p>
                <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40">{stat.label}</p>
              </div>
            </div>
            <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-30 ${stat.bg}`} />
          </div>
        ))}
      </section>

      {/* Quick Access Section */}
      <section className="space-y-4 md:space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center gap-4">
              <div className="h-6 md:h-10 w-1.5 md:w-2 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500 shadow-lg shadow-desa-blue-900/20" />
              <h3 className="font-timeless text-xl md:text-3xl font-black text-desa-blue-950 dark:text-white">Layanan Mandiri</h3>
            </div>
            <p className="text-[11px] md:text-sm font-medium text-desa-blue-950/40 dark:text-white/50 max-w-xl">
              Ajukan surat administrasi atau pantau status pengajuan Anda dengan mudah.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          <Link 
            href="/layanan/surat"
            className="hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-6 md:p-12 shadow-xl shadow-desa-blue-900/5 border border-desa-blue-900/5 dark:border-white/5 transition-all hover:-translate-y-3 hover:shadow-2xl active:scale-95"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-start justify-between mb-6 md:mb-10">
              <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-[24px] md:rounded-[28px] bg-desa-blue-900 text-white shadow-xl shadow-desa-blue-900/20 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <FileText size={28} className="md:w-10 md:h-10" />
              </div>
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950 dark:text-white transition-all group-hover:bg-desa-blue-900 group-hover:text-white dark:group-hover:bg-desa-yellow-500 dark:group-hover:text-desa-blue-950">
                <ArrowRight size={20} className="md:size-[24px]" />
              </div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <h4 className="text-lg md:text-2xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors">
                Ajukan Layanan Surat
              </h4>
              <p className="text-[10px] md:text-sm font-medium text-desa-blue-950/40 dark:text-white/50 leading-relaxed max-w-sm">
                Mulai pengajuan surat pindah, akta, KK, KTP, dan lainnya secara digital.
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-desa-blue-900/5 blur-[60px] group-hover:bg-desa-blue-900/10 transition-all duration-700" />
          </Link>

          <Link 
            href="/layanan/status"
            className="hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-6 md:p-12 shadow-xl shadow-desa-blue-900/5 border border-desa-blue-900/5 dark:border-white/5 transition-all hover:-translate-y-3 hover:shadow-2xl active:scale-95"
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex items-start justify-between mb-6 md:mb-10">
              <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-[24px] md:rounded-[28px] bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <History size={28} className="md:w-10 md:h-10" />
              </div>
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-emerald-50 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 transition-all group-hover:bg-emerald-600 group-hover:text-white">
                <ArrowRight size={20} className="md:size-[24px]" />
              </div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <h4 className="text-lg md:text-2xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Riwayat Pengajuan
              </h4>
              <p className="text-[10px] md:text-sm font-medium text-desa-blue-950/40 dark:text-white/50 leading-relaxed max-w-sm">
                Pantau status dan tindak lanjut dari surat-surat yang telah Anda ajukan.
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-emerald-600/5 blur-[60px] group-hover:bg-emerald-600/10 transition-all duration-700" />
          </Link>
        </div>
      </section>
    </div>
  )
}
