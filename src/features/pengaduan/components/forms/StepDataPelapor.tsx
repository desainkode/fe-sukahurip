'use client'

import React from 'react'
import { User, IdCard, Phone, ShieldCheck, ShieldOff } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

interface StepDataPelaporProps {
  formData: any
  setFormData: (data: any) => void
}

export function StepDataPelapor({ formData, setFormData }: StepDataPelaporProps) {
  const { user } = useAuth()

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

  const toggleAnonymous = () => {
    setFormData({ ...formData, isAnonymous: !formData.isAnonymous })
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between p-4 md:p-6 rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5">
        <div className="flex items-center gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all ${formData.isAnonymous ? 'bg-desa-blue-900 text-white' : 'bg-white dark:bg-white/5 text-desa-blue-950/20 dark:text-white/20'}`}>
            {formData.isAnonymous ? <ShieldCheck size={24} /> : <ShieldOff size={24} />}
          </div>
          <div>
            <p className="text-sm font-black text-desa-blue-950 dark:text-white">Lapor sebagai Anonim</p>
            <p className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest mt-1">Identitas Anda tidak akan ditampilkan ke publik</p>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleAnonymous}
          className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${formData.isAnonymous ? 'bg-desa-blue-900' : 'bg-desa-blue-950/10 dark:bg-white/10'}`}
        >
          <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${formData.isAnonymous ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 transition-all duration-500 ${formData.isAnonymous ? 'opacity-30 pointer-events-none grayscale' : 'opacity-100'}`}>
        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">Nama Pelapor</label>
          <div className="relative">
            <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="name"
              readOnly
              disabled={formData.isAnonymous}
              value={formData.isAnonymous ? 'Rahasia (Anonim)' : formData.name}
              onChange={handleChange}
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold text-xs outline-none transition-all"
            />
          </div>
        </div>

        <div className="group space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">NIK</label>
          <div className="relative">
            <IdCard size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 group-focus-within:text-desa-blue-900 dark:group-focus-within:text-desa-yellow-500 transition-colors" />
            <input 
              name="nik"
              readOnly
              disabled={formData.isAnonymous}
              value={formData.isAnonymous ? '****************' : formData.nik}
              className="block w-full rounded-xl border-0 bg-desa-blue-50/50 dark:bg-white/5 py-3 md:py-4 pl-12 pr-5 text-desa-blue-950 dark:text-white font-bold text-xs outline-none transition-all opacity-60 cursor-not-allowed"
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
