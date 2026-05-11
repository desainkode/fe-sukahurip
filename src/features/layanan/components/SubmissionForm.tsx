'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Send, CheckCircle2, User, FileEdit, UploadCloud, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { StepProgressBar } from './StepProgressBar'
import { StepDataDiri } from './forms/StepDataDiri'
import { StepUploadDokumen } from './forms/StepUploadDokumen'
import { ReviewSubmit } from './forms/ReviewSubmit'
import { SuratPindahDetail } from './forms/SuratPindahDetail'
import { AktaDetail } from './forms/AktaDetail'
import { LayananKKDetail } from './forms/LayananKKDetail'
import { LayananKTPDetail } from './forms/LayananKTPDetail'
import { KIADetail } from './forms/KIADetail'

interface SubmissionFormProps {
  serviceSlug: string
}

export function SubmissionForm({ serviceSlug }: SubmissionFormProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<any>({
    name: '',
    nik: '',
    phone: '',
    // additional fields will be added dynamically
  })
  const [files, setFiles] = useState<Record<string, File | null>>({})

  const steps = [
    { title: 'Data Diri', icon: User },
    { title: 'Detail', icon: FileEdit },
    { title: 'Upload', icon: UploadCloud },
    { title: 'Review', icon: ShieldCheck }
  ]

  // Define documents per service
  const serviceConfigs: Record<string, { label: string, docs: { id: string, label: string, required: boolean }[] }> = {
    'pindah': {
      label: 'Surat Pindah / Datang',
      docs: [
        { id: 'kk', label: 'Kartu Keluarga (KK)', required: true },
        { id: 'ktp', label: 'KTP Asal', required: true },
        { id: 'surat_rt_rw', label: 'Surat Pengantar RT/RW', required: true },
        { id: 'surat_pernyataan', label: 'Surat Pernyataan (Opsional)', required: false },
      ]
    },
    'akta': {
      label: 'Akta Kelahiran / Kematian',
      docs: [
        { id: 'surat_ket', label: 'Surat Ket. Lahir/Mati', required: true },
        { id: 'kk', label: 'Kartu Keluarga', required: true },
        { id: 'ktp_ortu', label: 'KTP Orang Tua/Pelapor', required: true },
        { id: 'buku_nikah', label: 'Buku Nikah (Untuk Kelahiran)', required: false },
      ]
    },
    'kk': {
      label: 'Layanan Kartu Keluarga',
      docs: [
        { id: 'kk_lama', label: 'KK Lama', required: true },
        { id: 'ktp', label: 'KTP Pemohon', required: true },
        { id: 'surat_pendukung', label: 'Surat Nikah/Lahir/Pindah', required: true },
      ]
    },
    'ktp': {
      label: 'Layanan KTP-el',
      docs: [
        { id: 'kk', label: 'Kartu Keluarga', required: true },
        { id: 'ktp_lama', label: 'KTP Lama / Ket. Hilang', required: true },
      ]
    },
    'kia': {
      label: 'Kartu Identitas Anak (KIA)',
      docs: [
        { id: 'akta_lahir', label: 'Akta Kelahiran Anak', required: true },
        { id: 'kk', label: 'Kartu Keluarga', required: true },
        { id: 'ktp_ortu', label: 'KTP Orang Tua', required: true },
        { id: 'foto_anak', label: 'Pas Foto Anak', required: true },
      ]
    }
  }

  const config = serviceConfigs[serviceSlug] || { label: 'Layanan Surat', docs: [] }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < steps.length) {
      nextStep()
    } else {
      setIsSubmitted(true)
      // Simulating unique ID generation and redirect
      setTimeout(() => {
        router.push('/layanan/status')
      }, 4000)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-700">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 shadow-xl shadow-emerald-500/10">
          <CheckCircle2 size={48} className="animate-bounce" />
        </div>
        <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white uppercase tracking-tight">Pengajuan Berhasil!</h2>
        <p className="mt-4 max-w-md text-xs font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest leading-loose">
          ID Pengajuan Anda: <span className="text-desa-blue-900 dark:text-desa-yellow-500">SKH-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          <br />
          Terima kasih. Pengajuan Anda sedang diproses oleh admin desa. Anda akan dialihkan ke halaman riwayat sebentar lagi.
        </p>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepDataDiri formData={formData} setFormData={setFormData} />
      case 2:
        if (serviceSlug === 'pindah') return <SuratPindahDetail formData={formData} setFormData={setFormData} />
        if (serviceSlug === 'akta') return <AktaDetail formData={formData} setFormData={setFormData} />
        if (serviceSlug === 'kk') return <LayananKKDetail formData={formData} setFormData={setFormData} />
        if (serviceSlug === 'ktp') return <LayananKTPDetail formData={formData} setFormData={setFormData} />
        if (serviceSlug === 'kia') return <KIADetail formData={formData} setFormData={setFormData} />
        return <div className="py-10 text-center font-bold opacity-50">Layanan tidak ditemukan</div>
      case 3:
        return <StepUploadDokumen documents={config.docs} files={files} setFiles={setFiles} />
      case 4:
        return <ReviewSubmit formData={formData} files={files} serviceLabel={config.label} documents={config.docs} />
      default:
        return null
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-12 animate-in fade-in duration-1000">
      {/* Back Button */}
      <Link 
        href="/layanan/dashboard"
        className="mb-8 inline-flex items-center gap-4 transition-all group"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-white/5 shadow-sm border border-desa-blue-900/10 dark:border-white/10 transition-all group-hover:bg-desa-blue-900 group-hover:text-white dark:group-hover:bg-desa-yellow-500 dark:group-hover:text-desa-blue-950 group-hover:-translate-x-1">
          <ArrowLeft size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40">Kembali ke</span>
          <span className="text-sm font-bold text-desa-blue-950 dark:text-white">Dashboard</span>
        </div>
      </Link>

      <div className="overflow-hidden rounded-3xl border border-desa-blue-900/10 dark:border-white/10 bg-white dark:bg-desa-blue-900/40 backdrop-blur-xl p-6 md:p-12 shadow-xl">
        {/* Header */}
        <div className="mb-10 md:mb-12 flex items-center justify-between gap-6 border-b border-desa-blue-900/5 dark:border-white/5 pb-8">
          <div className="space-y-2">
            <h1 className="font-timeless text-3xl md:text-5xl font-black text-desa-blue-950 dark:text-white tracking-tighter">
              Form <span className="text-desa-blue-900 dark:text-desa-yellow-500">Layanan</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="bg-desa-blue-900/10 dark:bg-desa-yellow-500/10 px-3 py-1 rounded-md text-[10px] font-bold text-desa-blue-900 dark:text-desa-yellow-500 uppercase tracking-wider border border-desa-blue-900/10 dark:border-desa-yellow-500/20">
                {config.label}
              </span>
            </div>
          </div>
          <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-desa-blue-900 text-white shadow-lg">
            <Send size={28} />
          </div>
        </div>

        <div className="px-0">
          <StepProgressBar currentStep={currentStep} steps={steps} />
        </div>

        <form onSubmit={handleSubmit} className="mt-12 md:mt-16 space-y-12">
          <div className="min-h-[300px]">
            {renderStep()}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-desa-blue-900/5 dark:border-white/5">
            {currentStep > 1 ? (
              <button 
                type="button"
                onClick={prevStep}
                className="flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-desa-blue-50 dark:bg-white/5 px-8 text-xs font-bold uppercase tracking-widest text-desa-blue-950 dark:text-white transition-all hover:bg-desa-blue-900 hover:text-white dark:hover:bg-white/10 active:scale-95 border border-desa-blue-900/5 dark:border-white/5"
              >
                <ArrowLeft size={18} />
                Sebelumnya
              </button>
            ) : <div className="hidden sm:block" />}

            <button 
              type="submit"
              className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-xl bg-desa-blue-900 dark:bg-desa-yellow-500 px-10 text-xs font-bold uppercase tracking-widest text-white dark:text-desa-blue-950 shadow-md transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-yellow-400 active:scale-95"
            >
              <span className="relative z-10">{currentStep === steps.length ? 'Submit Pengajuan' : 'Lanjutkan'}</span>
              <div className="relative z-10 transition-transform group-hover:translate-x-1 duration-500">
                {currentStep === steps.length ? <Send size={18} /> : <ArrowRight size={18} />}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
