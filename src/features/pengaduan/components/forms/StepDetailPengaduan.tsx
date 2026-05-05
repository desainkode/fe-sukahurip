'use client'

import React from 'react'
import { FileText, MapPin, Calendar, ListFilter, Construction, Trash2, HandHeart, ShieldAlert, HeartPulse, MoreHorizontal } from 'lucide-react'

interface StepDetailPengaduanProps {
  formData: any
  setFormData: (data: any) => void
}

export function StepDetailPengaduan({ formData, setFormData }: StepDetailPengaduanProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const categories = [
    { id: 'Infrastruktur Desa', label: 'Infrastruktur', icon: Construction, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-500/10' },
    { id: 'Kebersihan & Lingkungan', label: 'Lingkungan', icon: Trash2, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
    { id: 'Pelayanan Administrasi', label: 'Administrasi', icon: FileText, color: 'text-desa-blue-900', bg: 'bg-desa-blue-50 dark:bg-desa-blue-900/10' },
    { id: 'Bantuan Sosial', label: 'Bansos', icon: HandHeart, color: 'text-rose-600', bg: 'bg-rose-50 dark:bg-rose-500/10' },
    { id: 'Keamanan & Ketertiban', label: 'Keamanan', icon: ShieldAlert, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-500/10' },
    { id: 'Kesehatan & Sosial', label: 'Kesehatan', icon: HeartPulse, color: 'text-teal-600', bg: 'bg-teal-50 dark:bg-teal-500/10' },
    { id: 'Lainnya', label: 'Lainnya', icon: MoreHorizontal, color: 'text-slate-600', bg: 'bg-slate-50 dark:bg-slate-500/10' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCategorySelect = (id: string) => {
    setFormData({ ...formData, category: id })
    setIsModalOpen(false)
  }

  const selectedCategory = categories.find(cat => cat.id === formData.category)

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Kategori Pengaduan</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={`flex w-full items-center justify-between rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 font-bold transition-all outline-none shadow-sm text-xs text-left ${
              formData.category ? 'text-desa-blue-950 dark:text-white' : 'text-desa-blue-950/20 dark:text-white/20'
            }`}
          >
            <ListFilter size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors" />
            <span>{selectedCategory ? selectedCategory.id : 'Pilih Kategori Pengaduan'}</span>
            <div className={`transition-transform duration-300 ${isModalOpen ? 'rotate-180' : ''}`}>
              <div className="h-1.5 w-1.5 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
            </div>
          </button>

          {/* Custom Dropdown Popover */}
          {isModalOpen && (
            <>
              <div 
                className="fixed inset-0 z-[40]" 
                onClick={() => setIsModalOpen(false)}
              />
              <div className="absolute top-full left-0 right-0 mt-2 z-[50] rounded-3xl bg-white dark:bg-desa-blue-950 p-3 shadow-2xl border border-desa-blue-900/5 dark:border-white/5 animate-in slide-in-from-top-2 fade-in duration-300">
                <div className="grid grid-cols-1 gap-1">
                  {categories.map((cat) => {
                    const isSelected = formData.category === cat.id
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`flex items-center gap-4 w-full p-3 rounded-2xl transition-all duration-200 group ${
                          isSelected 
                            ? 'bg-desa-blue-900 text-white shadow-lg shadow-desa-blue-900/20' 
                            : 'hover:bg-desa-blue-50 dark:hover:bg-white/5 text-desa-blue-950 dark:text-white/80'
                        }`}
                      >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isSelected ? 'bg-white/20 text-white' : `${cat.bg} ${cat.color} group-hover:scale-110`
                        }`}>
                          <cat.icon size={20} />
                        </div>
                        <div className="text-left">
                          <p className={`text-[10px] font-black uppercase tracking-widest ${isSelected ? 'text-white' : 'text-desa-blue-950 dark:text-white'}`}>
                            {cat.label}
                          </p>
                          <p className={`text-[8px] font-bold opacity-40 ${isSelected ? 'text-white' : 'text-desa-blue-950 dark:text-white'}`}>
                            {cat.id}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Judul Laporan</label>
        <div className="relative">
          <FileText size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
          <input 
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Contoh: Jalan Rusak di Dusun A"
            className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs"
          />
        </div>
      </div>

      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Deskripsi Lengkap</label>
        <div className="relative">
          <textarea 
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Ceritakan detail kejadian atau keluhan Anda..."
            className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-4 px-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs resize-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Lokasi Kejadian</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="Contoh: Depan Masjid Al-Ikhlas"
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs"
            />
          </div>
        </div>

        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Tanggal Kejadian</label>
          <div className="relative">
            <Calendar size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs dark:[color-scheme:dark]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
