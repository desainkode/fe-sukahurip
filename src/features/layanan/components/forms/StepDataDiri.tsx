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
    <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Lengkap (Sesuai KTP)</label>
          <div className="relative">
            <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="name"
              disabled
              value={formData.name}
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold opacity-60 cursor-not-allowed text-xs"
            />
          </div>
        </div>

        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">NIK</label>
          <div className="relative">
            <IdCard size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="nik"
              disabled
              value={formData.nik}
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold opacity-60 cursor-not-allowed text-xs"
            />
          </div>
        </div>
      </div>

      <div className="group space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nomor HP / WhatsApp (Aktif)</label>
        <div className="relative">
          <Phone size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
          <input 
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="08xxxxxxxxxx"
            className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 dark:focus:ring-desa-yellow-500 transition-all outline-none shadow-sm text-xs"
          />
        </div>
      </div>
    </div>
  )
}
