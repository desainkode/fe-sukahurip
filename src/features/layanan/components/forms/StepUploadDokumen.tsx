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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl bg-amber-50 dark:bg-amber-500/10 p-4 border border-amber-100 dark:border-amber-500/20 flex gap-4">
        <AlertCircle className="text-amber-600 shrink-0" size={20} />
        <p className="text-[11px] font-medium text-amber-900 dark:text-amber-400 leading-relaxed">
          Unggah dokumen persyaratan dalam format JPG, PNG, atau PDF. Pastikan gambar jelas dan terbaca. Maksimal ukuran file adalah 2MB per dokumen.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/60 px-2">
              {doc.label} {doc.required && <span className="text-rose-500">*</span>}
            </label>
            
            <div className={`relative group transition-all duration-500 ${files[doc.id] ? 'h-24' : 'h-40'}`}>
              {files[doc.id] ? (
                <div className="flex h-full w-full items-center justify-between rounded-2xl bg-desa-blue-900/5 dark:bg-white/5 px-6 border-2 border-desa-blue-900 dark:border-desa-yellow-500 border-dashed">
                  <div className="flex items-center gap-4 truncate">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-desa-blue-900 text-white">
                      <File size={20} />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-bold text-desa-blue-950 dark:text-white truncate">{files[doc.id]?.name}</p>
                      <p className="text-[10px] text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest mt-1">
                        {(files[doc.id]!.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleFileChange(doc.id, null)}
                    className="h-8 w-8 flex items-center justify-center rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all active:scale-90 shadow-sm"
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
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-desa-blue-900/10 dark:border-white/10 bg-desa-blue-50/30 dark:bg-white/5 transition-all group-hover:border-desa-blue-900 dark:group-hover:border-desa-yellow-500 group-hover:bg-white dark:group-hover:bg-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-desa-blue-950 text-desa-blue-900 dark:text-desa-yellow-500 shadow-sm group-hover:scale-110 transition-transform">
                      <Upload size={24} />
                    </div>
                    <p className="mt-4 text-[11px] font-bold text-desa-blue-950/60 dark:text-white/60">Klik untuk unggah</p>
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
