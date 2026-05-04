'use client'

import React from 'react'
import { Bell, CheckCircle2, AlertCircle, Info, ArrowRight } from 'lucide-react'

export default function NotifikasiPage() {
  const notifications = [
    { id: 1, title: 'Pengajuan Disetujui', desc: 'Surat Keterangan Usaha (SKU) Anda telah selesai diproses. Silakan unduh di menu Riwayat.', type: 'success', date: 'Hari ini, 10:45', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 2, title: 'Data Perlu Revisi', desc: 'Dokumen KTP pada pengajuan Surat Domisili tidak terbaca jelas. Mohon upload ulang.', type: 'warning', date: 'Kemarin, 14:20', icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 3, title: 'Informasi Layanan', desc: 'Mulai 10 Mei 2026, kantor desa akan buka hingga pukul 16:00 WIB.', type: 'info', date: '02 Mei 2026', icon: Info, color: 'text-desa-blue-900', bg: 'bg-desa-blue-50' },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-10">
      <div className="hero-reveal space-y-2">
        <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white">Notifikasi</h2>
        <p className="text-sm font-medium text-desa-blue-900/50 dark:text-white/40 uppercase tracking-widest">Informasi terbaru terkait layanan Anda</p>
      </div>

      <div className="hero-reveal space-y-4" style={{ animationDelay: '100ms' }}>
        {notifications.map((notif, i) => (
          <div key={notif.id} className="group relative overflow-hidden rounded-[32px] bg-white dark:bg-desa-blue-900/40 p-6 shadow-xl border border-desa-blue-900/5 dark:border-white/5 transition-all hover:border-desa-blue-900/20 dark:hover:border-white/20 hover:bg-desa-blue-50/30 dark:hover:bg-white/5">
            <div className="flex gap-6">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm ${
                notif.type === 'success' 
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                  : notif.type === 'warning' 
                    ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' 
                    : 'bg-desa-blue-50 dark:bg-desa-blue-500/10 text-desa-blue-900 dark:text-desa-blue-400'
              }`}>
                <notif.icon size={28} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-desa-blue-950 dark:text-white">{notif.title}</h4>
                  <span className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">{notif.date}</span>
                </div>
                <p className="text-sm font-medium text-desa-blue-950/60 dark:text-white/60 leading-relaxed">{notif.desc}</p>
                {notif.type === 'warning' && (
                  <button className="flex items-center gap-2 pt-2 text-[10px] font-black uppercase tracking-widest text-desa-blue-900 dark:text-desa-yellow-500 hover:opacity-70 transition-all">
                    Perbaiki Data Sekarang <ArrowRight size={12} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
