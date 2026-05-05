'use client'

import React from 'react'
import { CheckCircle2, FileText, Upload, User, Info } from 'lucide-react'

interface ReviewSubmitProps {
  formData: any
  files: Record<string, File | null>
  serviceLabel: string
  documents: any[]
}

export function ReviewSubmit({ formData, files, serviceLabel, documents }: ReviewSubmitProps) {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-3xl bg-emerald-50 dark:bg-emerald-500/5 p-6 border border-emerald-100 dark:border-emerald-500/10 flex items-center gap-6">
        <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600">
          <CheckCircle2 size={32} />
        </div>
        <div>
          <h4 className="text-sm font-black text-emerald-900 dark:text-emerald-400 uppercase tracking-widest">Tinjau Data Anda</h4>
          <p className="text-[11px] font-medium text-emerald-900/60 dark:text-emerald-400/60 mt-1">
            Pastikan semua informasi yang Anda masukkan sudah benar sebelum mengirimkan pengajuan.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Data Diri & Detail */}
        <div className="space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="text-desa-blue-900 dark:text-desa-yellow-500" size={18} />
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950 dark:text-white">Informasi Pemohon</h5>
            </div>
            <div className="rounded-[32px] bg-desa-blue-50/50 dark:bg-white/5 p-8 space-y-4 border border-desa-blue-900/5 dark:border-white/5">
              <div className="flex justify-between items-center py-1 border-b border-desa-blue-900/5 dark:border-white/5">
                <span className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">Nama</span>
                <span className="text-xs font-black text-desa-blue-950 dark:text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-desa-blue-900/5 dark:border-white/5">
                <span className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">NIK</span>
                <span className="text-xs font-black text-desa-blue-950 dark:text-white">{formData.nik}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">No. HP</span>
                <span className="text-xs font-black text-desa-blue-950 dark:text-white">{formData.phone}</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Info className="text-desa-blue-900 dark:text-desa-yellow-500" size={18} />
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950 dark:text-white">Detail Layanan: {serviceLabel}</h5>
            </div>
            <div className="rounded-[32px] bg-desa-blue-50/50 dark:bg-white/5 p-8 space-y-4 border border-desa-blue-900/5 dark:border-white/5">
              {Object.entries(formData).map(([key, value]) => {
                if (['name', 'nik', 'phone', 'step'].includes(key)) return null
                if (typeof value === 'boolean') return null
                return (
                  <div key={key} className="flex justify-between items-center py-1 border-b border-desa-blue-900/5 dark:border-white/5 last:border-0">
                    <span className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                    <span className="text-xs font-black text-desa-blue-950 dark:text-white">{String(value)}</span>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        {/* Documents */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Upload className="text-desa-blue-900 dark:text-desa-yellow-500" size={18} />
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950 dark:text-white">Dokumen Terlampir</h5>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-5 rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-xl ${files[doc.id] ? 'bg-desa-blue-900 text-white' : 'bg-rose-100 text-rose-500'}`}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-desa-blue-950 dark:text-white uppercase tracking-widest">{doc.label}</p>
                    <p className={`text-[9px] font-bold mt-1 uppercase tracking-widest ${files[doc.id] ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {files[doc.id] ? 'Sudah Terunggah' : 'Wajib Diunggah'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
