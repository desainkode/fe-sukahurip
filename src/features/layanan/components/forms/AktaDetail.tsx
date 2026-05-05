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
    <div className="space-y-4 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex gap-4 p-2 rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5">
        <button
          type="button"
          onClick={() => handleSubTypeChange('kelahiran')}
          className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            subType === 'kelahiran' 
              ? 'bg-desa-blue-900 text-white shadow-lg' 
              : 'text-desa-blue-950/40 dark:text-white/40 hover:bg-white dark:hover:bg-white/10'
          }`}
        >
          <Baby size={18} />
          Akta Kelahiran
        </button>
        <button
          type="button"
          onClick={() => handleSubTypeChange('kematian')}
          className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            subType === 'kematian' 
              ? 'bg-rose-600 text-white shadow-lg' 
              : 'text-desa-blue-950/40 dark:text-white/40 hover:bg-white dark:hover:bg-white/10'
          }`}
        >
          <HeartCrack size={18} />
          Akta Kematian
        </button>
      </div>

      {subType === 'kelahiran' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Bayi</label>
              <div className="relative">
                <Baby size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="namaBayi" required value={formData.namaBayi || ''} onChange={handleChange} placeholder="Nama Lengkap Bayi" className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
              </div>
            </div>
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Tempat, Tanggal Lahir</label>
              <div className="relative">
                <Calendar size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="ttlBayi" required value={formData.ttlBayi || ''} onChange={handleChange} placeholder="Contoh: Tasikmalaya, 01-01-2024" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Orang Tua</label>
              <div className="relative">
                <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="namaOrangTua" required value={formData.namaOrangTua || ''} onChange={handleChange} placeholder="Nama Lengkap Ayah/Ibu" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
              </div>
            </div>
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">NIK Orang Tua</label>
              <div className="relative">
                <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="nikOrangTua" required maxLength={16} value={formData.nikOrangTua || ''} onChange={handleChange} placeholder="16 Digit NIK" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Almarhum/ah</label>
              <div className="relative">
                <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="namaAlmarhum" required value={formData.namaAlmarhum || ''} onChange={handleChange} placeholder="Nama Lengkap" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
              </div>
            </div>
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">NIK Almarhum/ah</label>
              <div className="relative">
                <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="nikAlmarhum" required maxLength={16} value={formData.nikAlmarhum || ''} onChange={handleChange} placeholder="16 Digit NIK" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Tanggal Kematian</label>
              <div className="relative">
                <Calendar size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="tanggalKematian" type="date" required value={formData.tanggalKematian || ''} onChange={handleChange} className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs dark:[color-scheme:dark]" />
              </div>
            </div>
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Tempat Kematian</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
                <input name="tempatKematian" required value={formData.tempatKematian || ''} onChange={handleChange} placeholder="Contoh: Rumah Sakit/Rumah" className="block w-full rounded-2xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
