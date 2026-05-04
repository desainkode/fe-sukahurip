'use client'

import { FileText, Clock, History, Bell, ArrowRight, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()

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

  const pelayananServices = [
    { id: 'pindah', label: 'Surat Pindah / Datang', desc: 'Mutasi penduduk keluar/masuk.', icon: FileText, color: 'bg-desa-blue-900 shadow-desa-blue-900/20' },
    { id: 'akta', label: 'Akta Kematian / Kelahiran', desc: 'Pencatatan peristiwa vital.', icon: FileText, color: 'bg-emerald-600 shadow-emerald-600/20' },
    { id: 'kk', label: 'Layanan Kartu Keluarga', desc: 'Update data atau KK baru.', icon: FileText, color: 'bg-amber-500 shadow-amber-500/20' },
    { id: 'ktp', label: 'Layanan KTP-el', desc: 'Perekaman/penggantian KTP.', icon: FileText, color: 'bg-indigo-600 shadow-indigo-600/20' },
    { id: 'kia', label: 'Identitas Anak (KIA)', desc: 'Identitas resmi usia 0-17th.', icon: FileText, color: 'bg-rose-600 shadow-rose-600/20' },
    { id: 'nikah', label: 'Dispensasi Nikah', desc: 'Layanan Disampo Sansil.', icon: FileText, color: 'bg-desa-blue-600 shadow-desa-blue-600/20' },
  ]

  const pengaduanServices = [
    { id: 'pelayanan', label: 'Pengaduan Pelayanan', desc: 'Laporkan kendala layanan publik.', icon: AlertTriangle, color: 'bg-rose-600' },
    { id: 'data', label: 'Data Kependudukan', desc: 'Masalah NIK atau data ganda.', icon: AlertTriangle, color: 'bg-amber-600' },
  ]

  return (
    <div className="space-y-12 md:space-y-16 animate-in fade-in duration-1000 pb-20">
      {/* Welcome Section */}
      <section className="hero-reveal space-y-2 px-2">
        <h2 className="font-timeless text-3xl md:text-5xl font-black text-desa-blue-950 dark:text-white tracking-tight">
          Halo, <span className="text-desa-blue-900 dark:text-desa-yellow-500">{user?.name?.split(' ')[0]}!</span>
        </h2>
        <p className="text-sm md:text-base font-medium text-desa-blue-950/40 dark:text-white/30 max-w-2xl">
          Selamat datang di Layanan Mandiri Desa Sukahurip. Pantau status pengajuan Anda atau ajukan layanan baru di bawah ini.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`hero-reveal group relative overflow-hidden rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-8 md:p-10 shadow-xl shadow-desa-blue-900/5 border ${stat.border} transition-all hover:-translate-y-2 ${stat.glow}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="relative z-10 flex items-center gap-6">
              <div className={`flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[24px] ${stat.bg} transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner`}>
                <Clock size={28} className={`md:w-8 md:h-8 ${stat.color}`} />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-desa-blue-950 dark:text-white leading-none mb-2">{stat.value}</p>
                <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40">{stat.label}</p>
              </div>
            </div>
            <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-30 ${stat.bg}`} />
          </div>
        ))}
      </section>

      {/* Pelayanan Section */}
      <section className="space-y-8 md:space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="h-8 md:h-10 w-2 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500 shadow-lg shadow-desa-blue-900/20" />
              <h3 className="font-timeless text-2xl md:text-3xl font-black text-desa-blue-950 dark:text-white">Layanan Pelayanan</h3>
            </div>
            <p className="text-xs md:text-sm font-medium text-desa-blue-950/40 dark:text-white/30 max-w-xl">
              Pengurusan dokumen kependudukan dan surat desa secara digital dan mandiri.
            </p>
          </div>
          <Link href="/layanan/status" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-desa-blue-900 dark:text-desa-yellow-500 transition-all hover:gap-5">
            Monitor Status <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pelayananServices.map((service, i) => (
            <Link 
              key={service.id} 
              href={`/layanan/pengajuan?type=${service.id}`}
              className="hero-reveal group relative overflow-hidden rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-8 md:p-10 shadow-xl shadow-desa-blue-900/5 border border-desa-blue-900/5 dark:border-white/5 transition-all hover:-translate-y-3 hover:shadow-2xl active:scale-95"
              style={{ animationDelay: `${(i + 3) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-[24px] text-white shadow-xl ${service.color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <FileText size={28} className="md:w-9 md:h-9" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950 dark:text-white transition-all group-hover:bg-desa-blue-900 group-hover:text-white dark:group-hover:bg-desa-yellow-500 dark:group-hover:text-desa-blue-950">
                  <ArrowRight size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors">
                  {service.label}
                </h4>
                <p className="text-[11px] md:text-xs font-medium text-desa-blue-950/40 dark:text-white/30 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pengaduan Section */}
      <section className="space-y-8 md:space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="h-8 md:h-10 w-2 rounded-full bg-rose-600 dark:bg-rose-500 shadow-lg shadow-rose-600/20" />
              <h3 className="font-timeless text-2xl md:text-3xl font-black text-desa-blue-950 dark:text-white">Layanan Pengaduan</h3>
            </div>
            <p className="text-xs md:text-sm font-medium text-desa-blue-950/40 dark:text-white/30 max-w-xl">
              Laporkan masalah kependudukan atau keluhan pelayanan langsung ke pemerintah desa.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pengaduanServices.map((service, i) => (
            <Link 
              key={service.id} 
              href={`/layanan/pengaduan?cat=${service.id}`}
              className="hero-reveal group relative overflow-hidden rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-8 md:p-10 shadow-xl shadow-desa-blue-900/5 border border-desa-blue-900/5 dark:border-white/5 transition-all hover:-translate-y-3 hover:shadow-2xl active:scale-95"
              style={{ animationDelay: `${(i + 9) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-[24px] text-white shadow-xl ${service.color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <AlertTriangle size={28} className="md:w-9 md:h-9" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950 dark:text-white transition-all group-hover:bg-rose-600 group-hover:text-white">
                  <ArrowRight size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-rose-600 dark:group-hover:text-rose-500 transition-colors">
                  {service.label}
                </h4>
                <p className="text-[11px] md:text-xs font-medium text-desa-blue-950/40 dark:text-white/30 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
