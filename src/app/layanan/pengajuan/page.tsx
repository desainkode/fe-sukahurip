'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { FileText, Send, Upload, CheckCircle2, ChevronRight, Info } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function PengajuanPage() {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const preSelectedType = searchParams.get('type')
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    letterType: '',
    purpose: '',
    documents: [] as File[]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const letterTypes = [
    { 
      id: 'pindah', 
      label: 'Surat Pindah / Datang', 
      desc: 'Layanan untuk warga yang ingin mengurus surat pindah keluar daerah atau surat keterangan datang dari luar daerah. Pastikan data alamat asal dan tujuan sudah benar.' 
    },
    { 
      id: 'akta', 
      label: 'Akta Kematian / Kelahiran', 
      desc: 'Pengurusan pencatatan peristiwa kelahiran baru atau pelaporan kematian warga. Dokumen ini penting untuk memperbarui basis data kependudukan desa.' 
    },
    { 
      id: 'kk', 
      label: 'Layanan Kartu Keluarga', 
      desc: 'Gunakan layanan ini untuk pembaruan data kartu keluarga (penambahan anggota, perubahan status) atau pembuatan kartu keluarga baru karena pemecahan KK.' 
    },
    { 
      id: 'ktp', 
      label: 'Layanan KTP-el', 
      desc: 'Permohonan perekaman KTP elektronik baru, penggantian KTP yang rusak, atau pengurusan surat keterangan kehilangan KTP untuk pencetakan ulang.' 
    },
    { 
      id: 'kia', 
      label: 'Kartu Identitas Anak (KIA)', 
      desc: 'Pembuatan identitas resmi bagi anak berusia 0 hingga 17 tahun kurang satu hari. Berguna untuk akses layanan publik, kesehatan, dan perbankan bagi anak.' 
    },
    { 
      id: 'nikah', 
      label: 'Rekomendasi Dispensasi Nikah', 
      desc: 'Layanan Rekomendasi Nikah (Disampo Sansil) bagi warga Desa Sukahurip. Diperlukan sebagai salah satu syarat pendaftaran pernikahan di KUA.' 
    },
  ]

  useEffect(() => {
    if (preSelectedType) {
      const selected = letterTypes.find(t => t.id === preSelectedType)
      if (selected) {
        setFormData(prev => ({ ...prev, letterType: preSelectedType }))
        setStep(2)
      }
    }
  }, [preSelectedType])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[32px] bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="font-timeless text-4xl font-black text-desa-blue-950 dark:text-white">Pengajuan Terkirim!</h2>
        <p className="mt-4 max-w-md text-lg font-medium text-desa-blue-950/60 dark:text-white/60 leading-relaxed">
          Surat Anda sedang dalam antrean verifikasi petugas. Silakan pantau status pengajuan secara berkala.
        </p>
        <div className="mt-12 flex gap-4">
          <Link href="/layanan/status" className="rounded-2xl bg-desa-blue-900 dark:bg-desa-blue-500 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl hover:bg-desa-blue-950 dark:hover:bg-desa-blue-600 transition-all">
            Pantau Status
          </Link>
          <button onClick={() => { setIsSuccess(false); setStep(1) }} className="rounded-2xl bg-desa-blue-50 dark:bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-widest text-desa-blue-900 dark:text-white hover:bg-desa-blue-100 dark:hover:bg-white/10 transition-all">
            Buat Lagi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="hero-reveal space-y-2">
        <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white">Ajukan Surat Baru</h2>
        <p className="text-sm font-medium text-desa-blue-900/50 dark:text-white/40 uppercase tracking-widest">Lengkapi formulir di bawah ini dengan benar</p>
      </div>

      {/* Stepper */}
      <div className="hero-reveal flex items-center gap-4 px-2" style={{ animationDelay: '100ms' }}>
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold transition-all ${
              step >= s 
                ? 'bg-desa-blue-900 dark:bg-desa-blue-500 text-white shadow-lg' 
                : 'bg-white dark:bg-white/5 text-desa-blue-950/20 dark:text-white/20 border border-desa-blue-900/5 dark:border-white/5'
            }`}>
              {s}
            </div>
            {s < 3 && <div className={`h-1 w-full rounded-full transition-all ${step > s ? 'bg-desa-blue-900 dark:bg-desa-blue-500' : 'bg-desa-blue-900/10 dark:bg-white/10'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="mx-auto max-w-5xl">
      <div className="rounded-[40px] bg-white dark:bg-desa-blue-900/20 p-6 md:p-12 shadow-2xl border border-desa-blue-900/5 dark:border-white/5">
        <form onSubmit={handleSubmit} className="space-y-10">
          {step === 1 && (
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-timeless text-2xl md:text-3xl font-black text-desa-blue-950 dark:text-white">Pilih Layanan</h3>
                    <p className="text-xs md:text-sm font-medium text-desa-blue-950/40 dark:text-white/40">Pilih jenis surat yang ingin Anda ajukan.</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-desa-blue-50 dark:bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-desa-blue-900 dark:text-desa-yellow-500">
                    Langkah 1 dari 3
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {letterTypes.map((type) => (
                    <button 
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, letterType: type.id })}
                      className={`flex items-center justify-between gap-4 rounded-[32px] p-5 md:p-6 text-left transition-all ${
                        formData.letterType === type.id 
                          ? 'bg-desa-blue-900 dark:bg-desa-blue-600 text-white shadow-xl ring-4 ring-desa-blue-900/10 dark:ring-desa-blue-500/20' 
                          : 'bg-desa-blue-50/50 dark:bg-white/5 text-desa-blue-950 dark:text-white hover:bg-desa-blue-50 dark:hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-2xl ${formData.letterType === type.id ? 'bg-white/20' : 'bg-desa-blue-900/10 dark:bg-white/10 text-desa-blue-900 dark:text-desa-yellow-500'}`}>
                          <FileText size={22} className="md:w-6 md:h-6" />
                        </div>
                        <div>
                          <p className="text-sm md:text-base font-bold leading-tight">{type.label}</p>
                          <p className={`mt-1 text-[9px] md:text-[10px] font-medium uppercase tracking-widest leading-relaxed line-clamp-1 ${formData.letterType === type.id ? 'text-white/60' : 'text-desa-blue-950/40 dark:text-white/40'}`}>
                            {type.desc}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={18} className={`shrink-0 ${formData.letterType === type.id ? 'opacity-100' : 'opacity-20'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <button 
                type="button"
                disabled={!formData.letterType}
                onClick={() => setStep(2)}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-desa-blue-900 dark:bg-desa-yellow-500 py-4.5 text-sm font-black uppercase tracking-[0.2em] text-white dark:text-desa-blue-950 shadow-xl shadow-desa-blue-900/20 dark:shadow-desa-yellow-500/10 transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-yellow-400 active:scale-95 disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                Lanjutkan ke Form <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Service Info Card */}
              <div className="rounded-[32px] bg-desa-blue-50 dark:bg-desa-blue-900/20 p-6 md:p-8 border border-desa-blue-900/10 dark:border-white/5 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start sm:items-center">
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-white/5 text-desa-blue-900 dark:text-desa-yellow-500 shadow-sm">
                  <Info size={24} className="md:w-7 md:h-7" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h4 className="font-bold text-desa-blue-950 dark:text-white uppercase tracking-[0.2em] text-[10px]">Panduan Layanan</h4>
                  <p className="text-sm md:text-base font-medium text-desa-blue-950/60 dark:text-white/60 leading-relaxed">
                    {letterTypes.find(t => t.id === formData.letterType)?.desc}
                  </p>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-desa-blue-900/10 dark:bg-white/10 text-desa-blue-900 dark:text-desa-yellow-500">
                      <FileText size={22} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-timeless text-xl font-bold text-desa-blue-950 dark:text-white">Isi Formulir</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40">Langkah 2 dari 3</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                  <div className="space-y-1.5 md:space-y-2 opacity-60">
                    <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Nama Pemohon</label>
                    <input disabled value={user?.name} className="w-full rounded-2xl bg-gray-50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0" />
                  </div>
                  <div className="space-y-1.5 md:space-y-2 opacity-60">
                    <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">NIK Pemohon</label>
                    <input disabled value={user?.nik} className="w-full rounded-2xl bg-gray-50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0" />
                  </div>

                  {/* Dynamic Fields */}
                  {formData.letterType === 'pindah' && (
                    <>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Alamat Asal</label>
                        <input placeholder="Alamat lengkap asal..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Alamat Tujuan</label>
                        <input placeholder="Alamat lengkap tujuan..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                    </>
                  )}

                  {formData.letterType === 'akta' && (
                    <>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Nama Subjek</label>
                        <input placeholder="Nama bayi/almarhum..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Tanggal Kejadian</label>
                        <input type="date" className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all" />
                      </div>
                    </>
                  )}

                  {formData.letterType === 'kk' && (
                    <>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Kepala Keluarga</label>
                        <input placeholder="Nama di KK..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Jumlah Anggota</label>
                        <input type="number" placeholder="Jumlah orang..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                    </>
                  )}

                  {formData.letterType === 'kia' && (
                    <>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Nama Anak</label>
                        <input placeholder="Nama lengkap..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">NIK Anak</label>
                        <input placeholder="NIK (jika ada)..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                    </>
                  )}

                  {formData.letterType === 'nikah' && (
                    <>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Calon Pasangan</label>
                        <input placeholder="Nama lengkap..." className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20" />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Rencana Tanggal</label>
                        <input type="date" className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-4 md:p-4.5 font-bold text-desa-blue-950 dark:text-white border-0 focus:ring-2 focus:ring-desa-blue-900 transition-all" />
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950 dark:text-white px-2">Tujuan Surat</label>
                  <textarea 
                    required
                    rows={3}
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 p-5 md:p-6 font-bold text-desa-blue-950 dark:text-white focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-desa-blue-900 transition-all placeholder:text-desa-blue-950/20 dark:placeholder:text-white/20"
                    placeholder="Sebutkan keperluan pengajuan surat ini..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  onClick={() => setStep(1)} 
                  className="rounded-2xl bg-desa-blue-900/5 dark:bg-white/5 py-4 text-xs font-black uppercase tracking-widest text-desa-blue-900 dark:text-white border border-desa-blue-900/10 dark:border-white/10 transition-all hover:bg-desa-blue-900/10 dark:hover:bg-white/10 active:scale-95"
                >
                  Kembali
                </button>
                <button 
                  type="button" 
                  onClick={() => setStep(3)} 
                  disabled={!formData.purpose} 
                  className="group relative overflow-hidden rounded-2xl bg-desa-blue-900 dark:bg-desa-yellow-500 py-4 text-xs font-black uppercase tracking-widest text-white dark:text-desa-blue-950 shadow-xl shadow-desa-blue-900/20 dark:shadow-desa-yellow-500/10 transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-yellow-400 active:scale-95 disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  Lanjutkan
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-timeless text-2xl font-black text-desa-blue-950 dark:text-white">Upload Dokumen</h3>
                  <p className="text-xs font-medium text-desa-blue-950/40 dark:text-white/40">Langkah terakhir: Unggah berkas persyaratan.</p>
                </div>
                
                <div className="rounded-3xl bg-amber-50 dark:bg-amber-950/20 p-5 md:p-6 border border-amber-100 dark:border-amber-900/30 flex gap-4">
                  <Info className="text-amber-600 shrink-0" size={20} />
                  <p className="text-xs md:text-sm font-medium text-amber-900/70 dark:text-amber-400/70 leading-relaxed">
                    Unggah KTP dan KK asli yang terbaca jelas (Maks. 2MB).
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {['Foto KTP', 'Foto KK'].map((doc, i) => (
                    <div key={i} className="group relative flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-desa-blue-900/10 dark:border-white/10 bg-desa-blue-50/20 dark:bg-white/5 p-8 md:p-10 transition-all hover:border-desa-blue-900/30 hover:bg-desa-blue-50 dark:hover:bg-white/10">
                      <Upload size={28} className="mb-3 text-desa-blue-900/20 dark:text-white/20 group-hover:text-desa-blue-900 dark:group-hover:text-white transition-all" />
                      <p className="text-sm font-bold text-desa-blue-950 dark:text-white">{doc}</p>
                      <p className="mt-1 text-[8px] md:text-[9px] font-bold text-desa-blue-950/40 dark:text-white/40 uppercase tracking-widest text-center">Tap untuk Unggah</p>
                      <input type="file" className="absolute inset-0 cursor-pointer opacity-0" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setStep(2)} 
                  className="rounded-2xl bg-desa-blue-900/5 dark:bg-white/5 py-4 text-xs font-black uppercase tracking-widest text-desa-blue-900 dark:text-white border border-desa-blue-900/10 dark:border-white/10 transition-all hover:bg-desa-blue-900/10 dark:hover:bg-white/10 active:scale-95"
                >
                  Kembali
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-2xl bg-desa-blue-900 dark:bg-desa-yellow-500 py-4 text-xs font-black uppercase tracking-widest text-white dark:text-desa-blue-950 shadow-xl shadow-desa-blue-900/20 dark:shadow-desa-yellow-500/10 transition-all hover:bg-desa-blue-950 dark:hover:bg-desa-yellow-400 active:scale-95 disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  {isSubmitting ? 'Mengirim...' : (
                    <>Kirim <Send size={16} className="transition-transform group-hover:translate-x-1" /></>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
    </div>
  )
}
