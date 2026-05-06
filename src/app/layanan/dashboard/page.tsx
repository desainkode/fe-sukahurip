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
    <div className="space-y-12 animate-in fade-in duration-1000 pb-10 md:pb-20 px-2">
      {/* Welcome Section */}
      <section className="hero-reveal space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3 md:space-y-5">
            <h2 className="font-timeless text-3xl md:text-6xl font-black text-desa-blue-950 dark:text-white tracking-tighter leading-tight md:leading-[0.9]">
              Selamat datang, <br className="hidden md:block" />
              <span className="text-desa-blue-900 dark:text-desa-yellow-500">{user?.name}!</span>
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="flex items-center gap-2.5 bg-desa-blue-900/5 dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5 px-4 py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950/50 dark:text-white/50 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
                NIK: {user?.nik}
              </span>
              <span className="flex items-center gap-2.5 bg-emerald-500/5 dark:bg-emerald-500/5 border border-emerald-500/10 dark:border-emerald-500/10 px-4 py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600/80 dark:text-emerald-400/80 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-50 animate-pulse" />
                Status: Warga Aktif
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm md:text-lg font-medium text-desa-blue-950/60 dark:text-white/60 max-w-4xl leading-relaxed md:leading-loose">
          Pusat kendali layanan digital Anda. Pantau pengajuan surat, sampaikan pengaduan, dan akses berbagai kemudahan administrasi Desa Sukahurip secara efisien dan transparan.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.02)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${stat.glow}`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="relative z-10 flex items-center gap-5 md:gap-8">
              <div className={`flex h-14 w-14 md:h-18 md:w-18 shrink-0 items-center justify-center rounded-[22px] md:rounded-[28px] ${stat.bg} transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 shadow-inner border border-transparent group-hover:border-white/20`}>
                <Clock size={stat.label.includes('Total') ? 24 : 26} className={`md:size-8 ${stat.color} transition-transform group-hover:scale-110`} />
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-black text-desa-blue-950 dark:text-white leading-none mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40 group-hover:text-desa-blue-950/60 dark:group-hover:text-white/60 transition-colors">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Access Section */}
      <section className="space-y-8 md:space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-8 md:h-10 w-1.5 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
              <h3 className="font-timeless text-xl md:text-4xl font-black text-desa-blue-950 dark:text-white tracking-tighter uppercase">Layanan Mandiri</h3>
            </div>
            <p className="text-xs md:text-base font-medium text-desa-blue-950/40 dark:text-white/40 max-w-2xl leading-relaxed">
              Ajukan surat administrasi atau pantau status pengajuan Anda dengan mudah melalui portal digital kami.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:gap-10 sm:grid-cols-2">
          <Link 
            href="/layanan/pengajuan?type=pindah"
            className="hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-white dark:bg-desa-blue-900/40 p-8 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.03)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl active:scale-[0.98]"
            style={{ animationDelay: '450ms' }}
          >
            <div className="flex items-start justify-between mb-10 md:mb-16">
              <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-[20px] md:rounded-[24px] bg-desa-blue-900 text-white shadow-lg transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                <FileText size={28} className="md:size-10" />
              </div>
              <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950 dark:text-white transition-all duration-500 group-hover:bg-desa-blue-900 group-hover:text-white dark:group-hover:bg-desa-yellow-500 dark:group-hover:text-desa-blue-950 group-hover:rotate-45">
                <ArrowRight size={20} className="md:size-7" />
              </div>
            </div>
            <div className="space-y-3 md:space-y-5">
              <h4 className="font-timeless text-xl md:text-3xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors tracking-tighter uppercase">
                Ajukan <br className="hidden md:block" /> Layanan Surat
              </h4>
              <p className="text-xs md:text-base font-medium text-desa-blue-950/40 dark:text-white/40 leading-relaxed max-w-xs">
                Mulai pengajuan surat pindah, akta, KK, KTP, dan administrasi lainnya secara instan.
              </p>
            </div>
          </Link>

          <Link 
            href="/layanan/status"
            className="hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-white dark:bg-desa-blue-900/40 p-8 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.03)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl active:scale-[0.98]"
            style={{ animationDelay: '600ms' }}
          >
            <div className="flex items-start justify-between mb-10 md:mb-16">
              <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-[20px] md:rounded-[24px] bg-emerald-600 text-white shadow-lg transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                <History size={28} className="md:size-10" />
              </div>
              <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-emerald-50 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-45">
                <ArrowRight size={20} className="md:size-7" />
              </div>
            </div>
            <div className="space-y-3 md:space-y-5">
              <h4 className="font-timeless text-xl md:text-3xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tighter uppercase">
                Pantau <br className="hidden md:block" /> Riwayat Berkas
              </h4>
              <p className="text-xs md:text-base font-medium text-desa-blue-950/40 dark:text-white/40 leading-relaxed max-w-xs">
                Cek progres berkas Anda dan unduh dokumen yang telah selesai diproses oleh admin.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
