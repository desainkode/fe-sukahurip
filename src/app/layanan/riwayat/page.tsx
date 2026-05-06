'use client'

import React from 'react'
import { FileText, Search, Download, Calendar, ArrowUpRight } from 'lucide-react'

export default function RiwayatPage() {
  const history = [
    { id: 1, type: 'Surat Usaha (SKU)', date: '01 Mei 2026', file: 'SKU_2026_01.pdf', size: '1.2 MB' },
    { id: 2, type: 'Surat Tidak Mampu (SKTM)', date: '28 April 2026', file: 'SKTM_2026_05.pdf', size: '1.1 MB' },
    { id: 3, type: 'Surat Domisili', date: '10 Maret 2026', file: 'DOM_2026_12.pdf', size: '1.4 MB' },
    { id: 4, type: 'Surat Pengantar Nikah', date: '05 Januari 2026', file: 'NA_2026_02.pdf', size: '2.1 MB' },
  ]

  return (
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20 px-2">
      {/* Header */}
      <section className="hero-reveal space-y-4">
        <h2 className="font-timeless text-4xl md:text-7xl font-black text-desa-blue-950 dark:text-white tracking-tighter leading-tight">Riwayat <br className="md:hidden" /> <span className="text-desa-blue-900 dark:text-desa-yellow-500">Dokumen</span></h2>
        <p className="text-sm md:text-xl font-medium text-desa-blue-950/40 dark:text-white/40 uppercase tracking-[0.1em] max-w-2xl leading-relaxed">
          Akses dan unduh kembali arsip dokumen administratif Anda yang telah selesai diproses.
        </p>
      </section>

      {/* Toolbar */}
      <div className="hero-reveal relative group" style={{ animationDelay: '200ms' }}>
        <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 transition-colors" size={24} />
        <input 
          className="w-full rounded-[32px] bg-white dark:bg-desa-blue-900/40 border border-desa-blue-900/5 dark:border-white/5 py-6 pl-18 pr-8 font-bold text-desa-blue-950 dark:text-white outline-none focus:ring-8 focus:ring-desa-blue-900/5 dark:focus:ring-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" 
          placeholder="Cari dalam arsip dokumen..." 
        />
      </div>

      <div className="hero-reveal grid gap-8 md:gap-10" style={{ animationDelay: '400ms' }}>
        {history.map((item, i) => (
          <div key={item.id} className="group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-[48px] bg-white dark:bg-desa-blue-900/40 p-8 md:p-10 border border-desa-blue-900/5 dark:border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.02)] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-8 md:gap-10">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <FileText size={36} strokeWidth={2.5} />
              </div>
              <div className="space-y-2 md:space-y-3">
                <h4 className="font-timeless text-2xl md:text-3xl font-black text-desa-blue-950 dark:text-white group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors tracking-tighter leading-tight">{item.type}</h4>
                <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-desa-blue-950/30 dark:text-white/30">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="opacity-40" /> 
                    {item.date}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-desa-blue-900/10 dark:bg-white/10" />
                  <span className="flex items-center gap-2">
                    <FileText size={14} className="opacity-40" />
                    {item.size}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6 border-t md:border-none pt-8 md:pt-0">
              <button className="flex-1 md:flex-none h-16 md:h-18 items-center justify-center gap-4 rounded-[24px] bg-desa-blue-900 dark:bg-desa-blue-500 px-8 md:px-12 font-black text-[12px] uppercase tracking-widest text-white shadow-[0_20px_50px_rgba(7,42,200,0.3)] transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-blue-600 hover:scale-105 active:scale-95 group/btn">
                <Download size={20} className="group-hover/btn:-translate-y-1 transition-transform" /> 
                <span>Unduh PDF</span>
              </button>
              <button className="flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-[24px] bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950/40 dark:text-white/40 border border-desa-blue-900/5 dark:border-white/5 transition-all hover:bg-desa-blue-900 hover:text-white dark:hover:bg-desa-yellow-500 dark:hover:text-desa-blue-950 active:scale-90 group/view">
                <ArrowUpRight size={28} className="group-hover/view:rotate-45 transition-transform duration-500" />
              </button>
            </div>
            
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-emerald-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
        ))}
      </div>
    </div>
  )
}
