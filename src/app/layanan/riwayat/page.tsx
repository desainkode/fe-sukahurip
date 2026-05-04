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
    <div className="space-y-10 pb-10">
      <div className="hero-reveal space-y-2">
        <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white">Riwayat Layanan</h2>
        <p className="text-sm font-medium text-desa-blue-900/50 dark:text-white/40 uppercase tracking-widest">Daftar layanan yang telah selesai diproses</p>
      </div>

      {/* Toolbar */}
      <div className="hero-reveal relative" style={{ animationDelay: '100ms' }}>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20" size={18} />
        <input className="w-full rounded-2xl bg-white dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5 py-4 pl-12 pr-4 font-bold text-desa-blue-950 dark:text-white outline-hidden focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-blue-500 shadow-sm transition-all placeholder:text-desa-blue-950/30 dark:placeholder:text-white/20" placeholder="Cari di riwayat..." />
      </div>

      <div className="hero-reveal grid gap-4" style={{ animationDelay: '200ms' }}>
        {history.map((item, i) => (
          <div key={item.id} className="group flex items-center justify-between gap-6 rounded-3xl bg-white dark:bg-desa-blue-900/40 p-6 shadow-lg border border-desa-blue-900/5 dark:border-white/5 transition-all hover:border-desa-blue-900/20 dark:hover:border-white/20 hover:bg-desa-blue-50/30 dark:hover:bg-white/5">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <FileText size={28} />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-desa-blue-950 dark:text-white">{item.type}</h4>
                <div className="flex items-center gap-3 text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                  <span>•</span>
                  <span>{item.size}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex h-12 items-center gap-2 rounded-2xl bg-desa-blue-900 dark:bg-desa-blue-500 px-6 font-black text-[10px] uppercase tracking-widest text-white shadow-xl transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-blue-600">
                <Download size={16} /> Download
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-white transition-all hover:bg-desa-blue-900 hover:text-white dark:hover:bg-desa-blue-500">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
