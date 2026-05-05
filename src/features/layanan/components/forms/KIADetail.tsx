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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Lengkap Anak</label>
          <div className="relative">
            <Baby size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="namaAnak" required value={formData.namaAnak || ''} onChange={handleChange} placeholder="Sesuai Akta Kelahiran" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">NIK Anak</label>
          <div className="relative">
            <IdCard size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="nikAnak" required maxLength={16} value={formData.nikAnak || ''} onChange={handleChange} placeholder="16 Digit NIK Anak" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Tempat, Tanggal Lahir Anak</label>
          <div className="relative">
            <Calendar size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="ttlAnak" required value={formData.ttlAnak || ''} onChange={handleChange} placeholder="Contoh: Tasikmalaya, 01-01-2015" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Orang Tua / Wali</label>
          <div className="relative">
            <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="namaWali" required value={formData.namaWali || ''} onChange={handleChange} placeholder="Nama Lengkap Ayah/Ibu/Wali" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
      </div>

      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Alamat Domisili Anak</label>
        <div className="relative">
          <MapPin size={18} className="absolute left-5 top-5 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
          <textarea name="alamatAnak" required rows={3} value={formData.alamatAnak || ''} onChange={handleChange} placeholder="Alamat Lengkap Sesuai KK" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs resize-none" />
        </div>
      </div>
    </div>
  )
}
