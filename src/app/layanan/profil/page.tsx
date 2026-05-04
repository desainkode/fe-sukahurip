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
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="hero-reveal flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white">Profil Saya</h2>
          <p className="text-sm font-medium text-desa-blue-900/50 dark:text-white/40 uppercase tracking-widest">
            {isEditing ? 'Perbarui informasi data diri Anda' : 'Informasi data diri Anda yang terdaftar'}
          </p>
        </div>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="group flex items-center gap-3 rounded-2xl bg-desa-blue-900 dark:bg-desa-blue-500 px-7 py-4 font-black text-[10px] uppercase tracking-widest text-white shadow-xl hover:bg-desa-blue-950 dark:hover:bg-desa-blue-600 active:scale-95 transition-all"
          >
            <Edit3 size={16} className="transition-transform group-hover:rotate-12" /> Edit Profil
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 rounded-2xl bg-desa-blue-900/5 dark:bg-white/5 px-6 py-4 font-black text-[10px] uppercase tracking-widest text-desa-blue-950 dark:text-white border border-desa-blue-900/10 dark:border-white/10 hover:bg-desa-blue-900/10 dark:hover:bg-white/10 active:scale-95 transition-all"
            >
              <X size={16} /> Batal
            </button>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 rounded-2xl bg-desa-blue-900 dark:bg-emerald-500 px-6 py-4 font-black text-[10px] uppercase tracking-widest text-white shadow-xl hover:bg-desa-blue-950 dark:hover:bg-emerald-600 active:scale-95 transition-all disabled:opacity-50"
            >
              {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
              Simpan Perubahan
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Avatar & Action Card */}
        <div className="hero-reveal lg:col-span-1 space-y-6" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col items-center justify-center rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-10 shadow-2xl border border-desa-blue-900/5 dark:border-white/5 text-center">
            <div className="relative mb-6 group/avatar">
              <div 
                onClick={isEditing ? handleAvatarClick : undefined}
                className={`flex h-32 w-32 items-center justify-center rounded-[40px] bg-desa-blue-50 dark:bg-desa-blue-500 text-desa-blue-900 dark:text-white font-timeless text-5xl font-black border-4 border-white dark:border-desa-blue-950 shadow-xl overflow-hidden transition-all ${isEditing ? 'cursor-pointer hover:opacity-80' : ''}`}
              >
                {formData.avatar ? (
                  <img src={formData.avatar} alt="Avatar" className="h-full w-full object-cover" />
                ) : (
                  formData.name.charAt(0)
                )}
              </div>
              
              {isEditing && (
                <div 
                  onClick={handleAvatarClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-[40px] opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer text-white"
                >
                  <Camera size={32} />
                </div>
              )}
              
              <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg border-4 border-white dark:border-desa-blue-950">
                <Shield size={20} />
              </div>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>
            
            <h4 className="font-bold text-desa-blue-950 dark:text-white text-xl">{formData.name}</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-desa-blue-900/40 dark:text-white/40 mt-1">Status: {user?.status}</p>
          </div>

          {!isChangingPassword ? (
            <button 
              onClick={() => setIsChangingPassword(true)}
              className="group flex w-full items-center justify-center gap-3 rounded-[32px] bg-white dark:bg-desa-blue-900/40 p-6 text-sm font-bold text-desa-blue-950 dark:text-white shadow-xl border border-desa-blue-900/5 dark:border-white/5 transition-all hover:bg-desa-blue-50 dark:hover:bg-white/10 active:scale-95"
            >
              <Key size={20} className="text-desa-blue-900 dark:text-desa-yellow-500 transition-transform group-hover:rotate-12" />
              Ubah Kata Sandi
            </button>
          ) : (
            <div className="rounded-[32px] bg-desa-blue-50 dark:bg-white/5 p-6 space-y-4 border border-desa-blue-900/5 dark:border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40">Ganti Sandi</span>
                <button onClick={() => setIsChangingPassword(false)} className="text-desa-blue-950/40 dark:text-white/40 hover:text-red-500"><X size={16} /></button>
              </div>
              <div className="space-y-3">
                {[
                  { id: 'current', placeholder: 'Sandi Saat Ini' },
                  { id: 'new', placeholder: 'Sandi Baru' },
                  { id: 'confirm', placeholder: 'Konfirmasi Sandi' },
                ].map((input) => (
                  <div key={input.id} className="relative">
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      placeholder={input.placeholder}
                      className="w-full rounded-2xl bg-white dark:bg-white/5 p-4 text-xs font-bold text-desa-blue-950 dark:text-white placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 focus:ring-2 focus:ring-desa-blue-900 outline-hidden"
                    />
                    {input.id === 'current' && (
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-desa-blue-950/20 dark:text-white/20"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    )}
                  </div>
                ))}
                <button className="w-full rounded-2xl bg-desa-blue-900 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-lg active:scale-95 transition-all">Update Sandi</button>
              </div>
            </div>
          )}
        </div>

        {/* Info Grid / Form */}
        <div className="hero-reveal lg:col-span-2 space-y-4" style={{ animationDelay: '200ms' }}>
          {[
            { id: 'name', label: 'Nama Lengkap', icon: User, placeholder: 'Masukkan nama lengkap' },
            { id: 'nik', label: 'NIK (Nomor Induk Kependudukan)', icon: Shield, placeholder: 'Masukkan 16 digit NIK' },
            { id: 'address', label: 'Alamat Sesuai KTP', icon: MapPin, placeholder: 'Masukkan alamat lengkap' },
            { id: 'phone', label: 'Nomor Handphone', icon: Phone, placeholder: 'Contoh: 0812xxxx' },
            { id: 'email', label: 'Email Terdaftar', icon: Mail, placeholder: 'email@contoh.com' },
          ].map((field) => (
            <div key={field.id} className="flex flex-col gap-1 rounded-3xl bg-white dark:bg-desa-blue-900/40 p-6 shadow-lg border border-desa-blue-900/5 dark:border-white/5 transition-all focus-within:ring-2 focus-within:ring-desa-blue-900/20">
              <span className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40 px-1">{field.label}</span>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-desa-blue-400 shadow-inner">
                  <field.icon size={20} />
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-desa-blue-900/10 focus:border-desa-blue-900 outline-hidden py-2 font-bold text-desa-blue-950 dark:text-white text-lg placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20 transition-all"
                    placeholder={field.placeholder}
                  />
                ) : (
                  <span className="font-bold text-desa-blue-950 dark:text-white text-lg break-all">
                    {formData[field.id as keyof typeof formData]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Toast */}
      <div className={`fixed bottom-10 right-10 z-50 flex items-center gap-4 rounded-[32px] bg-emerald-500 p-5 pr-8 text-white shadow-2xl transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1) ${showToast ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
          <Check size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-black uppercase tracking-widest">Berhasil</span>
          <span className="text-xs font-bold opacity-80">Profil Anda telah diperbarui</span>
        </div>
      </div>
    </div>
  )
}
