'use client'

import React from 'react'
import { User, IdCard, FileText, MapPin, AlertTriangle } from 'lucide-react'

interface LayananKTPDetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function LayananKTPDetail({ formData, setFormData }: LayananKTPDetailProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Alasan Pengajuan KTP-el</label>
        <div className="relative">
          <FileText size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
          <select 
            name="alasanKTP"
            required
            value={formData.alasanKTP || ''}
            onChange={handleChange}
            className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs appearance-none"
          >
            <option value="" disabled>Pilih Alasan</option>
            <option value="Baru">Baru (Perekaman Pertama)</option>
            <option value="Rusak">Rusak</option>
            <option value="Hilang">Hilang</option>
            <option value="Perubahan">Perubahan Data</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">NIK Pemohon</label>
          <div className="relative">
            <IdCard size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="nikKTP" required maxLength={16} value={formData.nikKTP || formData.nik || ''} onChange={handleChange} placeholder="16 Digit NIK" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nomor KK</label>
          <div className="relative">
            <FileText size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input name="noKK" required maxLength={16} value={formData.noKK || ''} onChange={handleChange} placeholder="16 Digit No. KK" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
          </div>
        </div>
      </div>

      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Keterangan Tambahan / Detail Alasan</label>
        <div className="relative">
          <AlertTriangle size={18} className="absolute left-5 top-5 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
          <textarea name="keteranganKTP" rows={3} value={formData.keteranganKTP || ''} onChange={handleChange} placeholder="Contoh: KTP patah di bagian sudut, atau data alamat sudah tidak sesuai." className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs resize-none" />
        </div>
      </div>
    </div>
  )
}
