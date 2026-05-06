'use client'

import React, { useState, useRef } from 'react'
import { useAuth } from '@/context/AuthContext'
import { User, MapPin, Phone, Mail, Shield, Edit3, Key, Camera, Check, X, Eye, EyeOff, Save, Loader2 } from 'lucide-react'

export default function ProfilPage() {
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    nik: user?.nik || '',
    address: user?.address || '',
    phone: user?.phone || '',
    email: 'warga.sukahurip@email.com', // Mock default
    avatar: user?.avatar || null as string | null
  })

  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    
    // Update local context/storage
    updateProfile({
      name: formData.name,
      nik: formData.nik,
      address: formData.address,
      phone: formData.phone,
      avatar: formData.avatar || undefined
    })

    // Simulate API delay
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
      setShowToast(true)
      
      // Hide toast after 3s
      setTimeout(() => setShowToast(false), 3000)
    }, 800)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-24 px-2">
      {/* Header */}
      <div className="hero-reveal flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-4">
          <h2 className="font-timeless text-4xl md:text-7xl font-black text-desa-blue-950 dark:text-white tracking-tighter leading-tight">Profil <span className="text-desa-blue-900 dark:text-desa-yellow-500">Saya</span></h2>
          <p className="text-sm md:text-xl font-medium text-desa-blue-950/40 dark:text-white/40 uppercase tracking-[0.1em] max-w-xl leading-relaxed">
            {isEditing ? 'Perbarui informasi data diri Anda secara berkala untuk validitas layanan.' : 'Kelola informasi data diri dan keamanan akun Anda dalam satu tempat.'}
          </p>
        </div>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="group flex h-20 items-center gap-5 rounded-[32px] bg-desa-blue-900 dark:bg-desa-blue-500 px-12 font-black text-[12px] uppercase tracking-widest text-white shadow-[0_20px_50px_rgba(7,42,200,0.3)] active:scale-95 transition-all hover:bg-desa-blue-950"
          >
            <Edit3 size={20} className="transition-transform group-hover:rotate-12" /> 
            Edit Profil
          </button>
        ) : (
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsEditing(false)}
              className="flex h-20 items-center gap-4 rounded-[32px] bg-white dark:bg-white/5 px-10 font-black text-[12px] uppercase tracking-widest text-desa-blue-950 dark:text-white border border-desa-blue-900/10 dark:border-white/10 hover:bg-rose-500 hover:text-white transition-all shadow-xl shadow-black/[0.02]"
            >
              <X size={20} /> Batal
            </button>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="flex h-20 items-center gap-4 rounded-[32px] bg-emerald-500 px-10 font-black text-[12px] uppercase tracking-widest text-white shadow-[0_20px_50px_rgba(16,185,129,0.3)] active:scale-95 transition-all disabled:opacity-50"
            >
              {isSaving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
              Simpan Perubahan
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-12 lg:grid-cols-12">
        {/* Avatar & Action Card */}
        <div className="hero-reveal lg:col-span-4 space-y-10" style={{ animationDelay: '200ms' }}>
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[56px] bg-white dark:bg-desa-blue-900/40 p-12 shadow-[0_40px_100px_rgba(0,0,0,0.03)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 text-center transition-all hover:shadow-2xl">
            <div className="relative z-10 mb-10 group/avatar">
              <div 
                onClick={isEditing ? handleAvatarClick : undefined}
                className={`flex h-48 w-48 items-center justify-center rounded-[64px] bg-desa-blue-50 dark:bg-desa-blue-500 text-desa-blue-900 dark:text-white font-timeless text-7xl font-black border-[12px] border-white dark:border-desa-blue-950 shadow-[0_30px_60px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-700 ${isEditing ? 'cursor-pointer hover:scale-105 active:scale-95' : ''}`}
              >
                {formData.avatar ? (
                  <img src={formData.avatar} alt="Avatar" className="h-full w-full object-cover transition-transform duration-1000 group-hover/avatar:scale-110" />
                ) : (
                  formData.name.charAt(0)
                )}
              </div>
              
              {isEditing && (
                <div 
                  onClick={handleAvatarClick}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 rounded-[64px] opacity-0 group-hover/avatar:opacity-100 transition-all duration-500 cursor-pointer text-white backdrop-blur-[4px] border-[12px] border-transparent"
                >
                  <Camera size={44} className="mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Ganti Foto</span>
                </div>
              )}
              
              <div className="absolute -bottom-3 -right-3 z-30 h-16 w-16 rounded-[24px] bg-emerald-500 text-white flex items-center justify-center shadow-2xl border-[6px] border-white dark:border-desa-blue-950 group-hover/avatar:rotate-12 transition-transform duration-500">
                <Shield size={32} />
              </div>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>
            
            <h4 className="relative z-10 font-timeless text-3xl font-black text-desa-blue-950 dark:text-white leading-tight tracking-tighter">{formData.name}</h4>
            <p className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em] text-desa-blue-900/30 dark:text-desa-yellow-500 mt-4">Warga Digital Aktif</p>
            
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-desa-blue-900/5 blur-[100px]" />
          </div>

          {!isChangingPassword ? (
            <button 
              onClick={() => setIsChangingPassword(true)}
              className="group flex w-full items-center justify-center gap-6 rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-10 text-sm font-bold text-desa-blue-950 dark:text-white shadow-[0_40px_100px_rgba(0,0,0,0.03)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 transition-all hover:bg-desa-blue-900 hover:text-white dark:hover:bg-desa-yellow-500 dark:hover:text-desa-blue-950 active:scale-[0.98]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-desa-blue-900/5 dark:bg-white/5 text-desa-blue-900 dark:text-desa-yellow-500 group-hover:bg-white/20 group-hover:text-white transition-all">
                <Key size={26} />
              </div>
              <span className="text-base font-black tracking-tight">Ubah Kata Sandi</span>
            </button>
          ) : (
            <div className="rounded-[48px] bg-white dark:bg-desa-blue-900/40 p-12 space-y-8 border border-desa-blue-900/5 dark:border-white/5 shadow-2xl animate-in slide-in-from-top-6 duration-700">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-desa-blue-950/20 dark:text-white/20">Keamanan</span>
                <button onClick={() => setIsChangingPassword(false)} className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-rose-500/10 text-desa-blue-950/20 dark:text-white/20 hover:text-rose-600 transition-all"><X size={22} /></button>
              </div>
              <div className="space-y-5">
                {[
                  { id: 'current', placeholder: 'Sandi Saat Ini' },
                  { id: 'new', placeholder: 'Sandi Baru' },
                  { id: 'confirm', placeholder: 'Konfirmasi Sandi' },
                ].map((input) => (
                  <div key={input.id} className="relative">
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      placeholder={input.placeholder}
                      className="w-full rounded-[24px] bg-desa-blue-50/50 dark:bg-white/5 p-6 text-sm font-bold text-desa-blue-950 dark:text-white placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 focus:ring-8 focus:ring-desa-blue-900/5 outline-none transition-all shadow-inner"
                    />
                    {input.id === 'current' && (
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20 hover:text-desa-blue-900 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    )}
                  </div>
                ))}
                <button className="w-full h-16 rounded-[24px] bg-desa-blue-900 py-4 text-[12px] font-black uppercase tracking-widest text-white shadow-xl shadow-desa-blue-900/20 active:scale-95 transition-all mt-4">Update Kata Sandi</button>
              </div>
            </div>
          )}
        </div>

        {/* Info Grid / Form */}
        <div className="hero-reveal lg:col-span-8 space-y-8" style={{ animationDelay: '400ms' }}>
          {[
            { id: 'name', label: 'Nama Lengkap', icon: User, placeholder: 'Masukkan nama sesuai KTP' },
            { id: 'nik', label: 'Nomor Induk Kependudukan (NIK)', icon: Shield, placeholder: 'Masukkan 16 digit NIK' },
            { id: 'address', label: 'Alamat Lengkap', icon: MapPin, placeholder: 'Masukkan alamat domisili' },
            { id: 'phone', label: 'Nomor WhatsApp', icon: Phone, placeholder: 'Contoh: 0812xxxx' },
            { id: 'email', label: 'Alamat Email', icon: Mail, placeholder: 'email@contoh.com' },
          ].map((field) => (
            <div key={field.id} className="flex flex-col gap-3 rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.02)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 transition-all duration-500 focus-within:ring-8 focus-within:ring-desa-blue-900/5 group">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-desa-blue-950/20 dark:text-white/20 px-4">{field.label}</span>
              <div className="flex items-center gap-8 mt-2">
                <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] transition-all duration-700 ${isEditing ? 'bg-desa-blue-900 text-white rotate-6' : 'bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-desa-blue-400 shadow-inner group-hover:scale-110 group-hover:-rotate-3'}`}>
                  <field.icon size={36} strokeWidth={2.5} />
                </div>
                <div className="flex-1 overflow-hidden">
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData[field.id as keyof typeof formData] || ''}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full bg-transparent border-b-4 border-desa-blue-900/5 focus:border-desa-blue-900 outline-none py-4 font-black text-desa-blue-950 dark:text-white text-2xl md:text-3xl placeholder:text-desa-blue-950/10 dark:placeholder:text-white/10 transition-all tracking-tighter"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <span className="font-timeless font-black text-desa-blue-950 dark:text-white text-2xl md:text-4xl break-all leading-none tracking-tighter block group-hover:translate-x-2 transition-transform duration-700">
                      {formData[field.id as keyof typeof formData]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Toast */}
      <div className={`fixed bottom-12 right-12 z-50 flex items-center gap-8 rounded-[48px] bg-emerald-500 p-8 pr-16 text-white shadow-[0_50px_100px_rgba(16,185,129,0.3)] transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${showToast ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-40 opacity-0 scale-90 pointer-events-none'}`}>
        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-white/20 shadow-inner">
          <Check size={40} strokeWidth={4} className="animate-in zoom-in duration-500 delay-300" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-black uppercase tracking-[0.4em] opacity-80">Update Berhasil</span>
          <span className="text-xl font-black tracking-tight">Profil Anda telah diperbarui</span>
        </div>
      </div>
    </div>
  )
}
