'use client'

import React from 'react'
import { User, Calendar, MapPin, Baby, HeartCrack } from 'lucide-react'

interface AktaDetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function AktaDetail({ formData, setFormData }: AktaDetailProps) {
  const [subType, setSubType] = React.useState<'kelahiran' | 'kematian'>(formData.subType || 'kelahiran')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubTypeChange = (type: 'kelahiran' | 'kematian') => {
    setSubType(type)
    setFormData({ ...formData, subType: type })
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Type Toggle */}
      <div className="flex p-1.5 rounded-xl bg-desa-blue-50/50 dark:bg-white/5 border border-desa-blue-900/10 dark:border-white/10 shadow-sm">
        <button
          type="button"
          onClick={() => handleSubTypeChange('kelahiran')}
          className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
            subType === 'kelahiran' 
              ? 'bg-desa-blue-900 text-white shadow-md' 
              : 'text-desa-blue-950/40 dark:text-white/40 hover:text-desa-blue-900 dark:hover:text-white'
          }`}
        >
          <Baby size={18} />
          <span>Akta Kelahiran</span>
        </button>
        <button
          type="button"
          onClick={() => handleSubTypeChange('kematian')}
          className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
            subType === 'kematian' 
              ? 'bg-rose-600 text-white shadow-md' 
              : 'text-desa-blue-950/40 dark:text-white/40 hover:text-rose-600 dark:hover:text-rose-400'
          }`}
        >
          <HeartCrack size={18} />
          <span>Akta Kematian</span>
        </button>
      </div>

      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-8">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">
            {subType === 'kelahiran' ? 'Informasi Kelahiran' : 'Informasi Kematian'}
          </h3>
        </div>

        {subType === 'kelahiran' ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nama Lengkap Bayi</label>
              <div className="relative group">
                <Baby size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="namaBayi" required value={formData.namaBayi || ''} onChange={handleChange} placeholder="Sesuai Surat Keterangan Lahir" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Tempat Lahir</label>
                <div className="relative group">
                  <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                  <input name="tempatLahirBayi" required value={formData.tempatLahirBayi || ''} onChange={handleChange} placeholder="Contoh: Tasikmalaya" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Tanggal Lahir</label>
                <div className="relative group">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors pointer-events-none" />
                  <input name="tanggalLahirBayi" type="date" required value={formData.tanggalLahirBayi || ''} onChange={handleChange} className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all text-sm dark:[color-scheme:dark]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-desa-blue-900/5 dark:border-white/5">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nama Orang Tua / Pelapor</label>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                  <input name="namaOrangTua" required value={formData.namaOrangTua || ''} onChange={handleChange} placeholder="Nama Lengkap Ayah/Ibu" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">NIK Orang Tua (16 Digit)</label>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                  <input name="nikOrangTua" required maxLength={16} value={formData.nikOrangTua || ''} onChange={handleChange} placeholder="NIK Sesuai KTP" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nama Lengkap Almarhum/ah</label>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                  <input name="namaAlmarhum" required value={formData.namaAlmarhum || ''} onChange={handleChange} placeholder="Nama Lengkap Sesuai KTP" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">NIK Almarhum/ah</label>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                  <input name="nikAlmarhum" required maxLength={16} value={formData.nikAlmarhum || ''} onChange={handleChange} placeholder="16 Digit NIK" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Tanggal Wafat</label>
                <div className="relative group">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors pointer-events-none" />
                  <input name="tanggalKematian" type="date" required value={formData.tanggalKematian || ''} onChange={handleChange} className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all text-sm dark:[color-scheme:dark]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Tempat Meninggal</label>
                <div className="relative group">
                  <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                  <input name="tempatKematian" required value={formData.tempatKematian || ''} onChange={handleChange} placeholder="Contoh: RS Umum / Kediaman" className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
