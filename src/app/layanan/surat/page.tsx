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
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20 px-2">
      {/* Header Section */}
      <section className="hero-reveal space-y-6">
        <h2 className="font-timeless text-4xl md:text-7xl font-black text-desa-blue-950 dark:text-white tracking-tighter leading-tight">
          Layanan <br className="md:hidden" /> <span className="text-desa-blue-900 dark:text-desa-yellow-500">Surat & Administrasi</span>
        </h2>
        <p className="text-sm md:text-xl font-medium text-desa-blue-950/40 dark:text-white/40 max-w-3xl leading-relaxed uppercase tracking-[0.1em]">
          Silakan pilih jenis layanan administrasi yang ingin Anda ajukan. Setiap pengajuan akan diproses oleh admin desa secara transparan melalui portal digital terpadu.
        </p>
      </section>

      <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Link 
            key={service.id} 
            href={`/layanan/pengajuan?type=${service.id}`}
            className="hero-reveal group relative overflow-hidden rounded-[56px] bg-white dark:bg-desa-blue-900/40 p-10 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.03)] dark:shadow-none border border-desa-blue-900/5 dark:border-white/5 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl active:scale-[0.98]"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="flex items-start justify-between mb-12">
              <div className={`flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-[32px] text-white shadow-2xl ${service.color} transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12`}>
                <service.icon size={36} className="md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-desa-blue-50 dark:bg-white/5 text-desa-blue-950 dark:text-white transition-all duration-500 group-hover:bg-desa-blue-900 group-hover:text-white dark:group-hover:bg-desa-yellow-500 dark:group-hover:text-desa-blue-950 group-hover:rotate-45">
                <ArrowRight size={28} />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-timeless text-2xl md:text-3xl font-black text-desa-blue-950 dark:text-white leading-tight group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors tracking-tighter">
                {service.label}
              </h4>
              <p className="text-sm md:text-base font-medium text-desa-blue-950/30 dark:text-white/30 leading-relaxed max-w-xs">
                {service.desc}
              </p>
            </div>
            {/* Hover Decorative Element */}
            <div className={`absolute -right-12 -bottom-12 h-48 w-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-1000 group-hover:opacity-20 ${service.color}`} />
          </Link>
        ))}
      </div>
    </div>
  )
}
