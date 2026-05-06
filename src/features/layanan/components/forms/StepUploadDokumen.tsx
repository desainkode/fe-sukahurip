'use client'

import React from 'react'
import { Upload, File, X, AlertCircle } from 'lucide-react'

interface Document {
  id: string
  label: string
  required: boolean
}

interface StepUploadDokumenProps {
  documents: Document[]
  files: Record<string, File | null>
  setFiles: (files: any) => void
}

export function StepUploadDokumen({ documents, files, setFiles }: StepUploadDokumenProps) {
  const handleFileChange = (id: string, file: File | null) => {
    if (file && file.size > 2 * 1024 * 1024) {
      alert('Ukuran file maksimal 2MB')
      return
    }
    setFiles((prev: any) => ({ ...prev, [id]: file }))
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Alert Info */}
      <div className="rounded-xl bg-amber-50 dark:bg-amber-500/5 p-5 border border-amber-200/50 dark:border-amber-500/20 flex gap-4 items-start">
        <AlertCircle size={20} className="shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
        <div className="space-y-1">
          <p className="text-[11px] font-bold text-amber-900 dark:text-amber-200/80 leading-relaxed">
            Format: <span className="font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">JPG, PNG, PDF</span>. Maksimal ukuran file: <span className="font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">2MB</span>. Pastikan dokumen terbaca jelas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-desa-blue-950/60 dark:text-white/60">
              {doc.label} {doc.required && <span className="text-rose-500 ml-1">*</span>}
            </label>
            
            <div className={`relative group transition-all duration-500 ${files[doc.id] ? 'h-24' : 'h-36'}`}>
              {files[doc.id] ? (
                <div className="flex h-full w-full items-center justify-between rounded-xl bg-desa-blue-50/30 dark:bg-white/5 px-4 border border-desa-blue-900/10 dark:border-white/10 animate-in zoom-in-95 duration-500">
                  <div className="flex items-center gap-4 truncate">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-desa-blue-900 text-white shadow-md">
                      <File size={18} />
                    </div>
                    <div className="truncate pr-2">
                      <p className="text-xs font-bold text-desa-blue-950 dark:text-white truncate">{files[doc.id]?.name}</p>
                      <p className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest mt-0.5">
                        {(files[doc.id]!.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleFileChange(doc.id, null)}
                    className="h-8 w-8 shrink-0 flex items-center justify-center rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white transition-all active:scale-90"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="relative h-full w-full">
                  <input 
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => handleFileChange(doc.id, e.target.files?.[0] || null)}
                    className="absolute inset-0 z-10 cursor-pointer opacity-0"
                  />
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-desa-blue-900/20 dark:border-white/20 bg-white dark:bg-white/5 transition-all duration-300 group-hover:border-desa-blue-900 dark:group-hover:border-desa-yellow-500 group-hover:bg-desa-blue-50/50 dark:group-hover:bg-white/10 shadow-sm">
                    <Upload size={20} className="text-desa-blue-950/20 dark:text-white/20 group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors" />
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40 group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors">Pilih Dokumen</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
