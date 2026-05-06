'use client'

import React, { useState, useRef, useEffect } from 'react'
import { IdCard, FileText, MapPin, AlertTriangle, ChevronDown, Check } from 'lucide-react'

interface LayananKTPDetailProps {
  formData: any
  setFormData: (data: any) => void
}

export function LayananKTPDetail({ formData, setFormData }: LayananKTPDetailProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const options = [
    { value: "Baru", label: "Baru (Perekaman Pertama)" },
    { value: "Rusak", label: "Rusak (Patah/Cacat)" },
    { value: "Hilang", label: "Hilang (Wajib Ada Ket. Polisi)" },
    { value: "Perubahan", label: "Perubahan Data Adminduk" },
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

  const selectedOption = options.find(opt => opt.value === formData.alasanKTP)

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Detail Pengajuan Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Detail Pengajuan</h3>
        </div>

        <div className="space-y-2" ref={dropdownRef}>
          <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Alasan Pengajuan KTP-el</label>
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
              <span className={`text-sm font-bold ${formData.alasanKTP ? 'text-desa-blue-950 dark:text-white' : 'text-desa-blue-950/20 dark:text-white/20'}`}>
                {selectedOption ? selectedOption.label : "Pilih alasan pengajuan"}
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
                        handleChange('alasanKTP', option.value)
                        setIsDropdownOpen(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-xs font-bold transition-all ${
                        formData.alasanKTP === option.value
                          ? 'bg-desa-blue-900 text-white'
                          : 'text-desa-blue-950/60 dark:text-white/60 hover:bg-desa-blue-50 dark:hover:bg-white/5 hover:text-desa-blue-900 dark:hover:text-white'
                      }`}
                    >
                      {option.label}
                      {formData.alasanKTP === option.value && <Check size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Keterangan Tambahan</label>
          <div className="relative group">
            <AlertTriangle size={18} className="absolute left-4 top-4 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <textarea 
              name="keteranganKTP" 
              rows={4} 
              value={formData.keteranganKTP || ''} 
              onChange={handleInputChange} 
              placeholder="Contoh: KTP patah atau data alamat tidak sesuai..." 
              className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm resize-none" 
            />
          </div>
        </div>
      </div>

      {/* Data Kependudukan Card */}
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Data Kependudukan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">NIK Pemohon</label>
            <div className="relative group">
              <IdCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
              <input 
                name="nikKTP" 
                required 
                maxLength={16} 
                value={formData.nikKTP || formData.nik || ''} 
                onChange={handleInputChange} 
                placeholder="16 Digit NIK" 
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nomor KK Pemohon</label>
            <div className="relative group">
              <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
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
        </div>
      </div>
    </div>
  )
}
