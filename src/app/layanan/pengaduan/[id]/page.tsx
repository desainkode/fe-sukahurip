'use client'

import React from 'react'
import { ArrowLeft, Clock, CheckCircle2, AlertCircle, FileText, MapPin, Calendar, User, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function PengaduanDetailPage() {
  const { id } = useParams()

  // Mock data for detail
  const data = {
    id: id || 'TKT-001',
    title: 'Lampu Jalan Padam',
    category: 'Infrastruktur Desa',
    description: 'Sudah 3 malam lampu jalan di depan Masjid Al-Ikhlas padam, membahayakan warga yang pulang dari pengajian.',
    location: 'Dusun Sukamaju, depan Masjid Al-Ikhlas',
    date: '2024-05-01',
    status: 'Diproses',
    reporter: 'Anonim',
    isAnonymous: true,
    timeline: [
      { status: 'Diterima', date: '01 Mei 2024, 08:30', desc: 'Laporan telah diterima oleh sistem dan menunggu verifikasi admin.', current: false },
      { status: 'Diproses', date: '01 Mei 2024, 14:15', desc: 'Admin telah meneruskan laporan ke bagian sarana prasarana desa.', current: true },
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai': return 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20'
      case 'Diproses': return 'text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20'
      default: return 'text-rose-600 bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Selesai': return <CheckCircle2 size={24} />
      case 'Diproses': return <Clock size={24} />
      default: return <AlertCircle size={24} />
    }
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20">
      <section className="hero-reveal space-y-4 px-2">
        <Link 
          href="/layanan/pengaduan"
          className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-desa-blue-950/40 dark:text-white/50 hover:text-desa-blue-900 transition-all group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-timeless text-3xl md:text-5xl font-black text-desa-blue-950 dark:text-white tracking-tight leading-tight">
              Detail <span className="text-desa-blue-900 dark:text-desa-yellow-500">Laporan</span>
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm font-black text-desa-blue-950 dark:text-white uppercase tracking-tight">Tiket: {data.id}</span>
              <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border ${getStatusColor(data.status)}`}>
                {data.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-[32px] md:rounded-[40px] bg-white dark:bg-desa-blue-900/40 p-6 md:p-12 border border-desa-blue-900/5 dark:border-white/5 shadow-2xl shadow-desa-blue-900/5">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-desa-blue-950 dark:text-white leading-tight">{data.title}</h3>
                <p className="mt-4 text-sm font-medium text-desa-blue-950/60 dark:text-white/50 leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-desa-blue-900/5 dark:border-white/5 pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-desa-yellow-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/20 dark:text-white/20">Lokasi</p>
                    <p className="mt-1 text-xs font-bold text-desa-blue-950 dark:text-white">{data.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-desa-yellow-500">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/20 dark:text-white/20">Tanggal</p>
                    <p className="mt-1 text-xs font-bold text-desa-blue-950 dark:text-white">{data.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-desa-yellow-500">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/20 dark:text-white/20">Kategori</p>
                    <p className="mt-1 text-xs font-bold text-desa-blue-950 dark:text-white">{data.category}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-desa-yellow-500">
                    {data.isAnonymous ? <ShieldCheck size={20} /> : <User size={20} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/20 dark:text-white/20">Pelapor</p>
                    <p className="mt-1 text-xs font-bold text-desa-blue-950 dark:text-white">{data.reporter}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <div className="rounded-[32px] bg-white dark:bg-desa-blue-900/40 p-8 border border-desa-blue-900/5 dark:border-white/5 shadow-xl shadow-desa-blue-900/5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-desa-blue-900 dark:text-desa-yellow-500 mb-8">Lini Masa Status</h4>
            <div className="space-y-8">
              {data.timeline.map((step, i) => (
                <div key={i} className="relative flex gap-6">
                  {i !== data.timeline.length - 1 && (
                    <div className="absolute left-[11px] top-8 h-full w-0.5 bg-desa-blue-900/5 dark:bg-white/5" />
                  )}
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${step.current ? 'bg-desa-blue-900 border-desa-blue-900 text-white' : 'bg-white dark:bg-desa-blue-950 border-desa-blue-900/10 dark:border-white/10 text-desa-blue-950/20 dark:text-white/20'}`}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="space-y-1">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${step.current ? 'text-desa-blue-950 dark:text-white' : 'text-desa-blue-950/40 dark:text-white/40'}`}>{step.status}</p>
                    <p className="text-[9px] font-medium text-desa-blue-950/20 dark:text-white/20">{step.date}</p>
                    <p className="mt-2 text-[11px] font-medium text-desa-blue-950/60 dark:text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
