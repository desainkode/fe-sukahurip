'use client'

import React from 'react'
import { Plus, MessageSquare, Clock, CheckCircle2, AlertCircle, ChevronRight, Filter, Search } from 'lucide-react'
import Link from 'next/link'

const mockComplaints = [
  {
    id: 'TKT-001',
    title: 'Lampu Jalan Padam',
    category: 'Infrastruktur Desa',
    date: '2024-05-01',
    status: 'Diproses',
    color: 'text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20'
  },
  {
    id: 'TKT-002',
    title: 'Penumpukan Sampah di RT 03',
    category: 'Kebersihan & Lingkungan',
    date: '2024-04-28',
    status: 'Selesai',
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20'
  },
  {
    id: 'TKT-003',
    title: 'Keterlambatan Bantuan Sosial',
    category: 'Bantuan Sosial',
    date: '2024-04-25',
    status: 'Diterima',
    color: 'text-rose-600 bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20'
  }
]

export default function PengaduanPage() {
  const stats = [
    { label: 'Total Laporan', value: '12', icon: MessageSquare, color: 'text-desa-blue-900 dark:text-desa-yellow-500', bg: 'bg-desa-blue-50 dark:bg-desa-yellow-500/10' },
    { label: 'Sedang Diproses', value: '4', icon: Clock, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/10' },
    { label: 'Sudah Selesai', value: '8', icon: CheckCircle2, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' }
  ]

  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20">
      {/* Header Section */}
      <section className="hero-reveal space-y-4 px-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-timeless text-3xl md:text-5xl font-black text-desa-blue-950 dark:text-white tracking-tight">
              Layanan <span className="text-desa-blue-900 dark:text-desa-yellow-500">Pengaduan</span>
            </h2>
            <p className="text-xs md:text-sm font-medium text-desa-blue-950/40 dark:text-white/50 max-w-2xl leading-relaxed">
              Sampaikan aspirasi, keluhan, atau laporan Anda secara transparan untuk kemajuan Desa Sukahurip.
            </p>
          </div>
          <Link 
            href="/layanan/pengaduan/buat"
            className="flex items-center justify-center gap-3 rounded-2xl bg-desa-blue-900 px-6 md:px-8 py-3.5 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-desa-blue-950 shadow-xl shadow-desa-blue-900/20 active:scale-95 group"
          >
            <Plus size={18} className="transition-transform group-hover:rotate-90" />
            Buat Pengaduan
          </Link>
        </div>
      </section>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="hero-reveal group rounded-[28px] md:rounded-[32px] bg-white dark:bg-desa-blue-900/40 p-5 md:p-6 border border-desa-blue-900/5 dark:border-white/5 shadow-xl shadow-desa-blue-900/5 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 md:gap-5">
              <div className={`flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl ${stat.bg} dark:bg-white/5 ${stat.color} transition-transform duration-500 group-hover:scale-110 shadow-inner`}>
                <stat.icon size={24} className="md:size-[28px]" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-desa-blue-950 dark:text-white leading-none">{stat.value}</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40 mt-1">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* List Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-4">
          <h3 className="font-timeless text-xl font-black text-desa-blue-950 dark:text-white">Daftar Laporan Saya</h3>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20" />
              <input 
                type="text" 
                placeholder="Cari laporan..." 
                className="rounded-xl border-none bg-white dark:bg-white/5 pl-11 pr-4 py-2.5 text-xs font-bold focus:ring-2 focus:ring-desa-blue-900 transition-all outline-none"
              />
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-white/5 text-desa-blue-950/40 hover:text-desa-blue-900 transition-all">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {mockComplaints.map((item, i) => (
            <Link 
              href={`/layanan/pengaduan/${item.id}`} 
              key={item.id}
              className="hero-reveal group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 rounded-[24px] md:rounded-[28px] bg-white dark:bg-desa-blue-900/40 p-5 md:p-6 border border-desa-blue-900/5 dark:border-white/5 shadow-lg shadow-desa-blue-900/5 transition-all hover:bg-desa-blue-50/50 dark:hover:bg-white/5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-desa-blue-900 text-white font-black text-[9px] md:text-[10px]">
                  {item.id}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-base font-black text-desa-blue-950 dark:text-white group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors truncate">
                    {item.title}
                  </h4>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] md:text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40">
                    <span className="flex items-center gap-1.5 shrink-0">
                      <Plus size={10} className="md:size-[12px]" /> {item.category}
                    </span>
                    <span className="shrink-0">{item.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 border-t md:border-none pt-4 md:pt-0">
                <span className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest border ${item.color}`}>
                  {item.status}
                </span>
                <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950 dark:text-white transition-all group-hover:bg-desa-blue-900 group-hover:text-white">
                  <ChevronRight size={16} className="md:size-[18px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
