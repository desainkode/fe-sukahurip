'use client'

import React from 'react'
import { FileText, Search, Filter, Download, ExternalLink, Clock } from 'lucide-react'

export default function StatusPage() {
  const statuses = [
    { id: 1, type: 'Surat Keterangan Domisili', date: '04 Mei 2026', status: 'Diproses', color: 'text-amber-600', bg: 'bg-amber-100' },
    { id: 2, type: 'Surat Usaha (SKU)', date: '01 Mei 2026', status: 'Selesai', color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 3, type: 'Surat Tidak Mampu (SKTM)', date: '28 April 2026', status: 'Selesai', color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 4, type: 'Surat Pengantar RT/RW', date: '15 April 2026', status: 'Ditolak', color: 'text-rose-600', bg: 'bg-rose-100' },
  ]

  return (
    <div className="space-y-12 pb-20 px-2">
      <section className="hero-reveal space-y-4">
        <h2 className="font-timeless text-4xl md:text-7xl font-black text-desa-blue-950 dark:text-white tracking-tighter leading-tight">Status <br className="md:hidden" /> <span className="text-desa-blue-900 dark:text-desa-yellow-500">Pengajuan</span></h2>
        <p className="text-sm md:text-xl font-medium text-desa-blue-950/40 dark:text-white/40 max-w-2xl leading-relaxed uppercase tracking-[0.1em]">Pantau progres pengajuan administrasi Anda secara real-time melalui sistem digital terpadu.</p>
      </section>

      {/* Toolbar */}
      <div className="hero-reveal flex flex-wrap gap-6 md:gap-8" style={{ animationDelay: '200ms' }}>
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 transition-colors" size={22} />
          <input 
            className="w-full rounded-[32px] bg-white dark:bg-desa-blue-900/40 border border-desa-blue-900/5 dark:border-white/5 py-6 pl-16 pr-8 font-bold text-desa-blue-950 dark:text-white outline-none focus:ring-8 focus:ring-desa-blue-900/5 dark:focus:ring-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" 
            placeholder="Cari nomor pengajuan atau jenis surat..." 
          />
        </div>
        <button className="flex h-[76px] items-center gap-4 rounded-[32px] bg-white dark:bg-desa-blue-900/40 border border-desa-blue-900/5 dark:border-white/5 px-10 font-black text-[12px] uppercase tracking-widest text-desa-blue-950 dark:text-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:bg-desa-blue-900 hover:text-white dark:hover:bg-desa-yellow-500 dark:hover:text-desa-blue-950 transition-all active:scale-95 group">
          <Filter size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 
          <span className="hidden sm:inline">Filter Berkas</span>
        </button>
      </div>

      {/* Status List */}
      <div className="hero-reveal grid gap-10" style={{ animationDelay: '400ms' }}>
        {statuses.map((item, i) => (
          <div key={item.id} className="group relative flex flex-col justify-between gap-10 overflow-hidden rounded-[56px] bg-white dark:bg-desa-blue-900/40 p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.03)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 md:flex-row md:items-center transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex items-center gap-10">
              <div className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-[36px] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 ${
                item.status === 'Selesai' 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-[0_20px_40px_rgba(16,185,129,0.1)]' 
                  : item.status === 'Diproses' 
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-[0_20px_40px_rgba(245,158,11,0.1)]' 
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 shadow-[0_20px_40px_rgba(225,29,72,0.1)]'
              }`}>
                <FileText size={44} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-3">
                <h4 className="font-timeless text-3xl md:text-4xl font-black text-desa-blue-950 dark:text-white leading-none tracking-tighter group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors">{item.type}</h4>
                <div className="flex flex-wrap items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] text-desa-blue-950/20 dark:text-white/20">
                  <span className="bg-desa-blue-900/5 dark:bg-white/5 px-4 py-1.5 rounded-xl border border-desa-blue-900/5 dark:border-white/5">ID: #{2026000 + item.id}</span>
                  <span className="h-2 w-2 rounded-full bg-desa-blue-900/10 dark:bg-white/10" />
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="opacity-40" />
                    {item.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 md:justify-end">
              <span className={`rounded-full px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] shadow-sm border transition-all duration-500 ${
                item.status === 'Selesai' 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white' 
                  : item.status === 'Diproses' 
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white' 
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 group-hover:bg-rose-600 group-hover:text-white'
              }`}>
                {item.status}
              </span>
              
              {item.status === 'Selesai' ? (
                <button className="flex h-20 w-full sm:w-auto items-center justify-center gap-4 rounded-[32px] bg-desa-blue-900 dark:bg-desa-blue-500 px-12 font-black text-[12px] uppercase tracking-widest text-white shadow-[0_20px_50px_rgba(7,42,200,0.3)] transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-blue-600 hover:scale-105 active:scale-95 group">
                  <Download size={22} className="group-hover:-translate-y-1 transition-transform" /> 
                  <span>Unduh Dokumen</span>
                </button>
              ) : (
                <button className="flex h-20 w-20 items-center justify-center rounded-[32px] bg-white dark:bg-white/5 text-desa-blue-950/40 dark:text-white/40 border border-desa-blue-900/5 dark:border-white/5 transition-all hover:bg-desa-blue-900 hover:text-white dark:hover:bg-desa-yellow-500 dark:hover:text-desa-blue-950 shadow-inner group active:scale-90">
                  <ExternalLink size={28} className="group-hover:rotate-45 transition-transform duration-500" />
                </button>
              )}
            </div>
            {/* Background Decorative element */}
            <div className={`absolute -right-24 -bottom-24 h-80 w-80 rounded-full blur-[120px] opacity-0 transition-opacity duration-1000 group-hover:opacity-30 ${
                item.status === 'Selesai' ? 'bg-emerald-500' : item.status === 'Diproses' ? 'bg-amber-500' : 'bg-rose-500'
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}
