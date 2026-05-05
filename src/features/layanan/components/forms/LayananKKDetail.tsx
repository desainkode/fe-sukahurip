'use client'

import React from 'react'
import { Users, MapPin, User, FileText } from 'lucide-react'

interface LayananKKDetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function LayananKKDetail({ formData, setFormData }: LayananKKDetailProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Jenis Layanan KK</label>
        <div className="relative">
          <FileText size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
          <select 
            name="jenisKK"
            required
            value={formData.jenisKK || ''}
            onChange={handleChange}
            className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs appearance-none"
          >
            <option value="" disabled>Pilih Jenis Layanan</option>
            <option value="Baru">Pembuatan KK Baru</option>
            <option value="Perubahan">Perubahan Data (Update)</option>
            <option value="Tambah">Penambahan Anggota Keluarga</option>
            <option value="Hilang">Penggantian Karena Hilang/Rusak</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nomor KK (Lama/Saat Ini)</label>
          <div className="relative">
            <Users size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="noKK" required maxLength={16} value={formData.noKK || ''} onChange={handleChange} placeholder="16 Digit No. KK" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Kepala Keluarga</label>
          <div className="relative">
            <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="kepalaKeluarga" required value={formData.kepalaKeluarga || ''} onChange={handleChange} placeholder="Nama Lengkap Kepala Keluarga" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
      </div>

      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Alamat Lengkap di KK</label>
        <div className="relative">
          <MapPin size={18} className="absolute left-5 top-5 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
          <textarea name="alamatKK" required rows={3} value={formData.alamatKK || ''} onChange={handleChange} placeholder="Alamat Sesuai KK" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs resize-none" />
        </div>
      </div>
    </div>
  )
}
