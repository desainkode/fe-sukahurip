'use client'

import React from 'react'
import { User, IdCard, Calendar, Baby, MapPin } from 'lucide-react'

interface KIADetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function KIADetail({ formData, setFormData }: KIADetailProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Data Anak Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Identitas Anak</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nama Lengkap Anak</label>
            <div className="relative group">
              <Baby size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input name="namaAnak" required value={formData.namaAnak || ''} onChange={handleChange} placeholder="Sesuai Akta Kelahiran" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">NIK Anak</label>
            <div className="relative group">
              <IdCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input name="nikAnak" required maxLength={16} value={formData.nikAnak || ''} onChange={handleChange} placeholder="16 Digit NIK" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Tempat Lahir</label>
            <div className="relative group">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input name="tempatLahirAnak" required value={formData.tempatLahirAnak || ''} onChange={handleChange} placeholder="Contoh: Tasikmalaya" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Tanggal Lahir</label>
            <div className="relative group">
              <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors pointer-events-none" />
              <input name="tanggalLahirAnak" type="date" required value={formData.tanggalLahirAnak || ''} onChange={handleChange} className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all text-sm dark:[color-scheme:dark]" />
            </div>
          </div>
        </div>
      </div>

      {/* Domisili Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Domisili & Wali</h3>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nama Orang Tua / Wali</label>
          <div className="relative group">
            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="namaWali" required value={formData.namaWali || ''} onChange={handleChange} placeholder="Nama Lengkap Ayah/Ibu/Wali" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Alamat Domisili Saat Ini</label>
          <div className="relative group">
            <MapPin size={18} className="absolute left-4 top-4 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <textarea name="alamatAnak" required rows={4} value={formData.alamatAnak || ''} onChange={handleChange} placeholder="Tuliskan alamat domisili lengkap sesuai Kartu Keluarga..." className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm resize-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
