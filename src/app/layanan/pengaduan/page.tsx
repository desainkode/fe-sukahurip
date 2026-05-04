'use client'

import React, { useState, useEffect } from 'react'
import { ShieldAlert, Send, FileText, Info } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function PengaduanPage() {
  const searchParams = useSearchParams()
  const preSelectedCat = searchParams.get('cat')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('Pengaduan Pelayanan')

  useEffect(() => {
    if (preSelectedCat === 'pelayanan') setCategory('Pengaduan Pelayanan')
    if (preSelectedCat === 'data') setCategory('Pengaduan Data Kependudukan')
  }, [preSelectedCat])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Pengaduan berhasil dikirim! Kami akan segera menindaklanjuti.')
    setSubject('')
    setContent('')
  }

  return (
    <div className="space-y-10 animate-fade-in">
      <section className="space-y-2">
        <h2 className="font-timeless text-4xl font-black text-desa-blue-950 dark:text-white">Layanan Pengaduan</h2>
        <p className="text-sm font-medium text-desa-blue-900/50 dark:text-white/40 uppercase tracking-widest">
          Suarakan aspirasi dan keluhan Anda demi kemajuan Desa Sukahurip
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-8 shadow-2xl border border-desa-blue-900/5 dark:border-white/5 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40 px-2">Kategori Pengaduan</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 border-0 py-4 px-6 text-sm font-bold text-desa-blue-950 dark:text-white outline-hidden focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-blue-500 transition-all cursor-pointer appearance-none"
                >
                  <option value="Pengaduan Pelayanan" className="dark:bg-desa-blue-950">Pengaduan Pelayanan</option>
                  <option value="Pengaduan Data Kependudukan" className="dark:bg-desa-blue-950">Pengaduan Data Kependudukan</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40 px-2">Subjek / Judul</label>
                <input 
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Contoh: Lampu Jalan Mati"
                  className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 border-0 py-4 px-6 text-sm font-bold text-desa-blue-950 dark:text-white outline-hidden focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-blue-500 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/40 px-2">Detail Laporan</label>
              <textarea 
                required
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Ceritakan detail keluhan atau aspirasi Anda secara lengkap..."
                className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 border-0 py-4 px-6 text-sm font-bold text-desa-blue-950 dark:text-white outline-hidden focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-blue-500 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20"
              />
            </div>

            <button 
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-desa-blue-900 dark:bg-desa-blue-500 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl hover:bg-desa-blue-950 dark:hover:bg-desa-blue-600 transition-all active:scale-[0.98]"
            >
              <Send size={18} />
              Kirim Pengaduan
            </button>
          </form>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
          <div className="rounded-[32px] bg-amber-50 dark:bg-amber-950/20 p-8 border border-amber-100 dark:border-amber-900/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">
              <Info size={24} />
            </div>
            <h3 className="text-lg font-black text-amber-900 dark:text-amber-500">Informasi Penting</h3>
            <p className="mt-4 text-xs font-bold leading-relaxed text-amber-800/60 dark:text-amber-400/60">
              Setiap laporan yang masuk akan diverifikasi terlebih dahulu oleh admin desa. Mohon gunakan bahasa yang sopan dan sertakan bukti jika diperlukan.
            </p>
          </div>

          <div className="rounded-[32px] bg-white dark:bg-desa-blue-900/40 p-8 border border-desa-blue-900/5 dark:border-white/5 shadow-xl">
            <h3 className="text-lg font-black text-desa-blue-950 dark:text-white">Statistik Anda</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40">Total Laporan</span>
                <span className="text-sm font-black text-desa-blue-950 dark:text-white">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40">Ditindaklanjuti</span>
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
