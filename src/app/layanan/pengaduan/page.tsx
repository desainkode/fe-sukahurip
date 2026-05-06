'use client'

import React, { useState, useMemo } from 'react'
import { Plus, MessageSquare, Clock, CheckCircle2, AlertCircle, ChevronRight, Filter, Search, X } from 'lucide-react'
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
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('Semua')

  const stats = [
    { label: 'Total Laporan', value: '12', icon: MessageSquare, color: 'text-desa-blue-900 dark:text-desa-yellow-500', bg: 'bg-desa-blue-50 dark:bg-desa-yellow-500/10' },
    { label: 'Sedang Diproses', value: '4', icon: Clock, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/10' },
    { label: 'Sudah Selesai', value: '8', icon: CheckCircle2, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' }
  ]

  const filteredComplaints = useMemo(() => {
    return mockComplaints.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesFilter = activeFilter === 'Semua' || item.status === activeFilter
      return matchesSearch && matchesFilter
    })
  }, [searchQuery, activeFilter])

  return (
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20 px-2">
      {/* Header Section */}
      <section className="hero-reveal space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-4">
            <h2 className="font-timeless text-3xl md:text-6xl font-black text-desa-blue-950 dark:text-white tracking-tighter leading-tight">
              Layanan <br className="md:hidden" /> <span className="text-desa-blue-900 dark:text-desa-yellow-500">Pengaduan</span>
            </h2>
            <p className="text-sm md:text-lg font-medium text-desa-blue-950/60 dark:text-white/60 max-w-2xl leading-relaxed">
              Sampaikan aspirasi, keluhan, atau laporan Anda secara transparan untuk pembangunan Desa Sukahurip.
            </p>
          </div>
          <Link 
            href="/layanan/pengaduan/buat"
            className="flex h-14 md:h-20 items-center justify-center gap-4 rounded-[20px] md:rounded-[32px] bg-desa-blue-900 dark:bg-desa-yellow-500 px-8 md:px-12 font-black text-[10px] md:text-[12px] uppercase tracking-widest text-white dark:text-desa-blue-950 shadow-lg transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-yellow-400 hover:scale-105 active:scale-95 group"
          >
            <Plus size={18} className="md:size-6 transition-transform group-hover:rotate-90 duration-500" />
            Buat Laporan Baru
          </Link>
        </div>
      </section>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-5 md:p-8 border border-desa-blue-900/5 dark:border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.015)] transition-all hover:-translate-y-2">
            <div className="relative z-10 flex items-center gap-5 md:gap-6">
              <div className={`flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[20px] md:rounded-[24px] ${stat.bg} dark:bg-white/5 ${stat.color} transition-all duration-700 group-hover:rotate-12 shadow-inner border border-transparent group-hover:border-white/20`}>
                <stat.icon size={24} className="md:size-[32px] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-xl md:text-3xl font-black text-desa-blue-950 dark:text-white leading-none tracking-tighter mb-1.5">{stat.value}</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* List Section */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
          <div className="flex items-center gap-4">
            <div className="h-7 w-1.5 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
            <h3 className="font-timeless text-xl md:text-3xl font-black text-desa-blue-950 dark:text-white tracking-tighter uppercase">Daftar Laporan Saya</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative group min-w-[280px]">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/40 dark:text-white/40 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari ID atau judul laporan..." 
                className="w-full rounded-[18px] border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 pl-12 pr-10 py-3 text-sm font-bold text-desa-blue-950 dark:text-white placeholder:text-desa-blue-950/30 dark:placeholder:text-white/30 focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 transition-all outline-none shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 hover:text-desa-blue-950 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex bg-desa-blue-50 dark:bg-white/5 p-1 rounded-[16px] border border-desa-blue-900/5 dark:border-white/5 overflow-x-auto no-scrollbar">
              {['Semua', 'Diterima', 'Diproses', 'Selesai'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-5 py-2 rounded-[12px] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeFilter === filter 
                      ? 'bg-white dark:bg-desa-yellow-500 text-desa-blue-900 dark:text-desa-blue-950 shadow-sm' 
                      : 'text-desa-blue-950/40 dark:text-white/40 hover:text-desa-blue-900 dark:hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredComplaints.length > 0 ? (
          <div className="grid gap-5">
            {filteredComplaints.map((item, i) => (
              <Link 
                href={`/layanan/pengaduan/${item.id}`} 
                key={item.id}
                className="hero-reveal group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-5 rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-6 md:p-8 border border-desa-blue-900/5 dark:border-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.01)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-5 md:gap-8">
                  <div className="flex h-14 w-14 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-[18px] md:rounded-[24px] bg-desa-blue-900 dark:bg-desa-yellow-500 text-white dark:text-desa-blue-950 font-black text-[9px] md:text-xs shadow-md group-hover:rotate-12 transition-transform duration-700">
                    {item.id}
                  </div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <h4 className="font-timeless text-lg md:text-2xl font-black text-desa-blue-950 dark:text-white group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors truncate tracking-tighter uppercase">
                      {item.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40">
                      <span className="flex items-center gap-2 bg-desa-blue-900/5 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={10} className="md:size-3" />
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-5 md:gap-8 border-t md:border-none pt-5 md:pt-0">
                  <span className={`px-5 py-2 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] border transition-all duration-500 ${item.color}`}>
                    {item.status}
                  </span>
                  <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950/20 dark:text-white/20 transition-all group-hover:bg-desa-blue-900 group-hover:text-white dark:group-hover:bg-desa-yellow-500 dark:group-hover:text-desa-blue-950 group-hover:rotate-45">
                    <ChevronRight size={18} className="md:size-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 rounded-[32px] border-2 border-dashed border-desa-blue-900/10 dark:border-white/10">
             <div className="h-16 w-16 flex items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950/20 dark:text-white/20">
                <Search size={32} />
             </div>
             <p className="text-xs font-black text-desa-blue-950/40 dark:text-white/40 uppercase tracking-[0.2em]">Tidak ada laporan yang sesuai</p>
          </div>
        )}
      </section>
    </div>
  )
}
