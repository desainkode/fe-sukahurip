'use client'

import React, { useState } from 'react'
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { StepProgressBar } from '@/features/layanan/components/StepProgressBar'
import { StepDataPelapor } from './forms/StepDataPelapor'
import { StepDetailPengaduan } from './forms/StepDetailPengaduan'
import { StepUploadBukti } from './forms/StepUploadBukti'
import { StepReviewPengaduan } from './forms/StepReviewPengaduan'

export function ComplaintForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
    phone: '',
    isAnonymous: false,
    category: '',
    title: '',
    description: '',
    location: '',
    date: '',
    files: [] as File[]
  })

  const steps = [
    { title: 'Data Pelapor', icon: 'User' },
    { title: 'Detail Laporan', icon: 'FileText' },
    { title: 'Unggah Bukti', icon: 'Image' },
    { title: 'Kirim', icon: 'Send' }
  ]

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4))
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 4) {
      handleNext()
    } else {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[32px] bg-emerald-500 text-white shadow-2xl shadow-emerald-500/20">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white uppercase tracking-tight">Laporan Terkirim!</h2>
        <p className="mt-4 text-[10px] font-black text-desa-blue-900/40 dark:text-desa-yellow-500 uppercase tracking-[0.4em]">Nomor Tiket: TKT-{Math.floor(Math.random() * 10000)}</p>
        <p className="mt-6 max-w-md text-sm font-medium text-desa-blue-950/60 dark:text-white/40 leading-relaxed">
          Terima kasih telah berkontribusi. Laporan Anda telah kami terima dan akan segera diproses oleh tim admin desa.
        </p>
        <div className="mt-12 flex gap-4">
          <Link 
            href="/layanan/pengaduan"
            className="rounded-2xl bg-desa-blue-900 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-desa-blue-900/20 transition-all hover:bg-desa-blue-950 active:scale-95"
          >
            Kembali ke Daftar
          </Link>
        </div>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <StepDataPelapor formData={formData} setFormData={setFormData} />
      case 2: return <StepDetailPengaduan formData={formData} setFormData={setFormData} />
      case 3: return <StepUploadBukti formData={formData} setFormData={setFormData} />
      case 4: return <StepReviewPengaduan formData={formData} setFormData={setFormData} setStep={setCurrentStep} />
      default: return null
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link 
        href="/layanan/pengaduan"
        className="mb-4 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 hover:text-desa-blue-900 dark:hover:text-desa-yellow-500 transition-all group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
      </Link>

      <div className="rounded-[32px] md:rounded-[40px] border border-desa-blue-900/5 dark:border-white/5 bg-white dark:bg-desa-blue-900/40 backdrop-blur-xl p-6 md:p-12 shadow-2xl transition-all duration-500">
        <div className="mb-6 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 border-b border-desa-blue-900/5 dark:border-white/5 pb-6 md:pb-10">
          <div>
            <h1 className="font-timeless text-xl md:text-3xl font-black text-desa-blue-950 dark:text-white uppercase tracking-tight">Buat Pengaduan</h1>
            <p className="mt-1 text-[9px] font-black text-desa-blue-900/40 dark:text-desa-yellow-500 uppercase tracking-[0.3em]">Masyarakat Sukahurip</p>
          </div>
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-desa-blue-900 text-white shadow-xl shadow-desa-blue-900/20">
            <Send size={24} className="md:size-[28px]" />
          </div>
        </div>

        <StepProgressBar currentStep={currentStep} steps={steps} />

        <form onSubmit={handleSubmit} className="mt-6 md:mt-12 space-y-8 md:space-y-12">
          <div className="min-h-[180px] md:min-h-[300px]">
            {renderStep()}
          </div>

          <div className="flex items-center gap-4 pt-8 md:pt-10 border-t border-desa-blue-900/5 dark:border-white/5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex-1 md:flex-none px-6 md:px-10 py-3.5 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all rounded-2xl border-2 border-desa-blue-900/5 dark:border-white/5 text-desa-blue-950/40 dark:text-white/40 hover:bg-desa-blue-50 dark:hover:bg-white/5 disabled:opacity-0`}
            >
              Kembali
            </button>
            <button
              type="submit"
              className="flex-[2] md:flex-none flex items-center justify-center gap-3 rounded-2xl bg-desa-blue-900 px-6 md:px-12 py-3.5 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-desa-blue-900/20 transition-all hover:bg-desa-blue-950 active:scale-95"
            >
              {currentStep === 4 ? 'Kirim Laporan' : 'Selanjutnya'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
