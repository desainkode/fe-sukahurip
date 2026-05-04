'use client'

import React from 'react'
import * as LucideIcons from 'lucide-react'
import { SdgsGoal, SdgsProgram } from '../../types/infografis'

interface SdgsDetailViewProps {
  goal: SdgsGoal
  relatedPrograms: SdgsProgram[]
  onBack: () => void
}

export function SdgsDetailView({ goal, relatedPrograms, onBack }: SdgsDetailViewProps) {
  const IconComponent = (LucideIcons as any)[goal.image] || LucideIcons.HelpCircle

  return (
    <div className="space-y-10">
      {/* 1. Goal Summary Card */}
      <div 
        className="hero-reveal relative overflow-hidden rounded-[40px] bg-white p-8 shadow-2xl border border-[#072ac8]/5 md:p-12"
        style={{ animationDelay: '100ms' }}
      >
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
          <div 
            className="flex h-32 w-32 shrink-0 items-center justify-center rounded-[32px] text-white shadow-2xl md:h-40 md:w-40"
            style={{ backgroundColor: goal.color }}
          >
            <IconComponent size={64} strokeWidth={2.5} className="md:size-20" />
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <span 
                className="rounded-xl px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg"
                style={{ backgroundColor: goal.color }}
              >
                Tujuan {goal.id}
              </span>
              <span className={`rounded-xl px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg ${
                goal.status === 'Tercapai' ? 'bg-emerald-500' : goal.status === 'Berkembang' ? 'bg-amber-500' : 'bg-rose-500'
              }`}>
                {goal.status}
              </span>
            </div>
            
            <h2 className="font-timeless text-4xl font-black text-[#000418] md:text-5xl">
              {goal.title}
            </h2>
            
            <p className="text-lg leading-relaxed text-[#000418]/70 max-w-3xl">
              {goal.description}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center rounded-[32px] bg-[#072ac8]/5 p-8 text-center md:min-w-[200px]">
            <p className="font-timeless text-6xl font-black text-[#072ac8]">
              {goal.score}%
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#072ac8]/60">Capaian</p>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_350px]">
        <div className="space-y-10">
          {/* 2. Indicators List */}
          <section className="space-y-6">
            <h3 className="font-timeless text-2xl font-bold text-[#000418]">Indikator Detail</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {goal.indicators.map((indicator, idx) => (
                <div 
                  key={idx}
                  className="hero-reveal flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-lg border border-[#072ac8]/5"
                  style={{ animationDelay: `${200 + idx * 100}ms` }}
                >
                  <p className="text-sm font-bold text-[#000418]/60 uppercase tracking-wider">{indicator.name}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="font-timeless text-3xl font-black text-[#000418]">{indicator.value}</span>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white ${
                      indicator.status === 'Baik' ? 'bg-emerald-500' : indicator.status === 'Cukup' ? 'bg-amber-500' : 'bg-rose-500'
                    }`}>
                      {indicator.status}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#072ac8]/5">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        indicator.status === 'Baik' ? 'bg-emerald-500' : indicator.status === 'Cukup' ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: indicator.status === 'Baik' ? '100%' : indicator.status === 'Cukup' ? '60%' : '30%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Related Programs for this Goal */}
          <section className="space-y-6">
            <h3 className="font-timeless text-2xl font-bold text-[#000418]">Program Terkait</h3>
            <div className="grid gap-4">
              {relatedPrograms.length > 0 ? (
                relatedPrograms.map((program, idx) => (
                  <div 
                    key={idx}
                    className="hero-reveal flex items-center justify-between rounded-3xl bg-white p-5 shadow-lg border border-[#072ac8]/5"
                    style={{ animationDelay: `${400 + idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#072ac8]/10 text-[#072ac8]">
                        <LucideIcons.Package size={24} />
                      </div>
                      <span className="font-bold text-[#000418]">{program.name}</span>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#072ac8]">{program.status}</span>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl bg-gray-50 p-8 text-center text-gray-500 italic">
                  Belum ada program spesifik yang terdaftar untuk tujuan ini.
                </div>
              )}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          {/* Analysis Card */}
          <div className="hero-reveal rounded-[32px] bg-[#000418] p-8 text-white shadow-xl" style={{ animationDelay: '500ms' }}>
            <h4 className="mb-6 font-timeless text-xl font-bold uppercase tracking-widest text-[#FFC400]">Analisis Kondisi</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-80">
              <p>Berdasarkan data tahun 2025, capaian {goal.title} berada pada status <strong>{goal.status}</strong> dengan skor {goal.score}%.</p>
              <p>Pemerintah Desa Sukahurip terus berupaya mengoptimalkan indikator yang masih berada dalam kategori 'Kurang' atau 'Cukup' melalui sinkronisasi program RKPDes.</p>
            </div>
            <button 
              onClick={onBack}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 py-4 text-xs font-black uppercase tracking-widest transition-all hover:bg-white/20"
            >
              <LucideIcons.ArrowLeft size={16} />
              Kembali ke Dashboard
            </button>
          </div>

          {/* Quick Links */}
          <div className="hero-reveal space-y-4" style={{ animationDelay: '600ms' }}>
            <h4 className="px-2 font-timeless text-lg font-bold text-[#000418]">Tujuan Lainnya</h4>
            <div className="grid grid-cols-4 gap-3">
              {[...Array(18)].map((_, i) => (
                <button 
                  key={i}
                  className={`flex h-12 items-center justify-center rounded-xl font-timeless text-lg font-black transition-all hover:scale-105 ${
                    goal.id === i + 1 ? 'bg-[#072ac8] text-white shadow-lg' : 'bg-white text-[#000418]/30 border border-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
