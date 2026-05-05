'use client'

import React from 'react'
import { Edit2, ShieldCheck, ShieldOff } from 'lucide-react'

interface StepReviewPengaduanProps {
  formData: any
  setFormData: (data: any) => void
  setStep: (step: number) => void
}

export function StepReviewPengaduan({ formData, setStep }: StepReviewPengaduanProps) {
  const sections = [
    {
      title: 'Data Pelapor',
      step: 1,
      items: [
        { label: 'Nama', value: formData.isAnonymous ? 'Anonim' : formData.name },
        { label: 'NIK', value: formData.isAnonymous ? 'Dahasiakan' : formData.nik },
        { label: 'No. HP', value: formData.phone },
        { label: 'Privasi', value: formData.isAnonymous ? 'Anonim (Rahasia)' : 'Terbuka (Publik)' }
      ]
    },
    {
      title: 'Detail Laporan',
      step: 2,
      items: [
        { label: 'Kategori', value: formData.category },
        { label: 'Judul', value: formData.title },
        { label: 'Lokasi', value: formData.location },
        { label: 'Tanggal', value: formData.date },
        { label: 'Deskripsi', value: formData.description, fullWidth: true }
      ]
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-desa-blue-900 text-white shadow-xl shadow-desa-blue-900/20">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          {formData.isAnonymous ? <ShieldCheck size={20} /> : <ShieldOff size={20} />}
        </div>
        <div className="text-left">
          <p className="text-xs font-black uppercase tracking-widest">Konfirmasi Data</p>
          <p className="text-[10px] opacity-60">Mohon periksa kembali laporan Anda sebelum dikirim.</p>
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-desa-blue-900/5 dark:border-white/5 bg-desa-blue-50/30 dark:bg-white/5 p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-desa-blue-900 dark:text-desa-yellow-500">{section.title}</h4>
              <button 
                type="button"
                onClick={() => setStep(section.step)}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/50 hover:text-desa-blue-900 transition-colors"
              >
                <Edit2 size={12} /> Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {section.items.map((item, i) => (
                <div key={i} className={`${item.fullWidth ? 'md:col-span-2' : ''}`}>
                  <p className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/20 dark:text-white/20 mb-1">{item.label}</p>
                  <p className="text-xs font-bold text-desa-blue-950 dark:text-white leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-desa-blue-900/5 dark:border-white/5 bg-desa-blue-50/30 dark:bg-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-desa-blue-900 dark:text-desa-yellow-500">Bukti Terlampir</h4>
            <button 
              type="button"
              onClick={() => setStep(3)}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/50 hover:text-desa-blue-900 transition-colors"
            >
              <Edit2 size={12} /> Edit
            </button>
          </div>
          <p className="text-xs font-bold text-desa-blue-950 dark:text-white">
            {formData.files.length} File bukti berhasil diunggah.
          </p>
        </div>
      </div>
    </div>
  )
}
