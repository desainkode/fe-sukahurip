'use client'

import React, { useRef } from 'react'
import { Upload, X, Image as ImageIcon, Video, FileText } from 'lucide-react'

interface StepUploadBuktiProps {
  formData: any
  setFormData: (data: any) => void
}

export function StepUploadBukti({ formData, setFormData }: StepUploadBuktiProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      // Basic size validation (5MB)
      const validFiles = newFiles.filter(file => file.size <= 5 * 1024 * 1024)
      
      if (validFiles.length < newFiles.length) {
        alert('Beberapa file terlalu besar (maksimal 5MB)')
      }

      setFormData({
        ...formData,
        files: [...formData.files, ...validFiles]
      })
    }
  }

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      files: formData.files.filter((_: any, i: number) => i !== index)
    })
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h3 className="font-timeless text-lg font-black text-desa-blue-950 dark:text-white">Unggah Bukti Pendukung</h3>
        <p className="text-[10px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest">Format: JPG, PNG, MP4 | Maks: 5MB</p>
      </div>

      <div 
        onClick={() => fileInputRef.current?.click()}
        className="group relative flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-desa-blue-900/10 dark:border-white/10 bg-desa-blue-50/30 dark:bg-white/5 py-12 md:py-16 transition-all hover:bg-white dark:hover:bg-white/10 hover:border-desa-blue-900/30 dark:hover:border-white/30 cursor-pointer"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-desa-blue-900 text-white shadow-xl shadow-desa-blue-900/20 transition-transform group-hover:scale-110">
          <Upload size={28} />
        </div>
        <p className="mt-6 text-sm font-bold text-desa-blue-950 dark:text-white">Klik untuk pilih file</p>
        <p className="mt-1 text-[10px] font-medium text-desa-blue-950/40 dark:text-white/40">atau tarik dan lepas file di sini</p>
        <input 
          ref={fileInputRef}
          type="file" 
          multiple 
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="hidden" 
        />
      </div>

      {formData.files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {formData.files.map((file: File, index: number) => (
            <div key={index} className="group relative aspect-square rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 border border-desa-blue-900/5 dark:border-white/5 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                {file.type.startsWith('image/') ? <ImageIcon size={24} className="text-desa-blue-900" /> : <Video size={24} className="text-desa-blue-900" />}
                <p className="mt-2 text-[8px] font-bold text-desa-blue-950/40 dark:text-white/40 truncate w-full text-center px-2">{file.name}</p>
              </div>
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                className="absolute right-2 top-2 h-6 w-6 flex items-center justify-center rounded-full bg-rose-500 text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
