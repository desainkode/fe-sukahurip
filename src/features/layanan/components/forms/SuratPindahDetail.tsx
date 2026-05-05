'use client'

import React from 'react'
import { MapPin, Users, Calendar, HelpCircle } from 'lucide-react'

interface SuratPindahDetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function SuratPindahDetail({ formData, setFormData }: SuratPindahDetailProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-4 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nomor Kartu Keluarga (KK)</label>
          <div className="relative">
            <Users size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="noKK"
              required
              maxLength={16}
              value={formData.noKK || ''}
              onChange={handleChange}
              placeholder="16 Digit No. KK"
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs"
            />
          </div>
        </div>

        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Tanggal Pindah</label>
          <div className="relative">
            <Calendar size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="tanggalPindah"
              type="date"
              required
              value={formData.tanggalPindah || ''}
              onChange={handleChange}
              className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs dark:[color-scheme:dark]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Alamat Asal</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-5 top-5 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <textarea 
              name="alamatAsal"
              required
              rows={3}
              value={formData.alamatAsal || ''}
              onChange={handleChange}
              placeholder="Alamat Lengkap Asal"
              className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs resize-none"
            />
          </div>
        </div>

        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Alamat Tujuan</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-5 top-5 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <textarea 
              name="alamatTujuan"
              required
              rows={3}
              value={formData.alamatTujuan || ''}
              onChange={handleChange}
              placeholder="Alamat Lengkap Tujuan"
              className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs resize-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Alasan Pindah</label>
          <div className="relative">
            <HelpCircle size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <select 
              name="alasanPindah"
              required
              value={formData.alasanPindah || ''}
              onChange={handleChange}
              className={`block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs appearance-none ${
                formData.alasanPindah ? 'text-desa-blue-950 dark:text-white' : 'text-desa-blue-950/40 dark:text-white/40'
              }`}
            >
              <option value="" disabled className="dark:bg-desa-blue-950 text-desa-blue-950/40 dark:text-white/40">Pilih Alasan</option>
              <option value="Pekerjaan" className="dark:bg-desa-blue-950 text-desa-blue-950 dark:text-white">Pekerjaan</option>
              <option value="Pendidikan" className="dark:bg-desa-blue-950 text-desa-blue-950 dark:text-white">Pendidikan</option>
              <option value="Kesehatan" className="dark:bg-desa-blue-950 text-desa-blue-950 dark:text-white">Kesehatan</option>
              <option value="Perumahan" className="dark:bg-desa-blue-950 text-desa-blue-950 dark:text-white">Perumahan</option>
              <option value="Keluarga" className="dark:bg-desa-blue-950 text-desa-blue-950 dark:text-white">Keluarga</option>
              <option value="Lainnya" className="dark:bg-desa-blue-950 text-desa-blue-950 dark:text-white">Lainnya</option>
            </select>
          </div>
        </div>

        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Jumlah Anggota Keluarga Ikut</label>
          <div className="relative">
            <Users size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="jumlahAnggota"
              type="number"
              min="0"
              required
              value={formData.jumlahAnggota || ''}
              onChange={handleChange}
              placeholder="0"
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
