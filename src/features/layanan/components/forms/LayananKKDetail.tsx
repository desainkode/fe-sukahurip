'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Users, MapPin, User, FileText, ChevronDown, Check } from 'lucide-react'

interface LayananKKDetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function LayananKKDetail({ formData, setFormData }: LayananKKDetailProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const options = [
    { value: "Baru", label: "Pembuatan KK Baru" },
    { value: "Perubahan", label: "Perubahan Data (Update)" },
    { value: "Tambah", label: "Penambahan Anggota Keluarga" },
    { value: "Hilang", label: "Penggantian Karena Hilang/Rusak" },
  ]

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const selectedOption = options.find(opt => opt.value === formData.jenisKK)

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Detail Pengajuan Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Detail Layanan</h3>
        </div>

        <div className="space-y-2" ref={dropdownRef}>
          <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Jenis Layanan KK</label>
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
              <FileText size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDropdownOpen ? 'text-desa-blue-900 dark:text-desa-yellow-500' : 'text-desa-blue-950/30 dark:text-white/30'}`} />
              <span className={`text-sm font-bold ${formData.jenisKK ? 'text-desa-blue-950 dark:text-white' : 'text-desa-blue-950/20 dark:text-white/20'}`}>
                {selectedOption ? selectedOption.label : "Pilih jenis layanan KK"}
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
                        handleChange('jenisKK', option.value)
                        setIsDropdownOpen(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-xs font-bold transition-all ${
                        formData.jenisKK === option.value
                          ? 'bg-desa-blue-900 text-white'
                          : 'text-desa-blue-950/60 dark:text-white/60 hover:bg-desa-blue-50 dark:hover:bg-white/5 hover:text-desa-blue-900 dark:hover:text-white'
                      }`}
                    >
                      {option.label}
                      {formData.jenisKK === option.value && <Check size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Alamat Lengkap di KK</label>
          <div className="relative group">
            <MapPin size={18} className="absolute left-4 top-4 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <textarea 
              name="alamatKK" 
              required 
              rows={4} 
              value={formData.alamatKK || ''} 
              onChange={handleInputChange} 
              placeholder="Tuliskan alamat lengkap sesuai yang tertera di KK..." 
              className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm resize-none" 
            />
          </div>
        </div>
      </div>

      {/* Identitas Keluarga Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Identitas Keluarga</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nomor KK (Lama)</label>
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
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nama Kepala Keluarga</label>
            <div className="relative group">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input 
                name="kepalaKeluarga" 
                required 
                value={formData.kepalaKeluarga || ''} 
                onChange={handleInputChange} 
                placeholder="Nama Lengkap Kepala Keluarga" 
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
