'use client'

import React from 'react'
import { User, Phone, IdCard } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

interface StepDataDiriProps {
  formData: any
  setFormData: (data: any) => void
}

export function StepDataDiri({ formData, setFormData }: StepDataDiriProps) {
  const { user } = useAuth()

  // Auto-fill from auth context if data is empty
  React.useEffect(() => {
    if (user && !formData.name) {
      setFormData({
        ...formData,
        name: user.name,
        nik: user.nik,
        phone: user.phone || ''
      })
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-8">
        <div className="flex items-center gap-4 border-b border-desa-blue-900/5 dark:border-white/5 pb-4">
          <div className="h-8 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
          <h3 className="text-sm font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">Informasi Pemohon</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nama Lengkap</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30" />
              <input 
                name="name"
                disabled
                value={formData.name}
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-desa-blue-50/30 dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold opacity-70 cursor-not-allowed text-sm"
              />
            </div>
            <p className="text-[10px] text-desa-blue-950/40 dark:text-white/40 italic">Otomatis terisi sesuai data profil Anda</p>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">NIK (16 Digit)</label>
            <div className="relative">
              <IdCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30" />
              <input 
                name="nik"
                disabled
                value={formData.nik}
                className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-desa-blue-50/30 dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold opacity-70 cursor-not-allowed text-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">Nomor HP / WhatsApp Aktif</label>
          <div className="relative group">
            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-desa-blue-950/30 dark:text-white/30 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              className="block w-full rounded-xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-3.5 pl-11 pr-4 text-desa-blue-950 dark:text-white font-bold focus:ring-4 focus:ring-desa-blue-900/5 dark:focus:ring-desa-yellow-500/5 focus:border-desa-blue-900/20 dark:focus:border-white/20 outline-none transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 text-sm"
            />
          </div>
          <p className="text-[10px] text-desa-blue-950/40 dark:text-white/40">Pastikan nomor dapat dihubungi untuk koordinasi lebih lanjut</p>
        </div>
      </div>
    </div>
  )
}
