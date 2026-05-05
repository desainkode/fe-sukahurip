'use client'

import React from 'react'
import { FileText, ArrowRight, Baby, Users, IdCard, HeartCrack, FileSearch } from 'lucide-react'
import Link from 'next/link'

export default function LayananSuratPage() {
  const services = [
    { 
      id: 'pindah', 
      label: 'Surat Pindah / Datang', 
      desc: 'Pengurusan surat keterangan pindah domisili atau surat kedatangan warga baru.',
      icon: FileSearch,
      color: 'bg-desa-blue-900 shadow-desa-blue-900/20'
    },
    { 
      id: 'akta', 
      label: 'Akta Kelahiran / Kematian', 
      desc: 'Pencatatan peristiwa kelahiran baru atau pelaporan kematian warga desa.',
      icon: Baby,
      color: 'bg-emerald-600 shadow-emerald-600/20'
    },
    { 
      id: 'kk', 
      label: 'Layanan Kartu Keluarga', 
      desc: 'Pembaruan data KK, penambahan anggota keluarga, atau pemecahan KK baru.',
      icon: Users,
      color: 'bg-amber-500 shadow-amber-500/20'
    },
    { 
      id: 'ktp', 
      label: 'Layanan KTP-el', 
      desc: 'Perekaman KTP baru, penggantian KTP rusak/hilang, atau perubahan data.',
      icon: IdCard,
      color: 'bg-indigo-600 shadow-indigo-600/20'
    },
    { 
      id: 'kia', 
      label: 'Kartu Identitas Anak (KIA)', 
      desc: 'Pembuatan kartu identitas resmi untuk anak usia 0 hingga 17 tahun.',
      icon: FileText,
      color: 'bg-rose-600 shadow-rose-600/20'
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-1000 pb-20">
      <section className="hero-reveal space-y-2 px-2">
        <h2 className="font-timeless text-3xl md:text-5xl font-black text-desa-blue-950 dark:text-white tracking-tight">
          Layanan <span className="text-desa-blue-900 dark:text-desa-yellow-500">Surat & Administrasi</span>
        </h2>
        <p className="text-sm md:text-base font-medium text-desa-blue-950/40 dark:text-white/30 max-w-2xl leading-relaxed">
          Silakan pilih jenis layanan administrasi yang ingin Anda ajukan. Setiap pengajuan akan diproses oleh admin desa secara transparan.
        </p>
      </section>

      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Link 
            key={service.id} 
            href={`/layanan/pengajuan?type=${service.id}`}
            className="hero-reveal group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-6 md:p-10 shadow-xl shadow-desa-blue-900/5 border border-desa-blue-900/5 dark:border-white/5 transition-all hover:-translate-y-3 hover:shadow-2xl active:scale-95"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-8">
              <div className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-[24px] text-white shadow-xl ${service.color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <service.icon size={28} className="md:w-9 md:h-9" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950 dark:text-white transition-all group-hover:bg-desa-blue-900 group-hover:text-white dark:group-hover:bg-desa-yellow-500 dark:group-hover:text-desa-blue-950">
                <ArrowRight size={18} />
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg md:text-xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors">
                {service.label}
              </h4>
              <p className="text-[11px] md:text-xs font-medium text-desa-blue-950/40 dark:text-white/30 leading-relaxed">
                {service.desc}
              </p>
            </div>
            {/* Hover Decorative Element */}
            <div className={`absolute -right-4 -bottom-4 h-24 w-24 rounded-full blur-[40px] opacity-0 transition-opacity duration-700 group-hover:opacity-20 ${service.color}`} />
          </Link>
        ))}
      </div>
    </div>
  )
}
