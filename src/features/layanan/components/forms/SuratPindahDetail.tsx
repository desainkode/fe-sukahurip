'use client'

import React, { useState, useRef, useEffect } from 'react'
import { MapPin, Users, Calendar, HelpCircle, ChevronDown, Check } from 'lucide-react'

interface SuratPindahDetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function SuratPindahDetail({ formData, setFormData }: SuratPindahDetailProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const options = [
    { value: "Pekerjaan", label: "Pekerjaan" },
    { value: "Pendidikan", label: "Pendidikan" },
    { value: "Kesehatan", label: "Kesehatan" },
    { value: "Perumahan", label: "Perumahan" },
    { value: "Keluarga", label: "Keluarga" },
    { value: "Lainnya", label: "Lainnya" },
  ]

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedOption = options.find(opt => opt.value === formData.alasanPindah)

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Informasi Umum Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Informasi Kepindahan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nomor Kartu Keluarga (KK)</label>
            <div className="relative group">
              <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input 
                name="noKK"
                required
                maxLength={16}
                value={formData.noKK || ''}
                onChange={handleInputChange}
                placeholder="16 Digit Nomor KK"
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Tanggal Rencana Pindah</label>
            <div className="relative group">
              <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input 
                name="tanggalPindah"
                type="date"
                required
                value={formData.tanggalPindah || ''}
                onChange={handleInputChange}
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all text-sm dark:[color-scheme:dark]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2" ref={dropdownRef}>
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Alasan Kepindahan</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex w-full items-center justify-between rounded-xl border py-3.5 pl-11 pr-4 text-left transition-all ${
                  isDropdownOpen 
                    ? 'bg-white dark:bg-white/10 border-desa-blue-900/20 dark:border-white/20 ring-4 ring-desa-blue-900/5 dark:ring-white/5' 
                    : 'bg-white dark:bg-white/5 border-desa-blue-900/10 dark:border-white/10 hover:border-desa-blue-900/20'
                }`}
              >
                <HelpCircle size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDropdownOpen ? 'text-desa-blue-900 dark:text-desa-yellow-500' : 'text-desa-blue-950/30 dark:text-white/30'}`} />
                <span className={`text-sm font-bold ${formData.alasanPindah ? 'text-desa-blue-950 dark:text-white' : 'text-desa-blue-950/20 dark:text-white/20'}`}>
                  {selectedOption ? selectedOption.label : "Pilih alasan"}
                </span>
                <ChevronDown size={18} className={`text-desa-blue-950/20 dark:text-white/20 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl bg-white dark:bg-desa-blue-950 border border-desa-blue-900/10 dark:border-white/10 shadow-xl animate-in zoom-in-95 fade-in duration-200 origin-top">
                  <div className="p-1.5">
                    {options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          handleChange('alasanPindah', option.value)
                          setIsDropdownOpen(false)
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-xs font-bold transition-all ${
                          formData.alasanPindah === option.value
                            ? 'bg-desa-blue-900 text-white'
                            : 'text-desa-blue-950/60 dark:text-white/60 hover:bg-desa-blue-50 dark:hover:bg-white/5 hover:text-desa-blue-900 dark:hover:text-white'
                        }`}
                      >
                        {option.label}
                        {formData.alasanPindah === option.value && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Jumlah Anggota Keluarga</label>
            <div className="relative group">
              <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input 
                name="jumlahAnggota"
                type="number"
                min="0"
                required
                value={formData.jumlahAnggota || ''}
                onChange={handleInputChange}
                placeholder="0"
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alamat Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Detail Alamat</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Alamat Asal Lengkap</label>
            <div className="relative group">
              <MapPin size={18} className="absolute left-4 top-4 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <textarea 
                name="alamatAsal"
                required
                rows={4}
                value={formData.alamatAsal || ''}
                onChange={handleInputChange}
                placeholder="Tuliskan alamat asal selengkap mungkin..."
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm resize-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Alamat Tujuan Lengkap</label>
            <div className="relative group">
              <MapPin size={18} className="absolute left-4 top-4 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <textarea 
                name="alamatTujuan"
                required
                rows={4}
                value={formData.alamatTujuan || ''}
                onChange={handleInputChange}
                placeholder="Tuliskan alamat tujuan selengkap mungkin..."
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
