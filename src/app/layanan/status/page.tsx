'use client'

import React from 'react'
import { FileText, Search, Filter, Download, ExternalLink } from 'lucide-react'

export default function StatusPage() {
  const statuses = [
    { id: 1, type: 'Surat Keterangan Domisili', date: '04 Mei 2026', status: 'Diproses', color: 'text-amber-600', bg: 'bg-amber-100' },
    { id: 2, type: 'Surat Usaha (SKU)', date: '01 Mei 2026', status: 'Selesai', color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 3, type: 'Surat Tidak Mampu (SKTM)', date: '28 April 2026', status: 'Selesai', color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 4, type: 'Surat Pengantar RT/RW', date: '15 April 2026', status: 'Ditolak', color: 'text-rose-600', bg: 'bg-rose-100' },
  ]

  return (
    <div className="space-y-10 pb-10">
      <div className="hero-reveal space-y-2">
        <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white">Status Pengajuan</h2>
        <p className="text-sm font-medium text-desa-blue-900/50 dark:text-white/40 uppercase tracking-widest">Pantau progres pengajuan administrasi Anda</p>
      </div>

      {/* Toolbar */}
      <div className="hero-reveal flex flex-wrap gap-4" style={{ animationDelay: '100ms' }}>
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20" size={18} />
          <input className="w-full rounded-2xl bg-white dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5 py-4 pl-12 pr-4 font-bold text-desa-blue-950 dark:text-white outline-hidden focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-blue-500 shadow-sm transition-all placeholder:text-desa-blue-950/30 dark:placeholder:text-white/20" placeholder="Cari surat..." />
        </div>
        <button className="flex items-center gap-2 rounded-2xl bg-white dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5 px-6 py-4 font-bold text-desa-blue-950 dark:text-white shadow-sm hover:bg-desa-blue-50 dark:hover:bg-white/10 transition-all">
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* Status List */}
      <div className="hero-reveal grid gap-6" style={{ animationDelay: '200ms' }}>
        {statuses.map((item, i) => (
          <div key={item.id} className="group flex flex-col justify-between gap-6 rounded-[32px] bg-white dark:bg-desa-blue-900/40 p-6 shadow-xl border border-desa-blue-900/5 dark:border-white/5 md:flex-row md:items-center md:p-8 transition-all hover:border-desa-blue-900/20 dark:hover:border-white/20 hover:bg-desa-blue-50/30 dark:hover:bg-white/5">
            <div className="flex items-center gap-6">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl ${
                item.status === 'Selesai' 
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                  : item.status === 'Diproses' 
                    ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' 
                    : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
              }`}>
                <FileText size={32} />
              </div>
              <div className="space-y-1">
                <h4 className="font-timeless text-xl font-bold text-desa-blue-950 dark:text-white">{item.type}</h4>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40">
                  <span>ID: #{2026000 + item.id}</span>
                  <span className="h-1 w-1 rounded-full bg-desa-blue-900/20 dark:bg-white/20" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 md:justify-end">
              <span className={`rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest shadow-sm ${
                item.status === 'Selesai' 
                  ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-500/20' 
                  : item.status === 'Diproses' 
                    ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-500/20' 
                    : 'bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-200/50 dark:border-rose-500/20'
              }`}>
                {item.status}
              </span>
              
              {item.status === 'Selesai' ? (
                <button className="flex h-12 items-center gap-2 rounded-2xl bg-desa-blue-900 dark:bg-desa-blue-500 px-6 font-black text-[10px] uppercase tracking-widest text-white shadow-xl transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-blue-600 hover:scale-105 active:scale-95">
                  <Download size={16} /> Download PDF
                </button>
              ) : (
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-white shadow-sm transition-all hover:bg-desa-blue-900 hover:text-white dark:hover:bg-desa-blue-500">
                  <ExternalLink size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
