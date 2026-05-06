'use client'

import React from 'react'
import { CheckCircle2, FileText, Upload, User, Info, Check } from 'lucide-react'

interface ReviewSubmitProps {
  formData: any
  files: Record<string, File | null>
  serviceLabel: string
  documents: any[]
}

export function ReviewSubmit({ formData, files, serviceLabel, documents }: ReviewSubmitProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Alert Info */}
      <div className="rounded-xl bg-emerald-50 dark:bg-emerald-500/5 p-5 border border-emerald-200/50 dark:border-emerald-500/20 flex gap-4 items-start">
        <CheckCircle2 size={20} className="shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
        <div className="space-y-1">
          <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200/80 leading-relaxed uppercase tracking-widest">
            Data Siap Dikirim
          </p>
          <p className="text-[10px] font-bold text-emerald-900/60 dark:text-emerald-400/60 leading-relaxed">
            Silakan periksa kembali data Anda. Klik tombol submit di bawah untuk mengirim pengajuan.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Data Diri Section */}
          <section className="bg-white dark:bg-white/5 p-6 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-5">
            <div className="flex items-center gap-3 border-b border-desa-blue-900/5 dark:border-white/5 pb-3">
              <div className="h-6 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-desa-blue-950 dark:text-white">Identitas Pemohon</h5>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Nama Lengkap', value: formData.name },
                { label: 'NIK Pemohon', value: formData.nik },
                { label: 'WhatsApp', value: formData.phone },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-1">
                  <span className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-wider">{item.label}</span>
                  <span className="text-xs font-bold text-desa-blue-950 dark:text-white">{item.value || '-'}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Detail Layanan Section */}
          <section className="bg-white dark:bg-white/5 p-6 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-5">
            <div className="flex items-center gap-3 border-b border-desa-blue-900/5 dark:border-white/5 pb-3">
              <div className="h-6 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-desa-blue-950 dark:text-white truncate">Detail: {serviceLabel}</h5>
            </div>
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => {
                if (['name', 'nik', 'phone', 'step', 'subType'].includes(key)) return null
                if (typeof value === 'boolean') return null
                if (!value) return null
                
                return (
                  <div key={key} className="flex justify-between items-center py-1">
                    <span className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-xs font-bold text-desa-blue-950 dark:text-white truncate max-w-[150px]">{String(value)}</span>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        {/* Documents Section */}
        <section className="bg-white dark:bg-white/5 p-6 rounded-xl border border-desa-blue-900/10 dark:border-white/10 shadow-sm space-y-5">
          <div className="flex items-center gap-3 border-b border-desa-blue-900/5 dark:border-white/5 pb-3">
            <div className="h-6 w-1 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500" />
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-desa-blue-950 dark:text-white">Dokumen Terlampir</h5>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg bg-desa-blue-50/30 dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 flex items-center justify-center rounded-lg ${files[doc.id] ? 'bg-desa-blue-900 text-white' : 'bg-rose-50 dark:bg-rose-500/10 text-rose-500'}`}>
                    <FileText size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-desa-blue-950 dark:text-white uppercase tracking-wider">{doc.label}</p>
                    <p className={`text-[9px] font-bold uppercase tracking-widest mt-0.5 ${files[doc.id] ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}`}>
                      {files[doc.id] ? 'Ready' : 'Missing'}
                    </p>
                  </div>
                </div>
                {files[doc.id] && <Check size={14} className="text-emerald-600 dark:text-emerald-400" />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
